<template>
    <div>

      <!-- Slider -->
      <div class="custom-bg-image">
        <div class="relative isolate px-6 lg:px-8">
          <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
            <div class="text-center">
              <h1 class="slider-hed text-4xl sm:text-6xl font-bold text-white"> Ready to Design, Develop, and Deploy Your IoT Solution?</h1>
              <p class="mt-6 text-lg leading-8 text-white">IoT Expert: Designing, developing, and deploying cutting-edge IoT solutions with expertise in web development, applications, and networking services.</p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <nuxt-link to="/contact" class="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Get started</nuxt-link>
                <nuxt-link to="/about" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- About Section -->
      <div class="py-20">
        <div class="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div class="lg:w-1/2">
            <h2 class="text-3xl lg:text-4xl font-bold mb-6">About Us</h2>
            <p class="text-lg leading-relaxed mb-6">Welcome to IoT Expert, your trusted partner in creating transformative IoT solutions. At IoT Expert, we specialize in designing, developing, and deploying innovative IoT solutions tailored to meet your unique business needs. With our expertise in web development, application development, and networking services, we empower businesses to harness the full potential of IoT technology. Our dedicated team of professionals is committed to delivering robust, scalable, and secure solutions that drive efficiency, productivity, and growth. Whether you're looking to optimize operations, enhance customer experiences, or innovate with IoT, IoT Expert is here to guide you every step of the way. Join us on the journey to a smarter, connected future.
            </p>
            <nuxt-link to="/about" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read More About Our Company</nuxt-link>
          </div>
  
          <div class="lg:w-1/2 mt-8 lg:mt-0 lg:ml-10">
            <img src="/assets/images/about.webp" width="600px" height="485px" loading="lazy" alt="About Image">
          </div>
        </div>
      </div>

      <!-- Services Section -->
      <div class="bg-gray-900 text-white py-20">
        <div class="container mx-auto px-4 lg:px-8">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6 text-center">Our Services</h2>
          <p class="text-lg leading-relaxed mb-12 text-center">Empowering Your Digital Transformation</p>
          <div class="flex flex-wrap justify-center gap-8">
            <div class="bg-white shadow-lg rounded-lg p-6 w-72 text-center">
              <div class="flex justify-center">
                <img src="/assets/images/coding.webp" alt="Web Development" class="block mx-auto" width="64px" height="64px" />
              </div>
              <h3 class="text-black text-xl font-bold mb-4">Web Development</h3>
              <p class="text-gray-600">Crafting responsive, scalable, secure web applications driving business growth and brand success stories.</p>
            </div>
  
            <div class="bg-white shadow-lg rounded-lg p-6 w-72 text-center">
              <div class="flex justify-center">
                <img src="/assets/images/app-development.webp" alt="App Development" class="block mx-auto" width="64px" height="64px" />
              </div>
              <h3 class="text-black text-xl font-bold mb-4">App Development</h3>
              <p class="text-gray-600">Building intuitive, user-friendly mobile applications driving customer engagement and revenue growth.</p>
            </div>
  
            <div class="bg-white shadow-lg rounded-lg p-6 w-72 text-center">
              <div class="flex justify-center">
                <img src="/assets/images/cyber.webp" alt="Networking Services" class="block mx-auto" width="64px" height="64px" />
              </div>
              <h3 class="text-black text-xl font-bold mb-4">Networking Services</h3>
              <p class="text-gray-600">Designing, implementing, managing robust high-performance networks driving connectivity, collaboration.</p>
            </div>
          </div>
        </div>
      </div>


      <!-- Contact Section -->
      <div class="bg-white py-20">
        <div class="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12">
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
    head() {
      return {
        title: 'Home | IoT Expert',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Welcome to our IoT solutions company. We design, develop, and deploy IoT solutions tailored to your needs. Get started with us today!'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .custom-bg-image {
    background-image: url('/assets/images/slider-bg.webp?resize=1440');
    background-size: cover;
    background-position: center;
  }
  .slider-hed{
    line-height: 5rem;
  }
  @media only screen and (max-width: 600px) {
    .slider-hed{
    line-height: 3rem;
  }
}
  </style>
  