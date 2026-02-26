<template>
  <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1729659701064-1262d34aaba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYWZhcmklMjBrZW55YSUyMHdpbGRsaWZlfGVufDF8fHx8MTc1OTczMjkxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Luxury Safari Kenya Wildlife"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 class="font-serif text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight">
        Tailor-Made Luxury Safaris
        <br />
        <span class="text-safari-orange">in Kenya & Beyond</span>
      </h1>
      
      <p class="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
        Experience the wild beauty of Africa with our expertly crafted, luxury safari adventures 
        that create memories to last a lifetime.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button 
          class="bg-safari-orange hover:bg-safari-orange/90 text-white px-8 py-4 text-lg rounded"
        >
          Plan Your Safari
        </button>
        <button 
          class="border border-white text-white hover:bg-white hover:text-safari-charcoal px-8 py-4 text-lg rounded"
        >
          View Safari Packages
        </button>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div class="animate-bounce">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Hero section component
</script>
