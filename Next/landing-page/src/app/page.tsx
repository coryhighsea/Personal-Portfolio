import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-white">Cory Hisey</h1>
          <p className="mt-2 text-lg text-gray-300">Embedded Software Developer | Open Source Enthusiast</p>
          <nav className="mt-4">
            <Link href="#projects" className="text-blue-400 hover:text-blue-300 mr-4">
              Projects
            </Link>
            <Link href="#about" className="text-blue-400 hover:text-blue-300">
              About Me
            </Link>
          </nav>
        </header>

        {/* About Me Section */}
        <section id="about" className="mt-12">
          <h2 className="text-2xl font-bold text-white">About Me</h2>
          <p className="mt-4 text-gray-300">
          Hi, I'm Cory Hisey, an embedded software developer with a strong passion for building innovative hardware and software solutions. 
          I specialize in developing firmware and applications for embedded systems, with hands-on experience working with ESP32 boards, 
          NVIDIA Jetson Nano, and other microcontrollers. My expertise includes programming in C++ for low-level system development, 
          as well as creating user-friendly interfaces using QT/QML and JavaScript.
        </p>
        <p className="mt-4 text-gray-300">
          I thrive on solving complex problems and bringing ideas to life through code. Whether it's optimizing performance for 
          resource-constrained devices or designing intuitive UIs, I enjoy every step of the development process. My work often 
          bridges the gap between hardware and software, enabling seamless interactions between devices and users.
        </p>
        <p className="mt-4 text-gray-300">
          Outside of my professional work, I'm an active member of the Maker community and a passionate 3D printing enthusiast. 
          I love experimenting with new technologies, building DIY projects, and sharing my knowledge with others. From designing 
          custom 3D-printed parts to integrating them into functional prototypes, I find joy in the creative and technical challenges 
          that come with being a Maker.
        </p>
        <p className="mt-4 text-gray-300">
          I'm always excited to collaborate on new projects, explore emerging technologies, and contribute to the ever-evolving 
          world of embedded systems and IoT. Let's connect and build something amazing together!
        </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-12">
          <h2 className="text-2xl font-bold text-white">Projects</h2>
          <div className="mt-6 space-y-6">
            {/* Project 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">Project One</h3>
              <p className="mt-2 text-gray-300">
                A web application built with Next.js and Tailwind CSS for managing tasks and projects efficiently.
              </p>
              <Link
                href="https://github.com/yourusername/project-one"
                className="mt-4 inline-block text-blue-400 hover:text-blue-300"
              >
                View on GitHub
              </Link>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">Project Two</h3>
              <p className="mt-2 text-gray-300">
                An open-source API built with Node.js and Express for managing user authentication and authorization.
              </p>
              <Link
                href="https://github.com/yourusername/project-two"
                className="mt-4 inline-block text-blue-400 hover:text-blue-300"
              >
                View on GitHub
              </Link>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">Project Three</h3>
              <p className="mt-2 text-gray-300">
                A React-based portfolio template for developers to showcase their skills and projects.
              </p>
              <Link
                href="https://github.com/yourusername/project-three"
                className="mt-4 inline-block text-blue-400 hover:text-blue-300"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="mt-12 text-center text-gray-300">
          <p>© 2023 Cory Hisey. All rights reserved.</p>
          <p className="mt-2">
            Connect with me on{' '}
            <Link href="https://twitter.com/yourusername" className="text-blue-400 hover:text-blue-300">
              Twitter
            </Link>{' '}
            or{' '}
            <Link href="https://linkedin.com/in/yourusername" className="text-blue-400 hover:text-blue-300">
              LinkedIn
            </Link>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}