<template>
  <article class="message is-info">
    <div class="message-header">
      <p>Mes connaissances</p>
    </div>
    <div class="message-body">
      <figure class="image is-64x64">
        <img src="@/assets/img/logo_html.png" alt="logo html" />
      </figure>
      <figure class="image is-48x48">
        <img src="@/assets/img/logo_css.png" alt="logo css" />
      </figure>
      <figure class="image is-96x96">
        <img src="@/assets/img/logo_js.png" alt="logo javascript" />
      </figure>
      <figure class="image is-64x64">
        <img src="@/assets/img/logo_vue.png" alt="logo vueJs" />
      </figure>
      <figure class="image is-64x64">
        <img src="@/assets/img/logo_quasar.png" alt="logo quasar" />
      </figure>
      <figure class="image is-96x96">
        <img src="@/assets/img/bulma-logo.png" alt="logo bulma.io" />
      </figure>
      <figure class="image is-64x64">
        <img src="@/assets/img/logo_node.png" alt="logo nodeJs" />
      </figure>

      <figure class="image is-64x64">
        <img src="@/assets/img/logo_sql.png" alt="logo sql" />
      </figure>

      <figure class="image is-48x48">
        <img src="@/assets/img/logo_java.png" alt="logo java" />
      </figure>

      <figure class="image is-64x64">
        <img src="@/assets/img/logo_git.png" alt="logo git" />
      </figure>
      <figure class="image is-64x64">
        <img src="@/assets/img/logo_php.png" alt="logo php" />
      </figure>
      <figure class="image is-64x64">
        <img src="@/assets/img/logo_symfony.png" alt="logo symphony" />
      </figure>
      <figure class="image is-64x64">
        <img src="@/assets/img/logo_angular.png" alt="logo angular" />
      </figure>
    </div>
  </article>
</template>

<script>
export default {
  name: "MyKnowledge",
};
</script>

<style lang="scss" scoped>
.message-body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
}
</style>
