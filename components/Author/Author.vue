<template>
  <div class="flex items-center mt-8">
    <div class="mr-3">
      <img :src="author.image" class="rounded-full border-2 border-indigo-400 w-12 h-12 object-cover">
    </div>
    <div>
      <p class="text-sm">
        {{ author.name }}
      </p>
      <p class="text-xs">
        {{ author.bio }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>
