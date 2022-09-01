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
          <a :href="projet.lienGit" target="_blank" class="card-footer-item">{{
            projet.item1
          }}</a>
          <a :href="projet.lienWeb" target="_blank" class="card-footer-item">{{
            projet.item2
          }}</a>
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
          name: "Carnet de croix",
          typeDeProjet: "Side-project",
          item1: "Repo Front-end",
          item2: "Repo Back-end ",
          lienGit: "https://github.com/Nikotiine/referencielGrimpe",
          lienWeb:
            "https://github.com/Nikotiine/referencielGrimpe/blob/main/README.md",
          src: require("@/assets/img/logo_grimpe.png"),
          techno: "VueJs + Bulma + NodeJs(express)",
          sujet:
            "Application destinée aux grimpeurs afin de réferencer les differents sites d'escalade et les voies existantes , possiblité de creer un carnet de croix.",
        },
        {
          id: 1,
          name: "Site Web Meta-homeopathie",
          typeDeProjet: "Projet concret",
          item1: "Repo Front-end",
          item2: "Lien Site-Web (beta) ",
          lienGit: "https://github.com/Nikotiine/genesisv2",
          lienWeb: "https://genesis.nicolas-godin.fr/",
          src: require("@/assets/img/logo_genesis.png"),
          techno: "VueJs + Bulma + NodeJs(express)",
          sujet:
            "Site vitrine pour des formations en Meta-Homeopathie , et interface Admin + users pour le refill des produits.",
        },
        {
          id: 2,
          name: "BackEnd type Cli",
          typeDeProjet: "Side-project",
          item1: "Repo Github",
          item2: "Repo Github",
          lienGit: "https://github.com/Nikotiine/backendnodeJs",
          lienWeb: "https://github.com/Nikotiine/backendnodeJs",
          src: require("@/assets/img/logo_node.png"),
          techno: "NodeJs + Express + Sequelize + Mariadb",
          sujet:
            "Packtage pre-compilé pour faire un backend nodeJs avec mariaDb | autre ddb sql configurable.",
        },
        {
          id: 3,
          name: "Portfolio",
          typeDeProjet: "Projet concret",
          item1: "Repo Front-end",
          item2: "Site Web ",
          lienGit: "https://github.com/Nikotiine/porfolio",
          lienWeb: "https://nicolas-godin.fr/",
          src: require("@/assets/img/logo_vue.png"),
          techno: "VueJs + bulma + chartjs",
          sujet: "Le code source de ce site.",
        },
        {
          id: 4,
          name: "NodeJs mini-backend",
          typeDeProjet: "Projet concret",
          item1: "Repo Github",
          item2: "Repo Github",
          lienGit: "https://github.com/Nikotiine/forContactFrom",
          lienWeb:
            "https://github.com/Nikotiine/forContactFrom/blob/main/readme.md",
          src: require("@/assets/img/logo_node.png"),
          techno: "NodeJs + express() + nodemailer",
          sujet:
            "Mini backend pour site web statique : permet l'envoie de mail pour un fommulaire de contact." +
            "Utilise Google Re-captcha pour la validation",
        },
        {
          id: 5,
          name: "Projet ENI-Enchere",
          typeDeProjet: "Projet de groupe",
          item1: "Repo Github",
          item2: "Repo Github",
          lienGit: "https://github.com/Nikotiine/ENI_Encheres",
          lienWeb: "https://github.com/Nikotiine/ENI_Encheres",
          src: require("@/assets/img/logoenienchere.png"),
          techno: "JAVAEE 9, TOMCAT9 et JSTL",
          sujet:
            "Projet de groupe sur une webapp d'encheres , faite en J2E , nous somme 3 etudiants à develloper l'application .",
        },
        {
          id: 6,
          name: "Carnet de croix V-Angular",
          typeDeProjet: "Side-project",
          item1: "Repo Front-end",
          item2: "Repo Back-end ",
          lienGit: "https://github.com/Nikotiine/grimpAngular",
          lienWeb: "https://github.com/Nikotiine/ApiGrimpeJava",
          src: require("@/assets/img/logo_grimpe.png"),
          techno: "Angular 14 et JAVA EE 9 (sans framework)",
          sujet:
            "Version de 'Carnet de Croix' en Angular pour le Front et Java EE pour le Back-end",
        },
        {
          id: 7,
          name: "Carnet de montagne",
          typeDeProjet: "Side-project",
          item1: "Repo Github",
          item2: "Repo Github",
          lienGit: "https://github.com/Nikotiine/Carnet_de_montagne",
          lienWeb: "https://github.com/Nikotiine/Carnet_de_montagne",
          src: require("@/assets/img/logo_php.png"),
          techno: "Php 8.1 + Symfony 5.4.2",
          sujet:
            "Premier projet en Php sous Symfony / Application carnet de note pour sortie montagne ",
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
