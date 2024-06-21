<template>
    <div>
      <!-- SEO: Title and Meta Description -->
      <nuxt-head>
        <title>Our Services | IoT Expert</title>
        <meta name="description" content="Discover our range of services including web development, app development, and networking services. We provide top-notch solutions to meet your business needs." />
      </nuxt-head>
  
      <!-- Page Title Section -->
      <div class="bg-gray-900 text-white py-12 mt-3">
        <div class="container mx-auto px-4 lg:px-8">
          <h1 class="text-center text-2xl lg:text-3xl font-bold">Our Services</h1>
        </div>
      </div>
  
      <!-- Main Content Section -->
      <div class="py-20">
        <div class="container mx-auto px-4 lg:px-8">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6 text-center">Our Services</h2>
          <p class="text-lg leading-relaxed mb-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="flex flex-wrap justify-center gap-8">
            <!-- Web Development Service -->
            <div class="bg-white shadow-lg rounded-lg p-6 w-72 text-center">
              <div class="flex justify-center">
                <img src="/assets/images/coding.png" alt="Web Development" class="block mx-auto" />
              </div>
              <h3 class="text-black text-xl font-bold mb-4">Web Development</h3>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
  
            <!-- Application Development Service -->
            <div class="bg-white shadow-lg rounded-lg p-6 w-72 text-center">
              <div class="flex justify-center">
                <img src="/assets/images/app-development.png" alt="App Development" class="block mx-auto" />
              </div>
              <h3 class="text-black text-xl font-bold mb-4">App Development</h3>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
  
            <!-- Networking Services -->
            <div class="bg-white shadow-lg rounded-lg p-6 w-72 text-center">
              <div class="flex justify-center">
                <img src="/assets/images/cyber.png" alt="Networking Services" class="block mx-auto" />
              </div>
              <h3 class="text-black text-xl font-bold mb-4">Networking Services</h3>
              <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
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
  