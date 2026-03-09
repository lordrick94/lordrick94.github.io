import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiDocument, HiExternalLink, HiStar } from 'react-icons/hi';
import { firstAuthorPublications, contributingPublications } from '../data/publications';

const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="publications" className="py-20 bg-gradient-to-b from-space-blue to-surface">
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
              <span className="gradient-text">Publications</span>
            </h2>
            <p className="text-text-dark/80 text-lg max-w-2xl mx-auto">
              Peer-reviewed research and collaborations
            </p>
          </div>

          {/* First-Author Publications */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl font-display font-bold mb-8 flex items-center gap-3"
            >
              <HiStar className="text-supernova-orange" />
              <span className="text-text-dark">First-Author Publications</span>
            </motion.h3>

            <div className="space-y-6">
              {firstAuthorPublications.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                  className="bg-gradient-to-r from-cosmic-purple/20 to-nebula-pink/20 backdrop-blur-sm rounded-xl p-8 border-2 border-nebula-pink/50 hover:border-nebula-pink transition-all duration-300 hover:shadow-2xl hover:shadow-nebula-pink/30"
                >
                  {/* Featured Badge */}
                  {pub.featured && (
                    <div className="inline-block px-4 py-1 bg-supernova-orange rounded-full text-sm font-bold mb-4">
                      Featured Research
                    </div>
                  )}

                  {/* Title */}
                  <h4 className="text-2xl font-bold text-text-dark mb-3 leading-tight">
                    {pub.title}
                  </h4>

                  {/* Authors and Year */}
                  <p className="text-text-dark/80 mb-3">
                    <span className="font-semibold text-teal-burst">{pub.authors}</span>
                  </p>

                  <p className="text-text-dark/60 text-sm mb-4">
                    {pub.journal} ({pub.year})
                  </p>

                  {/* Description */}
                  {pub.description && (
                    <p className="text-text-dark/90 mb-6 leading-relaxed">
                      {pub.description}
                    </p>
                  )}

                  {/* Link to arXiv */}
                  <a
                    href={pub.arxivUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cosmic-purple to-nebula-pink rounded-lg hover:shadow-lg hover:shadow-cosmic-purple/50 transition-all duration-300 font-semibold"
                  >
                    <HiExternalLink />
                    View on arXiv
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contributing Author Publications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-3xl font-display font-bold mb-8 flex items-center gap-3"
            >
              <HiDocument className="text-teal-burst" />
              <span className="text-text-dark">Contributing Author</span>
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-6">
              {contributingPublications.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-text-dark/10 hover:border-teal-burst/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-burst/20"
                >
                  {/* Title */}
                  <h4 className="text-lg font-bold text-text-dark mb-3 leading-tight">
                    {pub.title}
                  </h4>

                  {/* Authors */}
                  <p className="text-text-dark/70 text-sm mb-2 line-clamp-2">
                    {pub.authors}
                  </p>

                  {/* Journal and Year */}
                  <p className="text-text-dark/60 text-sm mb-4">
                    {pub.journal} ({pub.year})
                  </p>

                  {/* Link */}
                  <a
                    href={pub.arxivUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-burst hover:text-nebula-pink transition-colors duration-300 font-medium text-sm"
                  >
                    <HiExternalLink />
                    arXiv:{pub.arxivId}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="https://arxiv.org/search/?query=Kahinga%2C+L.+A.&searchtype=author"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-supernova-orange rounded-lg hover:bg-supernova-orange/10 transition-all duration-300 font-semibold text-lg"
            >
              View All on arXiv
              <HiExternalLink />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
