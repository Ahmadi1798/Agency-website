import ServicesCTA from '../Components/Services/ServicesCTA';
import ServicesHero from '../Components/Services/ServicesHero';
import ServicesList from '../Components/Services/ServicesList';

const ServicesPage = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </div>
  );
};
export default ServicesPage;
