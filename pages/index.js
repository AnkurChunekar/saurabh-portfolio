// external
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

// internal
import Navbar from "../components/Navbar";
import ProjectGrid from "../components/ProjectGrid";

export default function Home() {
  return (
    <div className="bg-dark text-font min-h-screen scroll-smooth">
      <Head>
        <title>Saurabh Chunekar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="w-4/5 m-auto max-w-7xl scroll-smooth">
        <main>
          <Navbar />
          <Hero />
          <ProjectGrid />
          <About />
          <Footer />
        </main>
      </div>
    </div>
  );
}
