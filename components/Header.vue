<template>
  <header
    :class="`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || route.name !== 'index'
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`"
  >
    <div class="container mx-auto px-2 sm:px-4 lg:px-6">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 -ml-2">
          <NuxtLink to="/" class="flex items-center">
            <img 
              src="/images/GrafiriaExpeditions.png" 
              alt="Grafiria Expeditions" 
              class="h-20 lg:h-20 transition-all duration-300"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <template v-for="item in navItems" :key="item.label">
            <NuxtLink
              v-if="item.page"
              :to="item.href ? (item.page === 'index' ? `/${item.href}` : `/${item.page}${item.href}`) : (item.page === 'index' ? '/' : `/${item.page}`)"
              :class="`transition-colors hover:text-safari-orange ${
                (route.name === item.page && (!item.href || route.hash === item.href)) ? 'text-safari-orange' : 
                isScrolled || route.name !== 'index' ? 'text-safari-charcoal' : 'text-white'
              }`"
            >
              {{ item.label }}
            </NuxtLink>
            <a
              v-else
              :href="item.href"
              :class="`transition-colors hover:text-safari-orange ${
                isScrolled || route.name !== 'index' ? 'text-safari-charcoal' : 'text-white'
              }`"
              @click="handleAnchorClick(item.href)"
            >
              {{ item.label }}
            </a>
          </template>
        </nav>

        <!-- CTA Button - Desktop -->
        <div class="hidden lg:block">
          <button class="bg-safari-orange hover:bg-safari-orange/90 text-white px-6 py-2 rounded">
            Plan Your Safari
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <X v-if="isMobileMenuOpen" :class="`h-6 w-6 ${isScrolled || route.name !== 'index' ? 'text-safari-charcoal' : 'text-white'}`" />
          <Menu v-else :class="`h-6 w-6 ${isScrolled || route.name !== 'index' ? 'text-safari-charcoal' : 'text-white'}`" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMobileMenuOpen" class="lg:hidden bg-white shadow-lg rounded-lg mt-2 py-4">
        <nav class="flex flex-col space-y-4 px-4">
          <template v-for="item in navItems" :key="item.label">
            <NuxtLink
              v-if="item.page"
              :to="item.href ? (item.page === 'index' ? `/${item.href}` : `/${item.page}${item.href}`) : (item.page === 'index' ? '/' : `/${item.page}`)"
              :class="`text-left transition-colors hover:text-safari-orange ${
                (route.name === item.page && (!item.href || route.hash === item.href)) ? 'text-safari-orange' : 'text-safari-charcoal'
              }`"
              @click="isMobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
            <a
              v-else
              :href="item.href"
              class="text-left transition-colors hover:text-safari-orange text-safari-charcoal"
              @click="handleAnchorClick(item.href)"
            >
              {{ item.label }}
            </a>
          </template>
        </nav>
        <button class="bg-safari-orange hover:bg-safari-orange/90 text-white mt-4 rounded">
          Plan Your Safari
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Menu, X } from 'lucide-vue-next'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { label: 'Home', page: 'index' },
  { label: 'Destinations', page: 'destinations' },
  { label: 'Packages', page: 'packages' },
  { label: 'About', href: '#about', page: 'index' }, // Add page for active state
  { label: 'Blog', page: 'blog' },
  { label: 'FAQ', page: 'faq' },
  { label: 'Contact', page: 'contact' },
]

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>
