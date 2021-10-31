<template>
  <div class="flex flex-col min-h-screen justify-between bg-black">
    <div class="lg:pl-10 lg:pr-10 md:pl-10 container">
      <Navbar />
      <Nuxt />
    </div>
    <Footer class="pl-10 pr-40" />
  </div>
</template>

<script>
import '@/assets/scss/main.scss'
export default {
}
</script>
