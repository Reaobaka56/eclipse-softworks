import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import Toast from '../Toast';

const ContactSection: React.FC = () => {
    const [contactHoneypot, setContactHoneypot] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Honeypot check
        if (contactHoneypot) {
            return; // Silently fail for bots
        }

        setIsSubmitting(true);

        try {
            console.log("Submitting form...");
            const response = await fetch("https://formsubmit.co/ajax/info@eclipse-softworks.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: "New Contact from Eclipse Softworks Website",
                    _template: "table",
                    _captcha: "false"
                })
            });

            console.log("Response received:", response.status);
            const data = await response.json();
            console.log("Data received:", data);

            if (response.ok) {
                console.log("Success! Showing modal.");
                setShowSuccessModal(true);
                setFormData({ name: '', email: '', message: '' }); // Reset form
            } else {
                console.error("Error response:", data);
                throw new Error(data.message || "Something went wrong");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setToast({ message: "Failed to send message. Please try again later.", type: 'error' });
        } finally {
            setIsSubmitting(false);
            // Clear toast after 5 seconds
            setTimeout(() => setToast(null), 5000);
        }
    };

    return (
        <motion.section
            className="py-24 px-6 relative z-10 border-t border-white/20"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                    }
                }
            }}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="mb-16 text-center"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                >
                    <motion.span
                        className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 block"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
                        }}
                    >Contact</motion.span>
                    <motion.h2
                        className="text-4xl font-bold text-white mb-4"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                        }}
                    >Let's Talk</motion.h2>
                    <motion.p
                        className="text-gray-500 text-lg max-w-lg mx-auto"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
                        }}
                    >
                        Have a project in mind or want to collaborate? We're just a message away.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.3,
                                delayChildren: 0.4
                            }
                        }
                    }}
                >
                    <motion.div
                        className="glass-card rounded-lg p-8 transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
                        variants={{
                            hidden: { opacity: 0, x: -50, scale: 0.95 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                transition: {
                                    duration: 0.7,
                                    ease: "easeOut"
                                }
                            }
                        }}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 relative"
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    aria-label="Name"
                                    className="input w-full bg-black/70 border border-white/20 rounded px-4 py-3 text-white focus:ring focus:border-white/40 transition-colors"
                                    placeholder="Your Name"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    aria-label="Email"
                                    className="input w-full bg-black/70 border border-white/20 rounded px-4 py-3 text-white focus:ring focus:border-white/40 transition-colors"
                                    placeholder="you@example.com"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    aria-label="Message"
                                    className="w-full h-32 input bg-black/70 border border-white/20 rounded px-4 py-3 text-white focus:ring focus:border-white/40 transition-colors"
                                    placeholder="Your message..."
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            {/* Honeypot field for bot detection - hidden from users */}
                            <input
                                type="text"
                                name="_honey"
                                value={contactHoneypot}
                                onChange={(e) => setContactHoneypot(e.target.value)}
                                style={{ display: 'none' }}
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-3 btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        className="space-y-8"
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.7,
                                    ease: "easeOut"
                                }
                            }
                        }}
                    >
                        <div className="glass-card p-6 flex items-start gap-4 transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10">
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Mail className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Email Us</h3>
                                <p className="text-gray-400 text-sm mb-2">For general inquiries and support</p>
                                <a href="mailto:info@eclipse-softworks.com" className="text-white hover:text-gray-300 transition-colors font-mono">info@eclipse-softworks.com</a>
                            </div>
                        </div>

                        <div className="glass-card p-6 flex items-start gap-4 transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10">
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <MapPin className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Location</h3>
                                <p className="text-gray-400 text-sm mb-2">Our headquarters</p>
                                <p className="text-white font-mono">Johannesburg, South Africa</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 flex items-start gap-4 transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10">
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Clock className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Business Hours</h3>
                                <p className="text-gray-400 text-sm mb-2">When we're available</p>
                                <p className="text-white font-mono">Mon - Fri: 9:00 AM - 6:00 PM (SAST)</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <AnimatePresence>
                {toast && (
                    <div className="fixed bottom-6 right-6 z-50">
                        <Toast type={toast.type}>
                            {toast.message}
                        </Toast>
                    </div>
                )}
                {showSuccessModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-zinc-900 border border-white/20 rounded-lg p-8 max-w-md w-full text-center"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                            <p className="text-gray-400 mb-6">Thank you for contacting us. We'll get back to you shortly.</p>
                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="px-6 py-2 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors"
                            >
                                Close
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default ContactSection;
