/**
 * Optical-themed SVG Icons for Fovea Opticals
 * Modern, custom-designed icons representing optical services
 */

export const EyeExamIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <path d="M12 5c-5 0-9.5 4-10 8c.5 4 5 8 10 8s9.5-4 10-8c-.5-4-5-8-10-8zm0 6a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
);

export const GlassesIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 11c0-1.5 1-2.5 2.5-2.5S8 9.5 8 11v2c0 1.5-1 2.5-2.5 2.5S3 14.5 3 13v-2z" />
    <path d="M16 11c0-1.5 1-2.5 2.5-2.5S21 9.5 21 11v2c0 1.5-1 2.5-2.5 2.5S16 14.5 16 13v-2z" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <circle cx="5.5" cy="11" r="2.5" fill="none" />
    <circle cx="18.5" cy="11" r="2.5" fill="none" />
  </svg>
);

export const LensIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
    <circle cx="11" cy="11" r="5" fill="currentColor" opacity="0.1" />
  </svg>
);

export const VisionIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const ContactLensIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.2" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const PrescriptionIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2h-2" />
    <line x1="12" y1="7" x2="12" y2="17" />
    <line x1="7" y1="12" x2="17" y2="12" />
  </svg>
);

export const OptometerIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="7" />
    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    <circle cx="12" cy="5" r="1" fill="currentColor" />
    <circle cx="19" cy="12" r="1" fill="currentColor" />
    <circle cx="12" cy="19" r="1" fill="currentColor" />
    <circle cx="5" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const EyeCareIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 8c-3.5 0-6 2.5-7 5 1 2.5 3.5 5 7 5s6-2.5 7-5c-1-2.5-3.5-5-7-5z" />
    <circle cx="12" cy="13" r="2" />
    <path d="M2 12h1M21 12h1M4.5 7.5l.7-.7M18.8 18.8l.7.7M4.5 16.5l.7.7M18.8 5.2l.7.7" />
  </svg>
);

export const SunglassesIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 8c0-1 .5-2 1.5-2.5S7 5 8 6l2-1 2 1-4 4-2-2z" />
    <path d="M16 8c0-1 .5-2 1.5-2.5s1.5.5 2 1.5l2-1 2 1-4 4-2-2z" />
    <line x1="9" y1="8" x2="15" y2="8" />
  </svg>
);

export const FrameIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="5" width="7" height="10" rx="2" />
    <rect x="15" y="5" width="7" height="10" rx="2" />
    <line x1="9" y1="10" x2="15" y2="10" />
    <path d="M4 8c.5-1 1.5-1.5 2.5-1.5" />
    <path d="M20 8c-.5-1-1.5-1.5-2.5-1.5" />
  </svg>
);

export const OpticalCenterIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
      opacity="0.3"
    />
    <circle
      cx="12"
      cy="12"
      r="8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="5" fill="currentColor" opacity="0.5" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);
