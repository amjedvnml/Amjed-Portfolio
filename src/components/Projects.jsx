import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import project images
import vamosImage from '../assets/vamos.png';
import neonImage from '../assets/neon.png';
import portfolioImage from '../assets/portfolio.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Vamos Nikies Shoe Store',
    description: 'A modern admin dashboard with analytics, inventory management, and real-time data visualization.',
    image: vamosImage,
    tech: ['React', 'Tailwind CSS'],
    liveUrl: 'https://vamos-nikies.vercel.app',
    githubUrl: 'https://github.com/amjedvnml/Vamos-Nikies',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Clean and minimal portfolio showcasing creative work with smooth animations and modern design.',
    image: portfolioImage,
    tech: ['React', 'GSAP', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Neon Porsche ',
    description: 'Productivity app with drag-and-drop functionality, team collaboration, and progress tracking.',
    image: neonImage,
    tech: ['HTML', 'Tailwind CSS'],
    liveUrl: 'https://neon-porsche.vercel.app',
    githubUrl: 'https://github.com/amjedvnml/Neon-Porsche',
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-24 px-6 md:px-12 lg:px-24 bg-light-card/50 dark:bg-dark-card/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-medium tracking-wide uppercase mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-light-border dark:bg-dark-border">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-purple-600/20 flex items-center justify-center">
                    <span className="text-6xl opacity-50">🖼️</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-light-bg/60 dark:bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent rounded-full hover:bg-accent-light transition-colors"
                    aria-label="Live Demo"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-500 rounded-full hover:bg-gray-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
