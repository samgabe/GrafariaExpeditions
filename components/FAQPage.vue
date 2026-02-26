<template>
  <div class="min-h-screen bg-safari-beige">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-12">
        <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl text-safari-green mb-4">
          Frequently Asked Questions
        </h1>
        <p class="text-safari-charcoal text-lg max-w-3xl mx-auto">
          Find answers to common questions about Kenya safaris, planning, costs, and more
        </p>
      </div>

      <!-- Search Bar -->
      <div class="max-w-2xl mx-auto mb-12">
        <div class="relative">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search FAQ..."
            class="w-full px-6 py-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
          />
          <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- FAQ Categories -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          :class="`px-6 py-2 rounded-full transition-colors ${
            selectedCategory === category 
              ? 'bg-safari-orange text-white' 
              : 'bg-white text-safari-charcoal hover:bg-safari-orange/10'
          }`"
        >
          {{ category }}
        </button>
      </div>

      <!-- FAQ Items -->
      <div class="max-w-4xl mx-auto">
        <div class="space-y-4">
          <div v-for="faq in filteredFAQs" :key="faq.id" class="bg-white rounded-lg shadow-md overflow-hidden">
            <button 
              @click="toggleFAQ(faq.id)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-safari-beige/50 transition-colors"
            >
              <h3 class="font-semibold text-safari-green pr-4">{{ faq.question }}</h3>
              <svg 
                :class="`w-6 h-6 text-safari-orange transform transition-transform ${
                  expandedFAQs.includes(faq.id) ? 'rotate-180' : ''
                }`" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div 
              :class="`overflow-hidden transition-all duration-300 ${
                expandedFAQs.includes(faq.id) ? 'max-h-96' : 'max-h-0'
              }`"
            >
              <div class="px-6 py-4 text-safari-charcoal border-t border-gray-200">
                <div v-html="faq.answer"></div>
                
                <div v-if="faq.relatedLinks" class="mt-4 pt-4 border-t border-gray-200">
                  <p class="text-sm font-medium text-safari-green mb-2">Related Links:</p>
                  <div class="space-y-1">
                    <a v-for="link in faq.relatedLinks" :key="link.text" 
                      :href="link.url" 
                      class="text-sm text-safari-orange hover:text-safari-orange/80 block">
                      {{ link.text }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-if="filteredFAQs.length === 0" class="text-center py-12">
          <p class="text-safari-charcoal text-lg">No FAQs found matching your search.</p>
          <button @click="clearFilters" class="mt-4 text-safari-orange hover:text-safari-orange/80">
            Clear Filters
          </button>
        </div>
      </div>

      <!-- Still Have Questions -->
      <div class="mt-16 bg-white rounded-lg p-8 shadow-lg text-center max-w-2xl mx-auto">
        <h2 class="font-serif text-2xl text-safari-green mb-4">Still Have Questions?</h2>
        <p class="text-safari-charcoal mb-6">
          Can't find the answer you're looking for? Our safari experts are here to help!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-safari-orange hover:bg-safari-orange/90 text-white px-6 py-3 rounded-lg transition-colors">
            Contact Us
          </button>
          <a 
            href="https://wa.me/254123456789?text=Hi! I have a question about safaris."
            target="_blank"
            rel="noopener noreferrer"
            class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const searchQuery = ref('')
const selectedCategory = ref('All')
const expandedFAQs = ref([])

const categories = [
  'All',
  'Planning',
  'Costs',
  'Health & Safety',
  'Wildlife',
  'Accommodation',
  'Transportation'
]

const faqs = [
  {
    id: 1,
    category: 'Planning',
    question: 'When is the best time to visit Kenya for a safari?',
    answer: 'The best time for Kenya safaris depends on your interests. <strong>July to October</strong> is ideal for the Great Migration in Masai Mara. <strong>January to March</strong> is great for general wildlife viewing with less crowds. <strong>June to October</strong> offers dry conditions for better game viewing. However, Kenya is a year-round safari destination with unique experiences in every season.',
    relatedLinks: [
      { text: 'View Season Guide', url: '/seasons' },
      { text: 'Masai Mara Migration', url: '/destinations/masai-mara' }
    ]
  },
  {
    id: 2,
    category: 'Costs',
    question: 'How much does a Kenya safari cost?',
    answer: 'Safari costs vary widely based on duration, accommodation level, and season. Budget safaris start around <strong>$500-$1,000 per person</strong> for 3-4 days. Mid-range safaris range from <strong>$1,500-$3,000 per person</strong> for 5-7 days. Luxury safaris can cost <strong>$3,000-$10,000+ per person</strong> for 7-10 days. Prices typically include accommodation, meals, game drives, and park fees.',
    relatedLinks: [
      { text: 'Safari Packages', url: '/packages' },
      { text: 'Budget Planner', url: '/budget-planner' }
    ]
  },
  {
    id: 3,
    category: 'Health & Safety',
    question: 'What vaccinations and medications do I need?',
    answer: 'Recommended vaccinations include <strong>Yellow Fever</strong> (required for entry), <strong>Hepatitis A & B</strong>, <strong>Typhoid</strong>, and <strong>Tetanus</strong>. <strong>Malaria prophylaxis</strong> is strongly recommended. Consult your doctor 6-8 weeks before travel. Carry insect repellent and consider travel insurance that covers medical evacuation.',
    relatedLinks: [
      { text: 'Health Guide', url: '/health-guide' },
      { text: 'Travel Insurance', url: '/insurance' }
    ]
  },
  {
    id: 4,
    category: 'Wildlife',
    question: 'Will I definitely see the Big Five?',
    answer: 'While we can\'t guarantee wildlife sightings, Kenya offers excellent opportunities to see the Big Five. <strong>Masai Mara</strong> and <strong>Amboseli</strong> are particularly good for lions, leopards, elephants, and buffalo. Rhinos are more specialized and best seen in sanctuaries like <strong>Lake Nakuru</strong> or <strong>Ol Pejeta</strong>. Our expert guides know the best locations and times for wildlife viewing.',
    relatedLinks: [
      { text: 'Big Five Guide', url: '/big-five' },
      { text: 'Wildlife Calendar', url: '/wildlife-calendar' }
    ]
  },
  {
    id: 5,
    category: 'Accommodation',
    question: 'What type of accommodation can I expect?',
    answer: 'Kenya offers diverse accommodation options: <strong>Luxury lodges</strong> with full amenities, <strong>tented camps</strong> for authentic experiences, <strong>mid-range hotels</strong> for comfort and value, and <strong>budget campsites</strong> for adventure seekers. Most safari accommodations include meals and offer guided game drives. Luxury options often feature swimming pools, spas, and fine dining.',
    relatedLinks: [
      { text: 'Accommodation Guide', url: '/accommodation' },
      { text: 'Lodge Reviews', url: '/reviews' }
    ]
  },
  {
    id: 6,
    category: 'Transportation',
    question: 'How do I get around during the safari?',
    answer: 'Transportation options include <strong>4x4 safari vehicles</strong> with pop-up roofs for game viewing, <strong>domestic flights</strong> between parks (for longer distances), <strong>private transfers</strong> from airports, and <strong>shared safari vans</strong> for budget options. Our packages include all necessary transportation with professional driver-guides.',
    relatedLinks: [
      { text: 'Transport Options', url: '/transport' },
      { text: 'Getting to Kenya', url: '/getting-here' }
    ]
  },
  {
    id: 7,
    category: 'Planning',
    question: 'How far in advance should I book my safari?',
    answer: 'We recommend booking <strong>3-6 months in advance</strong> for peak season (July-October) and <strong>1-3 months</strong> for other times. Last-minute bookings are possible but may have limited availability. Early booking ensures better rates, preferred accommodations, and allows time for visa applications and travel preparations.',
    relatedLinks: [
      { text: 'Booking Timeline', url: '/timeline' },
      { text: 'Last Minute Deals', url: '/deals' }
    ]
  },
  {
    id: 8,
    category: 'Health & Safety',
    question: 'Is Kenya safe for tourists?',
    answer: 'Kenya is generally safe for tourists, especially in safari areas and tourist facilities. <strong>Safari parks and reserves</strong> are very secure with professional guides. Follow standard travel safety precautions: avoid displaying valuables, use registered taxis, and stay aware of surroundings. Political stability has improved significantly, and tourism is a priority industry.',
    relatedLinks: [
      { text: 'Safety Tips', url: '/safety' },
      { text: 'Travel Advisory', url: '/advisory' }
    ]
  }
]

const filteredFAQs = computed(() => {
  return faqs.filter(faq => {
    const matchesCategory = selectedCategory.value === 'All' || faq.category === selectedCategory.value
    const matchesSearch = !searchQuery.value || 
      faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})

const toggleFAQ = (id) => {
  const index = expandedFAQs.value.indexOf(id)
  if (index > -1) {
    expandedFAQs.value.splice(index, 1)
  } else {
    expandedFAQs.value.push(id)
  }
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'All'
}
</script>
