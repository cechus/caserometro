<template>

  <div id="app" class="bg-gray-300 antialiased ">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/house">House</router-link> -->
    </div>
     <div class="flex bg-gray-100">
      <div class="px-8 py-12 max-w-sm mx-auto sm:max-w-xl lg:w-1/2 lg:max-w-full lg:py-24 lg:px-24">
        <div class="xl:max-w-lg xl:ml-auto">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
