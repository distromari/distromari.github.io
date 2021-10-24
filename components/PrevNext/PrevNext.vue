<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'notes-slug', params: { slug: prev.slug } }"
      class="font-bold text-primary hover:underline text-white"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>prev</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'notes-slug', params: { slug: next.slug } }"
      class="font-bold hover:underline text-white"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>next</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
