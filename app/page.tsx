import { HeroSlider } from "@/components/hero-slider"
import { AnnouncementSection } from "@/components/announcement-section"
import { StatsSection } from "@/components/stats-section"
import { GallerySection } from "@/components/gallery-section"

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <AnnouncementSection />
      <StatsSection />
      <GallerySection />
    </main>
  )
}
