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
            <p className="text-text-dark/90 text-lg leading-relaxed">
            I'm an astronomer currently pursuing a PhD at 
            <span className="text-cosmic-purple font-semibold"> UC Santa Cruz</span>, 
            originally from Arusha, Tanzania. 
            My path to astrophysics was not a typical one. I began my undergraduate studies in civil 
            engineering in China, but had to leave the program after developing a serious kidney injury. 
            During dialysis, I found myself returning to physics and gradually becoming drawn to 
            questions about cosmology and the structure of the universe.
          </p>

          <p className="text-text-dark/90 text-lg leading-relaxed">
            I later pursued a degree in physics at the 
            <span className="text-supernova-orange font-semibold"> University of Dodoma in Tanzania</span>. 
            While managing dialysis and eventually a kidney transplant, I completed my degree 
            with first class honours and graduated as the top student in the College of 
            Natural and Mathematical Sciences.
          </p>

          <p className="text-text-dark/90 text-lg leading-relaxed">
            My current research focuses on using Fast Radio Bursts as cosmological probes 
            to study the distribution of baryons in galaxy halos and the intergalactic medium. 
            I work with the <span className="text-teal-burst font-semibold"> CHIME/FRB collaboration </span> 
            and am particularly interested in how FRBs can help locate the universe’s “missing” baryons. 
            I feel fortunate to work with collaborators around the world and hope to help others 
            discover the beauty of the night sky.
          </p>

            </motion.div>
          </div>

          
        </motion.div>
      </div>
    </section>
  );
};

export default About;
