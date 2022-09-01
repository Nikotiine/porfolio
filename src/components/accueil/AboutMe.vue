<template>
  <article class="message is-info">
    <div class="message-header">
      <p>Qui je suis ?</p>
    </div>
    <div class="message-body">
      <p class="subtitle">
        Bonjour et bienvenue sur mon portefolio. Ancien ambulancier, je suis en
        pleine reconversion professionnelle et je me dirige vers le métier de
        développeur web <strong>full-stack.</strong><br />
        <br />
        Le monde de l'informatique m'a toujours passionné, j'ai commencé à
        manipuler les PC il y une vingtaine d'années, principalement dans le
        hardware.
        <br />
        <br />
        Grandement intéressé par les différentes technologies du web et de ses
        applications, je suis aujourd'hui en formation développeur web et web
        mobile avec l'
        <a
          href="https://www.eni-ecole.fr/formations/developpement/bac2-developpeur-web-et-web-mobile/"
          target="_blank"
          >ENI</a
        >.<br />
        <br />

        J'ai principalement travaillé avec VueJs et Nodejs sur des projets
        personnels et lors de mon stage chez
        <a href="https://graaly.com/" target="_blank">Graaly</a>. <br />
        <br />
        Grâce à ma formation actuelle je découvre le langage Java et la
        programation Orientée Objet. Les notions de développement en couches en
        Java ou PHP font deja parti de mes acquis. Le framework Symfony est
        egalement présent à mon repertoire de connaissance. <br />
        <br />
        Vous trouverez sur ce site une partie des projets que j'ai réalisé, et
        évidemment la possiblité de me contacter. <br />
        Que vous soyez
        <strong>recruteur, chef d'entreprise </strong> ou tout simplement un
        <strong> particulier</strong> qui souhaite profiter du web pour
        communiquer sur sa marque ou son entreprise, je serai ravi de vous
        répondre.
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style lang="scss" scoped>
.message-body p {
  text-align: start;
  padding: 1rem;
  letter-spacing: 1px;
}
</style>
