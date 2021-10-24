<template>
  <nav class="mt-11 font-sans antialiased">
    <div class="flex flex-row justify-between">
      <div>
        <nuxt-link to="/">
          <img src="~/assets/images/distromari-2.png" class="h-7" alt="Distromari">
        </nuxt-link>
      </div>
      <div class="lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light text-white border-white" @click="toggle">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="mt-6">
        <ul class="list-none flex flex-col font-regular">
          <li class="text-white cursor-pointer hover:underline">
            <nuxt-link to="/">
              Begin
            </nuxt-link>
          </li>
          <li class="text-white cursor-pointer mt-2 hover:underline">
            <nuxt-link to="/notes">
              Notes
            </nuxt-link>
          </li>
          <li class="text-white cursor-pointer mt-2 hover:underline">
            <nuxt-link to="/readme">
              Readme
            </nuxt-link>
          </li>
          <li class="text-white cursor-pointer mt-2 hover:underline">
            <nuxt-link to="/projects">
              Projects
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>

<style>
.link:hover {
  text-decoration: underline;
}
</style>
