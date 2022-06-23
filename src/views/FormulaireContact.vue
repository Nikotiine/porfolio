<template>
  <section>
    <form id="form">
      <div class="box">
        <div class="field">
          <label class="label">Votre Nom</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="text"
              placeholder="Indiquez votre nom"
              v-model="lastName"
              :class="{ 'is-valid-input': this.lastName }"
            />
            <span
              class="icon is-small is-left"
              :class="{ 'has-text-info': this.lastName }"
            >
              <i class="fas fa-user"></i>
            </span>
            <span
              class="icon is-small is-right has-text-success"
              v-if="this.lastName"
            >
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Votre Prenom</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="text"
              placeholder="Indiquez votre prenom"
              :class="{ 'is-valid-input': this.firstName }"
              v-model="firstName"
            />
            <span
              class="icon is-small is-left"
              :class="{ 'has-text-info': this.firstName }"
            >
              <i class="fas fa-user"></i>
            </span>
            <span
              class="icon is-small is-right has-text-success"
              v-if="this.firstName"
            >
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Votre email</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="email"
              placeholder="Indiquez votre Email"
              v-model="email"
              :class="{
                'is-valid-input': validEmail,
                'is-invalid-input': notValidEmail,
              }"
              @blur="testValidEmail"
            />
            <span
              class="icon is-small is-left"
              :class="{ 'has-text-info': validEmail }"
            >
              <i class="fas fa-envelope"></i>
            </span>
            <span
              class="icon is-small is-right has-text-success"
              v-if="validEmail"
            >
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Votre message</label>
          <div class="control">
            <textarea
              :class="{ 'is-valid-input': this.message }"
              class="textarea"
              placeholder="Message"
              v-model="message"
            ></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="cgu" />
              Je suis d'accord avec
              <router-link to="/mentions-legales">
                <strong>les CGU</strong>
              </router-link>
            </label>
          </div>
        </div>

        <div class="field is-grouped is-justify-content-center">
          <div class="control">
            <button
              class="button is-primary"
              :class="{ 'is-loading': waitForResult }"
              @click="runCaptcha"
              :disabled="!fieldIsValid"
            >
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </form>
    <toast-succes :active="succes" :message="succesMessage" />
    <toast-error :active="erreur" :message="errorMessage" />
  </section>
</template>

<script>
import axios from "axios";
import ToastSucces from "@/components/forAllVue/ToastSucces.vue";
import ToastError from "@/components/forAllVue/ToastError.vue";

export default {
  components: { ToastSucces, ToastError },
  name: "FormulaireContact",

  data() {
    return {
      lastName: null,
      message: "",
      firstName: process.env.captchaToken,
      email: null,
      cgu: false,
      captchaKey: "6LcTQI4gAAAAAK-pOUH1f-gqPubfPz3FUf_MzNTJ",
      succes: false,
      erreur: false,
      waitForResult: false,
      notValidEmail: false,
      validEmail: false,
      succesMessage: "Votre message a été correctement envoyé",
      errorMessage: "Un probleme est survenu , merci de recommencer",
    };
  },
  methods: {
    runCaptcha(e) {
      e.preventDefault();
      const self = this;

      /* eslint-disable */
      grecaptcha.ready(() => {
        grecaptcha
          .execute(self.captchaKey, {
            action: "validate_captcha",
          })
          .then(function (token) {
            const captcha = token;
            self.send(captcha);
          });
      });
    },

    testValidEmail: function () {
      if (!this.testEmail) {
        this.notValidEmail = true;
        this.validEmail = false;
      } else {
        this.validEmail = true;
        this.notValidEmail = false;
      }
    },
    scrollUp() {
      window.scrollTo(0, 0);
    },
    send: function (token) {
      this.waitForResult = true;

      axios
        .post("contact", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          message: this.message,
          captchaToken: token,
        })
        .then((res) => {
          this.waitForResult = false;
          if (res.status === 200) {
            this.succes = true;
            setTimeout(() => {
              document
                .getElementById("home")
                .scrollIntoView({ behavior: "smooth" });
              this.succes = false;
            }, 2000);

            console.log(res);
          } else {
            this.erreur = true;
            setTimeout(() => {
              this.$router.push({
                path: "/contact",
              });
            }, 1000);
          }
        });
    },
  },
  computed: {
    testEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email);
    },

    fieldIsValid: function () {
      if (!this.lastName || !this.firstName || !this.testEmail || !this.cgu) {
        return false;
      } else return true;
    },
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://www.google.com/recaptcha/api.js?render=6LcTQI4gAAAAAK-pOUH1f-gqPubfPz3FUf_MzNTJ"
    );
    document.head.appendChild(recaptchaScript);
  },
};
</script>

<style lang="scss" scoped>
.box {
  max-width: 55%;
  margin: 6rem auto 4rem;
  background-color: white;
}
.is-valid-input {
  border: 2px groove #68e6f6ab;
}
.is-invalid-input {
  border: 2px groove #f66868ab;
}
@media screen and (max-width: 900px) {
  .box {
    max-width: 75%;
  }
}
@media screen and (max-width: 480px) {
  .box {
    max-width: 100%;
  }
}
</style>
