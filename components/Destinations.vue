<template>
  <section class="py-20 bg-safari-beige">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-safari-green mb-4">
          Safari Destinations
        </h2>
        <p class="text-safari-charcoal text-lg max-w-3xl mx-auto">
          Explore Kenya's most spectacular wildlife destinations, each offering unique landscapes 
          and incredible animal encounters.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="dest in destinations" :key="dest.id" class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="relative h-64">
            <ImageWithFallback 
              :src="dest.image" 
              :alt="dest.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 class="font-serif text-2xl mb-2">{{ dest.name }}</h3>
              <p class="text-sm mb-3 opacity-90">{{ dest.description }}</p>
              
              <div class="flex flex-wrap gap-2 mb-3">
                <span v-for="highlight in dest.highlights" :key="highlight" 
                  class="text-xs bg-safari-orange/80 px-2 py-1 rounded">
                  {{ highlight }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const destinations = [
  {
    id: 1,
    name: 'Masai Mara',
    description: 'Kenya\'s most famous game reserve, home to the Great Migration and the Big Five.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1080&h=720&fit=crop',
    highlights: ['Great Migration', 'Big Five', 'Balloon Safaris']
  },
  {
    id: 2,
    name: 'Amboseli National Park',
    description: 'Famous for large elephant herds and spectacular views of Mount Kilimanjaro.',
    image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1080&h=720&fit=crop',
    highlights: ['Elephant Herds', 'Mt. Kilimanjaro', 'Maasai Culture']
  },
  {
    id: 3,
    name: 'Samburu National Reserve',
    description: 'Remote northern reserve known for unique wildlife species and diverse landscapes.',
    image: 'https://images.unsplash.com/photo-1558907685-9f38cd850e1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1080&h=720&fit=crop',
    highlights: ['Rare Species', 'Ewaso River', 'Samburu Culture']
  },
  {
    id: 4,
    name: 'Tsavo National Parks',
    description: 'Kenya\'s largest protected area, offering vast wilderness and diverse ecosystems.',
    image: 'https://images.unsplash.com/photo-1732548314474-2aff3b4e8e55?q=80&w=902&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1080&h=720&fit=crop',
    highlights: ['Wilderness', 'Red Elephants', 'Mzima Springs']
  },
  {
    id: 5,
    name: 'Lake Nakuru',
    description: 'Famous for its flamingo populations and rich birdlife along the Great Rift Valley.',
    image: 'https://images.unsplash.com/photo-1623745493572-ef78d94249f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZSUyMG5ha3VydSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D?w=1080&h=720&fit=crop',
    highlights: ['Flamingos', 'Rhino Sanctuary', 'Bird Watching']
  },
  {
    id: 6,
    name: 'Aberdares',
    description: 'Mountainous region with waterfalls, bamboo forests, and unique highland wildlife.',
    image: 'https://plus.unsplash.com/premium_photo-1661879229347-fd44309840ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1080&h=720&fit=crop',
    highlights: ['Waterfalls', 'Bamboo Forests', 'Highland Wildlife']
  }
]
</script>
