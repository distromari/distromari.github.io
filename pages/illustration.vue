</<template>
  <div class="mt-14 lg:mx-48 lg:h-full mb-12">
    <h1 class="font-bold text-white mb-10">
      <span class="underline">Illustrations</span>
    </h1>
    <h1 class="text-white font-bold mb-5">Digital</h1>
    <div class="illustrations">
      <img src="@/assets/images/illustrations/art1.png" alt="Rabbit in pixel" class="image">
      <img src="@/assets/images/illustrations/art2.png" alt="Rabbit in pixel" class="image">
      <img src="@/assets/images/illustrations/art4.png" alt="Rabbit in pixel" class="image">
      <img src="@/assets/images/illustrations/art3.png" alt="Rabbit in pixel" class="image">
    </div>
    <h1 class="text-white font-bold mt-16 mb-5">Pixel</h1>
    <div class="illustrations-pixel">
      <img src="@/assets/images/illustrations/man-pixel.png" alt="Man in pixel" class="image">
      <img src="@/assets/images/illustrations/rabbit-pixel.png" alt="Rabbit in pixel" class="image">
      <img src="@/assets/images/illustrations/cat-pixel.png" alt="Rabbit in pixel" class="image">
    </div>
  </div>
</template>

<style>
  .illustrations {
    grid-column: 2 / 4;
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-gap: 2em;
    grid-template-columns: 470px 470px;
  }

  .illustrations-pixel {
    grid-column: 2 / 4;
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-gap: 2em;
    grid-template-columns: 300px 300px 300px;
  }

  .illustrations img {
    border-radius: 5px;
  }

  .illustrations-pixel img {
    border-radius: 5px;
  }

  @media (max-width: 1020px) {
    .illustrations {
      grid-column: 1 / 4;
      width: 100%;
      box-sizing: border-box;
      display: grid;
      grid-gap: 2em;
      grid-template-columns: 400px;
    }
  }
</style>
