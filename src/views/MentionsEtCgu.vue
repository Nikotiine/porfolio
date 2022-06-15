<template>
  <nav></nav>
  <div class="mention-cgu">
    <mentions-legales />
  </div>
  <footer></footer>
</template>

<script>
//import NavBar from "@/components/forAllVue/Navbar.vue";
//import Footer from "@/components/forAllVue/Footer.vue";
import MentionsLegales from "@/components/mention_cgu/MentionsLegales.vue";
export default {
  name: "MentionsEtCgu",
  components: {
    MentionsLegales,
  },
};
</script>

<style lang="scss" scoped>
.mention-cgu {
  margin-top: 4rem;
}
</style>
