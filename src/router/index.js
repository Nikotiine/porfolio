import { createRouter, createWebHistory } from "vue-router";

import PublicLayout from "../views/PublicLayout.vue";
import MonCV from "../views/MonCV.vue";
import MesProjets from "../views/MesProjets.vue";
import AccueilView from "../views/AccueilView.vue";
import FormulaireContact from "../views/FormulaireContact.vue";
import MentionsEtCgu from "../views/MentionsEtCgu.vue";
import MentionsLegales from "../components/mention_cgu/MentionsLegales.vue";
const routes = [
  {
    path: "/info/",
    name: "mentions-legales",
    component: MentionsEtCgu,
    children: [
      {
        path: "/info/toto",
        name: "mentions",
        component: MentionsLegales,
      },
    ],
  },
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
