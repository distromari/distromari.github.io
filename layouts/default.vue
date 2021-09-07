<template>
  <div class="flex flex-col min-h-screen justify-between bg-black">
    <div class="lg:pl-10 lg:pr-10 md:pl-10 container">
      <Navbar />
      <Nuxt />
    </div>
    <Footer class="pl-16 pr-40" />
  </div>
</template>

<style>
.container {
  display: flex;
}

@media (max-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
    padding: 0 50px 50px 50px;
  }
}
</style>
