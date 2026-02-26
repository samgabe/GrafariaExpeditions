<template>
  <div class="min-h-screen bg-safari-beige">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-12">
        <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl text-safari-green mb-4">
          Contact Us
        </h1>
        <p class="text-safari-charcoal text-lg max-w-3xl mx-auto">
          Get in touch with our safari experts to start planning your dream African adventure
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-lg p-8 shadow-lg">
          <h2 class="font-serif text-2xl text-safari-green mb-6">Send Us a Message</h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-safari-charcoal font-medium mb-2">First Name *</label>
                <input 
                  v-model="form.firstName"
                  type="text" 
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label class="block text-safari-charcoal font-medium mb-2">Last Name *</label>
                <input 
                  v-model="form.lastName"
                  type="text" 
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>

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

            <div>
              <label class="block text-safari-charcoal font-medium mb-2">Phone Number</label>
              <input 
                v-model="form.phone"
                type="tel" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
                placeholder="+254 123 456 789"
              />
            </div>

            <div>
              <label class="block text-safari-charcoal font-medium mb-2">Subject *</label>
              <select 
                v-model="form.subject"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="safari-inquiry">Safari Inquiry</option>
                <option value="booking">Booking Request</option>
                <option value="information">General Information</option>
                <option value="feedback">Feedback</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            <div>
              <label class="block text-safari-charcoal font-medium mb-2">Message *</label>
              <textarea 
                v-model="form.message"
                rows="6"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
                placeholder="Tell us about your safari dreams..."
              ></textarea>
            </div>

            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-safari-orange hover:bg-safari-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Office Information -->
          <div class="bg-white rounded-lg p-8 shadow-lg">
            <h2 class="font-serif text-2xl text-safari-green mb-6">Get in Touch</h2>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-safari-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin class="w-6 h-6 text-safari-orange" />
                </div>
                <div>
                  <h3 class="font-semibold text-safari-green mb-1">Office Location</h3>
                  <p class="text-safari-charcoal">
                    Grafiria Expeditions Headquarters<br>
                    Westlands, Nairobi<br>
                    Kenya
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-safari-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone class="w-6 h-6 text-safari-orange" />
                </div>
                <div>
                  <h3 class="font-semibold text-safari-green mb-1">Phone Numbers</h3>
                  <p class="text-safari-charcoal">
                    Main: +254 (0) 40 123 4567<br>
                    Mobile: +254 712 345 678<br>
                    Toll-free: 0800-123-456
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-safari-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail class="w-6 h-6 text-safari-orange" />
                </div>
                <div>
                  <h3 class="font-semibold text-safari-green mb-1">Email Addresses</h3>
                  <p class="text-safari-charcoal">
                    General: info@gonomadsafaris.com<br>
                    Bookings: bookings@gonomadsafaris.com<br>
                    Support: support@gonomadsafaris.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Business Hours -->
          <div class="bg-white rounded-lg p-8 shadow-lg">
            <h2 class="font-serif text-2xl text-safari-green mb-6">Business Hours</h2>
            
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-safari-charcoal">Monday - Friday</span>
                <span class="text-safari-charcoal font-medium">8:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-safari-charcoal">Saturday</span>
                <span class="text-safari-charcoal font-medium">9:00 AM - 4:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-safari-charcoal">Sunday</span>
                <span class="text-safari-charcoal font-medium">10:00 AM - 2:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-safari-charcoal">Public Holidays</span>
                <span class="text-safari-charcoal font-medium">10:00 AM - 2:00 PM</span>
              </div>
            </div>
          </div>

          <!-- Quick Contact -->
          <div class="bg-white rounded-lg p-8 shadow-lg">
            <h2 class="font-serif text-2xl text-safari-green mb-6">Quick Contact Options</h2>
            
            <div class="space-y-4">
              <a 
                href="https://wa.me/254123456789?text=Hi! I'd like to inquire about a safari."
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 9.89-5.335 9.89-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
              
              <a 
                href="tel:+254201234567"
                class="flex items-center justify-center w-full bg-safari-charcoal hover:bg-safari-charcoal/90 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Phone class="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MapPin, Phone, Mail } from 'lucide-vue-next'

const isSubmitting = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Here you would normally send the data to your backend
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    
    // Show success message
    alert('Thank you for your message! We will contact you within 24 hours.')
  } catch (error) {
    alert('An error occurred. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
