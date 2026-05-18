"use client";
import { FaCalendarCheck, FaShieldAlt, FaChartLine } from "react-icons/fa";
import { motion } from "motion/react";

const Features = () => {
  const features = [
    {
      title: "Easy Booking",
      desc: "Pick a date, choose an hour, see the cost — done.",
      icon: <FaCalendarCheck />,
    },
    {
      title: "Conflict-Free Scheduling",
      desc: "Smart overlap detection prevents double-bookings.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Manage Your Listings",
      desc: "Own a room? List it and keep full control.",
      icon: <FaChartLine />,
    },
  ];

  return (
    <section className="py-24 bg-background transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-black mb-4 text-foreground tracking-tight">Why StudyNook?</h2>
          <p className="text-muted text-lg">Built around the way real students study.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              className="group p-8 rounded-[2.5rem] bg-surface border border-border hover:border-accent hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 ease-in-out cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent text-3xl mb-8 group-hover:rotate-[360deg] group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-700">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-accent rounded-[3.5rem] p-12 flex flex-wrap justify-around gap-10 text-accent-foreground shadow-2xl relative overflow-hidden group"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
          
          {[
            { label: "Daily Bookings", val: "250+" },
            { label: "Study Rooms", val: "85" },
            { label: "User Rating", val: "4.9/5" }
          ].map((stat, i) => (
            <div key={i} className="text-center group-hover:scale-110 transition-transform duration-500">
              <h3 className="text-5xl font-black mb-2 tracking-tighter">{stat.val}</h3>
              <p className="text-xs uppercase font-bold tracking-[0.2em] opacity-80">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;