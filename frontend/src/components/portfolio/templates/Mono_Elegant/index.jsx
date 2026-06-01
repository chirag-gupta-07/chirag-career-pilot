import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ExternalLink, ChevronDown, Quote } from 'lucide-react';
import data from '../../../../data/dummy_data.json';

export default function MonoElegant() {
  const { personal, socials, stats, skills, projects, experience, testimonials } = data;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* 1. Hero / Header */}
      <header className="min-h-screen flex flex-col justify-center items-center px-6 relative">
         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-4xl">
           <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase mb-6 leading-none">
             {personal.name}
           </h1>
           <p className="text-lg md:text-2xl font-light text-gray-500 uppercase tracking-[0.2em]">
             {personal.title}
           </p>
         </motion.div>
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-12">
            <ChevronDown className="w-8 h-8 animate-bounce text-gray-300" />
         </motion.div>
      </header>

      {/* 2. About */}
      <section className="py-24 px-6 bg-gray-50">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 border-b-4 border-black inline-block pb-2">About</h2>
            <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed mb-8">{personal.bio}</p>
            <div className="flex flex-wrap gap-8 md:gap-12 border-t border-gray-200 pt-8 mt-8">
              <div>
                <p className="text-4xl font-black">{stats.yearsExperience}+</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Years</p>
              </div>
              <div>
                <p className="text-4xl font-black">{stats.projectsCompleted}</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Projects</p>
              </div>
              <div>
                <p className="text-4xl font-black">{stats.happyClients}</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Clients</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] grayscale overflow-hidden bg-gray-200 w-full max-w-md mx-auto">
               <img src={personal.avatar} alt={personal.name} className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-8 border-black z-[-1] hidden md:block"></div>
          </div>
        </motion.div>
      </section>

      {/* 3. Skills */}
      <section className="py-24 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Skills</h2>
            <p className="text-xl text-gray-500 font-light">Tools and technologies I master.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={fadeIn} className="border border-black p-6 flex flex-col items-center justify-center text-center hover:bg-black hover:text-white transition-colors duration-300">
                <span className="text-sm md:text-base font-bold uppercase tracking-wider">{skill.name}</span>
                <span className="text-xs text-gray-400 mt-2 uppercase tracking-widest">{skill.category}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Projects */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 text-white">Selected Works</h2>
          </motion.div>
          <div className="flex flex-col gap-24">
            {projects.map((project, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 border border-gray-800">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                    <img src={project.image} alt={project.title} className="w-full h-auto grayscale object-cover aspect-video" />
                  </div>
                </div>
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">{project.title}</h3>
                  <p className="text-gray-400 font-light text-lg mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 border border-gray-700 text-xs uppercase tracking-widest font-semibold">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    <a href={project.liveUrl} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-gray-300 transition-colors pb-1 border-b-2 border-white">
                      View Live <ExternalLink size={16} />
                    </a>
                    <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-white transition-colors pb-1 border-b-2 border-transparent hover:border-white">
                      Source <Github size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Experience */}
      <section className="py-24 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Experience</h2>
          </motion.div>
          <div className="flex flex-col">
            {experience.map((exp, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="border-b border-gray-200 py-12 last:border-0 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 hover:pl-8 transition-all duration-300 group">
                <div className="md:col-span-1 text-sm font-bold text-gray-400 uppercase tracking-widest mt-1 group-hover:text-black transition-colors">
                  {exp.period}
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold uppercase tracking-wide">{exp.role}</h3>
                  <p className="text-lg font-light text-gray-500 mb-4 uppercase tracking-widest">{exp.company}</p>
                  <p className="text-gray-700 leading-relaxed font-light">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Client Words</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, index) => (
              <motion.div key={index} variants={fadeIn} className="p-10 border border-gray-200 bg-white relative">
                <Quote className="absolute top-8 right-8 text-gray-200 w-12 h-12" />
                <p className="text-lg font-light text-gray-600 mb-8 leading-relaxed relative z-10 italic">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={test.avatar} alt={test.name} className="w-14 h-14 rounded-full grayscale object-cover" />
                  <div>
                    <h4 className="font-bold uppercase tracking-wider">{test.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Contact */}
      <section className="py-32 px-6 bg-black text-white text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8">Let's Talk</h2>
          <p className="text-xl text-gray-400 font-light mb-16 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm currently available for freelance work and open to new opportunities.
          </p>
          <a href={`mailto:${socials.email}`} className="inline-block border-2 border-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
            {socials.email}
          </a>
          
          <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-800 pt-8">
            <p className="text-gray-500 font-light text-sm tracking-widest uppercase">© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
            <div className="flex gap-8">
              <a href={socials.github} className="text-gray-500 hover:text-white transition-colors"><Github /></a>
              <a href={socials.linkedin} className="text-gray-500 hover:text-white transition-colors"><Linkedin /></a>
              <a href={socials.twitter} className="text-gray-500 hover:text-white transition-colors"><Twitter /></a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
