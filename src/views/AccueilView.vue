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
        :class="{ showFromRight: showMyKnowledge, accueil: !showMyKnowledge }"
        class="mt-6"
      >
        <MyKnowledge />
      </div>
      <div
        :class="{
          showFromLeft: showTraningCourse,
          accueil: !showTraningCourse,
        }"
      >
        <training-course />
      </div>

      <div id="cv" :class="{ 'my-cv': showMyCv, accueil: !showMyCv }">
        <article class="message is-info">
          <div class="message-header">
            <p>Mon cv</p>
          </div>
          <div class="message-body">
            <MonCV />
          </div>
        </article>
      </div>
      <div :class="{ 'my-projects': showMyProjects, accueil: !showMyProjects }">
        <article class="message is-info">
          <div class="message-header">
            <p>Mes projets</p>
          </div>
          <div class="message-body">
            <MesProjets />
          </div>
        </article>
      </div>
      <div class="contact" id="contact-form">
        <article class="message is-info">
          <div class="message-header">
            <p>Me contacter</p>
          </div>
          <div class="message-body">
            <formulaire-contact />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import FormulaireContact from "@/views/FormulaireContact.vue";
import AboutMe from "@/components/accueil/AboutMe.vue";
import MyKnowledge from "@/components/accueil/Knowledge.vue";
import TrainingCourse from "@/components/accueil/TrainingCourse.vue";
import MonCV from "@/views/MonCV.vue";
import MesProjets from "@/views/MesProjets.vue";
export default {
  name: "MonAccueil",
  components: {
    AboutMe,
    MyKnowledge,
    TrainingCourse,
    MonCV,
    MesProjets,
    FormulaireContact,
  },
  data() {
    return {
      isMounted: false,
      showMyKnowledge: false,
      showTraningCourse: false,
      showMyCv: false,
      showMyProjects: false,
    };
  },

  methods: {
    showCard2: function () {
      const pos = window.scrollY;
      if (pos > 150) {
        this.showMyKnowledge = true;
      }

      if (pos > 450) {
        this.showTraningCourse = true;
      }
      if (pos > 700) {
        this.showMyCv = true;
        this.$router.push({
          path: "/mon-cv",
        });
      }
      if (pos > 2300) {
        this.showMyProjects = true;
        this.$router.push({
          path: "/mes-projets",
        });
      }
    },
  },

  mounted() {
    setTimeout(() => {
      this.isMounted = !this.isMounted;
    }, 150);
    window.addEventListener("scroll", this.showCard2);
  },
  // created() {
  //   window.addEventListener("scroll", this.showCard2);
  // },
};
</script>

<style lang="scss" scoped>
.accueil-body {
  min-height: 150vh;
  display: grid;
  justify-items: center;
  //grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 0.4fr 0.3fr 0.3fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "titre "
    "card1"
    "card2"
    "card3"
    "card4"
    "card5"
    "card6";
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
.accueil:nth-child(5) {
  opacity: 0;
  grid-area: card4;
  width: 95%;
}
.accueil:nth-child(6) {
  opacity: 0;
  grid-area: card5;
  width: 95%;
}
.contact {
  grid-area: card6;
  min-width: 95%;
}
.my-cv {
  padding: 0.5rem;
  margin: 0.5rem;
  opacity: 1;
  transition: opacity ease-in-out 2s;
  max-width: 95%;
}
.my-projects {
  opacity: 1;
  grid-area: card5;
  width: 95%;
  transition: opacity ease-in-out 2s;
}
@media screen and (max-width: 480px) {
  .accueil-body {
    grid-template-rows: 0.3fr 0.3fr 0.1fr 0.1fr 1fr 0.5fr;
  }
}
</style>
