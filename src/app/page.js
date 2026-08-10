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
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      {/* <nav> and <footer> are siblings of <main>, not children of it —
          landmark nesting matters to both screen readers and crawlers. */}
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
