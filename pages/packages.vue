<template>
  <div class="min-h-screen">
    <Header />
    <main class="pt-20 lg:pt-24">
      <SafariPackagesPage />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Safari Packages - Grafiria Expeditions | Kenya Wildlife Tours',
  meta: [
    { name: 'description', content: 'Browse our luxury safari packages in Kenya. From Masai Mara to Amboseli, discover tailor-made wildlife adventures with expert guides and premium accommodations.' },
    { name: 'keywords', content: 'kenya safari packages, masai mara tours, amboseli safari, luxury wildlife tours, safari booking kenya' }
  ]
})
</script>
