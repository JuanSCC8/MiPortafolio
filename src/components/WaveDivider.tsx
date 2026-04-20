export default function WaveDivider() {
  return (
    <div className="relative -mt-1 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 overflow-hidden">
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-40 sm:h-52 lg:h-64"
      >
        {/* Back layer — subtle */}
        <path
          d="M0,100 C240,200 480,0 720,100 C960,200 1200,0 1440,100 L1440,200 L0,200 Z"
          fill="white"
          fillOpacity="0.15"
        />
        {/* Mid layer */}
        <path
          d="M0,120 C360,40 720,200 1080,120 C1260,75 1380,155 1440,120 L1440,200 L0,200 Z"
          fill="white"
          fillOpacity="0.45"
        />
        {/* Front layer — fully white, creates the transition to the About bg */}
        <path
          d="M0,150 C280,95 560,200 840,155 C1100,110 1300,175 1440,150 L1440,200 L0,200 Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
