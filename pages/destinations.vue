<template>
  <div class="min-h-screen">
    <Header />
    <main class="pt-20 lg:pt-24">
      <DestinationsPage />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Safari Destinations - Kenya National Parks | Grafiria Expeditions',
  meta: [
    { name: 'description', content: 'Explore Kenya\'s top safari destinations including Masai Mara, Amboseli, Samburu, and Tsavo. Discover wildlife, landscapes, and cultural experiences.' },
    { name: 'keywords', content: 'kenya destinations, masai mara, amboseli national park, samburu reserve, kenya national parks' }
  ]
})
</script>
