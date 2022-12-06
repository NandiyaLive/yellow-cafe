import Head from "next/head";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import SpecialCombo from "../components/SpecialCombo";

export default function Home({ images }) {
  return (
    <>
      <Head>
        <title>Yellow Café | Fresh and Delicious</title>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>

      <main className="container max-w-6xl scroll-smooth">
        <Hero />
        <SpecialCombo />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
