<template>
  <article class="message is-info">
    <div class="message-header">
      <p>Qui je suis ?</p>
    </div>
    <div class="message-body">
      <p class="subtitle">
        Bonjour et bienvenue sur mon portefolio. Ancien ambulancier, je suis en
        pleine reconversion professionnelle et je me dirige vers le métier de
        développeur web <strong>full-stack.</strong>
      </p>
      <p class="subtitle">
        Le monde de l'informatique m'a toujours passionné, j'ai commencé à
        manipuler les PC il y une vingtaine d'années, principalement dans le
        hardware.
      </p>
      <p class="subtitle">
        Grandement intéressé par les différentes technologies du web et de ses
        applications, j'ai fini ma formation développeur web et web mobile avec
        l'
        <a
          href="https://www.eni-ecole.fr/formations/developpement/bac2-developpeur-web-et-web-mobile/"
          target="_blank"
          >ENI</a
        >
        en decembre 2022.
      </p>
      <p class="subtitle">
        Je suis maintenant en <strong>alternance</strong> afin de poursuivre mon
        parcours avec
        <a href="https://quantior.com/fr/" target="_blank">Quantior Group</a> et
        obtenir un diplôme de développeur d'application (bac +4) avec L'ENI
      </p>
      <p class="subtitle">
        Je travaille avec le framework Symfony(5) et PHP 7.4 sur un ERP et avec
        Symfony(6) / Api_Plateform(3) / Angular(15) sur mon projet d'alternance
      </p>
      <p class="subtitle">
        J'ai principalement travaillé avec VueJs et Nodejs sur des projets
        personnels et lors de mon stage chez
        <a href="https://graaly.com/" target="_blank">Graaly</a>.
      </p>
      <p class="subtitle">
        Au cours de ma formation j'ai pu monter en compétences en Java et PHP.
        J'ai aussi appris le respect des conventions et l'utilisation de pattern
        de développement
      </p>
      <p class="subtitle">
        <strong> En decembre 2022 </strong> mon premier site web est en ligne
        vous pourrez retrouvez le liens dans mes projet 'MetaHomeopathie'.
      </p>
      <p class="subtitle">
        Vous trouverez sur ce site une partie des projets que j'ai réalisé, et
        évidemment la possiblité de me contacter.
      </p>
    </div>
    <div class="box mt-4">
      <p class="subtitle has-text-centered is-size-4">
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
  padding: 0.5rem;
  letter-spacing: 1px;
}
.subtitle {
  padding: 0.5rem;
}
</style>
