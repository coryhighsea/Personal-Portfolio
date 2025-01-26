import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-4">Cory Hisey</h1>
          <p className="text-xl text-gray-400">Embedded Software Developer | Open Source Enthusiast</p>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <br></br>
          <p className=" mt-4 text-gray-300 leading-relaxed">
          Hi, I'm Cory Hisey, an embedded software developer with a strong passion for building innovative hardware and software solutions. 
          I specialize in developing firmware and applications for embedded systems, with hands-on experience working with ESP32 boards, 
          NVIDIA Jetson Nano, and other microcontrollers. My expertise includes programming in C++ for low-level system development, 
          as well as creating user-friendly interfaces using QT/QML and JavaScript.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          I thrive on solving complex problems and bringing ideas to life through code. Whether it's optimizing performance for 
          resource-constrained devices or designing intuitive UIs, I enjoy every step of the development process. My work often 
          bridges the gap between hardware and software, enabling seamless interactions between devices and users.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          Outside of my professional work, I'm an active member of the Maker community and a passionate 3D printing enthusiast. 
          I love experimenting with new technologies, building DIY projects, and sharing my knowledge with others. From designing 
          custom 3D-printed parts to integrating them into functional prototypes, I find joy in the creative and technical challenges 
          that come with being a Maker.
        </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="ESP32 Smart Home System"
              description="A smart home automation system using ESP32 microcontrollers."
              githubLink="#"
              demoLink="#"
            />
            <ProjectCard
              title="3D Printer Controller"
              description="A custom 3D printer controller built with C++ and QT/QML."
              githubLink="#"
              demoLink="#"
            />
            <ProjectCard
              title="Jetson Nano AI Camera"
              description="An AI-powered security camera system built on the Nvidia Jetson Nano, featuring real-time object detection and motion tracking."
              githubLink="#"
              demoLink="#"
            />
            <ProjectCard
              title="Arduino Weather Station" 
              description="A DIY weather station using Arduino and various sensors to monitor temperature, humidity, pressure, and air quality with web dashboard."
              githubLink="#"
              demoLink="#"
            />
            <ProjectCard
              title="Raspberry Pi Robot"
              description="An autonomous robot built with Raspberry Pi, featuring computer vision, path planning, and remote control capabilities via web interface."
              githubLink="#"
              demoLink="#"
            />
            <ProjectCard
              title="IoT Plant Monitor"
              description="An automated plant care system using ESP8266, monitoring soil moisture, light levels, and automatically watering plants when needed."
              githubLink="#"
              demoLink="#"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="text-gray-400 mb-4">
            Let's connect! Feel free to reach out via email or social media.
          </p>
          <div className="flex space-x-4">
            <a
              href="mailto:cjhisey@gmail.com"
              className="text-blue-400 hover:text-blue-600"
            >
              Email
            </a>
            <a
              href="https://www.youtube.com/@coryhisey8431"
              className="text-blue-400 hover:text-blue-600"
            >
              YouTube
            </a>
            <a
              href="https://www.linkedin.com/in/cory-hisey-730a8a59/"
              className="text-blue-400 hover:text-blue-600"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}