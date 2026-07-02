import { motion as Motion } from "framer-motion";
import "./App.css";

export default function App() {
  const projects = [
    {
      title: "Product Gallery",
      desc: "React and Vite product gallery focused on fast UI rendering, reusable component structure, and responsive frontend performance.",
      git: "https://github.com/chethan-27/product-gallery?tab=readme-ov-file",
      link: "https://product-gallery-lovat.vercel.app/"
    },
    {
      title: "Amadagur Youth Association",
      desc: (
        <>
          <p>
            Full-stack MERN application built for a non-profit youth organization. Enables users to publish stories,
            share experiences, and manage community content.
          </p>
          <p className="mt-3 text-yellow-400">Currently under development</p>
        </>
      ),
      git: "https://github.com/chethan-27/aya-ui",
      link: "https://aya-ui.vercel.app/"
    }
  ];

  return (
    <main className="px-6 md:px-20">
      <section className="h-screen flex flex-col justify-center" aria-labelledby="home-heading">
        <Motion.h1
          id="home-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm Chethan KV 👋
        </Motion.h1>
        <p className="text-gray-500">📍 Bengaluru, India</p>
        <p className="mt-4 text-gray-400 max-w-xl">
          Full Stack Developer with 3+ years of experience building scalable web applications and backend systems
          using React, Node.js, MongoDB, Redis, RabbitMQ, REST APIs, and SOAP services.
        </p>

        <div className="mt-6 flex gap-4">
          <a href="#projects" className="bg-white text-black px-6 py-2 rounded-xl">
            View Work
          </a>
          <a href="#contact" className="border px-6 py-2 rounded-xl">
            Contact
          </a>
        </div>
      </section>

      <section id="about" className="py-20" aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-400 max-w-2xl">
          I am a Full Stack Developer experienced in designing scalable backend systems and performant frontends.
          I have worked on REST APIs, caching strategies using Redis, asynchronous systems with RabbitMQ,
          and production-grade SOAP services for business applications.
        </p>
      </section>

      <section id="skills" className="py-20" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-3xl font-semibold">Skills</h2>
        <ul className="mt-6 flex flex-wrap gap-3" aria-label="Technical skills">
          {[
            "React",
            "Node.js",
            "MongoDB",
            "JavaScript",
            "Express",
            "Redux",
            "Redis",
            "RabbitMQ",
            "MySQL",
            "TypeScript"
          ].map((skill) => (
            <li key={skill} className="border px-4 py-2 rounded-xl text-sm hover:bg-white hover:text-black transition">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" className="py-20" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="text-3xl font-semibold">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {projects.map((project) => (
            <Motion.article
              key={project.title}
              whileHover={{ scale: 1.05 }}
              className="border p-6 rounded-2xl transition"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <div className="text-gray-400 mt-2">{project.desc}</div>

              <div className="mt-4 flex gap-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-500 transition"
                  href={project.link}
                  aria-label={`View live ${project.title} project`}
                >
                  Live
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-500 transition"
                  href={project.git}
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  GitHub
                </a>
              </div>
            </Motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="py-20" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-3xl font-semibold">Experience</h2>

        <div className="mt-6 space-y-6">
          <article>
            <h3 className="text-xl font-bold">Software Developer</h3>
            <p className="text-gray-400">May 2025 - Present</p>
            <ul className="mt-2 text-gray-400 list-disc ml-5 space-y-1">
              <li>Designed scalable REST APIs using Node.js and Express</li>
              <li>Implemented asynchronous processing using RabbitMQ</li>
              <li>Used Redis caching to improve API performance and response times</li>
              <li>Worked on report generation systems</li>
              <li>Maintained SOAP-based production services</li>
            </ul>
          </article>

          <article>
            <h3 className="text-xl font-bold">Jr Software Developer</h3>
            <p className="text-gray-400">Aug 2023 - Apr 2025</p>
            <ul className="mt-2 text-gray-400 list-disc ml-5 space-y-1">
              <li>Built reusable React components</li>
              <li>Worked on AG Grid tables and dashboards</li>
              <li>Implemented Redux for state management</li>
              <li>Optimized UI performance</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="contact" className="py-20" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-3xl font-semibold">Contact</h2>
        <p className="mt-4 text-gray-400">
          Email: <a href="mailto:kvchethan2@gmail.com">kvchethan2@gmail.com</a>
        </p>

        <address className="mt-4 flex gap-4 text-blue-400 not-italic">
          <a href="https://github.com/chethan-27" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/chethan-kv-a829851a7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/_chethan_27/" target="_blank" rel="noopener noreferrer">LeetCode</a>
        </address>
      </section>
    </main>
  );
}
