import AnimatedSection from './AnimatedSection';

export default function WorkExperience() {
  const experiences = [
    {
      period: "Jul 2024 - Jun 2025",
      role: "Founder",
      company: "axilon.dev",
      link: "http://discord.gg/coders",
      bgColor: "bg-amber-100",
      borderColor: "border-amber-200",
      iconColor: "text-amber-700",
      textColor: "text-amber-800"
    },
    {
      period: "Dec 2022 - Present",
      role: "Educator",
      company: "Hassan Tech",
      link: "https://www.instagram.com/hassantech/",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-100",
      iconColor: "text-pink-500",
      textColor: "text-pink-700",
      isInstagram: true
    },
    {
      period: "Apr 2024 - Present",
      role: "Frontend Dev",
      company: "Luxus",
      link: "https://luxuslove-jewellery.com/",
      bgColor: "bg-sky-100",
      borderColor: "border-sky-100",
      iconColor: "text-sky-600",
      textColor: "text-sky-700"
    },
        {
      period: "Mar 2024 - Present",
      role: "Freelancer",
      company: "Fiverr",
      link: "https://fiverr.com/hasan0x",
      bgColor: "bg-sky-100",
      borderColor: "border-sky-100",
      iconColor: "text-sky-600",
      textColor: "text-sky-700"
    },
    {
      period: "Jan 2021 - Dec 2023",
      role: "Game Developer",
      company: null,
      link: null,
      bgColor: null,
      borderColor: null,
      iconColor: null,
      textColor: null
    }
  ];

  return (
    <AnimatedSection className="w-full">
      <section className="px-4 w-full mx-auto">
        <h2 className="text-zinc-900 text-xl md:text-2xl font-semibold leading-relaxed mb-8">
          Work Experience
        </h2>
        <div className="space-y-8 sm:space-y-6 w-full mx-auto">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index}>
              <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row items-start sm:items-center justify-between w-full">
                <div className="text-zinc-400 text-sm sm:text-base font-medium leading-relaxed">
                  {exp.period}
                </div>
                <div className="flex justify-start gap-2.5 w-full sm:max-w-[245px] items-center">
                  <div className="text-zinc-600 text-base font-medium leading-relaxed">
                    {exp.role}{exp.company && " at"}
                  </div>
                  {exp.company && exp.link && (
                    <a target="_blank" rel="noopener noreferrer" href={exp.link}>
                      <div className={`p-1.5 ${exp.bgColor} ${exp.borderColor} border rounded-md outline outline-1 outline-offset-[-1px] outline-black/10 flex items-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer relative group`}>
                        {exp.isInstagram ? (
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className={`lucide lucide-instagram size-[18px] ${exp.iconColor}`} 
                            aria-hidden="true"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                          </svg>
                        ) : (
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className={`lucide lucide-link2 lucide-link-2 size-5 ${exp.iconColor} rotate-[-30deg]`} 
                            aria-hidden="true"
                          >
                            <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
                            <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
                            <line x1="8" x2="16" y1="12" y2="12"></line>
                          </svg>
                        )}
                        <div className={`${exp.textColor} text-[15px] font-medium leading-relaxed`}>
                          {exp.company}
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
