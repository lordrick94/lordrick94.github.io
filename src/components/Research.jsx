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
              <span className="gradient-text">Research</span>
            </h2>
            <p className="text-text-dark/80 text-lg max-w-3xl mx-auto">
              Using Fast Radio Bursts to unlock the secrets of the universe
            </p>
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

          {/* Featured Research Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-gradient-to-r from-cosmic-purple/20 to-nebula-pink/20 rounded-2xl p-8 md:p-12 border border-nebula-pink/30 mb-20"
          >
            <h3 className="text-3xl font-display font-bold mb-6 text-center">
              <span className="gradient-text">Featured Research</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-text-dark mb-4">
                  Constraining the M31 Baryon Halo
                </h4>
                <p className="text-text-dark/90 mb-4">
                  My first-author work presents a novel approach to probe the circumgalactic medium (CGM) of
                  Andromeda (M31) using 171 Fast Radio Bursts from CHIME/FRB Catalog 2. By comparing their
                  dispersion measures to a control sample of 684 FRBs, I estimate the DM contribution from
                  M31's CGM and constrain the total ionized baryon mass.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-teal-burst font-semibold">Key Findings:</p>
                  <ul className="space-y-1 text-text-dark/80">
                    <li>• Detected excess DM of 5.9-59.6 pc cm⁻³ in inner halo (0-151 kpc)</li>
                    <li>• Found 25.7-64.6 pc cm⁻³ excess in outer halo (151-302 kpc)</li>
                    <li>• Constrained total CGM mass: M<sub>b,halo</sub> = 18.6<sup>+7.9</sup><sub>-8.4</sub> × 10¹⁰ M<sub>☉</sub></li>
                    <li>• M31 harbors substantial cosmic baryon budget in diffuse ionized gas</li>
                  </ul>
                </div>
                <a
                  href="https://arxiv.org/abs/2602.23749"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-cosmic-purple to-nebula-pink rounded-lg hover:shadow-lg hover:shadow-cosmic-purple/50 transition-all duration-300 font-semibold"
                >
                  View on arXiv
                </a>
              </div>
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-2xl">
                  <embed
                    src={massFractionPlot}
                    type="application/pdf"
                    className="w-full h-96 md:h-[600px]"
                  />
                  <p className="text-text-light text-sm text-center mt-3 font-medium">
                    Mass fraction plot showing baryon distribution constraints in M31 halo
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h3 className="text-3xl font-display font-bold text-center mb-12 gradient-text">
              Technical Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Languages */}
              <div className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-text-dark/10">
                <h4 className="text-xl font-bold text-cosmic-purple mb-4">Languages</h4>
                <ul className="space-y-2">
                  {technicalSkills.languages.map((lang, idx) => (
                    <li key={idx} className="text-text-dark/90 text-sm">
                      <span className="font-semibold">{lang.name}</span>
                      <span className="text-text-dark/60 text-xs ml-2">({lang.level})</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Methods */}
              <div className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-text-dark/10">
                <h4 className="text-xl font-bold text-nebula-pink mb-4">Methods</h4>
                <ul className="space-y-2">
                  {technicalSkills.methods.map((method, idx) => (
                    <li key={idx} className="text-text-dark/90 text-sm">• {method}</li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-text-dark/10">
                <h4 className="text-xl font-bold text-teal-burst mb-4">Tools</h4>
                <ul className="space-y-2">
                  {technicalSkills.tools.map((tool, idx) => (
                    <li key={idx} className="text-text-dark/90 text-sm">• {tool}</li>
                  ))}
                </ul>
              </div>

              {/* Archives */}
              <div className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-text-dark/10">
                <h4 className="text-xl font-bold text-supernova-orange mb-4">Data Archives</h4>
                <ul className="space-y-2">
                  {technicalSkills.archives.map((archive, idx) => (
                    <li key={idx} className="text-text-dark/90 text-sm">• {archive}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
