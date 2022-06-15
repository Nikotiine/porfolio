<template>
  <section class="" id="projects">
    <div class="mes-projets">
      <div class="card" v-for="projet in projets" :key="projet.id">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-128x128">
                <img :src="projet.src" alt="Placeholder image" />
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
          <a :href="projet.lienGit" target="_blank" class="card-footer-item"
            >Voir sur GitHub</a
          >
          <a :href="projet.lienWeb" target="_blank" class="card-footer-item"
            >Visiter le site</a
          >
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
          lienGit: "https://github.com/Nikotiine/referencielGrimpe",
          lienWeb: "www.google.com",
          src: require("@/assets/img/logo_grimpe.png"),
          techno: "VueJs + Bulma + NodeJs(express)",
          sujet:
            "Application destinée aux grimpeurs afin de réferencer les differents sites d'escalade et les voies existantes , possiblité de creer un carnet de croix",
        },
        {
          id: 1,
          name: "Site Web Meta-homeopathie",
          typeDeProjet: "Projet concret",
          lienGit: "https://github.com/Nikotiine/genesisv2",
          lienWeb: "https://github.com/Nikotiine/backend-meta",
          src: require("@/assets/img/logo_genesis.png"),
          techno: "VueJs + Bulma + NodeJs(express)",
          sujet:
            "Site vitrine pour des formations en Meta-Homeopathie , et interface Admin + users pour le refill des produits ",
        },
        {
          id: 2,
          name: "BackEnd type Cli",
          typeDeProjet: "Side-project",
          lienGit: "https://github.com/Nikotiine/backendnodeJs",
          lienWeb: "www.googfdsfle.com",
          src: require("@/assets/img/logo_node.png"),
          techno: "NodeJs + Express + Sequelize + Mariadb",
          sujet:
            "Packtage pre-compilé pour faire un backend nodeJs avec mariaDb | autre ddb sql configurable ",
        },
        {
          id: 3,
          name: "Portfolio",
          typeDeProjet: "Projet concret",
          lienGit: "https://github.com/Nikotiine/porfolio",
          lienWeb: "www.googfdsfle.com",
          techno: "VueJs + bulma + chartjs",
          sujet: "Le code source de ce site  ",
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
@media screen and (max-width: 600px) {
  .mes-projets {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;
  }
}
</style>
