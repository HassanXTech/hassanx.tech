"use client";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Newsletter from '@/components/Newsletter';
import WorkExperience from '@/components/WorkExperience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <div className="px-4 sm:px-6 lg:px-8 relative max-w-2xl mx-auto mt-10 flex flex-col justify-center items-center space-y-20 lg:space-y-24">
        <Hero />
        <About />
        {/* <hr className="w-full h-px max-md:max-w-[150px] mx-auto bg-zinc-200" /> */}
        {/* <Newsletter /> */}
        {/* <hr className="w-full h-px max-md:max-w-[150px] mx-auto bg-zinc-200" /> */}
        <WorkExperience />
        <hr className="w-full h-px max-md:max-w-[150px] mx-auto bg-zinc-200" />
        <Contact />
        <hr className="w-full h-px max-md:max-w-[150px] mx-auto bg-zinc-200" />
        <Footer />
      </div>
    </div>
  );
}
