<template>
  <section class="hero is-fullheight bg-accueil">
    <div class="accueil-body">
      <div class="accueil">
        <h1 class="title mt-6 has-font-ubuntu">Nicolas Godin</h1>
        <h2 class="subtitle">Developpeur Full-stack</h2>
      </div>
      <div :class="{ onload: isMounted, accueil: !isMounted }">
        <about-me />
      </div>
      <div
        :class="{ showFromRight: onScroll350, accueil: !onScroll350 }"
        class="mt-6"
      >
        <MyKnowledge />
      </div>
      <div :class="{ showFromLeft: onScroll600, accueil: !onScroll600 }">
        <training-course />
      </div>
    </div>
  </section>
</template>

<script>
import AboutMe from "@/components/accueil/AboutMe.vue";
import MyKnowledge from "@/components/accueil/Knowledge.vue";
import TrainingCourse from "@/components/accueil/TrainingCourse.vue";
export default {
  name: "MonAccueil",
  components: {
    AboutMe,
    MyKnowledge,
    TrainingCourse,
  },
  data() {
    return {
      isMounted: false,
      onScroll350: false,
      onScroll600: false,
    };
  },

  methods: {
    showCard2: function () {
      const pos = window.scrollY;
      if (pos > 350) {
        this.onScroll350 = true;
      } else {
        this.onScroll350 = false;
      }

      if (pos > 540) {
        this.onScroll600 = true;
      } else {
        this.onScroll600 = false;
      }
    },
  },

  mounted() {
    setTimeout(() => {
      this.isMounted = !this.isMounted;
    }, 150);
  },
  created() {
    window.addEventListener("scroll", this.showCard2);
  },
};
</script>

<style lang="scss" scoped>
.accueil-body {
  min-height: 150vh;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 22% 26% 26% 26%;
  grid-template-areas:
    "titre "
    "card1"
    "card2"
    "card3";
}
.accueil:nth-child(1) {
  grid-area: titre;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.accueil:nth-child(2) {
  position: relative;
  left: -999px;
}
.onload {
  position: relative;
  left: 0;
  grid-area: card1;
  margin: 0rem 0.5rem 5rem 0.5rem;
  max-width: 95%;
  transition: left ease-in-out 1.3s;
}
.accueil:nth-child(3) {
  position: relative;
  right: -999px;
  transition: right ease-in-out 1.3s;
}
.showFromRight {
  position: relative;
  right: 0;
  grid-area: card2;
  margin: 0rem 0.5rem 5rem 0.5rem;
  min-width: 95%;
  transition: right ease-in-out 1.3s;
}
.accueil:nth-child(4) {
  grid-area: card3;
  position: relative;
  left: -999px;
  transition: left ease-in-out 1.3s;
}
.showFromLeft {
  position: relative;
  left: 0;
  grid-area: card3;
  margin: 0rem 0.5rem 5rem 0.5rem;
  min-width: 95%;
  transition: left ease-in-out 1.3s;
}
</style>
