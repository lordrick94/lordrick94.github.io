import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiFire, HiMap, HiMusicNote } from 'react-icons/hi';

const Interests = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const interests = [
    {
      icon: HiFire,
      title: 'Gym',
      description: 'Staying active and maintaining physical fitness through strength training.',
      color: 'cosmic-purple'
    },
    {
      icon: HiMap,
      title: 'Hiking',
      description: 'Exploring the diverse landscapes of California, from coastal beaches to towering redwoods.',
      color: 'nebula-pink'
    },
    {
      icon: HiMusicNote,
      title: 'Piano',
      description: 'Expressing creativity through music and learning classical pieces.',
      color: 'teal-burst'
    }
  ];

  return (
    <section id="interests" className="py-16 bg-gradient-to-b from-space-blue to-surface">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              <span className="gradient-text">Beyond Research</span>
            </h2>
            <p className="text-text-dark/70 text-base">
              When I'm not debugging code or analyzing spectra...
            </p>
          </div>

          {/* Interests Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                className="bg-surface/30 backdrop-blur-sm rounded-xl p-6 border border-text-dark/10 hover:border-${interest.color}/40 transition-all duration-300 text-center"
              >
                <div className={`w-14 h-14 bg-${interest.color}/20 border border-${interest.color}/30 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <interest.icon className={`text-2xl text-${interest.color}`} />
                </div>
                <h3 className="text-lg font-bold text-text-dark mb-2">{interest.title}</h3>
                <p className="text-text-dark/70 text-sm">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
