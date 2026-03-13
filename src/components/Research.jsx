import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLightningBolt, HiGlobe, HiBeaker, HiChartBar } from 'react-icons/hi';
import { researchAreas, technicalSkills } from '../data/research';
import massFractionPlot from '../assets/images/mass_fraction_plot.pdf';

const Research = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap = {
    radio: HiLightningBolt,
    galaxy: HiGlobe,
    atom: HiBeaker,
    spectrum: HiChartBar,
  };

  return (
    <section id="research" className="py-20 bg-gradient-to-b from-surface to-space-blue">
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
              <span className="gradient-text">Areas of Interest</span>
            </h2>
            
          </div>

          {/* Research Areas Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {researchAreas.map((area, index) => {
              const Icon = iconMap[area.icon];
              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-text-dark/10 hover:border-${area.color}/50 transition-all duration-300 hover:shadow-xl hover:shadow-${area.color}/20"
                >
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 bg-${area.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="text-2xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-dark">{area.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-text-dark/80 mb-6">{area.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {area.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`text-${area.color} mt-1`}>▸</span>
                        <span className="text-text-dark/90 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

        
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
