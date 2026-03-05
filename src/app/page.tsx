import HeroSection from '@/components/home/HeroSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import WhyOklavia from '@/components/home/WhyOklavia'
import DeliveryInfo from '@/components/home/DeliveryInfo'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <WhyOklavia />
      <DeliveryInfo />
      <CTASection />
    </>
  )
}
