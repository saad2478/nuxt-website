<template>
    <div>
      <!-- Fixed Header -->
      <header class="bg-gray-900 text-white py-4 fixed top-0 w-full z-10 border-b-2 border-gray-800">
        <div class="container mx-auto px-4 lg:px-8 flex items-center justify-between">
          <!-- Logo (replace 'logo.svg' with your actual logo) -->
          <NuxtLink to="/">
            <img src="/assets/images/IoT-Png.webp" alt="Logo" class="h-20" />
          </NuxtLink>
  
          <!-- Desktop Menu -->
          <nav class="hidden lg:flex lg:space-x-10">
            <NuxtLink to="/" class="text-white hover:text-gray-300">Home</NuxtLink>
            <NuxtLink to="/about" class="text-white hover:text-gray-300">About Our Company</NuxtLink>
            <NuxtLink to="/services" class="text-white hover:text-gray-300">Services Offered</NuxtLink>
            <NuxtLink to="/contact" class="text-white hover:text-gray-300">Contact Us</NuxtLink>
          </nav>
  
          <!-- Hamburger Menu Icon (only visible on mobile) -->
          <button @click="isOpen = !isOpen" class="lg:hidden focus:outline-none">
            <svg class="w-6 h-6 text-gray-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
  
        <!-- Popup Menu -->
        <transition name="fade">
          <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-center z-20">
            <div class="bg-gray-900 text-white p-8 w-full h-full">
              <!-- Cancel Icon -->
              <button @click="closeMenu" class="absolute top-0 right-0 p-4">
                <svg class="w-6 h-6 text-white hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
  
              <!-- Navigation Links -->
              <nav class="mt-4">
                <ul class="space-y-4">
                  <!-- Adjusted menu item colors -->
                  <li><NuxtLink @click.native="closeMenu" to="/" class="text-white hover:text-gray-300 block py-2">Home</NuxtLink></li>
                  <li><NuxtLink @click.native="closeMenu" to="/about" class="text-white hover:text-gray-300 block py-2">About Our Company</NuxtLink></li>
                  <li><NuxtLink @click.native="closeMenu" to="/services" class="text-white hover:text-gray-300 block py-2">Services Offered</NuxtLink></li>
                  <li><NuxtLink @click.native="closeMenu" to="/contact" class="text-white hover:text-gray-300 block py-2">Contact Us</NuxtLink></li>
                </ul>
              </nav>
            </div>
          </div>
        </transition>
      </header>
  
      <!-- Main Content -->
      <div class="pt-24">
        <slot />
      </div>
  
      <!-- Footer -->
      <footer class="bg-gray-900 text-white py-4">
        <p class="text-center">Copyright © 2024 Saad Tariq | All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DefaultLayout',
    data() {
      return {
        isOpen: false // For toggling mobile menu
      }
    },
    methods: {
      closeMenu() {
        this.isOpen = false;
      }
    }
  }
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  