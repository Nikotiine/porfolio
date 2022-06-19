<template>
  <nav>
    <nav-bar />
  </nav>
  <div class="public">
    <router-view />
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import NavBar from "@/components/forAllVue/Navbar.vue";
import Footer from "@/components/forAllVue/Footer.vue";
export default {
  name: "PublicLayout",
  components: { NavBar, Footer },
  mounted() {
    document.title = "Nicolas Godin";
  },
};
</script>

<style lang="scss" scoped>
.public {
  margin-top: 3.5rem;
  overflow: hidden;
}
</style>
