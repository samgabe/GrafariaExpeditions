<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Admin Header -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="font-serif text-3xl text-safari-green mb-2">Admin Dashboard</h1>
            <p class="text-safari-charcoal">Manage Grafiria Expeditions website content</p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="text-right">
              <p class="text-sm text-safari-charcoal">Welcome back,</p>
              <p class="font-medium text-safari-green">Admin User</p>
            </div>
            <div class="w-10 h-10 bg-safari-orange rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Overview -->
      <div class="grid md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-safari-charcoal mb-1">Total Bookings</p>
              <p class="text-2xl font-bold text-safari-green">156</p>
              <p class="text-xs text-safari-orange">+12% this month</p>
            </div>
            <div class="w-12 h-12 bg-safari-orange/20 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-safari-charcoal mb-1">Revenue</p>
              <p class="text-2xl font-bold text-safari-green">$45,280</p>
              <p class="text-xs text-safari-orange">+8% this month</p>
            </div>
            <div class="w-12 h-12 bg-safari-green/20 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-safari-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-safari-charcoal mb-1">Website Visitors</p>
              <p class="text-2xl font-bold text-safari-green">2,847</p>
              <p class="text-xs text-safari-orange">+23% this month</p>
            </div>
            <div class="w-12 h-12 bg-safari-charcoal/20 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-safari-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-safari-charcoal mb-1">Conversion Rate</p>
              <p class="text-2xl font-bold text-safari-green">3.2%</p>
              <p class="text-xs text-safari-orange">+0.5% this month</p>
            </div>
            <div class="w-12 h-12 bg-safari-beige/50 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Management Sections -->
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Bookings Management -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="font-serif text-xl text-safari-green">Recent Bookings</h2>
              <button class="text-safari-orange hover:text-safari-orange/80 text-sm">
                View All →
              </button>
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-gray-200">
                    <th class="text-left py-3 px-4 text-sm font-medium text-safari-charcoal">Customer</th>
                    <th class="text-left py-3 px-4 text-sm font-medium text-safari-charcoal">Package</th>
                    <th class="text-left py-3 px-4 text-sm font-medium text-safari-charcoal">Date</th>
                    <th class="text-left py-3 px-4 text-sm font-medium text-safari-charcoal">Status</th>
                    <th class="text-left py-3 px-4 text-sm font-medium text-safari-charcoal">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="booking in bookings" :key="booking.id" class="border-b border-gray-100 hover:bg-gray-50">
                    <td class="py-3 px-4">
                      <div class="flex items-center">
                        <div class="w-8 h-8 bg-safari-orange/20 rounded-full mr-3"></div>
                        <div>
                          <p class="font-medium text-safari-charcoal">{{ booking.customer }}</p>
                          <p class="text-xs text-gray-500">{{ booking.email }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="py-3 px-4 text-safari-charcoal">{{ booking.package }}</td>
                    <td class="py-3 px-4 text-safari-charcoal">{{ booking.date }}</td>
                    <td class="py-3 px-4">
                      <span :class="`px-2 py-1 rounded-full text-xs ${
                        booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                        booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`">
                        {{ booking.status }}
                      </span>
                    </td>
                    <td class="py-3 px-4 font-medium text-safari-charcoal">${{ booking.amount }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Content Management -->
          <div class="bg-white rounded-lg shadow-lg p-6 mt-8">
            <div class="flex items-center justify-between mb-6">
              <h2 class="font-serif text-xl text-safari-green">Content Management</h2>
              <button class="bg-safari-orange hover:bg-safari-orange/90 text-white px-4 py-2 rounded text-sm transition-colors">
                Add New Content
              </button>
            </div>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div v-for="content in contentItems" :key="content.id" 
                class="border border-gray-200 rounded-lg p-4 hover:border-safari-orange transition-colors">
                <div class="flex items-start justify-between">
                  <div>
                    <h3 class="font-medium text-safari-green mb-1">{{ content.title }}</h3>
                    <p class="text-sm text-safari-charcoal mb-2">{{ content.description }}</p>
                    <div class="flex items-center text-xs text-gray-500">
                      <span>{{ content.type }}</span>
                      <span class="mx-2">•</span>
                      <span>{{ content.lastUpdated }}</span>
                    </div>
                  </div>
                  <div class="flex space-x-2">
                    <button class="text-safari-orange hover:text-safari-orange/80">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button class="text-red-500 hover:text-red-600">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="space-y-8">
          <!-- Quick Actions -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="font-serif text-xl text-safari-green mb-6">Quick Actions</h2>
            <div class="space-y-3">
              <button class="w-full text-left px-4 py-3 bg-safari-beige/50 hover:bg-safari-beige rounded-lg transition-colors">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-safari-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <span class="text-safari-charcoal">Add New Safari Package</span>
                </div>
              </button>
              
              <button class="w-full text-left px-4 py-3 bg-safari-beige/50 hover:bg-safari-beige rounded-lg transition-colors">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-safari-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-safari-charcoal">Write Blog Post</span>
                </div>
              </button>
              
              <button class="w-full text-left px-4 py-3 bg-safari-beige/50 hover:bg-safari-beige rounded-lg transition-colors">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-safari-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span class="text-safari-charcoal">Manage Testimonials</span>
                </div>
              </button>
              
              <button class="w-full text-left px-4 py-3 bg-safari-beige/50 hover:bg-safari-beige rounded-lg transition-colors">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-safari-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="text-safari-charcoal">Site Settings</span>
                </div>
              </button>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h2 class="font-serif text-xl text-safari-green mb-6">Recent Activity</h2>
            <div class="space-y-4">
              <div v-for="activity in activities" :key="activity.id" class="flex items-start space-x-3">
                <div :class="`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'booking' ? 'bg-safari-orange' :
                  activity.type === 'content' ? 'bg-safari-green' :
                  'bg-safari-charcoal'
                }`"></div>
                <div class="flex-1">
                  <p class="text-sm text-safari-charcoal">{{ activity.description }}</p>
                  <p class="text-xs text-gray-500">{{ activity.time }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const bookings = [
  {
    id: 1,
    customer: 'John Doe',
    email: 'john@example.com',
    package: 'Masai Mara Explorer',
    date: 'Oct 15, 2024',
    status: 'Confirmed',
    amount: '899'
  },
  {
    id: 2,
    customer: 'Sarah Smith',
    email: 'sarah@example.com',
    package: 'Amboseli & Kilimanjaro',
    date: 'Oct 18, 2024',
    status: 'Pending',
    amount: '1299'
  },
  {
    id: 3,
    customer: 'Mike Johnson',
    email: 'mike@example.com',
    package: 'Samburu Special',
    date: 'Oct 20, 2024',
    status: 'Confirmed',
    amount: '1599'
  },
  {
    id: 4,
    customer: 'Emma Wilson',
    email: 'emma@example.com',
    package: 'Masai Mara Explorer',
    date: 'Oct 22, 2024',
    status: 'Cancelled',
    amount: '899'
  }
]

const contentItems = [
  {
    id: 1,
    title: 'Masai Mara Explorer Package',
    description: 'Update pricing and availability',
    type: 'Package',
    lastUpdated: '2 hours ago'
  },
  {
    id: 2,
    title: 'Great Migration Blog Post',
    description: 'Add new photos and update content',
    type: 'Blog',
    lastUpdated: '1 day ago'
  },
  {
    id: 3,
    title: 'Homepage Hero Section',
    description: 'Update promotional banner',
    type: 'Page',
    lastUpdated: '3 days ago'
  },
  {
    id: 4,
    title: 'Customer Testimonials',
    description: 'Add new reviews from recent clients',
    type: 'Testimonial',
    lastUpdated: '1 week ago'
  }
]

const activities = [
  {
    id: 1,
    type: 'booking',
    description: 'New booking received: Masai Mara Explorer',
    time: '10 minutes ago'
  },
  {
    id: 2,
    type: 'content',
    description: 'Blog post "Great Migration" published',
    time: '2 hours ago'
  },
  {
    id: 3,
    type: 'booking',
    description: 'Booking #1234 confirmed',
    time: '4 hours ago'
  },
  {
    id: 4,
    type: 'content',
    description: 'Homepage updated with new banner',
    time: '1 day ago'
  },
  {
    id: 5,
    type: 'booking',
    description: 'New inquiry from contact form',
    time: '2 days ago'
  }
]
</script>
