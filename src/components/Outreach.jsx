import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiUsers, HiGlobe } from 'react-icons/hi';
import ucscGrads from '../assets/images/UCSC_astro_grads.jpg';

const Outreach = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const activities = [
    {
      icon: HiAcademicCap,
      title: 'Python and Research (PyAR) Workshop',
      organization: 'UC Santa Cruz',
      year: '2024',
      role: 'Instructor',
      description: 'Teaching Python programming and research skills to undergraduate students.',
      color: 'cosmic-purple'
    },
    {
      icon: HiUsers,
      title: 'Volunteer Mathematics & Physics Teacher',
      organization: 'Sombetini Secondary School, Arusha, Tanzania',
      year: '2016 - 2018',
      role: 'Volunteer Teacher',
      description: 'Taught mathematics and physics to secondary school students during undergraduate studies.',
      color: 'nebula-pink'
    },
    {
      icon: HiGlobe,
      title: 'Shadow the Scientist',
      organization: 'University of Dodoma',
      year: '2022',
      role: 'Organizer',
      description: 'Organized sessions connecting students with scientists to explore career pathways in STEM.',
      color: 'teal-burst'
    }
  ];

  return (
    <section id="outreach" className="py-20 bg-gradient-to-b from-surface to-space-blue">
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
              <span className="gradient-text">Outreach & Service</span>
            </h2>
            <p className="text-text-dark/80 text-lg max-w-2xl mx-auto">
              Giving back to the community and inspiring the next generation
            </p>
          </div>

          {/* Community Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16 max-w-4xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple to-teal-burst rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <img
                src={ucscGrads}
                alt="UCSC Astronomy Graduate Students"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-space-blue/90 to-transparent p-6 rounded-b-2xl">
                <p className="text-text-dark font-medium">Building community at UC Santa Cruz</p>
              </div>
            </div>
          </motion.div>

          {/* Activities */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-text-dark/10 hover:border-${activity.color}/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-${activity.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                  <activity.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-lg font-bold text-text-dark mb-2">{activity.title}</h3>
                <p className="text-teal-burst font-medium text-sm mb-1">{activity.organization}</p>
                <p className="text-text-dark/60 text-sm mb-3">{activity.role} • {activity.year}</p>
                <p className="text-text-dark/80 text-sm">{activity.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-gradient-to-r from-cosmic-purple/20 to-nebula-pink/20 rounded-2xl p-8 md:p-12 border border-nebula-pink/30 text-center max-w-4xl mx-auto"
          >
            <p className="text-text-dark text-lg md:text-xl leading-relaxed italic">
              "I hope to inspire students, particularly those from underrepresented communities,
              to never give up on their aspirations. My journey from Tanzania to pursuing a PhD
              at UC Santa Cruz shows that with passion and perseverance, dreams can become reality."
            </p>
            <p className="text-teal-burst font-semibold mt-6">- Lordrick A. Kahinga</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Outreach;
