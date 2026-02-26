<template>
  <footer class="bg-safari-charcoal text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
        <!-- Company Info -->
        <div class="lg:col-span-2 space-y-6">
          <div>
            <div class="mb-4">
              <img 
                src="/images/GrafiriaExpeditions.png" 
                alt="Grafiria Expeditions" 
                class="h-12 lg:h-16"
              />
            </div>
            <p class="text-gray-300 leading-relaxed">
              Experience the wild beauty of Kenya with our expertly crafted luxury safari adventures. 
              We create unforgettable journeys that connect you with Africa's magnificent wildlife 
              and breathtaking landscapes.
            </p>
          </div>

          <!-- Contact Info -->
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <MapPin class="w-5 h-5 text-safari-orange flex-shrink-0" />
              <span class="text-gray-300">Nairobi, Kenya</span>
            </div>
            <div class="flex items-center space-x-3">
              <Phone class="w-5 h-5 text-safari-orange flex-shrink-0" />
              <span class="text-gray-300">+254 (0) 20 123 4567</span>
            </div>
            <div class="flex items-center space-x-3">
              <Mail class="w-5 h-5 text-safari-orange flex-shrink-0" />
              <span class="text-gray-300">info@gonomadsafaris.com</span>
            </div>
          </div>

          <!-- Social Media -->
          <div>
            <h4 class="text-safari-orange mb-3">Follow Our Adventures</h4>
            <div class="flex space-x-4">
              <a 
                href="#" 
                class="w-10 h-10 bg-safari-orange hover:bg-safari-orange/80 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram class="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                class="w-10 h-10 bg-safari-orange hover:bg-safari-orange/80 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook class="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                class="w-10 h-10 bg-safari-orange hover:bg-safari-orange/80 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube class="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-safari-orange mb-4">Company</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.label">
              <button 
                @click="link.action"
                class="text-gray-300 hover:text-safari-orange transition-colors text-left"
              >
                {{ link.label }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Destinations -->
        <div>
          <h4 class="text-safari-orange mb-4">Destinations</h4>
          <ul class="space-y-2">
            <li v-for="destination in destinations" :key="destination.label">
              <button 
                @click="destination.action"
                class="text-gray-300 hover:text-safari-orange transition-colors text-left"
              >
                {{ destination.label }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Safari Types -->
        <div>
          <h4 class="text-safari-orange mb-4">Safari Types</h4>
          <ul class="space-y-2">
            <li v-for="type in safariTypes" :key="type.label">
              <button 
                @click="type.action"
                class="text-gray-300 hover:text-safari-orange transition-colors text-left"
              >
                {{ type.label }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-600 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-gray-400 text-sm">
            © 2026 Grafiria Expeditions. All rights reserved.
          </div>
          
          <div class="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <a href="#" class="hover:text-safari-orange transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-safari-orange transition-colors">Terms of Service</a>
            <a href="#" class="hover:text-safari-orange transition-colors">Cookie Policy</a>
          </div>
        </div>

        <!-- Certifications -->
        <div class="mt-6 text-center">
          <p class="text-gray-400 text-sm mb-2">Licensed & Certified Safari Operator</p>
          <div class="flex justify-center items-center space-x-4 text-xs text-gray-500">
            <span>Kenya Tourism Board Licensed</span>
            <span>•</span>
            <span>IATA Member</span>
            <span>•</span>
            <span>Eco-Tourism Certified</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()

const quickLinks = [
  { 
    label: 'About Us', 
    action: () => {
      if (route.name !== 'index') {
        router.push('/')
      } else {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },
  { label: 'Safari Packages', action: () => router.push('/packages') },
  { label: 'FAQ', action: () => router.push('/faq') },
  { label: 'Blog', action: () => router.push('/blog') }
]

const destinations = [
  { label: 'All Destinations', action: () => router.push('/destinations') },
  { label: 'Masai Mara', action: () => router.push('/destinations') },
  { label: 'Amboseli', action: () => router.push('/destinations') },
  { label: 'Samburu', action: () => router.push('/destinations') },
  { label: 'Tsavo', action: () => router.push('/destinations') },
  { label: 'Lake Nakuru', action: () => router.push('/destinations') }
]

const safariTypes = [
  { label: 'Luxury Safaris', action: () => router.push('/packages') },
  { label: 'Family Safaris', action: () => router.push('/packages') },
  { label: 'Photography Safaris', action: () => router.push('/packages') },
  { label: 'Honeymoon Safaris', action: () => router.push('/packages') },
  { label: 'Group Safaris', action: () => router.push('/packages') },
  { label: 'Contact Us', action: () => router.push('/contact') }
]
</script>
