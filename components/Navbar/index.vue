<template>
  <nav class="flex flex-col p-12">
    <span>
      <img src="~/assets/images/m.png" class="w-10" alt="Rabbit">
    </span>

    <div>
      <ul class="list-none flex flex-col font-regular">
        <li class="text-white mx-5 cursor-pointer">
          <nuxt-link to="/">
            Begin
          </nuxt-link>
        </li>
        <li class="text-white mx-5 cursor-pointer">
          <nuxt-link to="/blog">
            Blog
          </nuxt-link>
        </li>
        <li class="text-white mx-5 cursor-pointer">
          <nuxt-link to="/readme">
            Readme
          </nuxt-link>
        </li>
        <li class="text-white mx-5 cursor-pointer">
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
