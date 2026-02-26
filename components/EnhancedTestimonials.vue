<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-safari-green mb-4">
          What Our Travelers Say
        </h2>
        <p class="text-safari-charcoal text-lg max-w-3xl mx-auto">
          Real stories from real adventurers who experienced the magic of Kenya with Grafiria Expeditions
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.id" 
          class="bg-safari-beige rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex items-center mb-4">
            <ImageWithFallback 
              :src="testimonial.avatar" 
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <h4 class="font-serif text-safari-green">{{ testimonial.name }}</h4>
              <p class="text-sm text-safari-charcoal">{{ testimonial.location }}</p>
            </div>
          </div>
          
          <div class="flex mb-3">
            <span v-for="i in 5" :key="i" 
              :class="i <= testimonial.rating ? 'text-safari-orange' : 'text-gray-300'"
              class="text-lg">★</span>
          </div>
          
          <p class="text-safari-charcoal italic mb-4">"{{ testimonial.content }}"</p>
          
          <div class="text-sm text-safari-charcoal">
            <strong>{{ testimonial.package }}</strong> • {{ testimonial.date }}
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <button class="bg-safari-orange hover:bg-safari-orange/90 text-white px-6 py-3 rounded-lg transition-colors">
          Read More Reviews
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1560162071-8bda5b511851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5vbnltb3VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
    rating: 5,
    content: 'Absolutely incredible experience! The guides were knowledgeable, the accommodations were luxurious, and we saw all the Big Five. GoNomad made our honeymoon unforgettable.',
    package: 'Masai Mara Explorer',
    date: 'October 2024'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'San Francisco, USA',
    avatar: 'https://images.unsplash.com/photo-1700764979779-a0ee565e736c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    content: 'The photography safari exceeded all expectations! Our guide knew exactly where to find the best shots and the timing was perfect. Can\'t wait to book again.',
    package: 'Samburu Special',
    date: 'September 2024'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    location: 'Sydney, Australia',
    avatar: 'https://images.unsplash.com/photo-1560162071-8bda5b511851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5vbnltb3VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
    rating: 5,
    content: 'Amazing family safari! The kids loved every moment, and the staff went above and beyond to make us comfortable. The Great Migration was breathtaking.',
    package: 'Amboseli & Kilimanjaro View',
    date: 'August 2024'
  },
  {
    id: 4,
    name: 'David Rodriguez',
    location: 'Madrid, Spain',
    avatar: 'https://images.unsplash.com/photo-1700764979779-a0ee565e736c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    content: 'Professional, reliable, and absolutely fantastic! The attention to detail and personalized service made this trip special. Highly recommend!',
    package: 'Masai Mara Explorer',
    date: 'July 2024'
  },
  {
    id: 5,
    name: 'Lisa Wang',
    location: 'Toronto, Canada',
    avatar: 'https://images.unsplash.com/photo-1560162071-8bda5b511851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5vbnltb3VzJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
    rating: 5,
    content: 'The cultural experiences combined with wildlife viewing was perfect. Our guide taught us so much about Maasai culture. Truly immersive!',
    package: 'Samburu Special',
    date: 'June 2024'
  },
  {
    id: 6,
    name: 'James Wilson',
    location: 'Dublin, Ireland',
    avatar: 'https://images.unsplash.com/photo-1700764979779-a0ee565e736c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    content: 'From the moment we booked until we returned home, everything was perfect. The team took care of every detail. Worth every penny!',
    package: 'Tsavo Adventure',
    date: 'May 2024'
  }
]
</script>
