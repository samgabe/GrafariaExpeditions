<template>
  <div class="min-h-screen bg-safari-beige">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-12">
        <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl text-safari-green mb-4">
          Safari Blog
        </h1>
        <p class="text-safari-charcoal text-lg max-w-3xl mx-auto">
          Discover expert insights, travel tips, and amazing stories from our safari adventures
        </p>
      </div>

      <!-- Blog Categories -->
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

      <!-- Featured Post -->
      <div v-if="featuredPost" class="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="relative">
            <ImageWithFallback 
              :src="featuredPost.image" 
              :alt="featuredPost.title"
              class="w-full h-96 object-cover"
            />
            <div class="absolute top-4 left-4">
              <span class="bg-safari-orange text-white px-3 py-1 rounded-full text-xs">
                Featured
              </span>
            </div>
          </div>
          
          <div class="p-8 flex flex-col justify-center">
            <div class="flex items-center text-sm text-safari-charcoal mb-4">
              <span class="bg-safari-green text-white px-2 py-1 rounded text-xs mr-3">
                {{ featuredPost.category }}
              </span>
              <span>{{ featuredPost.date }}</span>
              <span class="mx-2">•</span>
              <span>{{ featuredPost.readTime }}</span>
            </div>
            
            <h2 class="font-serif text-3xl text-safari-green mb-4">{{ featuredPost.title }}</h2>
            <p class="text-safari-charcoal mb-6 text-lg">{{ featuredPost.excerpt }}</p>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <ImageWithFallback 
                  :src="featuredPost.author.avatar" 
                  :alt="featuredPost.author.name"
                  class="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <div class="font-medium text-safari-charcoal">{{ featuredPost.author.name }}</div>
                  <div class="text-sm text-safari-charcoal opacity-75">{{ featuredPost.author.role }}</div>
                </div>
              </div>
              <button class="text-safari-orange hover:text-safari-orange/80 font-medium">
                Read Full Story →
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <article v-for="post in filteredPosts" :key="post.id" 
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="relative">
            <ImageWithFallback 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-48 object-cover"
            />
            <div class="absolute top-4 left-4">
              <span class="bg-safari-orange text-white px-3 py-1 rounded-full text-xs">
                {{ post.category }}
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <div class="flex items-center text-sm text-safari-charcoal mb-3">
              <span>{{ post.date }}</span>
              <span class="mx-2">•</span>
              <span>{{ post.readTime }}</span>
            </div>
            
            <h3 class="font-serif text-xl text-safari-green mb-3">{{ post.title }}</h3>
            <p class="text-safari-charcoal mb-4 line-clamp-3">{{ post.excerpt }}</p>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <ImageWithFallback 
                  :src="post.author.avatar" 
                  :alt="post.author.name"
                  class="w-8 h-8 rounded-full mr-2 object-cover"
                />
                <span class="text-sm text-safari-charcoal">{{ post.author.name }}</span>
              </div>
              <button class="text-safari-orange hover:text-safari-orange/80 font-medium text-sm">
                Read More →
              </button>
            </div>
          </div>
        </article>
      </div>

      <!-- Load More -->
      <div v-if="hasMorePosts" class="text-center">
        <button 
          @click="loadMore"
          class="bg-safari-orange hover:bg-safari-orange/90 text-white px-8 py-3 rounded-lg transition-colors"
        >
          Load More Posts
        </button>
      </div>

      <!-- Newsletter Signup -->
      <div class="mt-16 bg-white rounded-lg p-8 shadow-lg text-center max-w-2xl mx-auto">
        <h2 class="font-serif text-2xl text-safari-green mb-4">Stay Updated</h2>
        <p class="text-safari-charcoal mb-6">
          Get the latest safari tips, wildlife stories, and exclusive offers delivered to your inbox
        </p>
        <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4">
          <input 
            v-model="newsletterEmail"
            type="email" 
            placeholder="Enter your email address"
            required
            class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
          />
          <button 
            type="submit"
            :disabled="isSubscribing"
            class="bg-safari-orange hover:bg-safari-orange/90 text-white px-6 py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {{ isSubscribing ? 'Subscribing...' : 'Subscribe' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const selectedCategory = ref('All')
const newsletterEmail = ref('')
const isSubscribing = ref(false)

const categories = [
  'All',
  'Wildlife',
  'Travel Tips',
  'Photography',
  'Conservation',
  'Culture',
  'Destinations'
]

const featuredPost = {
  id: 'featured',
  title: 'The Great Migration: A Natural Wonder You Must Witness',
  excerpt: 'Experience one of nature\'s most spectacular events as millions of wildebeest cross the Mara River. Learn the best times and places to witness this incredible journey and why it should be on every traveler\'s bucket list.',
  image: 'https://plus.unsplash.com/premium_photo-1661962656908-24102eafa8d4?q=80&w=890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1080&h=720&fit=crop',
  category: 'Wildlife',
  date: 'October 15, 2024',
  readTime: '5 min read',
  author: {
    name: 'John Kamau',
    role: 'Lead Safari Guide',
    avatar: 'https://images.unsplash.com/photo-1700764979779-a0ee565e736c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
}

const blogPosts = [
  {
    id: 1,
    title: 'Packing for Your Kenya Safari: Essential Guide',
    excerpt: 'Don\'t overpack! Here\'s everything you really need for a comfortable and stylish safari adventure, from clothing to camera gear and travel essentials.',
    image: 'https://images.unsplash.com/photo-1485809052957-5113b0ff51af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwZ2VhcnxlbnwwfHwwfHx8MA%3D%3D?w=1080&h=720&fit=crop',
    category: 'Travel Tips',
    date: 'October 10, 2024',
    readTime: '3 min read',
    author: {
      name: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1560162071-8bda5b511851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5vbnltb3VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D'
    }
  },
  {
    id: 2,
    title: 'Photography Tips for Capturing African Wildlife',
    excerpt: 'Master the art of wildlife photography with tips from professional photographers. Learn about equipment, settings, and techniques for stunning safari photos.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1idXJ1JTIwc2FmYXJpfGVufDB8fHx8MTc1OTczMjkzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Photography',
    date: 'October 5, 2024',
    readTime: '7 min read',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1700764979779-a0ee565e736c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  },
  {
    id: 3,
    title: 'Conservation Success Stories in Kenya',
    excerpt: 'Discover how Kenya\'s conservation efforts are helping protect endangered species and their habitats, from rhino sanctuaries to community conservancies.',
    image: 'https://images.unsplash.com/photo-1613109303734-9a4aa209cd35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VueWElMjB3aWxkbGlmZXxlbnwwfHwwfHx8MA%3D%3D?w=1080&h=720&fit=crop',
    category: 'Conservation',
    date: 'September 28, 2024',
    readTime: '6 min read',
    author: {
      name: 'Dr. Jane Wilson',
      avatar: 'https://images.unsplash.com/photo-1560162071-8bda5b511851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5vbnltb3VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D'
    }
  },
  {
    id: 4,
    title: 'Maasai Culture: Traditions and Modern Life',
    excerpt: 'Explore the rich cultural heritage of the Maasai people, their traditional customs, and how they balance modern life with ancient traditions.',
    image: 'https://images.unsplash.com/photo-1585532280453-56497fa88bbf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1080&h=720&fit=crop',
    category: 'Culture',
    date: 'September 20, 2024',
    readTime: '8 min read',
    author: {
      name: 'Joseph Kiprop',
      avatar: 'https://images.unsplash.com/photo-1700764979779-a0ee565e736c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  },
  {
    id: 5,
    title: 'Hidden Gems: Lesser-Known Kenya Destinations',
    excerpt: 'Beyond the famous parks, discover Kenya\'s hidden treasures that offer unique wildlife experiences away from the crowds.',
    image: 'https://images.unsplash.com/photo-1692935045168-c80632f56b06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2VueWElMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D?w=1080&h=720&fit=crop',
    category: 'Destinations',
    date: 'September 15, 2024',
    readTime: '5 min read',
    author: {
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1560162071-8bda5b511851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5vbnltb3VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D'
    }
  }
]

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'All') {
    return blogPosts
  }
  return blogPosts.filter(post => post.category === selectedCategory.value)
})

const hasMorePosts = ref(true)

const loadMore = () => {
  // In a real application, this would load more posts from the backend
  console.log('Loading more posts...')
}

const subscribeNewsletter = async () => {
  isSubscribing.value = true
  
  try {
    // Here you would normally send the email to your backend
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
    
    newsletterEmail.value = ''
    alert('Thank you for subscribing! Check your email for confirmation.')
  } catch (error) {
    alert('An error occurred. Please try again.')
  } finally {
    isSubscribing.value = false
  }
}

const resetFilters = () => {
  selectedCategory.value = 'All'
  searchQuery.value = ''
}
</script>
