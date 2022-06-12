<template>
  <article class="message is-info">
    <div class="message-header">
      <p>Mes connaissances</p>
    </div>
    <div class="message-body">
      <figure class="image is-64x64">
        <img src="@/assets/img/logo_html.png" />
      </figure>
      <figure class="image is-48x48">
        <img src="@/assets/img/logo_css.png" />
      </figure>
      <figure class="image is-64x64">
        <img src="@/assets/img/logo_js.png" />
      </figure>
      <figure class="image is-64x64">
        <img src="@/assets/img/logo_vue.png" />
      </figure>
      <figure class="image is-64x64">
        <img src="@/assets/img/logo_quasar.png" />
      </figure>
      <figure class="image is-96x96">
        <img src="@/assets/img/bulma-logo.png" />
      </figure>
      <figure class="image is-64x64">
        <img src="@/assets/img/logo_node.png" />
      </figure>

      <figure class="image is-64x64">
        <img src="@/assets/img/logo_sql.png" />
      </figure>

      <figure class="image is-48x48">
        <img src="@/assets/img/logo_java.png" />
      </figure>

      <figure class="image is-64x64">
        <img src="@/assets/img/logo_git.png" />
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
