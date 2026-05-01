import { Code, Globe, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { isDark } = useTheme();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-colors duration-300 bg-transparent">
      <div className="text-center mb-16">
        <h2
          className={`text-4xl md:text-5xl font-bold font-display inline-block relative transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          About <span className="text-gradient">Me</span>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r rounded-full from-blue-600 to-indigo-600" />
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* 3D Flip Card Container */}
        <div className="perspective-1000 w-full max-w-sm mx-auto h-[400px] group">
          <div className="relative w-full h-full transition-transform duration-1000 transform-style-3d group-hover:rotate-y-180">
            {/* Front of card */}
            <div
              className={`absolute w-full h-full backface-hidden rounded-3xl overflow-hidden shadow-2xl ring-1 ${isDark ? "ring-white/10" : "ring-black/10"}`}
            >
              <img
                src="/assets/my-profile-image.png"
                alt="Phani Kumar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Back of card */}
            <div
              className={`absolute w-full h-full backface-hidden rotate-y-180 glass-card rounded-3xl p-8 flex flex-col justify-center items-center text-center transition-colors duration-300 ${isDark ? "bg-white/[0.03] ring-1 ring-white/10" : "bg-black/[0.03] ring-1 ring-black/10"}`}
            >
              <h3
                className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDark ? "text-blue-400" : "text-blue-600"}`}
              >
                Connect with me
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://www.instagram.com/k.phani_kumar_?igsh=N251MjM2bHR6aHdw"
                  target="_blank"
                  className={`p-3 rounded-full transition-colors duration-300 ${isDark ? "bg-white/5 hover:bg-blue-600 hover:text-white" : "bg-black/5 hover:bg-blue-600 hover:text-white"}`}
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/kodukulla-phani-kumar-sharma-63a268302"
                  target="_blank"
                  className={`p-3 rounded-full transition-colors duration-300 ${isDark ? "bg-white/5 hover:bg-blue-600 hover:text-white" : "bg-black/5 hover:bg-blue-600 hover:text-white"}`}
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61559791637578"
                  target="_blank"
                  className={`p-3 rounded-full transition-colors duration-300 ${isDark ? "bg-white/5 hover:bg-blue-600 hover:text-white" : "bg-black/5 hover:bg-blue-600 hover:text-white"}`}
                >
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
                <a
                  href="https://www.snapchat.com/add/phanikumar2122"
                  target="_blank"
                  className={`p-3 rounded-full transition-colors duration-300 ${isDark ? "bg-white/5 hover:bg-blue-600 hover:text-white" : "bg-black/5 hover:bg-blue-600 hover:text-white"}`}
                >
                  <i className="fab fa-snapchat text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Info Text */}
        <div className="glass-card p-8 rounded-3xl">
          <h3
            className={`text-3xl font-display font-semibold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Passionate Engineer
          </h3>
          <p
            className={`mb-6 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            I'm Kodukulla Phani Kumar Sharma, a dedicated software developer
            focusing on modern web technologies, AI integration, and scalable
            applications. I enjoy transforming complex problems into elegant,
            intuitive, and performant solutions.
          </p>
          <p
            className={`mb-8 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            With a strong foundation in Computer Science and hands-on experience
            in full-stack development, I continually push myself to learn new
            tools, embrace best practices, and deliver high-quality code.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="border-l-2 border-blue-500 pl-4">
              <h4
                className={`font-medium mb-1 ${isDark ? "text-blue-400" : "text-blue-600"}`}
              >
                Education
              </h4>
              <p
                className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                B.Tech in Computer Science
              </p>
            </div>
            <div className="border-l-2 border-indigo-500 pl-4">
              <h4
                className={`font-medium mb-1 ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
              >
                Location
              </h4>
              <p
                className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
