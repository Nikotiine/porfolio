import { createRouter, createWebHistory } from "vue-router";

import PublicLayout from "../views/PublicLayout.vue";
import MonCV from "../views/MonCV.vue";
import MesProjets from "../views/MesProjets.vue";
import AccueilView from "../views/AccueilView.vue";
import FormulaireContact from "../views/FormulaireContact.vue";
import MentionsLegales from "../views/MentionsLegales.vue";
//import MentionsLegales from "../components/mention_cgu/MentionsLegales.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: PublicLayout,
    children: [
      {
        path: "/",
        name: "accueil",
        component: AccueilView,
        children: [
          {
            path: "/mon-cv",
            name: "monCV",
            component: MonCV,
          },
          {
            path: "/mes-projets",
            name: "projets",
            component: MesProjets,
          },
          {
            path: "/contact",
            name: "contact",
            component: FormulaireContact,
          },
        ],
      },
      {
        path: "/mentions-legales",
        name: "mentions-legales",
        component: MentionsLegales,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
