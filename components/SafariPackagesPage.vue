<template>
  <div class="min-h-screen bg-safari-beige">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-12">
        <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl text-safari-green mb-4">
          Safari Packages
        </h1>
        <p class="text-safari-charcoal text-lg max-w-3xl mx-auto">
          Choose from our carefully crafted safari packages, each designed to give you 
          an unforgettable wildlife experience in Kenya's most spectacular destinations.
        </p>
      </div>

      <!-- Filter Options -->
      <div class="bg-white rounded-lg p-6 shadow-lg mb-8">
        <div class="grid md:grid-cols-4 gap-4">
          <div>
            <label class="block text-safari-charcoal font-medium mb-2">Duration</label>
            <select v-model="filters.duration" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="">All Durations</option>
              <option value="3-5">3-5 Days</option>
              <option value="6-7">6-7 Days</option>
              <option value="8-10">8-10 Days</option>
              <option value="10+">10+ Days</option>
            </select>
          </div>
          <div>
            <label class="block text-safari-charcoal font-medium mb-2">Budget</label>
            <select v-model="filters.budget" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="">All Budgets</option>
              <option value="500-1000">$500 - $1,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000-3000">$2,000 - $3,000</option>
              <option value="3000+">$3,000+</option>
            </select>
          </div>
          <div>
            <label class="block text-safari-charcoal font-medium mb-2">Destination</label>
            <select v-model="filters.destination" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="">All Destinations</option>
              <option value="masai-mara">Masai Mara</option>
              <option value="amboseli">Amboseli</option>
              <option value="samburu">Samburu</option>
              <option value="tsavo">Tsavo</option>
            </select>
          </div>
          <div>
            <label class="block text-safari-charcoal font-medium mb-2">Safari Type</label>
            <select v-model="filters.type" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
              <option value="">All Types</option>
              <option value="luxury">Luxury</option>
              <option value="family">Family</option>
              <option value="photography">Photography</option>
              <option value="honeymoon">Honeymoon</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Packages Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="pkg in filteredPackages" :key="pkg.id" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="relative">
            <ImageWithFallback 
              :src="pkg.image" 
              :alt="pkg.title"
              class="w-full h-48 object-cover"
            />
            <div class="absolute top-4 right-4 bg-safari-orange text-white px-3 py-1 rounded-full text-sm">
              {{ pkg.duration }}
            </div>
            <div class="absolute top-4 left-4">
              <span class="bg-safari-green text-white px-3 py-1 rounded-full text-xs">
                {{ pkg.type }}
              </span>
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

      <!-- No Results -->
      <div v-if="filteredPackages.length === 0" class="text-center py-12">
        <p class="text-safari-charcoal text-lg">No packages found matching your criteria.</p>
        <button @click="resetFilters" class="mt-4 text-safari-orange hover:text-safari-orange/80">
          Reset Filters
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const filters = ref({
  duration: '',
  budget: '',
  destination: '',
  type: ''
})

const packages = [
  {
    id: 1,
    title: 'Masai Mara Explorer',
    description: '3-day adventure in the world-famous Masai Mara, home to the Big Five and the Great Migration.',
    duration: '3 Days',
    price: '899',
    type: 'Luxury',
    destination: 'masai-mara',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhaSUyMG1hcmElMjBzYWZhcml8ZW58MHx8fHwxNzU5NzMyOTMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Accommodation in luxury tented camps',
      'Daily game drives with expert guides',
      'All meals included',
      'Airport transfers'
    ]
  },
  {
    id: 2,
    title: 'Amboseli & Kilimanjaro View',
    description: '4-day safari to Amboseli with spectacular views of Mount Kilimanjaro and large elephant herds.',
    duration: '4 Days',
    price: '1299',
    type: 'Family',
    destination: 'amboseli',
    image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWJvc2VsaSUyMHNhZmFyaXxlbnwwfHx8fDE3NTk3MzI5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Views of Mount Kilimanjaro',
      'Large elephant populations',
      'Luxury lodge accommodation',
      'Cultural village visits'
    ]
  },
  {
    id: 3,
    title: 'Samburu Special',
    description: '5-day journey to Samburu Reserve, home to unique northern Kenya wildlife species.',
    duration: '5 Days',
    price: '1599',
    type: 'Photography',
    destination: 'samburu',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1idXJ1JTIwc2FmYXJpfGVufDB8fHx8MTc1OTczMjkzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Unique wildlife species',
      'Samburu cultural experiences',
      'River lodge accommodation',
      'Guided nature walks'
    ]
  }
]

const filteredPackages = computed(() => {
  return packages.filter(pkg => {
    if (filters.value.duration && !pkg.duration.includes(filters.value.duration)) return false
    if (filters.value.budget && !isInBudgetRange(pkg.price, filters.value.budget)) return false
    if (filters.value.destination && pkg.destination !== filters.value.destination) return false
    if (filters.value.type && pkg.type.toLowerCase() !== filters.value.type) return false
    return true
  })
})

const isInBudgetRange = (price, range) => {
  const priceNum = parseInt(price)
  switch (range) {
    case '500-1000': return priceNum >= 500 && priceNum <= 1000
    case '1000-2000': return priceNum >= 1000 && priceNum <= 2000
    case '2000-3000': return priceNum >= 2000 && priceNum <= 3000
    case '3000+': return priceNum >= 3000
    default: return true
  }
}

const resetFilters = () => {
  filters.value = {
    duration: '',
    budget: '',
    destination: '',
    type: ''
  }
}

const selectedPackage = ref(null)
const closeModal = () => {
  selectedPackage.value = null
}
</script>
