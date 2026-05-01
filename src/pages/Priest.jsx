import { motion } from "framer-motion";
import {
  Sparkles,
  HeartHandshake,
  Home,
  Baby,
  Flower2,
  Calendar,
  BookOpen,
  Star,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const services = [
  {
    icon: <HeartHandshake size={32} className="text-yellow-500" />,
    title: "Wedding Ceremonies",
    description:
      "Complete Hindu wedding ceremonies following traditional Vedic rituals, ensuring your sacred union is blessed according to ancient traditions.",
  },
  {
    icon: <Home size={32} className="text-yellow-500" />,
    title: "Griha Pravesh",
    description:
      "House warming ceremonies to bless your new home with positive energy and remove any negative influences.",
  },
  {
    icon: <Baby size={32} className="text-yellow-500" />,
    title: "Naming Ceremonies",
    description:
      "Namkaran ceremonies to officially name your child with proper Vedic rituals and blessings for a prosperous life.",
  },
  {
    icon: <Flower2 size={32} className="text-yellow-500" />,
    title: "Special Pujas",
    description:
      "Various pujas including Ganesh Puja, Lakshmi Puja, Saraswati Puja, and other deity-specific ceremonies.",
  },
  {
    icon: <Calendar size={32} className="text-yellow-500" />,
    title: "Festival Celebrations",
    description:
      "Guidance and conduct of major Hindu festivals like Diwali, Navratri, Holi, and other auspicious occasions.",
  },
  {
    icon: <BookOpen size={32} className="text-yellow-500" />,
    title: "Spiritual Counseling",
    description:
      "Personal guidance on spiritual matters, meditation techniques, and living according to dharmic principles.",
  },
];

const testimonials = [
  {
    name: "Rajesh & Priya",
    text: "Sharma ji conducted our wedding ceremony beautifully. His knowledge of traditions and warm personality made our special day even more meaningful.",
  },
  {
    name: "Sunita Devi",
    text: "The Griha Pravesh ceremony was conducted with such devotion and authenticity. We felt the positive energy immediately in our new home.",
  },
  {
    name: "Vikram Family",
    text: "Highly knowledgeable and spiritual person. His guidance has been invaluable in our family's spiritual journey.",
  },
];

export default function Priest() {
  const { isDark } = useTheme();
  return (
    <div className={`pt-20 transition-colors duration-300 bg-transparent`}>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Sacred Geometry Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="w-[800px] h-[800px] border border-yellow-500/30 rounded-full flex items-center justify-center"
          >
            <div className="w-[600px] h-[600px] border border-yellow-500/30 rounded-full flex items-center justify-center rotate-45">
              <div className="w-[400px] h-[400px] border border-yellow-500/30 rounded-full flex items-center justify-center rotate-45"></div>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="flex justify-center gap-8 text-yellow-500 text-4xl sm:text-5xl"
          >
            <span>ॐ</span>
            <span>🕉️</span>
            <span>श्री</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-display"
          >
            K.Phani Kumar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Sharma
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-300 font-light"
          >
            Experienced Hindu Priest & Spiritual Guide
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-20 px-4 transition-colors duration-300 ${isDark ? 'bg-black/30' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 space-y-6"
          >
            <h2
              className={`text-3xl md:text-4xl font-bold font-display flex items-center gap-3 transition-colors duration-300 text-yellow-500`}
            >
              <Sparkles /> Serving the Divine Path
            </h2>
            <p
              className={`text-lg leading-relaxed transition-colors duration-300 text-gray-300`}
            >
              Namaste! I am K.Phani Kumar Sharma, a dedicated Hindu priest with
              over 15 years of experience in conducting sacred rituals and
              ceremonies. My journey in spirituality began at a young age, and I
              have been blessed to serve countless families in their spiritual
              endeavors.
            </p>
            <p
              className={`text-lg leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              I specialize in traditional Hindu ceremonies, including weddings,
              house warmings, naming ceremonies, and various pujas. My approach
              combines ancient Vedic traditions with a deep understanding of
              modern family needs.
            </p>
            <div
              className={`flex gap-4 text-3xl pt-4 transition-colors duration-300 text-yellow-500/50`}
            >
              <span>ॐ</span>
              <span>श्री</span>
              <span>गं</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <div
              className={`w-72 h-72 rounded-full border-2 flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.2)] relative overflow-hidden group transition-colors duration-300 bg-gradient-to-br from-yellow-500/20 to-blue-500/20 border-yellow-500/50`}
            >
              <div className="absolute inset-0 bg-yellow-500/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
              <span className="text-8xl relative z-10 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                🕉️
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold font-display text-yellow-500 inline-block relative"
            >
              Sacred Services
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-8 rounded-2xl border transition-all duration-300 group hover:-translate-y-2 ${isDark ? 'border-yellow-500/20 hover:border-yellow-500/50' : 'border-yellow-500/30 hover:border-yellow-500 bg-white shadow-sm'}`}
              >
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-yellow-500/20 transition-all duration-300 border border-yellow-500/20">
                  {service.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className={`py-24 px-4 transition-colors duration-300 ${isDark ? 'bg-black/30' : 'bg-gray-50'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold font-display transition-colors duration-300 text-yellow-500`}
            >
              Devotee Testimonials
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card p-8 rounded-2xl relative transition-colors duration-300 border ${isDark ? 'border-white/10' : 'border-black/10 bg-white shadow-sm'}`}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      className={
                        isDark
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-yellow-600 fill-yellow-600"
                      }
                    />
                  ))}
                </div>
                <p
                  className={`italic mb-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  "{t.text}"
                </p>
                <h6
                  className={`font-bold transition-colors duration-300 text-yellow-500`}
                >
                  - {t.name}
                </h6>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4">
        <div
          className={`max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 transition-all duration-300 border shadow-[0_0_50px_rgba(234,179,8,0.1)] ${isDark ? 'border-yellow-500/30 bg-white/[0.03]' : 'border-yellow-500/50 bg-white'}`}
        >
          <div className="text-center mb-12">
            <div
              className={`flex justify-center gap-4 text-3xl mb-6 transition-colors duration-300 text-yellow-500`}
            >
              <span>ॐ</span>
              <span>श्री</span>
              <span>ॐ</span>
            </div>
            <h2
              className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              Contact Me
            </h2>
            <p className={`transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Reach out for any spiritual ceremonies and guidance.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 transition-colors duration-300 border-b ${isDark ? 'border-white/10' : 'border-black/10'}`}
          >
            <div className="text-center">
              <div
                className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 transition-colors duration-300 bg-yellow-500/10 text-yellow-500`}
              >
                <Phone size={24} />
              </div>
              <p className={`transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                +91 98765 43210
              </p>
            </div>
            <div className="text-center">
              <div
                className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 transition-colors duration-300 bg-yellow-500/10 text-yellow-500`}
              >
                <Mail size={24} />
              </div>
              <p className={`transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                phanikumar.priest@gmail.com
              </p>
            </div>
            <div className="text-center">
              <div
                className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 transition-colors duration-300 bg-yellow-500/10 text-yellow-500`}
              >
                <MapPin size={24} />
              </div>
              <p className={`transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Hyderabad, Telangana
              </p>
            </div>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for your message! I will contact you soon. 🙏");
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className={`w-full rounded-xl px-4 py-3 focus:outline-none transition-colors duration-300 border focus:border-yellow-500 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-50 border-black/10 text-gray-900'}`}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className={`w-full rounded-xl px-4 py-3 focus:outline-none transition-colors duration-300 border focus:border-yellow-500 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-50 border-black/10 text-gray-900'}`}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className={`w-full rounded-xl px-4 py-3 focus:outline-none transition-colors duration-300 border focus:border-yellow-500 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-50 border-black/10 text-gray-900'}`}
              />
              <select
                required
                className={`w-full rounded-xl px-4 py-3 focus:outline-none appearance-none transition-colors duration-300 border focus:border-yellow-500 ${isDark ? 'bg-[#0A1929] border-white/10 text-white' : 'bg-gray-50 border-black/10 text-gray-900'}`}
              >
                <option
                  value=""
                  className={isDark ? "text-gray-400" : "text-gray-600"}
                >
                  Select Service
                </option>
                <option value="wedding">Wedding Ceremony</option>
                <option value="griha">Griha Pravesh</option>
                <option value="naming">Naming Ceremony</option>
                <option value="puja">Special Puja</option>
                <option value="festival">Festival Celebration</option>
                <option value="counseling">Spiritual Counseling</option>
              </select>
            </div>
            <textarea
              placeholder="Your Message / Requirements"
              rows={4}
              required
              className={`w-full rounded-xl px-4 py-3 focus:outline-none resize-none transition-colors duration-300 border focus:border-yellow-500 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-50 border-black/10 text-gray-900'}`}
            ></textarea>

            <button
              type="submit"
              className={`w-full py-4 rounded-xl font-bold transition-all duration-300 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]`}
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center mt-12">
          <p
            className={`font-medium tracking-wider transition-colors duration-300 text-yellow-500/80`}
          >
            ॥ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ॥
          </p>
        </div>
      </section>
    </div>
  );
}
