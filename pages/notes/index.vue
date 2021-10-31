<template>
  <div class="mt-11 lg:mx-48 lg:h-full">
    <h1 class="font-bold text-white mb-10 underline">
      All the notes
    </h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <div class="flex flex-col border-solid border border-white-400 p-8 mb-5">
          <NuxtLink :to="{ name: 'notes-slug', params: { slug: article.slug } }">
            <h2 class="font-bold font-colorful">
              {{ article.title }}
            </h2>
          </NuxtLink>
          <p class="font-regular text-gray-300 text-sm">
            {{ article.description }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>
