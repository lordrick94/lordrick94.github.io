import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import m31Banner from '../assets/images/m31_banner_image.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-space-blue/70 via-space-blue/50 to-space-blue z-10" />
        <img
          src={m31Banner}
          alt="M31 Galaxy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            className="text-teal-burst text-lg md:text-xl mb-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hello! I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="gradient-text">Lordrick A. Kahinga</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl text-text-dark mb-6 font-display"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            PhD Candidate, Astronomer
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-text-dark/90 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Probing the Universe with{' '}
            <span className="text-nebula-pink font-semibold">Fast Radio Bursts</span>
            {' '}| Uncovering the{' '}
            <span className="text-cosmic-purple font-semibold">Missing Baryons</span>
            {' '}| Mapping the{' '}
            <span className="text-supernova-orange font-semibold">Cosmic Web</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <a
              href="#research"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#research')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-gradient-to-r from-cosmic-purple to-nebula-pink rounded-lg hover:shadow-lg hover:shadow-cosmic-purple/50 transition-all duration-300 font-semibold text-lg"
            >
              View Research
            </a>
            <a
              href="#publications"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#publications')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 border-2 border-teal-burst rounded-lg hover:bg-teal-burst/10 transition-all duration-300 font-semibold text-lg"
            >
              Publications
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 border-2 border-supernova-orange rounded-lg hover:bg-supernova-orange/10 transition-all duration-300 font-semibold text-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-text-dark/70 hover:text-teal-burst transition-colors cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          aria-label="Scroll to About section"
        >
          <HiArrowDown className="text-4xl" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
