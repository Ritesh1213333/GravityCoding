import React from 'react';
import { ArrowRight } from 'lucide-react';
import LightRays from '../../About/components/LightRays';

const CoursesHero = () => {
  return (
    <section className="relative pt-60 pb-32 px-6 flex justify-center items-center overflow-hidden bg-[#030407]">
      {/* Subtle ambient glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_center,rgba(82,73,246,0.12)_0%,transparent_60%)] pointer-events-none z-0" />
      
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <h5 className="text-[#E2E8F0] text-xl bg-gradient-to-br from-[#a7c8ff] to-[#5d9bfa] bg-clip-text text-transparent px-4 py-2 rounded-full font-regular mb-4">Courses</h5>
        {/* Main Heading in CTA Style */}
        <h1 className="flex flex-col items-center leading-[0.95] tracking-[-0.04em] font-[900] mb-16 select-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}>
          <span className="text-[#E2E8F0]">Learn In-Demand Tech Skills</span>
          <span className="text-transparent bg-[url('https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bHVmYXF6Y3VzNzc5cDFxYWVkMm9lb21kamt6b3FreDE4bmc4dWFjciZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/3o7WIstFhcFoyivPnW/giphy.gif')] bg-cover bg-center bg-clip-text drop-shadow-[0_0_20px_rgba(82,73,246,0.4)] mt-[-0.05em]">
            with Real Projects
          </span>
        </h1>
      </div>
    </section>
  );
};

export default CoursesHero;
