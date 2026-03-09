import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMicrophone, HiLocationMarker, HiCalendar } from 'react-icons/hi';
import { talks } from '../data/talks';
import conferencePic from '../assets/images/NBNSP_conference_group_pic.jpg';

const Talks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="talks" className="py-20 bg-gradient-to-b from-surface to-space-blue">
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
              <span className="gradient-text">Talks & Presentations</span>
            </h2>
            <p className="text-text-dark/80 text-lg max-w-2xl mx-auto">
              Sharing research at leading institutions and conferences
            </p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-cosmic-purple/20 rounded-xl p-6 text-center border border-cosmic-purple/30">
              <div className="text-4xl font-bold text-cosmic-purple mb-2">6</div>
              <div className="text-text-dark/80">Total Talks</div>
            </div>
            <div className="bg-nebula-pink/20 rounded-xl p-6 text-center border border-nebula-pink/30">
              <div className="text-4xl font-bold text-nebula-pink mb-2">4</div>
              <div className="text-text-dark/80">Invited Talks</div>
            </div>
            <div className="bg-teal-burst/20 rounded-xl p-6 text-center border border-teal-burst/30">
              <div className="text-4xl font-bold text-teal-burst mb-2">5</div>
              <div className="text-text-dark/80">Institutions</div>
            </div>
            <div className="bg-supernova-orange/20 rounded-xl p-6 text-center border border-supernova-orange/30">
              <div className="text-4xl font-bold text-supernova-orange mb-2">2025-26</div>
              <div className="text-text-dark/80">Years</div>
            </div>
          </motion.div>

          {/* Conference Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-16 max-w-4xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple to-nebula-pink rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <img
                src={conferencePic}
                alt="Conference group photo"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-space-blue/90 to-transparent p-6 rounded-b-2xl">
                <p className="text-text-dark font-medium">Presenting at conferences and building collaborations</p>
              </div>
            </div>
          </motion.div>

          {/* Talks Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-purple via-nebula-pink to-teal-burst opacity-30 hidden md:block" />

              {/* Talks */}
              <div className="space-y-8">
                {talks.map((talk, index) => (
                  <motion.div
                    key={talk.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-r from-cosmic-purple to-nebula-pink rounded-full border-4 border-space-blue hidden md:block" />

                    {/* Content */}
                    <div className="md:ml-20 bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-text-dark/10 hover:border-nebula-pink/50 transition-all duration-300 hover:shadow-xl">
                      {/* Type Badge */}
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                        talk.type === 'Invited Talk'
                          ? 'bg-nebula-pink/20 text-nebula-pink border border-nebula-pink/30'
                          : 'bg-teal-burst/20 text-teal-burst border border-teal-burst/30'
                      }`}>
                        {talk.type}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-text-dark mb-3">
                        {talk.title}
                      </h3>

                      {/* Institution and Location */}
                      <div className="space-y-2 mb-2">
                        <div className="flex items-start gap-2">
                          <HiMicrophone className="text-cosmic-purple mt-1 flex-shrink-0" />
                          <span className="text-text-dark font-semibold">{talk.institution}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <HiLocationMarker className="text-teal-burst mt-1 flex-shrink-0" />
                          <span className="text-text-dark/80">{talk.location}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <HiCalendar className="text-supernova-orange mt-1 flex-shrink-0" />
                          <span className="text-text-dark/80">{talk.date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Talks;
