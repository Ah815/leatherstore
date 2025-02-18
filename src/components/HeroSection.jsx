import React from "react";

export default function HeroSection() {
  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover brightness-75"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HOGeMCuwwKqIlDUerurj7cAEe66zTG.png"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
        <h1 className="max-w-[90%] sm:max-w-xl md:max-w-3xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Timeless Craftsmanship, Premium Leather – Built to Last.
        </h1>
      </div>
    </div>
  );
}
