<template>
  <section class="py-20 bg-safari-beige">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl text-safari-green mb-4">
          Easy Booking & Payment Options
        </h2>
        <p class="text-safari-charcoal text-lg max-w-3xl mx-auto">
          Multiple ways to book and pay for your dream safari adventure
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Online Booking -->
        <div class="bg-white rounded-lg p-8 shadow-lg text-center">
          <div class="w-16 h-16 bg-safari-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-safari-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="font-serif text-xl text-safari-green mb-3">Online Booking</h3>
          <p class="text-safari-charcoal mb-6">
            Book directly through our website with instant confirmation and secure payment processing.
          </p>
          <button class="bg-safari-orange hover:bg-safari-orange/90 text-white px-6 py-2 rounded transition-colors">
            Book Now
          </button>
        </div>

        <!-- WhatsApp Booking -->
        <div class="bg-white rounded-lg p-8 shadow-lg text-center">
          <div class="w-16 h-16 bg-safari-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-safari-green" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 9.89-5.335 9.89-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          <h3 class="font-serif text-xl text-safari-green mb-3">WhatsApp Booking</h3>
          <p class="text-safari-charcoal mb-6">
            Chat with our safari experts on WhatsApp for personalized assistance and quick booking.
          </p>
          <a 
            href="https://wa.me/254123456789?text=Hi! I'd like to book a safari."
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-safari-green hover:bg-safari-green/90 text-white px-6 py-2 rounded transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>

        <!-- Phone Booking -->
        <div class="bg-white rounded-lg p-8 shadow-lg text-center">
          <div class="w-16 h-16 bg-safari-charcoal/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-safari-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 class="font-serif text-xl text-safari-green mb-3">Phone Booking</h3>
          <p class="text-safari-charcoal mb-6">
            Call our safari specialists directly for personalized consultation and immediate booking.
          </p>
          <a 
            href="tel:+254201234567"
            class="inline-block bg-safari-charcoal hover:bg-safari-charcoal/90 text-white px-6 py-2 rounded transition-colors"
          >
            Call Us Now
          </a>
        </div>
      </div>

      <!-- Payment Methods -->
      <div class="mt-16 text-center">
        <h3 class="font-serif text-2xl text-safari-green mb-6">Secure Payment Methods</h3>
        <div class="flex flex-wrap justify-center items-center gap-8">
          <div class="flex items-center space-x-2">
            <svg class="w-8 h-8 text-safari-charcoal" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
            </svg>
            <span class="text-safari-charcoal">Credit/Debit Cards</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-8 h-8 text-safari-charcoal" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span class="text-safari-charcoal">PayPal</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-8 h-8 text-safari-charcoal" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <span class="text-safari-charcoal">Bank Transfer</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-8 h-8 text-safari-charcoal" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.81.45 1.61 1.67 1.61 1.16 0 1.6-.64 1.6-1.46 0-.84-.68-1.22-1.88-1.54-1.68-.42-3.39-1.06-3.39-3.17 0-1.54 1.12-2.77 2.99-3.15V5h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.63-1.63-1.63-1.01 0-1.46.54-1.46 1.34 0 .95.64 1.22 1.84 1.55 1.68.42 3.43 1.04 3.43 3.16 0 1.65-1.21 2.93-3.07 3.33z"/>
            </svg>
            <span class="text-safari-charcoal">M-Pesa</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Booking integrations component
</script>
