import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const journeyData = [
  {
    year: "2018 - 2020",
    title: "Financial Markets Trader",
    description: "Explored the complexities of financial markets, developing analytical skills and a deep understanding of economic trends.",
    icon: (
      <svg fill="dark" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path>
      </svg>
    ),
  },
  {
    year: "2020 - 2021",
    title: "Project Leadership",
    description: "Managed teams and projects, honing skills in communication, planning, and execution to deliver successful outcomes.",
    icon: (
      <svg fill="dark" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
      </svg>
    ),
  },
  {
    year: "2021 - 2022",
    title: "Sustainable Agriculture",
    description: "Pivoted to a field focused on environmental impact, gaining hands-on experience in sustainable practices and ecological systems.",
    icon: (
      <svg fill="dark" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M247.63,39.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.49-11.78,43.16-.16,65.74a71.34,71.34,0,0,0-14.17,27L98.33,151c7.82-16.33,7.52-33.35-1-47.49-13.2-21.79-43.67-33.47-81.5-31.25a8,8,0,0,0-7.52,7.52c-2.23,37.83,9.46,68.3,31.25,81.5A45.82,45.82,0,0,0,63.44,168,54.58,54.58,0,0,0,87,162.33l25,25V216a8,8,0,0,0,16,0V186.51a55.61,55.61,0,0,1,12.27-35,73.91,73.91,0,0,0,33.31,8.4,60.9,60.9,0,0,0,31.83-8.86C234.89,133.21,250.67,91.65,247.63,39.89ZM47.81,147.6C32.47,138.31,23.79,116.32,24,88c28.32-.24,50.31,8.47,59.6,23.81,4.85,8,5.64,17.33,2.46,26.94L61.65,114.34a8,8,0,0,0-11.31,11.31l24.41,24.41C65.14,153.24,55.82,152.45,47.81,147.6Zm149.31-10.22c-13.4,8.11-29.15,8.73-45.15,2l53.69-53.7a8,8,0,0,0-11.31-11.31L140.65,128c-6.76-16-6.15-31.76,2-45.15,13.94-23,47-35.82,89.33-34.83C232.94,90.34,220.14,123.44,197.12,137.38Z"></path>
      </svg>
    ),
  },
  {
    year: "2022 - 2023",
    title: "Moringa School",
    description: "Undertook an intensive software development program, building a strong foundation in coding, algorithms, and web technologies.",
    icon: (
      <svg fill="dark" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
      </svg>
    ),
  },
  {
    year: "2023 - Present",
    title: "Front-End Engineer",
    description: "Applying my diverse background and new technical skills to build intuitive, user-centric web experiences.",
    icon: (
      <svg fill="dark" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
      </svg>
    ),
  },
];

const Journey = () => {
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { rootMargin: "0px", threshold: 0.1 }
    );

    timelineItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      id="journey"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex min-h-screen w-full flex-col justify-between bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display"
    >
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 bg-background-light/80 dark:bg-background-dark/80 p-4 backdrop-blur-sm">
        
        <h1 className="text-lg font-bold text-white">Journey</h1>
        <div className="w-10"></div>
      </header>
      <main className="flex-grow p-6">
        <div className="relative">
          <div className="absolute left-7 top-0 h-full w-0.5 bg-primary/20"></div>
          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (timelineItemsRef.current[index] = el)}
                className="timeline-item relative grid grid-cols-[56px_1fr] items-start gap-x-4"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background-dark">
                    {item.icon}
                  </div>
                </div>
                <div className="pt-2">
                  <p className="text-sm font-medium text-white">{item.year}</p>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
            {/* View Full Resume Button */}
      <footer className="sticky bottom-0 z-10 flex justify-center p-6 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-t border-slate-200/50 dark:border-slate-800/50">
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          <svg fill="" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-62.34L144,172.69V136a8,8,0,0,0-16,0v36.69l-13.66-13.65a8,8,0,0,0-11.32,11.32l24,24a8,8,0,0,0,11.32,0l24-24a8,8,0,0,0-11.32-11.32Z"></path>
          </svg>
          View Full Resume
        </a>
      </footer>
      
    </motion.section>
  );
};

export default Journey;