import {
  CTASection,
  HotProductsSection,
  SubscriptionSection,
} from "../sections";

const HomeScreen = () => {
  return (
    <main>
      <section className="hero">Hero section</section>

      <CTASection />
      <HotProductsSection />
      <SubscriptionSection />

      <section className="reviews">Reviews</section>
    </main>
  );
};

export default HomeScreen;
