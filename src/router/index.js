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
      },
      {
        path: "/mon-cv",
        name: "monCV",
        component: MonCV,
      },
      {
        path: "/mes-projets",
        name: "mesProjets",
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
