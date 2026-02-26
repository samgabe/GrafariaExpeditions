<template>
  <div class="min-h-screen">
    <Header />
    <main class="pt-20 lg:pt-24">
      <BlogPage />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Safari Blog - Travel Tips & Wildlife Stories | Grafiria Expeditions',
  meta: [
    { name: 'description', content: 'Read expert safari guides, wildlife stories, and travel tips for Kenya. Stay updated with the latest from Grafiria Expeditions.' },
    { name: 'keywords', content: 'kenya safari blog, wildlife stories, safari travel tips, africa travel blog' }
  ]
})
</script>
