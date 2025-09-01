import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function Hero() {
  return (
    <AnimatedSection>
      <div className="sm:px-6 lg:px-8 relative max-w-2xl pt-[40px] sm:pt-[130px] md:pt-[150px] lg:pt-[188px] mx-auto flex flex-col justify-center px-4 gap-6">
        <AnimatedSection>
          <Image
            alt="Hassan Profile"
            width={96}
            height={96}
            className="w-24 h-24 rounded-full object-cover"
            src="/hassan.png"
            priority
          />
        </AnimatedSection>
        <AnimatedSection className="flex flex-col gap-4 text-left">
          <h1 className="text-zinc-900 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight lg:leading-[1.15]">
            Hey, I&apos;m Hassan. <br />Engineer & Designer.
          </h1>
          <p className="text-zinc-600 text-base md:text-lg font-normal leading-relaxed">
            Most designers can&apos;t code. Most developers can&apos;t design. I do both. 3 years turning ideas into profitable products.
          </p>
        </AnimatedSection>
        <AnimatedSection className="flex gap-3">
          <a target="_blank" className="w-full md:w-auto" href="mailto:hassantech.contact@gmail.com">
            <button className="inline-flex justify-center items-center gap-2.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-500 px-6 py-3.5 text-base rounded-2xl w-full md:w-auto">
              Hire me
            </button>
          </a>
          <div className="rounded-full bg-green-100 text-lime-700 flex items-center gap-2 px-6 py-3.5 text-sm">
            <div className="relative inline-flex">
              <div className="rounded-full bg-lime-700 h-[6px] w-[6px] inline-block"></div>
              <div className="absolute animate-ping rounded-full bg-lime-700 h-[6px] w-[6px] opacity-75"></div>
            </div>
            <span className="md:hidden">Available</span>
            <span className="hidden md:inline">Open to Opportunities</span>
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}
