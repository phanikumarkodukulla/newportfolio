import { motion } from "framer-motion";
import { Calendar, MapPin, Award, CheckCircle, Clock } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const educationData = [
  {
    degree: "Bachelor of Technology",
    institution: "Anil Neerukonda Institute of Technology and Sciences",
    status: "Currently Pursuing",
    icon: <Clock size={16} />,
    statusColor: "text-blue-500",
    statusBg: "bg-blue-500/10 border-blue-500/20",
    period: "2025 - Present",
    location: "Visakhapatnam, AP",
    details: [
      { label: "Specialization", value: "Computer Science" },
      { label: "CGPA", value: "9.2 / 10" },
    ],
    description:
      "Focusing on advanced computer science concepts, software engineering, and modern development practices.",
    achievements: ["Web Development", "Data Science", "Cloud Computing"],
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Sai Ganapathi Shift Polytechnic",
    status: "Completed",
    icon: <CheckCircle size={16} />,
    statusColor: "text-emerald-500",
    statusBg: "bg-emerald-500/10 border-emerald-500/20",
    period: "2022 - 2025",
    location: "Visakhapatnam, AP",
    details: [
      { label: "Overall", value: "96.5%" },
      { label: "CGPA", value: "9.6 / 10" },
    ],
    description:
      "Gained a strong foundation in programming, database management, and web technologies.",
    achievements: ["Top 5% in Batch", "Technical Skills Award"],
  },
  {
    degree: "Secondary Education (SSC)",
    institution: "Sri Kanchi Kamakoti Integrated Veda Paatashaala",
    status: "Completed",
    icon: <CheckCircle size={16} />,
    statusColor: "text-emerald-500",
    statusBg: "bg-emerald-500/10 border-emerald-500/20",
    period: "2019 - 2022",
    location: "Samalakot, AP",
    details: [
      { label: "Percentage", value: "88.5%" },
      { label: "GPA", value: "8.85 / 10" },
    ],
    description: "Combined traditional Vedic education with modern academics.",
    achievements: ["First Class Distinction", "Academic Awards"],
  },
];

export default function Education() {
  const { isDark } = useTheme();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 relative bg-transparent">
      {/* Header */}
      <div className="text-center mb-12 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-3xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          Education <span className="text-blue-500">Journey</span>
        </motion.h2>
      </div>

      <div className="relative">
        {/* Responsive Timeline Line */}
        <div className="absolute left-4 md:left-[39px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-transparent" />

        <div className="space-y-10 md:space-y-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12 md:pl-24"
            >
              {/* Responsive Timeline Dot */}
              <div className={`absolute left-[11px] md:left-[31px] top-6 md:top-8 w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-500 ring-4 shadow-[0_0_10px_rgba(37,99,235,0.6)] ${isDark ? 'ring-[#020817]' : 'ring-[#F9FAFB]'}`} />

              {/* Card Container */}
              <div className={`p-5 md:p-8 rounded-2xl md:rounded-3xl border hover:-translate-y-1 transition-transform duration-300 ${isDark ? 'bg-[#ffffff08] border-white/10' : 'bg-white border-black/10 shadow-sm'}`}>
                {/* Title & Institution */}
                <h3 className={`text-xl md:text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {edu.degree}
                </h3>
                <h4 className="text-base md:text-lg mb-3 text-blue-400">
                  {edu.institution}
                </h4>

                {/* Date & Location Grid for Mobile */}
                <div className={`flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 text-xs md:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-blue-500" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-blue-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Status Badge */}
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border mb-5 ${edu.statusBg} ${edu.statusColor}`}
                >
                  {edu.icon}
                  <span className="text-xs md:text-sm font-semibold">
                    {edu.status}
                  </span>
                </div>

                {/* Details / Grades */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {edu.details.map((detail) => (
                    <div
                      key={detail.label}
                      className={`p-3 rounded-lg border ${isDark ? 'bg-[#020817]/50 border-white/5' : 'bg-gray-50 border-black/5'}`}
                    >
                      <div className="text-[10px] md:text-xs uppercase tracking-wider mb-1 text-gray-500">
                        {detail.label}
                      </div>
                      <div className={`text-sm md:text-lg font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                        {detail.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className={`mb-5 text-sm md:text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {edu.description}
                </p>

                {/* Achievements Pill Tags */}
                <div>
                  <div className={`flex items-center gap-1.5 text-xs md:text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Award size={14} className="text-amber-500" />
                    <span className="font-semibold uppercase tracking-wider">
                      Highlights
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((ach) => (
                      <span
                        key={ach}
                        className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-md text-[10px] md:text-xs border border-emerald-500/20"
                      >
                        {ach}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
