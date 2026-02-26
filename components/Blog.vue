<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-safari-green mb-4">
          Safari Stories & Tips
        </h2>
        <p class="text-safari-charcoal text-lg max-w-3xl mx-auto">
          Discover expert insights, travel tips, and amazing stories from our safari adventures
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="post in blogPosts" :key="post.id" 
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

      <div class="text-center mt-12">
        <button class="bg-safari-orange hover:bg-safari-orange/90 text-white px-8 py-3 rounded-lg transition-colors">
          View All Blog Posts
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const blogPosts = [
  {
    id: 1,
    title: 'Best Time to Visit Kenya for Safari',
    excerpt: 'Discover the optimal seasons for wildlife viewing, weather patterns, and crowd levels to plan your perfect Kenya safari adventure.',
    image: 'https://images.unsplash.com/photo-1571950484792-c2cbbee9c88b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMHNhZmFyaSUyMHRyYXZlbCUyMGJsb2d8ZW58MXx8fHwxNzU5NzMzMTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Travel Tips',
    author: {
      name: 'John Kamau',
      avatar: 'https://images.unsplash.com/photo-1700764979779-a0ee565e736c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  },
  {
    id: 2,
    title: 'Top 5 Safari Photography Tips',
    excerpt: 'Master the art of wildlife photography with expert tips on equipment, composition, and timing for stunning safari shots.',
    image: 'https://images.unsplash.com/photo-1668701644378-209c3e9f7e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd2lsZGxpZmUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTk3MzMxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Photography',
    author: {
      name: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1560162071-8bda5b511851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5vbnltb3VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D'
    }
  },
  {
    id: 3,
    title: 'What to Pack for Your Kenya Safari',
    excerpt: 'A comprehensive packing guide covering essential items, clothing recommendations, and gear for different safari experiences.',
    image: 'https://images.unsplash.com/photo-1485809052957-5113b0ff51af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwZ2VhcnxlbnwwfHwwfHx8MA%3D%3D?w=1080&h=720&fit=crop',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Travel Tips',
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1700764979779-a0ee565e736c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  }
]
</script>
