<template>
  <div class="min-h-screen">
    <Header />
    <main>
      <Hero />
      <About />
      <SafariPackages />
      <Destinations />
      <PlanSafariForm />
      <EnhancedTestimonials />
      <BookingIntegrations />
      <Blog />
      <CallToAction />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Grafiria Expeditions - Kenya Wildlife Adventures',
  meta: [
    { name: 'description', content: 'Experience unforgettable Kenya wildlife safaris with Grafiria Expeditions. Expert guides, luxury accommodations, and authentic African adventures.' },
    { name: 'keywords', content: 'kenya safari, wildlife tours, luxury safari, masai mara, amboseli, safari packages' }
  ]
})
</script>
