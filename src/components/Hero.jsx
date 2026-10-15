import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import personImage from '../assets/AmjedBinYoosuf.png';
const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      textRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }
    ).fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8 },
      '-=0.5'
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div ref={textRef} className="order-2 lg:order-1">
            <span className="inline-block text-accent text-sm md:text-base font-medium tracking-wide uppercase mb-4">
              Frontend Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
              Hi, I'm Amjed KP
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mb-8 leading-relaxed">
              Frontend Developer crafting clean, modern web experiences with attention to detail and performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-colors duration-200"
              >
                View Projects
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-light-border dark:border-dark-border hover:border-accent text-gray-900 dark:text-gray-100 font-medium rounded-lg transition-colors duration-200"
              >
                Hire Me
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div ref={imageRef} className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-br from-accent/30 to-purple-600/20 rounded-3xl blur-2xl opacity-60" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden border-2 border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card shadow-2xl">
                <img
                  src={personImage}
                  alt="Amjed - Frontend Developer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
