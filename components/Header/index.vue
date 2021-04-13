<template>
  <div class="w-full h-screen flex flex-col items-center background font-regular">
    <!-- <navbar class="fixed top-0 mt-10" /> -->
    <div class="flex flex-row items-center bg-gray-800 rounded-md border-solid border-2 border-indigo-400 p-8">
      <div class="w-12">
        <img src="~/assets/images/rabbit.png" alt="Rabbit">
      </div>
      <div class="p-2">
        <span class="text-white font-semibold text-sm">Hi 👋</span>
        <p class="text-white font-normal">
          I'm a brazilian Front-End Developer who loves the magic of building applications. 🧙‍♀️
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import Navbar from '../Navbar'
export default {
  components: {
    // Navbar
  }
}
</script>

<style lang="css">
  background {
    background: #202020;
  }
</style>
