import PageHero from "../components/PageHero/PageHero";
import AboutIntro from "../sections/AboutIntro/AboutIntro";
import AboutHighlights from "../sections/AboutHighlights/AboutHighlights";

export default function AboutPage() {
  return (
    <main className="main">
      <PageHero variant="about" title="About" breadcrumb="About" />
      <AboutIntro />
      <AboutHighlights />
    </main>
  );
}
