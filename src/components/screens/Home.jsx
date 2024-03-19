import {
  CTASection,
  HotProductsSection,
  SubscriptionSection,
  TestimonialsSection,
} from "../sections";

const HomeScreen = () => {
  return (
    <main>
      <section className="hero">Hero section</section>
      <CTASection />
      <HotProductsSection />
      <SubscriptionSection />
      <TestimonialsSection />
    </main>
  );
};

export default HomeScreen;
