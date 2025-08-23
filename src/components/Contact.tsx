import AnimatedSection from './AnimatedSection';

export default function Contact() {
  return (
    <section className="space-y-6 px-6">
      <AnimatedSection>
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h2 className="text-zinc-900 text-xl md:text-xl font-semibold leading-relaxed">
            Get in touch
          </h2>
          <p className="text-zinc-600 text-sm md:text-base font-normal leading-relaxed">
            Building something that needs to convert? Need a design engineer who actually ships products that make money? I&apos;m down to work on projects that solve real problems. Hit me up if you&apos;re serious about results.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="flex md:flex-row flex-col justify-center md:justify-start items-center gap-3">
          <a target="_blank" className="w-full md:w-auto" href="mailto:hsnshafique090@gmail.com">
            <button
              className="inline-flex justify-center items-center gap-2.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-500 px-5 py-3 text-sm rounded-xl w-full md:w-auto"
              type="button"
            >
              Send Message
            </button>
          </a>
          <span className="text-zinc-600 text-sm flex items-center gap-3 max-md:w-full">
            <div className="h-px flex-1 bg-zinc-200 md:hidden"></div>
            or
            <div className="h-px flex-1 bg-zinc-200 md:hidden"></div>
          </span>
          <button
            className="inline-flex justify-center items-center gap-2.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-zinc-100 text-zinc-900 border border-zinc-200 shadow-sm hover:bg-zinc-200 focus:ring-zinc-300 px-5 py-3 text-sm rounded-xl w-full md:w-auto"
            type="button"
            onClick={() => window.open('https://instagram.com/hassantech', '_blank')}
          >
            Reach Me
          </button>
        </div>
      </AnimatedSection>
    </section>
  );
}
