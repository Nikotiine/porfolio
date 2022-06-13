<template>
  <section class="hero is-fullheight bg-accueil">
    <div class="accueil-body" id="home">
      <div class="accueil">
        <h1 class="title mt-6 has-font-ubuntu">Nicolas Godin</h1>
        <h2 class="subtitle">Developpeur Full-stack</h2>
      </div>
      <div :class="{ onload: isMounted, accueil: !isMounted }">
        <about-me />
      </div>
      <div
        :class="{ showFromRight: onScroll150, accueil: !onScroll150 }"
        class="mt-6"
      >
        <MyKnowledge />
      </div>
      <div :class="{ showFromLeft: onscrool450, accueil: !onscrool450 }">
        <training-course />
      </div>

      <div id="cv" :class="{ showMyCV: onScroll600, hidden: !onScroll600 }">
        <article class="message is-info">
          <div class="message-header">
            <p>Mon cv</p>
          </div>
          <div class="message-body">
            <router-view></router-view>
          </div>
        </article>
      </div>
      <div class="">
        <article class="message is-info">
          <div class="message-header">
            <p>Mes projet</p>
          </div>
          <div class="message-body">
            <router-view name="a" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import AboutMe from "@/components/accueil/AboutMe.vue";
import MyKnowledge from "@/components/accueil/Knowledge.vue";
import TrainingCourse from "@/components/accueil/TrainingCourse.vue";
//import MonCV from "@/views/MonCV.vue";
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
      onScroll150: false,
      onscrool450: false,
      onScroll600: false,
    };
  },

  methods: {
    showCard2: function () {
      const pos = window.scrollY;
      if (pos > 150) {
        this.onScroll150 = true;
      }

      if (pos > 450) {
        this.onscrool450 = true;
      }
      if (pos > 600) {
        this.onScroll600 = true;
        this.$router.push({
          path: "/cv-et-projet",
        });
      }
      if (pos > 1000) {
        this.onScroll900 = true;
      } else {
        this.onScroll900 = false;
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
  grid-template-rows: 0.5fr 1fr 1fr 1fr;
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
  left: -1300px;
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
  right: -1300px;
  transition: right ease-in-out 1.3s;
}
.showFromRight {
  position: relative;
  right: 0;
  grid-area: card2;
  margin: 0rem 0.5rem 1rem 0.5rem;
  min-width: 95%;
  transition: right ease-in-out 1.3s;
}
.accueil:nth-child(4) {
  grid-area: card3;
  position: relative;
  left: -1300px;
  transition: left ease-in-out 1.3s;
}
.showFromLeft {
  position: relative;
  left: 0;
  grid-area: card3;
  margin: 0rem 0.5rem 3rem 0.5rem;
  min-width: 95%;
  transition: left ease-in-out 1.3s;
}
.hidden {
  opacity: 0;
}
.showMyCV {
  padding: 0.5rem;
  margin: 0.5rem;
  opacity: 1;
  transition: opacity ease-in-out 2s;
  max-width: 95%;
}
</style>
