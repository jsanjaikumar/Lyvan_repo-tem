import PageHero from "../components/PageHero/PageHero";

export default function VoiceProcessPage() {
  return (
    <main className="main">
      <PageHero
        variant="voice"
        title="Voice Process"
        breadcrumb="Voice Process"
      />
      <section className="section py-5">
        <div className="container">
          <div className="glass-panel rounded-5 p-4 p-lg-5 text-center">
            <h3>Voice process support</h3>
            <p className="mb-0">
              This page is currently under development. We’re working on building a detailed Voice Process section with complete information and features. Please check back soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
