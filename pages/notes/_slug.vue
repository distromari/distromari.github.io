<template>
  <div class="mt-11 lg:mx-48 lg:h-full text-white font-regular mb-40">
    <article>
      <h1 class="text-white mb-5 underline font-bold">
        {{ article.title }}
      </h1>
      <nuxt-content :document="article" class="text-justify text-gray-300" />
      <p>Post created at: {{ formatDate(article.createdAt) }}</p>
    </article>
  </div>
</template>

<script>
import '@/assets/scss/main.scss'
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },

  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
