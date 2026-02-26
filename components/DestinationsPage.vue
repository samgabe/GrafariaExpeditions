<template>
  <div class="min-h-screen bg-safari-beige">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-12">
        <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl text-safari-green mb-4">
          Safari Destinations
        </h1>
        <p class="text-safari-charcoal text-lg max-w-3xl mx-auto">
          Explore Kenya's most spectacular wildlife destinations, each offering unique landscapes 
          and incredible animal encounters.
        </p>
      </div>

      <!-- Destinations Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="dest in destinations" :key="dest.id" 
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <div class="relative h-64">
            <ImageWithFallback 
              :src="dest.image" 
              :alt="dest.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            
            <div class="absolute top-4 right-4">
              <span class="bg-safari-orange text-white px-3 py-1 rounded-full text-xs">
                {{ dest.region }}
              </span>
            </div>
            
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 class="font-serif text-2xl mb-2">{{ dest.name }}</h3>
              <p class="text-sm mb-3 opacity-90">{{ dest.description }}</p>
              
              <div class="flex flex-wrap gap-2 mb-3">
                <span v-for="highlight in dest.highlights" :key="highlight" 
                  class="text-xs bg-safari-orange/80 px-2 py-1 rounded">
                  {{ highlight }}
                </span>
              </div>
              
              <button @click="showDestinationDetails(dest)" 
                class="bg-safari-orange hover:bg-safari-orange/90 text-white px-4 py-2 rounded text-sm transition-colors">
                Explore {{ dest.name }}
              </button>
            </div>
          </div>
          
          <div class="p-6">
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="text-center">
                <div class="text-lg font-serif text-safari-orange">{{ dest.bestTime }}</div>
                <div class="text-xs text-safari-charcoal">Best Time to Visit</div>
              </div>
              <div class="text-center">
                <div class="text-lg font-serif text-safari-orange">{{ dest.accessibility }}</div>
                <div class="text-xs text-safari-charcoal">Accessibility</div>
              </div>
            </div>
            
            <div class="space-y-2">
              <div class="flex items-center text-sm text-safari-charcoal">
                <div class="w-2 h-2 bg-safari-orange rounded-full mr-2"></div>
                {{ dest.wildlife }}
              </div>
              <div class="flex items-center text-sm text-safari-charcoal">
                <div class="w-2 h-2 bg-safari-orange rounded-full mr-2"></div>
                {{ dest.landscape }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Destination Details Modal -->
      <div v-if="selectedDestination" 
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        @click="closeModal">
        <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          @click.stop>
          <div class="relative">
            <ImageWithFallback 
              :src="selectedDestination.image" 
              :alt="selectedDestination.name"
              class="w-full h-64 object-cover"
            />
            <button @click="closeModal" 
              class="absolute top-4 right-4 bg-white/90 hover:bg-white text-safari-charcoal p-2 rounded-full">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="p-8">
            <h2 class="font-serif text-3xl text-safari-green mb-4">{{ selectedDestination.name }}</h2>
            <p class="text-safari-charcoal mb-6">{{ selectedDestination.fullDescription }}</p>
            
            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 class="font-serif text-xl text-safari-green mb-4">Wildlife Highlights</h3>
                <ul class="space-y-2">
                  <li v-for="animal in selectedDestination.wildlifeList" :key="animal" 
                    class="flex items-center text-safari-charcoal">
                    <div class="w-2 h-2 bg-safari-orange rounded-full mr-2"></div>
                    {{ animal }}
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-serif text-xl text-safari-green mb-4">Activities</h3>
                <ul class="space-y-2">
                  <li v-for="activity in selectedDestination.activities" :key="activity" 
                    class="flex items-center text-safari-charcoal">
                    <div class="w-2 h-2 bg-safari-orange rounded-full mr-2"></div>
                    {{ activity }}
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="text-center">
              <button class="bg-safari-orange hover:bg-safari-orange/90 text-white px-8 py-3 rounded-lg transition-colors">
                Book Safari to {{ selectedDestination.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const selectedDestination = ref(null)

const destinations = [
  {
    id: 1,
    name: 'Masai Mara',
    description: 'World-famous reserve known for the Great Migration and abundant Big Five sightings.',
    fullDescription: 'The Masai Mara is Kenya\'s most celebrated game reserve, renowned for its exceptional population of Big Five and the annual Great Migration of wildebeest and zebra from the Serengeti. This vast savanna offers unparalleled game viewing opportunities throughout the year.',
    region: 'Southwest Kenya',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1080&h=720&fit=crop',
    highlights: ['Great Migration', 'Big Five', 'Mara River'],
    bestTime: 'Jul-Oct',
    accessibility: 'Easy',
    wildlife: 'Big Five, wildebeest, zebra',
    landscape: 'Open savanna, riverine forest',
    wildlifeList: ['Lions', 'Leopards', 'Elephants', 'Rhinos', 'Buffalos', 'Wildebeest', 'Zebras', 'Giraffes', 'Hyenas'],
    activities: ['Game drives', 'Balloon safaris', 'Walking safaris', 'Cultural visits']
  },
  {
    id: 2,
    name: 'Amboseli',
    description: 'Famous for large elephant herds and spectacular views of Mount Kilimanjaro.',
    fullDescription: 'Amboseli National Park is famous for its spectacular views of Mount Kilimanjaro and large elephant herds. The park offers excellent opportunities for wildlife photography and is known for its diverse ecosystems, from dry lake beds to lush swamps.',
    region: 'South Kenya',
    image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1080&h=720&fit=crop',
    highlights: ['Elephants', 'Mount Kilimanjaro', 'Swamps'],
    bestTime: 'Jun-Oct',
    accessibility: 'Easy',
    wildlife: 'Elephants, lions, cheetahs',
    landscape: 'Dry plains, swamps, acacia woodland',
    wildlifeList: ['Elephants', 'Lions', 'Cheetahs', 'Buffalos', 'Zebras', 'Giraffes', 'Hippos', 'Various bird species'],
    activities: ['Game drives', 'Bird watching', 'Cultural visits', 'Photography tours']
  },
  {
    id: 3,
    name: 'Samburu',
    description: 'Home to unique northern species including Grevy\'s zebra and reticulated giraffe.',
    fullDescription: 'Samburu National Reserve is home to unique northern Kenya species rarely found elsewhere. The Ewaso Nyiro River provides a lifeline for wildlife in this semi-arid region, creating a starkly beautiful landscape.',
    region: 'North Kenya',
    image: 'https://images.unsplash.com/photo-1558907685-9f38cd850e1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1080&h=720&fit=crop',
    highlights: ['Special Five', 'Ewaso Nyiro River', 'Samburu Culture'],
    bestTime: 'Year-round',
    accessibility: 'Moderate',
    wildlife: 'Special Five, elephants, leopards',
    landscape: 'Dry scrubland, riverine forest',
    wildlifeList: ['Grevy\'s zebra', 'Reticulated giraffe', 'Beisa oryx', 'Somali ostrich', 'Gerenuk', 'Elephants', 'Leopards', 'Lions'],
    activities: ['Game drives', 'Walking safaris', 'Cultural visits', 'River activities']
  }
]

const showDestinationDetails = (destination) => {
  selectedDestination.value = destination
}

const closeModal = () => {
  selectedDestination.value = null
}
</script>
