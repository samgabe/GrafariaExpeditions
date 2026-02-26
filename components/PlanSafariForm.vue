<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-safari-green mb-4">
            Plan Your Dream Safari
          </h2>
          <p class="text-safari-charcoal text-lg">
            Let our experts craft the perfect safari experience tailored to your preferences
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="bg-safari-beige rounded-lg p-8 shadow-lg">
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Name -->
            <div>
              <label class="block text-safari-charcoal font-medium mb-2">Full Name *</label>
              <input 
                v-model="form.name"
                type="text" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-safari-charcoal font-medium mb-2">Email Address *</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <!-- Phone -->
            <div>
              <label class="block text-safari-charcoal font-medium mb-2">Phone Number</label>
              <input 
                v-model="form.phone"
                type="tel" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
                placeholder="+254 123 456 789"
              />
            </div>

            <!-- Travel Date -->
            <div>
              <label class="block text-safari-charcoal font-medium mb-2">Preferred Travel Date</label>
              <input 
                v-model="form.travelDate"
                type="date" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
              />
            </div>

            <!-- Duration -->
            <div>
              <label class="block text-safari-charcoal font-medium mb-2">Safari Duration</label>
              <select 
                v-model="form.duration"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
              >
                <option value="">Select Duration</option>
                <option value="3-5">3-5 Days</option>
                <option value="6-7">6-7 Days</option>
                <option value="8-10">8-10 Days</option>
                <option value="10+">10+ Days</option>
              </select>
            </div>

            <!-- Budget -->
            <div>
              <label class="block text-safari-charcoal font-medium mb-2">Budget Range (per person)</label>
              <select 
                v-model="form.budget"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
              >
                <option value="">Select Budget</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-2000">$1,000 - $2,000</option>
                <option value="2000-3000">$2,000 - $3,000</option>
                <option value="3000+">$3,000+</option>
              </select>
            </div>

            <!-- Destinations -->
            <div class="md:col-span-2">
              <label class="block text-safari-charcoal font-medium mb-2">Preferred Destinations</label>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                <label v-for="destination in destinations" :key="destination" class="flex items-center">
                  <input 
                    v-model="form.destinations"
                    type="checkbox" 
                    :value="destination"
                    class="mr-2 text-safari-orange focus:ring-safari-orange"
                  />
                  <span class="text-safari-charcoal">{{ destination }}</span>
                </label>
              </div>
            </div>

            <!-- Message -->
            <div class="md:col-span-2">
              <label class="block text-safari-charcoal font-medium mb-2">Additional Requirements</label>
              <textarea 
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
                placeholder="Tell us about your dream safari..."
              ></textarea>
            </div>
          </div>

          <div class="mt-8 text-center">
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="bg-safari-orange hover:bg-safari-orange/90 text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {{ isSubmitting ? 'Submitting...' : 'Request Safari Quote' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const isSubmitting = ref(false)

const form = ref({
  name: '',
  email: '',
  phone: '',
  travelDate: '',
  duration: '',
  budget: '',
  destinations: [],
  message: ''
})

const destinations = [
  'Masai Mara',
  'Amboseli',
  'Samburu',
  'Tsavo',
  'Lake Nakuru',
  'Aberdares'
]

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Here you would normally send the data to your backend
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      travelDate: '',
      duration: '',
      budget: '',
      destinations: [],
      message: ''
    }
    
    // Show success message
    alert('Thank you for your inquiry! We will contact you within 24 hours.')
  } catch (error) {
    alert('An error occurred. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
