import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../state/store";
import AboutView from "../views/About.vue";
import PricingView from "../views/PricingView.vue";
import ProductsView from "../views/ProductsView.vue";
import { computed } from "vue";
import { mapGetters } from "vuex";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
    {
      path: "/products",
      name: "product",
      meta: {
        needsAuth: true,
      },
      component: () => import("@/views/ProductsView.vue"),
    },
    {
      path: "/buy-now",
      name: "pricing",
      component: () => import("@/views/PricingView.vue"),
    },
    {
      path: "/sign-up",
      name: "signup",
      component: () => import("@/views/SignUp.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("@/views/checkout.vue"),
      meta: {
        needsAuth: true,
      },
    },
    {
      path: "/productsv2",
      name: "productsv2",
      component: () => import("@/views/ProductsView2.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      redirect: "/",
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("@/views/faq.vue"),
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   //   if (store.getUser) {
//   //     next();
//   //   } else {
//   //     next("/sign-up");
//   //   }
//   // }
// });

export default router;
