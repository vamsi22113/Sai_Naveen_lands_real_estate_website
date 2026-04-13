import { useEffect, useRef } from "react";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video plays on mobile browsers
    const playVideo = () => {
      video.play().catch(() => {
        // fallback (user interaction required in some cases)
        console.log("Autoplay blocked");
      });
    };

    playVideo();
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      
      {/* 🎥 Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          w-full h-full 
          object-cover 
          will-change-transform
        "
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay (lighter for mobile clarity) */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/40"></div>

    </div>
  );
}