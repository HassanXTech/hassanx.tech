import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <section className="px-6">
      <AnimatedSection>
        <h2 className="text-zinc-900 text-xl md:text-2xl font-semibold leading-relaxed mb-4">About</h2>
        <div className="text-zinc-500 text-base font-normal leading-relaxed space-y-4">
          <p>I&apos;m Hassan. Design engineer in Punjab, born in Pakistan.</p>
          <p>
            <b className="text-zinc-600 font-semibold">Here&apos;s what I actually do:</b> I take your broken interfaces and make them work. Not just &ldquo;look pretty&rdquo; - actually function at 60fps while being accessible to everyone.
          </p>
          <p>Most designers can&apos;t code. Most developers can&apos;t design. I do both. While others debate aesthetics, I&apos;m shipping pixel-perfect interfaces that perform. ARIA compliance isn&apos;t optional, it&apos;s standard.</p>
          <p>I&apos;ve built a large developer community on social media because I actually know what I&apos;m talking about. My open-source projects prove it.</p>
          <p>The result? Interfaces that don&apos;t just impress your users - they convert them.</p>
          <br />
          <p>When I&apos;m not coding, I&apos;m at the gym or watching anime. Hot chocolate over coffee, always.</p>
          <p className="font-medium">I don&apos;t just build interfaces. I build interfaces that work.</p>
        </div>
      </AnimatedSection>
      <div className="relative mt-20 min-h-[400px]">
        <AnimatedSection>
            <div className="w-48 h-56 absolute bg-white border border-zinc-200/80 overflow-hidden left-[2%] top-[150px] md:left-[14%] md:top-[130px] lg:left-[10%] lg:top-[90px] origin-top-left rotate-[-8deg] shadow-xl">
            <Image
              alt="Photography"
              width={183}
              height={182}
              className="w-44 h-44 left-[6.78px] top-[6.78px] absolute"
              src="/5.png"
            />
            <div className="left-4 top-[170px] md:left-[55px] md:top-[192px] italic tracking-wide text-zinc-600 font-normal absolute justify-start text-xs">
              My Code Buddy
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
            <div className="w-48 h-56 absolute bg-white border border-zinc-200/80 overflow-hidden -right-2 top-[-50px] md:right-[20%] md:top-[-30px] lg:right-[20%] lg:top-[-10px] origin-top-left rotate-[15deg] shadow-lg">
            <Image
              alt="Photography"
              width={183}
              height={182}
              className="w-44 h-44 left-[6.78px] top-[6.78px] absolute"
              src="/4.png"
            />
            <div className="left-4 top-[170px] md:left-[55px] md:top-[192px] italic tracking-wide text-zinc-600 font-normal absolute justify-start text-xs">
              I love anime
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
