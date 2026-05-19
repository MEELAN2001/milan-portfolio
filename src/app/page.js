import Navbar     from '@/components/layout/Navbar';
import Footer     from '@/components/layout/Footer';
import Hero       from '@/components/sections/Hero';
import About      from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills     from '@/components/sections/Skills';
import Projects   from '@/components/sections/Projects';
import Resume     from '@/components/sections/Resume';
import Contact    from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <div className="container mx-auto px-4 py-8 space-y-12">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}