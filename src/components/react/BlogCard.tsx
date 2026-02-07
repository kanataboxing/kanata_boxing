import { motion } from 'motion/react';

// const items = [{title: "AH", image: {src: "dummy"}}];

export default function FeatureShowcase(items) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.items.map((blog_content, index) => (
        <a href={blog_content.url}>
        <motion.div
          key={blog_content.frontmatter.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">              <motion.img
                src={"/master_ken/" + blog_content.frontmatter.image}
                alt={blog_content.frontmatter.title}
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
            
            {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{blog_content.frontmatter.title}</h3>
              <p className="text-sm text-gray-200 opacity-90">{blog_content.frontmatter.description}</p>
            </div> */}
          </div>
        </motion.div>
        </a>
      ))}
    </div>
  );
}

