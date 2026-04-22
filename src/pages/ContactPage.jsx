import PageHero from "../components/PageHero/PageHero";
import Contact from "../sections/Contact/Contact";

export default function ContactPage() {
  return (
    <main className="main">
      <PageHero variant="contact" title="Contact" breadcrumb="Contact" />
      <Contact />
    </main>
  );
}
