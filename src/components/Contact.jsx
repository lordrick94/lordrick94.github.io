import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiDocument, HiLocationMarker } from 'react-icons/hi';
import { SiOrcid, SiGithub, SiArxiv } from 'react-icons/si';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'lkahinga@ucsc.edu',
      link: 'mailto:lkahinga@ucsc.edu',
      color: 'cosmic-purple'
    },
    {
      icon: HiLocationMarker,
      label: 'Address',
      value: 'Dept. of Astronomy & Astrophysics, UC Santa Cruz',
      value2: '1156 High Street, Santa Cruz, CA 95060',
      color: 'nebula-pink'
    }
  ];

  const socialLinks = [
    {
      icon: SiOrcid,
      label: 'ORCID',
      value: '0009-0007-5296-4046',
      link: 'https://orcid.org/0009-0007-5296-4046',
      color: 'cosmic-purple'
    },
    {
      icon: SiGithub,
      label: 'GitHub',
      value: '@lordrick94',
      link: 'https://github.com/lordrick94',
      color: 'nebula-pink'
    },
    {
      icon: SiArxiv,
      label: 'arXiv',
      value: 'Kahinga, L. A.',
      link: 'https://arxiv.org/search/?query=Kahinga%2C+L.+A.&searchtype=author',
      color: 'teal-burst'
    }
  ];

  const affiliations = [
    'CHIME/FRB Outriggers Collaboration',
    'Dark Energy Spectroscopic Instrument (DESI) Collaboration',
    'UC Santa Cruz - Department of Astronomy & Astrophysics'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-surface to-space-blue">
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
              <span className="gradient-text">Get in Touch</span>
            </h2>
            <p className="text-text-dark/80 text-lg max-w-2xl mx-auto">
              Feel free to reach out for collaborations, questions, or opportunities
            </p>
          </div>

          {/* Contact Information */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                  className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-text-dark/10 text-center"
                >
                  <div className={`w-12 h-12 bg-${info.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <info.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-text-dark/70 text-sm font-semibold mb-2">{info.label}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className={`text-${info.color} hover:text-nebula-pink transition-colors duration-300 font-medium`}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <>
                      <p className="text-text-dark font-medium">{info.value}</p>
                      {info.value2 && <p className="text-text-dark/80 text-sm">{info.value2}</p>}
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3 className="text-2xl font-display font-bold text-center mb-6 text-text-dark">
                Academic Profiles
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-surface/30 backdrop-blur-sm rounded-xl p-6 border border-text-dark/10 hover:border-${social.color}/50 transition-all duration-300 text-center"
                  >
                    <div className={`w-14 h-14 bg-${social.color}/20 border border-${social.color}/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${social.color} transition-all duration-300`}>
                      <social.icon className={`text-2xl text-${social.color} group-hover:text-white transition-colors duration-300`} />
                    </div>
                    <h4 className="text-text-dark font-bold mb-1">{social.label}</h4>
                    <p className={`text-${social.color} text-sm`}>{social.value}</p>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Affiliations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="bg-gradient-to-r from-cosmic-purple/20 to-teal-burst/20 rounded-xl p-8 border border-cosmic-purple/30"
            >
              <h3 className="text-xl font-bold text-text-dark mb-4 text-center">Affiliations</h3>
              <ul className="space-y-2">
                {affiliations.map((affiliation, index) => (
                  <li key={index} className="text-text-dark/90 text-center">
                    <span className="text-teal-burst">•</span> {affiliation}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center mb-16"
          >
            <a
              href="/cv/Lordrick_CV.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cosmic-purple to-nebula-pink rounded-lg hover:shadow-2xl hover:shadow-cosmic-purple/50 transition-all duration-300 font-bold text-lg"
            >
              <HiDocument className="text-2xl" />
              Download Full CV
            </a>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="border-t border-text-dark/10 pt-8"
          >
            <div className="text-center text-text-dark/60">
              <p className="mb-2">
                © {new Date().getFullYear()} Lordrick A. Kahinga. All rights reserved.
              </p>
              <p className="text-sm">
                Built with React, Tailwind CSS, and Framer Motion
              </p>
            </div>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
