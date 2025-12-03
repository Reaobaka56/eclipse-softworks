import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Clock, Video, Users, CheckCircle, ArrowRight,
  X, ChevronLeft, Globe, User
} from 'lucide-react';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface DemoBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

const generateTimeSlots = (): TimeSlot[] => [
  { time: '09:00', available: true },
  { time: '09:30', available: false },
  { time: '10:00', available: true },
  { time: '10:30', available: true },
  { time: '11:00', available: false },
  { time: '11:30', available: true },
  { time: '14:00', available: true },
  { time: '14:30', available: true },
  { time: '15:00', available: false },
  { time: '15:30', available: true },
  { time: '16:00', available: true },
  { time: '16:30', available: false },
];

const generateDates = (): Date[] => {
  const dates: Date[] = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    // Skip weekends
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      dates.push(date);
    }
  }
  return dates.slice(0, 10);
};

const DemoBookingModal: React.FC<DemoBookingProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    message: '',
  });
  
  const dates = generateDates();
  const timeSlots = generateTimeSlots();
  
  const handleSubmit = () => {
    // Here you would integrate with Cal.com or Calendly API
    setStep(4); // Success state
  };
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/20 rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <div>
              <h2 className="text-xl font-bold text-white">Schedule a Demo</h2>
              <p className="text-sm text-gray-400">See Eclipse Softworks in action</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Progress Steps */}
          {step < 4 && (
            <div className="flex items-center justify-center gap-2 p-4 border-b border-white/5">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= s ? 'bg-white text-black' : 'bg-white/10 text-gray-500'
                  }`}>
                    {step > s ? <CheckCircle size={16} /> : s}
                  </div>
                  {s < 3 && (
                    <div className={`w-12 h-0.5 ${step > s ? 'bg-white' : 'bg-white/10'}`} />
                  )}
                </div>
              ))}
            </div>
          )}
          
          {/* Step Content */}
          <div className="p-6">
            {/* Step 1: Select Date */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Calendar size={20} />
                  Select a Date
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {dates.map((date) => (
                    <button
                      key={date.toISOString()}
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 rounded-lg text-center transition-colors ${
                        selectedDate?.toDateString() === date.toDateString()
                          ? 'bg-white text-black'
                          : 'bg-white/15 hover:bg-white/10 text-white'
                      }`}
                    >
                      <div className="text-xs opacity-70">
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                      </div>
                      <div className="text-lg font-semibold">
                        {date.getDate()}
                      </div>
                      <div className="text-xs opacity-70">
                        {date.toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => selectedDate && setStep(2)}
                    disabled={!selectedDate}
                    className="flex items-center gap-2 px-6 py-2 bg-white text-black font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                  >
                    Continue
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}
            
            {/* Step 2: Select Time */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <button
                    onClick={() => setStep(1)}
                    className="p-1 rounded hover:bg-white/15 text-gray-400"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Clock size={20} />
                    Select a Time
                  </h3>
                </div>
                
                <p className="text-sm text-gray-400 mb-4">
                  {selectedDate && formatDate(selectedDate)} • Times shown in SAST (UTC+2)
                </p>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      onClick={() => slot.available && setSelectedTime(slot.time)}
                      disabled={!slot.available}
                      className={`p-3 rounded-lg text-center transition-colors ${
                        selectedTime === slot.time
                          ? 'bg-white text-black'
                          : slot.available
                          ? 'bg-white/15 hover:bg-white/10 text-white'
                          : 'bg-white/15 text-gray-600 cursor-not-allowed'
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => selectedTime && setStep(3)}
                    disabled={!selectedTime}
                    className="flex items-center gap-2 px-6 py-2 bg-white text-black font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                  >
                    Continue
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}
            
            {/* Step 3: Your Details */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <button
                    onClick={() => setStep(2)}
                    className="p-1 rounded hover:bg-white/15 text-gray-400"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <User size={20} />
                    Your Details
                  </h3>
                </div>
                
                <div className="bg-white/15 rounded-lg p-4 mb-6 flex items-center gap-4">
                  <Calendar size={20} className="text-gray-400" />
                  <div>
                    <p className="text-white font-medium">
                      {selectedDate && formatDate(selectedDate)} at {selectedTime}
                    </p>
                    <p className="text-sm text-gray-400">30 minute video call</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 bg-black/70 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Work Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 bg-black/70 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Company *</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2 bg-black/70 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 bg-black/70 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
                        placeholder="+27 12 345 6789"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Your Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-2 bg-black/70 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/20"
                    >
                      <option value="">Select your role</option>
                      <option value="executive">C-Level / Executive</option>
                      <option value="vp">VP / Director</option>
                      <option value="manager">Manager</option>
                      <option value="engineer">Engineer / Developer</option>
                      <option value="data-scientist">Data Scientist / ML Engineer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">What would you like to discuss?</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-2 bg-black/70 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/20 resize-none"
                      placeholder="Tell us about your use case or any specific questions..."
                    />
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.email || !formData.company}
                    className="flex items-center gap-2 px-6 py-2 bg-white text-black font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                  >
                    Schedule Demo
                    <CheckCircle size={16} />
                  </button>
                </div>
              </motion.div>
            )}
            
            {/* Step 4: Success */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-400/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">You're All Set!</h3>
                <p className="text-gray-400 mb-6">
                  We've sent a calendar invite to {formData.email}.<br />
                  Looking forward to speaking with you!
                </p>
                
                <div className="bg-white/15 rounded-lg p-4 inline-block text-left mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar size={16} className="text-gray-400" />
                    <span className="text-white">{selectedDate && formatDate(selectedDate)} at {selectedTime} SAST</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm mt-2">
                    <Video size={16} className="text-gray-400" />
                    <span className="text-white">30 minute video call</span>
                  </div>
                </div>
                
                <div>
                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Footer */}
          {step < 4 && (
            <div className="p-4 border-t border-white/20 flex items-center justify-center gap-6 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Video size={12} />
                30 min call
              </span>
              <span className="flex items-center gap-1">
                <Globe size={12} />
                SAST timezone
              </span>
              <span className="flex items-center gap-1">
                <Users size={12} />
                Expert team
              </span>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DemoBookingModal;
