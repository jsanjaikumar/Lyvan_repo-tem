import PageHero from "../components/PageHero/PageHero";
import PortfolioGallery from "../sections/PortfolioGallery/PortfolioGallery";

export default function PortfolioPage() {
  return (
    <main className="main">
      <PageHero variant="portfolio" title="Portfolio" breadcrumb="Portfolio" />
      <PortfolioGallery />
    </main>
  );
}
