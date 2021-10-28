<template>
  <div class="mt-11 lg:mx-48 lg:h-full text-white font-regular mb-40">
    <h1 class="font-bold underline text-white">
      Readme
    </h1>
    <div class="text-gray-300">
      <div>
        <p class="mt-5 mb-3">
          Distromari is just a simple nickname, distro + mari. With a conceptual meaning.
        </p>
      </div>
      <div class="about">
        <div>
          <p class="description">
            <span class="font-bold underline text-white mb-5">Mariana</span>
            <span class="mb-3 font-bold">Is a front-end developer.</span>
            <span>Is graduated. Work with website development, based in Brazil. Study technologies to build beautiful and well-structured applications.</span>
            <span class="font-bold mt-6">Technologies that are being learned:</span>
            <span class="mb-5">
              <ul>
                <li>HTML, JS, React.js, Vue.js, CSS, Less, Sass, Vuetify and Tailwind.</li>
              </ul>
            </span>
            <span>
              <ul class="mb-3">
                <li> > Enjoy study new things</li>
                <li> > Think that cats are adorable </li>
                <li> > Is interested in philosophy</li>
              </ul>
            </span>
            <span>*mari</span>
            <img src="@/assets/images/mari1.png" alt="distromari" class="cat-image mb-10">
            <span>*cat</span>
            <img src="@/assets/images/cat1.png" alt="distromari" class="cat-image opacity-80">
          </p>
        </div>
        <div>
          <span>*cat</span>
          <img src="@/assets/images/cat2.png" alt="distromari" class="image mb-9">
          <span>*mari</span>
          <img src="@/assets/images/mari2.jpg" alt="distromari" class="image mb-6">
        </div>
      </div>
      <div>
        <p class="font-bold underline text-white mb-5 mt-5">
          Contact
        </p>
        <p>marianahm010 @ gmail . com</p>
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
    width: 600px;
    opacity: 0.8;
    border-radius: 5px;
  }

  .description {
    display: flex;
    flex-direction: column;
  }

  .cat-image {
    width: 350px;
    border-radius: 5px;
  }

  @media (max-width: 1020px) {
    .about {
      flex-direction: column;
    }

    .about .image {
      width: 300px;
    }

    .description {
      margin-top: 50px;
    }
  }

  .description-about span {
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.7);
      padding: 10px;
  }

  .description-about span.spacer {
    padding:0 5px;
  }
</style>
