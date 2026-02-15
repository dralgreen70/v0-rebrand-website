import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Ticker } from "@/components/ticker"
import { PlexSection } from "@/components/plex-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ProcessSection } from "@/components/process-section"
import { AboutSection } from "@/components/about-section"
import { TimelineSection } from "@/components/timeline-section"
import { PublicationsSection } from "@/components/publications-section"
import { BlogSection } from "@/components/blog-section"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { ClientInit } from "@/components/client-init"

export default function Home() {
  return (
    <>
      <ClientInit />
      <Navbar />
      <HeroSection />
      <Ticker />
      <PlexSection />
      <BenefitsSection />
      <ProcessSection />
      <AboutSection />
      <TimelineSection />
      <PublicationsSection />
      <BlogSection />
      <CTASection />
      <SiteFooter />
    </>
  )
}
