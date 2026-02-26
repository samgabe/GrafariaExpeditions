<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-safari-green mb-4">
          Safari Packages
        </h2>
        <p class="text-safari-charcoal text-lg max-w-3xl mx-auto">
          Choose from our carefully crafted safari packages, each designed to give you 
          an unforgettable wildlife experience in Kenya's most spectacular destinations.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="pkg in packages" :key="pkg.id" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="relative">
            <ImageWithFallback 
              :src="pkg.image" 
              :alt="pkg.title"
              class="w-full h-48 object-cover"
            />
            <div class="absolute top-4 right-4 bg-safari-orange text-white px-3 py-1 rounded-full text-sm">
              {{ pkg.duration }}
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="font-serif text-xl text-safari-green mb-2">{{ pkg.title }}</h3>
            <p class="text-safari-charcoal mb-4">{{ pkg.description }}</p>
            
            <div class="space-y-2 mb-4">
              <div v-for="feature in pkg.features" :key="feature" class="flex items-center text-sm text-safari-charcoal">
                <div class="w-2 h-2 bg-safari-orange rounded-full mr-2"></div>
                {{ feature }}
              </div>
            </div>
            
            <div class="flex items-center justify-between">
              <div>
                <span class="text-2xl font-serif text-safari-orange">${{ pkg.price }}</span>
                <span class="text-sm text-safari-charcoal">/person</span>
              </div>
              <button class="bg-safari-orange hover:bg-safari-orange/90 text-white px-4 py-2 rounded transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const packages = [
  {
    id: 1,
    title: 'Masai Mara Classic',
    description: 'Experience the Great Migration in Kenya\'s most famous reserve with luxury tented camps and expert guides.',
    duration: '5 Days',
    price: '2500',
    image: 'https://images.unsplash.com/photo-1567742361752-b233db8df030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhaSUyMG1hcmElMjBrZW55YSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTk3MzI5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Great Migration',
      'Big Five',
      'Luxury Tented Camp',
      'Cultural Visit'
    ]
  },
  {
    id: 2,
    title: 'Amboseli Elephant Safari',
    description: 'Get up close with majestic elephants against the backdrop of Mount Kilimanjaro in this intimate safari experience.',
    duration: '4 Days',
    price: '2000',
    image: 'https://images.unsplash.com/photo-1663848990481-8e0da3374a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWJvc2VsaSUyMG5hdGlvbmFsJTIwcGFya3xlbnwxfHx8fDE3NTk3MzI5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Elephant Herds',
      'Mt. Kilimanjaro Views',
      'Luxury Lodge',
      'Cultural Experience'
    ]
  },
  {
    id: 3,
    title: 'Samburu Adventure',
    description: 'Discover unique northern Kenya wildlife species and diverse landscapes in this remote wilderness adventure.',
    duration: '6 Days',
    price: '2800',
    image: 'https://images.unsplash.com/photo-1556725712-29a2f67e64ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1idXJ1JTIwa2VueWElMjB3aWxkbGlmZXxlbnwxfHx8fDE3NTk3MzI5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: [
      'Rare Species',
      'Ewaso River',
      'Samburu Culture',
      'Wilderness Experience'
    ]
  }
]
</script>
