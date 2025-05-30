import { motion } from 'framer-motion';
import { FiAward, FiCode, FiCpu, FiUserCheck } from 'react-icons/fi';
import profile from '../assets/profile.png';

const About = () => {
  const usps = [
    {
      icon: <FiCode className="text-purple-400" size={20} />,
      title: "Full-Stack Developer",
      description: "Building scalable web applications"
    },
    {
      icon: <FiCpu className="text-blue-400" size={20} />,
      title: "AI/ML Enthusiast",
      description: "Implementing practical ML solutions"
    },
    {
      icon: <FiAward className="text-yellow-400" size={20} />,
      title: "Competitive Programmer",
      description: "Top ranks in coding competitions"
    },
    {
      icon: <FiUserCheck className="text-pink-400" size={20} />,
      title: "Problem Solver",
      description: "Analytical technical challenges solver"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800 py-12">
        <div className='mx-16'>
      <div className="container mx-auto px-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Profile Image - Compact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-2/5 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-70 blur-md"></div>
              <div className="relative rounded-xl overflow-hidden border border-gray-700 w-64 h-64">
                <img 
                  src={profile}
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content - Compact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-3/5"
          >
            <p className="text-gray-300 mb-6">
              Computer Science student passionate about building innovative solutions that bridge technology and real-world problems. Combining full-stack development with competitive programming to create efficient, optimized applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {usps.map((usp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-700 rounded-md">
                      {usp.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{usp.title}</h4>
                      <p className="text-gray-400 text-xs">{usp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Compact Achievements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="p-4 bg-gray-800/30 rounded-lg border border-gray-700"
            >
              <h4 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
                <FiAward className="text-yellow-400" size={16} /> Notable Achievements
              </h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">▹</span>
                  <span>1st Runner Up - Microsoft Codestorm 2024</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">▹</span>
                  <span>Top 10% Dean's List</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">▹</span>
                  <span>Best Startup Award - BharatTech 2.0</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;