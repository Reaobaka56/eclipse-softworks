import React, { useEffect, useRef, useState } from 'react';
import { NAV_ITEMS, SERVICES, PROJECTS, TEAM_MEMBERS } from '../../constants';
import { NavItem, Service, Project, TeamMember } from '../../types';

export type SearchResult = {
  id: string;
  label: string;
  kind: 'nav' | 'service' | 'project' | 'team';
  payload?: NavItem | Service | Project | TeamMember;
};

const buildIndex = (): SearchResult[] => {
  const items: SearchResult[] = [];
  NAV_ITEMS.forEach(i => items.push({ id: i.id, label: i.label, kind: 'nav', payload: i }));
  SERVICES.forEach(s => items.push({ id: s.title.toLowerCase().replace(/\s+/g, '-'), label: s.title, kind: 'service', payload: s }));
  PROJECTS.forEach(p => items.push({ id: p.title.toLowerCase().replace(/\s+/g, '-'), label: p.title, kind: 'project', payload: p }));
  TEAM_MEMBERS.forEach(t => items.push({ id: t.name.toLowerCase().replace(/\s+/g, '-'), label: t.name, kind: 'team', payload: t }));
  return items;
};

const index = buildIndex();

const TerminalSearch: React.FC<{ onNavigate: (section: string, scrollTo?: string) => void; isOpen?: boolean; onRequestClose?: () => void; onRequestOpen?: () => void }> = ({ onNavigate, isOpen: isOpenProp, onRequestClose, onRequestOpen }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [visibleInternal, setVisibleInternal] = useState(false);
  const visible = typeof isOpenProp === 'boolean' ? isOpenProp : visibleInternal;
  const [selected, setSelected] = useState(0);
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handler = (ev: KeyboardEvent) => {
      // focus search on '/'
      if (ev.key === '/') {
        ev.preventDefault();
        if (typeof isOpenProp !== 'boolean') setVisibleInternal(true);
        onRequestOpen?.();
        setTimeout(() => ref.current?.focus(), 30);
      }
      if (ev.key === 'Escape') {
        if (typeof isOpenProp !== 'boolean') setVisibleInternal(false);
        onRequestClose?.();
        setQuery('');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpenProp, onRequestClose]);

  // Prevent background scroll when modal is open and save/restore focus
  useEffect(() => {
    if (!visible) return;
    const prev = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    ref.current?.focus();
    return () => {
      document.body.style.overflow = '';
      if (prev && typeof prev.focus === 'function') prev.focus();
    };
  }, [visible]);

  useEffect(() => {
    if (!query) return setResults([]);
    const q = query.toLowerCase();
    const matches = index.filter(item => item.label.toLowerCase().includes(q));
    setResults(matches.slice(0, 8));
    setSelected(0);
  }, [query]);

  const handleChoose = (r: SearchResult) => {
    // Map results to sections (nav/teams/projects/services)
    if (r.kind === 'nav') {
      onNavigate(r.id);
    } else if (r.kind === 'service') {
      onNavigate('services', r.id);
    } else if (r.kind === 'project') {
      onNavigate('projects', r.id);
    } else if (r.kind === 'team') {
      onNavigate('team', r.id);
    }
    if (typeof isOpenProp !== 'boolean') setVisibleInternal(false);
    onRequestClose?.();
    setQuery('');
  };

  const inputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setSelected(s => Math.min(s + 1, results.length - 1));
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      setSelected(s => Math.max(s - 1, 0));
      e.preventDefault();
    } else if (e.key === 'Enter') {
      if (results[selected]) {
        handleChoose(results[selected]);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const modal = e.currentTarget as HTMLElement;
      const focusableElements = modal.querySelectorAll('input, button, [tabindex]:not([tabindex="-1"])');
      const first = focusableElements[0] as HTMLElement;
      const last = focusableElements[focusableElements.length - 1] as HTMLElement;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
        } else {
          const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
          if (currentIndex > 0) {
            (focusableElements[currentIndex - 1] as HTMLElement).focus();
          } else {
            last.focus();
          }
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
        } else {
          const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
          if (currentIndex < focusableElements.length - 1) {
            (focusableElements[currentIndex + 1] as HTMLElement).focus();
          } else {
            first.focus();
          }
        }
      }
    }
  };

  return (
    <div className="relative">
      <div
        className="hidden md:flex items-center gap-2 bg-black/70 border border-white/20 text-white/90 rounded px-3 py-1 font-mono text-sm"
        role="button"
        onClick={() => { if (typeof isOpenProp !== 'boolean') setVisibleInternal(v => !v); setTimeout(() => ref.current?.focus(), 25); }}
        title="Search (press '/')"
      >
        <span className="text-sm text-gray-300">$</span>
        <span className="text-gray-400"> Search the site (Press '/') </span>
      </div>

      {visible && (
        <div className="fixed inset-0 z-60 flex items-start justify-center md:items-start md:justify-start p-4 md:p-8">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => { if (typeof isOpenProp !== 'boolean') setVisibleInternal(false); onRequestClose?.(); setQuery(''); }}
            data-testid="search-backdrop"
          />

          <div role="dialog" aria-modal="true" className="relative w-full md:w-[520px] mt-12 md:mt-3 bg-black/95 border border-white/20 z-70 rounded-lg shadow-lg" aria-label="Search dialog" onKeyDown={handleKeyDown}>
            <div className="p-3 border-b border-white/5 flex gap-3 items-center">
              <span className="font-mono text-xs text-gray-400">&gt;</span>
              <input
                ref={ref}
                className="flex-1 bg-transparent outline-none text-white font-mono text-sm"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={inputKeyDown}
                aria-label="Search the site"
                placeholder="Search services, projects, people, navigation..."
                autoFocus
              />
              <button onClick={() => { if (typeof isOpenProp !== 'boolean') setVisibleInternal(false); onRequestClose?.(); setQuery(''); }} className="text-xs text-gray-400">Esc</button>
            </div>

            <div className="p-2 max-h-60 overflow-auto">
              {results.length === 0 && <div className="p-3 text-gray-400 text-sm">No results</div>}
              {results.map((r, i) => (
                <div
                  key={`${r.kind}-${r.id}`}
                  onMouseEnter={() => setSelected(i)}
                  onMouseDown={(e) => { e.preventDefault(); handleChoose(r); }}
                  className={`px-3 py-2 rounded cursor-pointer ${i === selected ? 'bg-white/15 text-white' : 'text-gray-300 hover:bg-white/3'}`}
                >
                  <div className="flex justify-between items-center">
                    <div className="font-mono text-sm">{r.label}</div>
                    <div className="text-xs text-gray-400 uppercase">{r.kind}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TerminalSearch;
