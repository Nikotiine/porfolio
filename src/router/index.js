import { createRouter, createWebHistory } from "vue-router";

import PublicLayout from "../views/PublicLayout.vue";
import MonCV from "../views/MonCV.vue";
import MesProjets from "../views/MesProjets.vue";
import AccueilView from "../views/AccueilView.vue";
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
            path: "/cv-et-projet",
            // name: "monCV",
            components: { default: MonCV, a: MesProjets },
          },
        ],
      },
      {
        path: "/mes-projets",
        name: "projets",
        component: MesProjets,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
