/**
 * Header matches footer base tone (slate-900) — solid, opaque, no gradient on the bar.
 * Footer section uses: from-slate-900 via-blue-900 to-indigo-900 (gradient on large area).
 */
export const HEADER_BG_COLOR = '#0f172a';

export const HEADER_BAR_CLASS =
  'site-header border-b border-blue-900/50 shadow-[0_4px_24px_rgba(0,0,0,0.35)]';

export const headerBarClass = () => HEADER_BAR_CLASS;

export const headerNavLinkClass =
  'text-slate-100 hover:text-white transition-colors duration-200 font-medium';

export const headerNavButtonClass = `flex items-center space-x-1 ${headerNavLinkClass}`;

/** Matches footer glass / social button style */
export const headerCtaOutlineClass =
  'px-5 py-2.5 rounded-lg text-sm font-semibold text-white border border-white/25 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300';

export const headerCtaPrimaryClass =
  'px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md transition-all duration-300';

export const headerMobileMenuBtnClass =
  'inline-flex items-center justify-center p-2.5 rounded-lg text-white border border-white/25 bg-white/5 hover:bg-white/10 transition-all duration-200 max-lg:inline-flex lg:hidden';

export const headerInlineStyle = { backgroundColor: HEADER_BG_COLOR } as const;
