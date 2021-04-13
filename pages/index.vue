<template>
  <div class="w-full h-full background bg-gray-800">
    <navbar />
    <custom-header class="fixed" />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import CustomHeader from '../components/Header'

export default {
  components: {
    CustomHeader,
    Navbar
  }
}
</script>

<style lang="css">
  background {
    background: #202020;
  }
</style>
