import { motion } from 'motion/react';
// import { Warehouse, Truck, Package, BarChart3, Shield, Headphones } from 'lucide-react';

import taekwondoImg from '@assets/tkd_bubble.png';
import hapkidoImg from '@assets/hapkido-1.png';
import boxingImg from '@assets/boxing_splash.png';
import fitnessImg from '@assets/adult_program_bubble.png';
import grapplingImg from '@assets/grappling-1.jpg';
import childprogramImg from '@assets/children_program_bubble.png';

const features = [
  {
    // icon: Warehouse,
    title: '',
    description: '',
    image: taekwondoImg,
    link: '/master_ken/martial_arts/taekwondo'
  },
  {
    // icon: Truck,
    title: '',
    description: '',
    image: hapkidoImg,
    link: ''
  },
  {
    // icon: Package,
    title: '',
    description: '',
    image: boxingImg,
    link: '/master_ken/martial_arts/boxing'
  },
  {
    // icon: BarChart3,
    title: 'Adult Programs',
    description: '-- blurb for Adult programs --',
    image: fitnessImg,
    link: ''
  },
  // {
  //   // icon: Shield,
  //   title: 'Grappling',
  //   description: 'Brazilian Ju Jitsu, Wrestling and Grappling',
  //   image: grapplingImg,
  // },
  {
    // icon: Headphones,
    title: '',
    description: '',
    image: childprogramImg,
    link: '/master_ken/child_programs'
  },
];

export default function FeatureShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <a href={feature.link}>
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">              <motion.img
                src={feature.image.src}
                alt={feature.title}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              {/* <div className="absolute inset-0 opacity-60" style={{ background: 'linear-gradient(to top, rgb(15, 23, 42), rgba(15, 23, 42, 0.5), transparent)' }} /> */}
              
              {/* Icon overlay */}
              {/* <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg"
              >
                <feature.icon className="w-6 h-6 text-blue-600" />
              </motion.div> */}
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-200 opacity-90">{feature.description}</p>
            </div>
          </div>
          </a>
        </motion.div>
      ))}
    </div>
  );
}

