import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiStar, HiUserGroup } from 'react-icons/hi';
import { observatories, collaborations } from '../data/observatories';
import lickPic from '../assets/images/me_at_Lick.jpg';
import maunaKeaPic from '../assets/images/mauna_kea_observatory.jpg';

const Observing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="observing" className="py-20 bg-gradient-to-b from-space-blue to-surface">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="gradient-text">Observing Experience</span>
            </h2>
            <p className="text-text-dark/80 text-lg max-w-2xl mx-auto">
              World-class facilities and cutting-edge instruments
            </p>
          </div>

          {/* Highlight Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-r from-cosmic-purple/20 to-nebula-pink/20 rounded-2xl p-8 md:p-12 border border-nebula-pink/30 mb-16 text-center"
          >
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">100+ Nights</div>
            <p className="text-text-dark text-xl mb-2">at World's Leading Observatories</p>
            <p className="text-teal-burst font-semibold">Principal Investigator on majority of programs</p>
          </motion.div>

          {/* Observatory Photos */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple to-nebula-pink rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <img
                src={lickPic}
                alt="At Lick Observatory"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-80"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-space-blue/95 to-transparent p-4 rounded-b-2xl">
                <p className="text-text-dark font-bold">Lick Observatory - Shane Telescope</p>
                <p className="text-text-dark/80 text-sm">100+ nights as Principal Investigator</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-burst to-supernova-orange rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <img
                src={maunaKeaPic}
                alt="Maunakea Observatory"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-80"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-space-blue/95 to-transparent p-4 rounded-b-2xl">
                <p className="text-text-dark font-bold">Maunakea - Keck & Gemini</p>
                <p className="text-text-dark/80 text-sm">50+ nights combined</p>
              </div>
            </motion.div>
          </div>

          {/* Observatory Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {observatories.map((obs, index) => (
              <motion.div
                key={obs.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-text-dark/10 hover:border-teal-burst/50 transition-all duration-300 hover:shadow-xl"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-dark mb-1">{obs.name}</h3>
                    <p className="text-teal-burst font-medium text-sm">{obs.telescope}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-nebula-pink">{obs.nights}</div>
                    <div className="text-text-dark/60 text-xs">nights</div>
                  </div>
                </div>

                {/* Instrument */}
                <div className="mb-3">
                  <span className="text-text-dark/70 text-sm">Instrument: </span>
                  <span className="text-text-dark font-semibold text-sm">{obs.instrument}</span>
                </div>

                {/* Role */}
                <div className="mb-3">
                  <span className="text-text-dark/70 text-sm">Role: </span>
                  <span className="text-text-dark font-semibold text-sm">{obs.role}</span>
                </div>

                {/* Programs */}
                {obs.programs && (
                  <div className="mb-3">
                    <span className="text-text-dark/70 text-sm">Programs: </span>
                    <span className="text-cosmic-purple font-mono text-xs">
                      {obs.programs.join(', ')}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-text-dark/70 text-sm mb-3">{obs.description}</p>

                {/* Location */}
                <div className="text-text-dark/60 text-xs">📍 {obs.location}</div>
              </motion.div>
            ))}
          </div>

          {/* Collaborations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h3 className="text-3xl font-display font-bold text-center mb-8 gradient-text">
              Collaboration Memberships
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {collaborations.map((collab, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                  className="bg-gradient-to-br from-cosmic-purple/20 to-teal-burst/20 rounded-xl p-6 border border-cosmic-purple/30 hover:border-cosmic-purple/60 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <HiUserGroup className="text-cosmic-purple text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-text-dark mb-1">{collab.name}</h4>
                      <p className="text-teal-burst font-semibold text-sm">{collab.role}</p>
                    </div>
                  </div>
                  <p className="text-text-dark/80 text-sm">{collab.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Observing;
