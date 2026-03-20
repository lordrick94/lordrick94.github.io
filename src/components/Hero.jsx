import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import m31Banner from '../assets/images/m31_banner_image.jpg';
import profilePhoto from '../assets/images/profile_photo.jpg';

const Hero = () => {
  const scrollToResearch = () => {
    document.querySelector('#research')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background Image - extends full height */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-space-blue/60 via-space-blue/70 to-space-blue/95 z-10" />
        <img
          src={m31Banner}
          alt="M31 Galaxy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 pt-32 pb-20 flex-1 flex flex-col">

        {/* Header Section - Name & Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            className="text-teal-burst text-lg md:text-xl mb-3 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hello! I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="gradient-text">Lordrick A. Kahinga</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-text-dark mb-4 font-display"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            PhD Candidate, Astronomer
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="text-base md:text-lg text-text-dark/90 max-w-2xl mx-auto"
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
        </motion.div>

        {/* Story Section - Photo & Bio */}
        <motion.div
          id="about"
          className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center mb-12 flex-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          {/* Profile Image */}
          <div className="md:col-span-2 flex justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple to-nebula-pink rounded-2xl blur-2xl opacity-30" />
              <img
                src={profilePhoto}
                alt="Lordrick Kahinga"
                className="relative rounded-2xl shadow-2xl w-full max-w-sm object-cover"
              />
            </motion.div>
          </div>

          {/* Story */}
          <motion.div
            className="md:col-span-3 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <p className="text-text-dark/90 text-base lg:text-lg leading-relaxed">
              I'm an astronomer currently pursuing a PhD at{' '}
              <span className="text-cosmic-purple font-semibold">UC Santa Cruz</span>,
              originally from Arusha, Tanzania.
              My path to astrophysics was not a typical one. I began my undergraduate studies in civil
              engineering in China, but had to leave the program after developing a serious kidney injury.
              During dialysis, I found myself returning to physics and gradually becoming drawn to
              questions about cosmology and the structure of the universe.
            </p>

            <p className="text-text-dark/90 text-base lg:text-lg leading-relaxed">
              I later pursued a degree in physics at the{' '}
              <span className="text-supernova-orange font-semibold">University of Dodoma in Tanzania</span>.
              While managing dialysis and eventually a kidney transplant, I completed my degree
              with first class honours and graduated as the top student in the College of
              Natural and Mathematical Sciences.
            </p>

            <p className="text-text-dark/90 text-base lg:text-lg leading-relaxed">
              My current research focuses on using Fast Radio Bursts as cosmological probes
              to study the distribution of baryons in galaxy halos and the intergalactic medium.
              I work with the <span className="text-teal-burst font-semibold">CHIME/FRB collaboration</span>{' '}
              and am particularly interested in how FRBs can help locate the universe's "missing" baryons.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
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

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToResearch}
          className="mt-8 mx-auto text-text-dark/70 hover:text-teal-burst transition-colors cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          aria-label="Scroll to Research section"
        >
          <HiArrowDown className="text-3xl" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
