<template>
  <section class="" id="projects">
    <div class="mes-projets">
      <div class="card" v-for="projet in projets" :key="projet.id">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ projet.name }}</p>
              <p class="subtitle is-6">{{ projet.typeDeProjet }}</p>
            </div>
          </div>

          <div class="content">
            {{ projet.techno }} <br />
            {{ projet.sujet }}
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Voir sur GitHub</a>
          <a href="#" class="card-footer-item">Visiter le site</a>
        </footer>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MesProjets",
  data() {
    return {
      projets: [
        {
          id: 0,
          name: "Referenciel grimpe",
          typeDeProjet: "Side-project",
          lienGit: "http......",
          lienWeb: "www.google.com",
          techno: "VueJs + Bulma + NodeJs(express)",
          sujet:
            "Application destine aux grimpeurs afin de reference les differents site d'escalade et les voies existante , possiblite de creer un carnet de croix",
        },
        {
          id: 1,
          name: "Site Web Meta-homeopathie",
          typeDeProjet: "Projet concret",
          lienGit: "http....dsfsd..",
          lienWeb: "www.googfdsfle.com",
          techno: "VueJs + Bulma + NodeJs(express)",
          sujet:
            "Site vitrine pour des formations en Meta-Homeopathie , et interface Admin et users pour le refill des produits ",
        },
        {
          id: 2,
          name: "BackEnd type Cli",
          typeDeProjet: "Side-project",
          lienGit: "http....dsfsd..",
          lienWeb: "www.googfdsfle.com",
          techno: "NodeJs + Express + Sequelize + Mariadb",
          sujet:
            "Packtage pre-compile pour faire un backend nodeJs pre-amorce mariaDb ",
        },
        {
          id: 3,
          name: "Portfolio",
          typeDeProjet: "Projet concret",
          lienGit: "http....dsfsd..",
          lienWeb: "www.googfdsfle.com",
          techno: "VueJs + bulma + chartjs",
          sujet: "Le code sources de ce site :) ",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.mes-projets {
  display: grid;
  //grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(300px, 23%));
  gap: 2rem;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
