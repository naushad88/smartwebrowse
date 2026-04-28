'use client';

import { useEffect, useState } from 'react';

export default function RelocationNoticePopup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-gradient-to-br from-black/70 via-slate-900/65 to-purple-900/60 p-3 backdrop-blur-sm sm:p-4">
      <div className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-pink-200 bg-gradient-to-br from-white via-rose-50 to-purple-50 p-5 shadow-2xl md:p-8">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="sticky float-right top-3 z-10 rounded-md bg-white/90 p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
          aria-label="Close notice"
        >
          <i className="fas fa-times" aria-hidden="true"></i>
        </button>

        <div className="mb-4 flex items-center gap-3 text-pink-700">
          <i className="fas fa-bullhorn text-xl" aria-hidden="true"></i>
          <h2 className="text-2xl font-bold text-gray-900">Important Business Update</h2>
        </div>

        <p className="mb-4 text-base leading-relaxed text-gray-700">
          Smartwebrowse is currently <strong className="text-gray-900">temporarily closed at our present premises</strong>
          {' '}and is relocating to a new location after the acquisition completed on
          {' '}<strong className="text-gray-900">April 20, 2026</strong>.
        </p>

        <p className="mb-4 text-base leading-relaxed text-gray-700">
          This transition marks the beginning of our <strong className="text-gray-900">next phase of leadership and transformation</strong>,
          focused on building stronger AI-first services for our clients and partners.
        </p>

        <p className="mb-4 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-sm leading-relaxed text-blue-900">
          Our team is actively working from home during this transition to ensure continuity of service and communication.
        </p>

        <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
          During this period, previous employee verification requests may experience delays.
          We appreciate your patience and understanding.
        </p>
      </div>
    </div>
  );
}
