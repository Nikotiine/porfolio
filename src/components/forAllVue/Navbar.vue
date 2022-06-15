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
          class="navbar-item"
          @click="scrollUp() + openCloseNavbar()"
          >Nicolas Godin</router-link
        >

        <router-link
          to="/mon-cv"
          class="navbar-item"
          @click="openCloseNavbar() + scrollInCV()"
          >mon CV</router-link
        >

        <div class="navbar-item has-dropdown is-hoverable">
          <router-link
            to="/mes-projets"
            class="navbar-link"
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
    scrollUp() {
      window.scrollTo(0, 0);
    },
    scrollInCV() {
      setTimeout(() => {
        document.getElementById("cv").scrollIntoView({ behavior: "smooth" });
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

<style lang="scss" scoped></style>
