import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiLocationMarker, HiStar } from 'react-icons/hi';
import profilePhoto from '../assets/images/profile_photo.jpg';
import graduationPic from '../assets/images/graduation_pic.jpg';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      year: '2018 - 2022',
      title: 'B.Sc. Physics',
      institution: 'University of Dodoma, Tanzania',
      description: 'Graduated First Class with Honours. Thesis on tidal energy harnessing at the Dar es Salaam Coast.',
      icon: HiAcademicCap,
      color: 'cosmic-purple'
    },
    {
      year: '2022 - 2023',
      title: 'Postbaccalaureate Researcher',
      institution: 'Maria Mitchell Association, Nantucket, MA',
      description: 'Studied Damped Lyman-Alpha Systems with Prof. J. Xavier Prochaska and Dr. Marcel Neeleman.',
      icon: HiStar,
      color: 'teal-burst'
    },
    {
      year: '2023 - Present',
      title: 'PhD Candidate',
      institution: 'UC Santa Cruz, California',
      description: 'Researching Fast Radio Bursts, CGM/IGM baryons, and host galaxy demographics. M.S. awarded 2025.',
      icon: HiAcademicCap,
      color: 'nebula-pink'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-space-blue to-surface">
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
              <span className="gradient-text">My Journey</span>
            </h2>
            <p className="text-text-dark/80 text-lg max-w-2xl mx-auto">
              From Tanzania to the frontier of astrophysics research
            </p>
          </div>

          {/* Profile and Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple to-nebula-pink rounded-2xl blur-2xl opacity-30" />
                <img
                  src={profilePhoto}
                  alt="Lordrick Kahinga"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover"
                />
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-3">
                <HiLocationMarker className="text-teal-burst text-2xl mt-1 flex-shrink-0" />
                <p className="text-text-dark/90 text-lg leading-relaxed">
                  Born in <span className="text-supernova-orange font-semibold">Arusha, Tanzania</span>,
                  I developed a passion for understanding the universe despite limited research opportunities
                  in my home country.
                </p>
              </div>

              <p className="text-text-dark/90 text-lg leading-relaxed">
                I graduated with <span className="text-nebula-pink font-semibold">First Class Honours</span> in
                Physics from the University of Dodoma in 2022, where I also volunteered as a mathematics and
                physics teacher at a local secondary school.
              </p>

              <p className="text-text-dark/90 text-lg leading-relaxed">
                My international research journey began at the Maria Mitchell Association in Nantucket,
                where I worked on Damped Lyman-Alpha systems. This experience led me to pursue my PhD at
                UC Santa Cruz in 2023.
              </p>

              <p className="text-text-dark/90 text-lg leading-relaxed">
                Today, I use <span className="text-cosmic-purple font-semibold">Fast Radio Bursts</span> as
                cosmic probes to study baryon distributions in galaxy halos, contributing to solving the
                "missing baryon" problem in cosmology.
              </p>

              <div className="pt-4 border-t border-text-dark/20">
                <p className="text-teal-burst text-lg font-medium italic">
                  "I hope to inspire students, particularly those from underrepresented communities,
                  to never give up on their aspirations."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-display font-bold text-center mb-12 gradient-text">
              Academic Timeline
            </h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                  className="relative"
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 bg-${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <item.icon className="text-3xl text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-text-dark/10 hover:border-${item.color}/50 transition-colors duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-xl font-bold text-text-dark">{item.title}</h4>
                        <span className={`text-${item.color} font-semibold text-sm sm:text-base`}>
                          {item.year}
                        </span>
                      </div>
                      <p className="text-teal-burst font-medium mb-2">{item.institution}</p>
                      <p className="text-text-dark/80">{item.description}</p>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-text-dark/30 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
