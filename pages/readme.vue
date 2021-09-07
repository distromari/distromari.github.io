<template>
  <div class="mt-14 lg:mx-48 lg:h-full text-white font-regular mb-40">
    <h1 class="font-bold underline text-white">
      Readme
    </h1>
    <div class="text-gray-300">
      <div>
        <p class="mt-5 mb-8">
          Distromari is just a simple nickname, distro + mari. With a conceptual meaning.
        </p>
      </div>
      <div class="about">
        <div>
          <img src="@/assets/images/me.png" alt="distromari" class="image">
        </div>
        <div>
          <p class="description">
            <span class="font-bold underline text-white mb-5">Mariana</span>
            <span class="mb-3 font-bold">Is a front-end developer.</span>
            <span>
              <ul class="mb-3">
                <li> > Enjoy study new things</li>
                <li> > Think cats are adorable </li>
                <li> > Is learning to draw</li>
                <li> > Is interested in philosophy</li>
              </ul>
            </span>
            <span>Is graduated and work with website development, based in Brazil. Study technologies in order to build beautiful and well-structured applications.</span>
            <span class="mt-5 font-bold">Technologies that are being learned:</span>
            <span>
              <ul>
                <li>HTML, JS, React.js, Vue.js, CSS, Less, Sass, Vuetify and Tailwind.</li>
              </ul>
            </span>
            <span class="font-bold underline text-white mt-5 mb-6">Cat</span>
            <img src="@/assets/images/cat.png" alt="distromari" class="cat-image">
          </p>
        </div>
      </div>
      <div>
        <p class="font-bold underline text-white mb-5 mt-5">Contact</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="css">
  background {
    background: #202020;
  }

  .about {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .about-description {
    position: absolute;
    width: 100%;
  }

  .about .image {
    width: 950px;
    opacity: 0.8;
    border-radius: 5px;
  }

  .description {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
  }

  .cat-image {
    width: 400px;
    border-radius: 5px;
  }

  @media (max-width: 1020px) {
    .about {
      flex-direction: column;
    }

    .about .image {
      width: 400px;
    }

    .description {
      margin-top: 50px;
    }
  }

  /* .image-about {
    position: relative;
    width: 100%;
  }

  .description-about {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  } */

  .description-about span {
      /* color: white; */
      /* font: bold 24px/45px Helvetica, Sans-Serif; */
      /* letter-spacing: -1px; */
      background: rgb(0, 0, 0); /* fallback color */
      background: rgba(0, 0, 0, 0.7);
      padding: 10px;
  }

  .description-about span.spacer {
    padding:0 5px;
  }
</style>
