<template>
  <section class="hero">
    <div class="mon-cv">
      <div class="left-part mt-5">
        <div class="me">
          <h1 class="title">Godin Nicolas</h1>
          <p class="subtitle font-ubuntu">Développeur Web <br />Full-stack</p>
        </div>
        <div class="contact mt-4">
          <h3 class="title is-5">Info Contact</h3>
          <figure class="image is-32x32">
            <img src="@/assets/img/logo_link.png" />
          </figure>

          <p class="subtitle is-6 mt-3">
            <a href="https://www.linkedin.com/in/nikolasgodin/"
              >Profil Linkedin</a
            >
          </p>
        </div>
        <div class="objectif mt-5">
          <h3 class="title is-5">Mes objectifs</h3>
          <p class="subtitle is-6">
            Ambulancier en reconversion développement web. Fort de nombreuses
            expériences professionnelles, je m'adapte rapidement à mon poste et
            au travail d’équipe
          </p>
        </div>
        <div class="interets mt-5">
          <h3 class="title is-5">Mes centres d'intérêts</h3>
          <p class="subtitle is-6">
            Escalade et alpinisme <br />
            Randonnée alpine<br />
            Jeux de societés
          </p>
        </div>
        <div class="langue mt-5">
          <h3 class="title is-5">Langues</h3>
          <p class="subtitle is-6">Anglais</p>
        </div>
      </div>
      <div class="right-part mt-5">
        <div class="formations">
          <h3 class="title is-3 font-ubuntu">Formations</h3>
          <mes-formations />
        </div>
        <div class="competence">
          <h3 class="title is-3 font-ubuntu">Compétences</h3>
          <chart-of-competences />
        </div>
        <div class="experience mt-6">
          <h3 class="title is-3 font-ubuntu">Expériences professionnelles</h3>
          <experiances-pro />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MesFormations from "@/components/cv/MesFormations.vue";
import ExperiancesPro from "@/components/cv/ExperiancesPro.vue";
import chartOfCompetences from "@/components/cv/ChartsCompetence.vue";
export default {
  name: "MonCV",
  components: {
    MesFormations,
    ExperiancesPro,
    chartOfCompetences,
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.mon-cv {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "left-part right-part";
}

.objectif p {
  padding: 0.3rem 1.3rem;
}
.competence h3 {
  margin: 1rem auto 0;
}
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left-part {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3rem;
}
@media screen and (max-width: 600px) {
  .mon-cv {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 1fr;
    grid-template-areas:
      "left-part"
      "right-part";
  }
  .left-part {
    justify-content: flex-start;
  }
}
</style>
