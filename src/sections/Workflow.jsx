import React from "react";
import { FaQuoteLeft, FaUserGraduate, FaLightbulb } from "react-icons/fa";

const Workflow = () => {
  const steps = [
    { step: "01", title: "Browse", desc: "Filter by floor or hourly rate." },
    { step: "02", title: "Time Slot", desc: "Choose an open slot easily." },
    { step: "03", title: "Study", desc: "Show up and focus on your work." },
  ];

  return (
    <div className="bg-background py-24 transition-colors duration-500">
      <section className="container mx-auto px-6 relative">
        {/* Floating background blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-[100px] animate-bounce duration-[10s]" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20 relative z-10">
          <div className="max-w-md">
            <h2 className="text-5xl font-black mb-6 text-foreground italic tracking-tight">
              How It Works
            </h2>
            <p className="text-muted leading-relaxed">
              From browsing to booked in under a minute.
            </p>
          </div>
          <a
            href="/rooms"
            className="group relative px-10 py-5 bg-accent text-accent-foreground font-bold rounded-2xl overflow-hidden shadow-lg hover:shadow-accent/40 transition-all active:scale-95"
          >
            <span className="relative z-10">Start Browsing</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-surface/50 backdrop-blur-sm p-12 rounded-[3rem] border border-border relative group hover:bg-surface transition-all duration-500"
            >
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent/5 rounded-full flex items-center justify-center font-black text-accent/20 text-4xl  group-hover:text-accent/40 transition-all duration-500 dark:text-foreground dark:border-foreground">
                {s.step}
              </div>
              <p className="text-accent font-black text-sm mb-6 tracking-widest">
                STEP {s.step}
              </p>
              <h4 className="text-2xl font-bold mb-4 text-foreground">
                {s.title}
              </h4>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials with Hover Motion */}
      <section className="container mx-auto px-6 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote:
                "StudyNook changed how I prep for finals. I book it, show up, and get straight to work.",
              author: "Tanvir Ahmed",
              role: "CSE Student",
              icon: <FaUserGraduate />,
            },
            {
              quote:
                "I list my private office space when I'm not using it. It's so easy to manage.",
              author: "Saima Kabir",
              role: "Room Owner",
              icon: <FaLightbulb />,
            },
          ].map((t, i) => (
            <div
              key={i}
              className="p-10 bg-surface rounded-[2.5rem] border border-border group hover:border-accent transition-all duration-500 flex flex-col justify-between"
            >
              <FaQuoteLeft className="text-accent/10 text-6xl mb-6 group-hover:translate-x-2 transition-transform duration-500 dark:text-foreground" />
              <p className="text-xl font-medium text-foreground mb-10 leading-snug">
                &apos;&apos;{t.quote}&apos;&apos;
              </p>
              <div className="flex items-center gap-4 border-t border-border pt-6">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                    {t.icon}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t.author}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Workflow;
