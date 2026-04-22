export default function WaveDivider() {
  return (
    <div className="relative -mt-1 overflow-hidden bg-gradient-to-b from-blue-500 to-white dark:to-slate-900">
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-32 sm:h-44 lg:h-52"
      >
        <path
          d="M0,70 C360,20 720,110 1080,65 C1260,42 1380,88 1440,70 L1440,160 L0,160 Z"
          fill="white"
          fillOpacity="0.12"
        />
        <path
          d="M0,95 C280,55 580,130 860,90 C1100,58 1310,115 1440,95 L1440,160 L0,160 Z"
          fill="white"
          fillOpacity="0.18"
        />
      </svg>
    </div>
  );
}
