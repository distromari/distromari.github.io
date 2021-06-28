<template>
  <div class="w-full h-screen flex flex-col items-center font-regular">
    <!-- <navbar class="fixed top-0 mt-10" /> -->
    <h1 class="text-white">
      Latests Posts
    </h1>
    <div v-for="article in article" :key="article.slug">
      <nuxt-link :to="article.path">
        {{ article.title }}
        <p>{{ article.description }}</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .sortBy('title')
      .fetch()
    // eslint-disable-next-line no-console
    console.log('articles', articles)
    return { articles }
  }
}
</script>

<style lang="css">
  background {
    background: #202020;
  }
</style>
