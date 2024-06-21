<template>
    <div>
      <!-- SEO: Title and Meta Description -->
      <nuxt-head>
        <title>Contact Us | IoT Expert</title>
        <meta name="description" content="Get in touch with us for any inquiries or support. Contact us via phone, email, or visit our office. We are here to help you." />
      </nuxt-head>
  
      <!-- Page Title Section -->
      <div class="bg-gray-900 text-white py-12 mt-3">
        <div class="container mx-auto px-4 lg:px-8">
          <h1 class="text-center text-2xl lg:text-3xl font-bold">Contact Us</h1>
        </div>
      </div>
  
      <!-- Main Content Section -->
      <div class="bg-white py-20">
        <div class="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">
          <!-- Contact Information -->
          <div class="lg:w-1/3">
            <h2 class="text-2xl font-bold mb-4 text-gray-900">Contact Information</h2>
            <ul class="space-y-4">
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span class="text-gray-700"><strong>Phone:</strong> +92 328 8520903</span>
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span class="text-gray-700"><strong>Email:</strong> info@iotexpert.pk</span>
              </li>
              <li class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span class="text-gray-700"><strong>Address:</strong> 1st floor, 578, Phase 8 Business District Bahria Town, Rawalpindi, Punjab</span>
              </li>
            </ul>
          </div>
  
          <!-- Contact Form -->
          <div class="lg:w-2/3">
            <h2 class="text-2xl font-bold mb-4 text-gray-900">Contact Us</h2>
            <form>
              <div class="mb-4">
                <label for="name" class="block text-gray-700 font-semibold">Name</label>
                <input type="text" id="name" name="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your name" required>
              </div>
              <div class="mb-4">
                <label for="email" class="block text-gray-700 font-semibold">Email</label>
                <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your email" required>
              </div>
              <div class="mb-4">
                <label for="message" class="block text-gray-700 font-semibold">Message</label>
                <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // You can add script logic if needed
  };
  </script>
  
  <style scoped>
  /* Scoped styles specific to this component */
  </style>
  