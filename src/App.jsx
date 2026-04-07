import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  const projects = [
    {
      title: "Product Gallery",
      desc: "Built using React + Vite for learning and experimentation. Focused on UI rendering, performance, and component structure.",
      git: "https://github.com/chethan-27/product-gallery?tab=readme-ov-file",
      link: "https://product-gallery-lovat.vercel.app/"
    },
    {
      title: "Amadagur Youth Association",
      desc: (
        <>
          <p>
            Full-stack MERN application built single-handedly for a non-profit youth organization.
            Enables users to publish stories and share experiences.
          </p>
          <br />
          <p className="text-yellow-400">🚧 Currently under development</p>
        </>
      ),
      git: "https://github.com/chethan-27/aya-ui",
      link: "https://aya-ui.vercel.app/"
    }
  ];

  return (
    <div className="px-6 md:px-20">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm Chethan KV 👋
        </motion.h1>
        <p className="text-gray-500">
          📍 Bengaluru, India
        </p>
        <p className="mt-4 text-gray-400 max-w-xl">
          Full Stack Developer with 2+ years experience building scalable systems using React, Node.js, MongoDB, Redis, and RabbitMQ.
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

      {/* ABOUT */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-400 max-w-2xl">
          I'm a Full Stack Developer experienced in designing scalable backend systems and performant frontends.
          I’ve worked on REST APIs, caching strategies using Redis, asynchronous systems with RabbitMQ,
          and production-grade SOAP services.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="mt-6 flex flex-wrap gap-3">
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
          ].map(skill => (
            <span key={skill} className="border px-4 py-2 rounded-xl text-sm hover:bg-white hover:text-black transition">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-semibold">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border p-6 rounded-2xl transition"
            >
              <h3 className="text-xl font-bold">{p.title}</h3>
              <div className="text-gray-400 mt-2">{p.desc}</div>

              <div className="mt-4 flex gap-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-500 transition"
                  href={p.link}
                >
                  Live
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-500 transition"
                  href={p.git}
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold">Experience</h2>

        <div className="mt-6 space-y-6">

          <div>
            <h3 className="text-xl font-bold">Software Developer</h3>
            <p className="text-gray-400">May 2025 - Present</p>
            <ul className="mt-2 text-gray-400 list-disc ml-5 space-y-1">
              <li>Designed scalable REST APIs using Node.js & Express</li>
              <li>Implemented async processing using RabbitMQ</li>
              <li>Used Redis caching to improve API performance</li>
              <li>Worked on report generation systems</li>
              <li>Maintained SOAP-based production services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold">Jr Software Developer</h3>
            <p className="text-gray-400">Aug 2023 - Apr 2025</p>
            <ul className="mt-2 text-gray-400 list-disc ml-5 space-y-1">
              <li>Built reusable React components</li>
              <li>Worked on AG Grid tables and dashboards</li>
              <li>Implemented Redux for state management</li>
              <li>Optimized UI performance</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-4 text-gray-400">
          Email: <a href="mailto:kvchethan2@gmail.com">kvchethan2@gmail.com</a>
        </p>

        <div className="mt-4 flex gap-4 text-blue-400">
          <a href="https://github.com/chethan-27" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/chethan-kv-a829851a7/" target="_blank">LinkedIn</a>
          <a href="https://leetcode.com/u/_chethan_27/" target="_blank">LeetCode</a>
        </div>
      </section>

    </div>
  );
}