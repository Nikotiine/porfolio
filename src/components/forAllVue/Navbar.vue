<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand" :class="{ 'is-active': openBurger }">
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="openCloseNavbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': openBurger }">
      <div class="navbar-start">
        <router-link
          to="/"
          class="navbar-item hover-black"
          @click="scrollInHome() + openCloseNavbar()"
          >Nicolas Godin</router-link
        >

        <router-link
          to="/mon-cv"
          class="navbar-item hover-black"
          @click="openCloseNavbar() + scrollInCV()"
          >Mon CV</router-link
        >

        <div class="navbar-item has-dropdown is-hoverable">
          <router-link
            to="/mes-projets"
            class="navbar-link hover-black"
            @click="openCloseNavbar() + scrollInProject()"
            >Mes projets</router-link
          >

          <div class="navbar-dropdown">
            <a
              class="navbar-item"
              target="_blank"
              href="https://github.com/Nikotiine/"
              @click="openCloseNavbar"
            >
              Mon profil GitHub
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link
              to="/contact"
              class="button is-rounded"
              @click="openCloseNavbar() + scrollToContact()"
              ><strong>Me contacter</strong></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      openBurger: false,
    };
  },
  methods: {
    openCloseNavbar() {
      this.openBurger = !this.openBurger;
    },

    scrollInHome() {
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    },
    scrollInCV() {
      setTimeout(() => {
        document
          .getElementById("cv")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    },
    scrollToContact() {
      setTimeout(() => {
        document
          .getElementById("contact-form")
          .scrollIntoView({ behavior: "smooth" });
      }, 500);
    },
    scrollInProject() {
      setTimeout(() => {
        document
          .getElementById("projects")
          .scrollIntoView({ behavior: "smooth" });
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
a.navbar-item:hover {
  color: transparent;
}
.navbar-link:hover {
  color: transparent;
}
a.nvabar-item:visited {
  color: white;
}
a.nvabar-item:focus {
  background-color: white;
}

.navbar-link:not(.is-arrowless)::after {
  border-color: white;
}
.hover-black:hover {
  color: black !important;
}
</style>
