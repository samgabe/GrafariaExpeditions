<template>
  <div class="min-h-screen">
    <Header />
    <main class="pt-20 lg:pt-24">
      <ContactPage />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Contact Grafiria Expeditions - Kenya Safari Experts | Plan Your Trip',
  meta: [
    { name: 'description', content: 'Contact our safari experts in Nairobi for personalized Kenya safari planning. Get quotes, ask questions, and start planning your African adventure.' },
    { name: 'keywords', content: 'contact grafiria expeditions, kenya safari planning, safari experts nairobi, safari consultation' }
  ]
})
</script>
