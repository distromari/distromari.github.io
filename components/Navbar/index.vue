<template>
  <nav class="flex flex-col p-12 align-left">
    <div>
      <nuxt-link to="/">
        <img src="~/assets/images/distromari-2.png" class="h-8" alt="Distromari">
      </nuxt-link>
    </div>
    <div class="mt-6">
      <ul class="list-none flex flex-col font-regular">
        <li class="text-white cursor-pointer">
          <nuxt-link to="/">
            Begin
          </nuxt-link>
        </li>
        <li class="text-white cursor-pointer mt-2">
          <nuxt-link to="/blog">
            Blog
          </nuxt-link>
        </li>
        <li class="text-white cursor-pointer mt-2">
          <nuxt-link to="/readme">
            Readme
          </nuxt-link>
        </li>
        <li class="text-white cursor-pointer mt-2">
          <nuxt-link to="/projects">
            Projects
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>
