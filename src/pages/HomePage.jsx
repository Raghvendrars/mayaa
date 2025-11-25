import Header from '../components/Header'
import Hero from '../components/Hero'
import HomeCollectionCarousel from '../components/HomeCollectionCarousel'
import LatestBabywearCollections from '../components/LatestBabywearCollections'
import NewArrivals from '../components/NewArrivals'
import CategoryMenu from '../components/CategoryMenu'
import ComfyClothesSection from '../components/ComfyClothesSection'
import ExploreCollections from '../components/ExploreCollections'
import BestsellerKits from '../components/BestsellerKits'
import GiftCards from '../components/GiftCards'
import OurStory from '../components/OurStory'
import Newsletter from '../components/Newsletter'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HomeCollectionCarousel />
      <LatestBabywearCollections />
      <NewArrivals />
      <CategoryMenu />
      <ComfyClothesSection />
      <ExploreCollections />
      <BestsellerKits />
      <GiftCards />
      <OurStory />
      <Newsletter />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default HomePage


