import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../state/store";
import AboutView from "../views/About.vue";
import PricingView from "../views/PricingView.vue";
import ProductsView from "../views/ProductsView.vue";
import { computed } from "vue";
import { mapGetters } from "vuex";

const isLoggedIn = store.getters.getUser;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: (to, from) => {
        // if (from.name == "signup") {
        //   setTimeout(() => {
        //     router.go();
        //   }, 200);
        // }
      },
      meta: {
        needsAuth: false,
      },
    },
    {
      path: "/dash",
      name: "dash",
      component: () => import("@/views/dashboard.vue"),
      meta: {
        needsAuth: true,
      },
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      meta: {
        needsAuth: false,
      },
    },
    {
      path: "/products",
      name: "product",
      meta: {
        needsAuth: false,
      },
      beforeEnter: (to, from) => {
        if (from.name == "signup") {
          setTimeout(() => {
            router.go();
          }, 200);
        }
      },
      component: () => import("@/views/ProductsView.vue"),
    },
    {
      path: "/buy-now",
      name: "pricing",
      component: () => import("@/views/PricingView.vue"),
      meta: {
        needsAuth: true,
      },
    },
    {
      path: "/sign-up",
      name: "signup",
      component: () => import("@/views/SignUp.vue"),
      props: true,
      meta: {
        needsAuth: false,
      },
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("@/views/checkout.vue"),
      meta: {
        needsAuth: true,
      },
      beforeEnter: (to, from) => {
        if (!isLoggedIn) {
          // router.go()
          return { name: "signup" };
        }
      },
    },
    {
      path: "/productsv2",
      name: "productsv2",
      component: () => import("@/views/ProductsView2.vue"),
      meta: {
        needsAuth: true,
      },
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
      meta: {
        needsAuth: false,
      },
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (!isLoggedIn && to.meta.needsAuth) {
//     return { name: "sign-up" };
//   } else if (isLoggedIn && to.meta.needsAuth) {
//     next();
//   } else if (isLoggedIn && !to.meta.needsAuth) {
//     next();
//   } else if (!isLoggedIn && !to.meta.needsAuth) {
//     next();
//   }
//   // if (
//   //   // make sure the user is authenticated
//   //   !isLoggedIn &&
//   //   // ❗️ Avoid an infinite redirect
//   //   to.name !== "signup"
//   // ) {
//   //   // redirect the user to the login page
//   //   return { name: "signup" };
//   // } else {
//   //   return;
//   // }
// });

export default router;
