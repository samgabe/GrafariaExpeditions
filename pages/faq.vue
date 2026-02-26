<template>
  <div class="min-h-screen">
    <Header />
    <main class="pt-20 lg:pt-24">
      <FAQPage />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Frequently Asked Questions - Kenya Safari Guide | Grafiria Expeditions',
  meta: [
    { name: 'description', content: 'Find answers to common questions about Kenya safaris, planning, costs, what to pack, and more. Expert advice from Grafiria Expeditions.' },
    { name: 'keywords', content: 'kenya safari faq, safari planning questions, what to pack safari, safari costs kenya' }
  ]
})
</script>
