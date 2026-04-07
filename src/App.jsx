import { motion } from "framer-motion";
import "./app.css";
export default function App() {

  const projects = [
    {
      title: "Product Gallery",
      desc: "This application was built using React and Vite. It was created purely for learning purposes and experimentation.",
      git: "https://github.com/chethan-27/product-gallery?tab=readme-ov-file",
      link: "https://product-gallery-lovat.vercel.app/"
    },
    {
      title: "Amadagur Youth Association",
      desc: (
        <>
          <p>Developed this Web application single handedly using MERN, where the Amadagur Youth Association is a non-profit organization for the youth of Amadagur. It was created to help the youth of Amadagur to publish their stories and share their experiences with the world.</p>
          <br />
          <p>Note: The product is still in development.</p>
        </>
      ),
      git: "https://github.com/chethan-27/aya-ui",
      link: "https://aya-ui.vercel.app/"
    }
  ]
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

        <p className="mt-4 text-gray-400 max-w-xl">
          Full Stack Developer with 2+ years experience building scalable web apps using React, Node.js, and MongoDB.
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

      <section className="py-20">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-400 max-w-2xl">
          I'm a full stack developer experienced in building APIs, handling MQs, working with SOAP services, and creating scalable frontend architectures.
        </p>
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {["React", "Node.js", "MongoDB", "JavaScript", "Express", "Redux"].map(skill => (
            <span key={skill} className="border px-4 py-2 rounded-xl text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="py-20">
        <h2 className="text-3xl font-semibold">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {projects.map(p => (
            <div key={p} className="border p-6 rounded-2xl hover:scale-105 transition">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-gray-400 mt-2">
                {p.desc}
              </p>
              <div className="mt-4 flex gap-4">
                <a
                  onClick={() => {
                    window.open(p.link, "_blank");
                  }}
                  className="underline"
                >
                  Live
                </a>
                <a
                  onClick={() => window.open(p.git, "_blank")}
                  className="underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-semibold">Experience</h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold">Software Developer</h3>
            <p className="text-gray-400">May 2025 - Present</p>
            <p className="mt-2 text-gray-400">
              Worked on APIs, MQs, SOAP integrations, and reporting systems.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Jr Software Developer</h3>
            <p className="text-gray-400">Aug 2023 - Apr 2025</p>
            <p className="mt-2 text-gray-400">
              Built UI components, filters, and ag-grid tables.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-4 text-gray-400">
          Email: <a href="mailto:kvchethan2@gmail.com">kvchethan2@gmail.com</a>
        </p>
      </section>

    </div>
  );
}