import PageHero from "../components/PageHero/PageHero";
import ServiceDetails from "../sections/ServiceDetails/ServiceDetails";

export default function ServicePage() {
  return (
    <main className="main">
      <PageHero
        variant="services"
        title="Service Details"
        breadcrumb="Services"
      />
      <ServiceDetails />
    </main>
  );
}
