import { HeroSlider } from "@/components/hero-slider"
import { AnnouncementSection } from "@/components/announcement-section"
import { StatsSection } from "@/components/stats-section"
import { CoursesSection } from "@/components/courses-section"
import { GallerySection } from "@/components/gallery-section"

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <AnnouncementSection />
      <StatsSection />
      <CoursesSection />
      <GallerySection />
    </main>
  )
}
