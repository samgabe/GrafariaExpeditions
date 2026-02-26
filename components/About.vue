<template>
  <section id="about" class="py-20 bg-safari-beige">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-6">
          <div>
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-safari-green mb-4">
              Authentic Safari Experiences
            </h2>
            <p class="text-safari-charcoal text-lg leading-relaxed">
              For over a decade, Grafiria Expeditions has been crafting bespoke luxury safari experiences 
              that connect travelers with the raw beauty and magnificent wildlife of Kenya and beyond.
            </p>
          </div>
          
          <div class="space-y-4">
            <p class="text-safari-charcoal leading-relaxed">
              Our passionate team of local experts and wildlife enthusiasts design each safari 
              with meticulous attention to detail, ensuring every moment exceeds your expectations. 
              From intimate bush camps to luxury lodges, we curate accommodations that blend 
              comfort with authentic African charm.
            </p>
            
            <p class="text-safari-charcoal leading-relaxed">
              Whether you're seeking the Great Migration in the Masai Mara, tracking rhinos in 
              Amboseli, or discovering the unique wildlife of Samburu, we create journeys that 
              respect local communities and conservation efforts while delivering unforgettable adventures.
            </p>
          </div>

          <div class="grid grid-cols-3 gap-6 pt-6">
            <div class="text-center">
              <div class="text-2xl font-serif text-safari-orange mb-2">500+</div>
              <div class="text-sm text-safari-charcoal">Happy Travelers</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-serif text-safari-orange mb-2">15+</div>
              <div class="text-sm text-safari-charcoal">Years Experience</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-serif text-safari-orange mb-2">12</div>
              <div class="text-sm text-safari-charcoal">Destinations</div>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="relative">
          <div class="relative overflow-hidden rounded-lg shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1667987566780-3b31fa5485c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc2FmYXJpJTIwbG9kZ2UlMjBsdXh1cnl8ZW58MXx8fHwxNzU5NzMyOTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Luxury Safari Lodge"
              class="w-full h-[500px] object-cover"
            />
          </div>
          
          <!-- Decorative Element -->
          <div class="absolute -top-6 -left-6 w-24 h-24 bg-safari-orange/20 rounded-full -z-10"></div>
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-safari-green/20 rounded-full -z-10"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// About section component
</script>
