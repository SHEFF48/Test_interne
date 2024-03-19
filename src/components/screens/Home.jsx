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

      <section className="reviews">Reviews</section>
    </main>
  );
};

export default HomeScreen;
