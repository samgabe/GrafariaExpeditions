<template>
  <div class="min-h-screen">
    <Header />
    <main class="pt-20 lg:pt-24">
      <AdminPage />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Admin Dashboard - Grafiria Expeditions Content Management',
  meta: [
    { name: 'description', content: 'Content management system for Grafiria Expeditions website administration.' },
    { name: 'keywords', content: 'admin, cms, content management' }
  ]
})
</script>
