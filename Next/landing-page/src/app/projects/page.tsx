import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="space-y-8">
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">ESP32 Smart Home System</h2>
            <p className="text-gray-400 mb-4">
              A smart home automation system using ESP32 microcontrollers, enabling remote control of lights, temperature, and security.
            </p>
            <Link
              href="#"
              className="text-blue-400 hover:text-blue-600"
            >
              View on GitHub →
            </Link>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">3D Printer Controller</h2>
            <p className="text-gray-400 mb-4">
              A custom 3D printer controller built with C++ and QT/QML, featuring an intuitive interface for managing print jobs.
            </p>
            <Link
              href="#"
              className="text-blue-400 hover:text-blue-600"
            >
              View on GitHub →
            </Link>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Jetson Nano AI Camera</h2>
            <p className="text-gray-400 mb-4">
              An AI-powered security camera system built on the Nvidia Jetson Nano, featuring real-time object detection and motion tracking.
            </p>
            <Link
              href="#"
              className="text-blue-400 hover:text-blue-600"
            >
              View on GitHub →
            </Link>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Arduino Weather Station</h2>
            <p className="text-gray-400 mb-4">
              A DIY weather station using Arduino and various sensors to monitor temperature, humidity, pressure, and air quality with web dashboard.
            </p>
            <Link
              href="#"
              className="text-blue-400 hover:text-blue-600"
            >
              View on GitHub →
            </Link>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Raspberry Pi Robot</h2>
            <p className="text-gray-400 mb-4">
              An autonomous robot built with Raspberry Pi, featuring computer vision, path planning, and remote control capabilities via web interface.
            </p>
            <Link
              href="#"
              className="text-blue-400 hover:text-blue-600"
            >
              View on GitHub →
            </Link>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">IoT Plant Monitor</h2>
            <p className="text-gray-400 mb-4">
              An automated plant care system using ESP8266, monitoring soil moisture, light levels, and automatically watering plants when needed.
            </p>
            <Link
              href="#"
              className="text-blue-400 hover:text-blue-600"
            >
              View on GitHub →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}