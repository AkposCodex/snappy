import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../state/store";
import AboutView from "@/views/AboutView.vue";

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
      path: "/table",
      name: "table",
      component: () => import("@/views/laTable.vue"),
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
      path: "/geotest",
      name: "geotest",
      component: () => import("@/views/GeoView.vue"),
    },
    {
      path: "/products",
      name: "pricing",
      component: () => import("@/views/ProductsView.vue"),
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
      beforeEnter: () => {},
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("@/views/checkout.vue"),
      meta: {
        needsAuth: true,
      },
      beforeEnter: (to, from) => {},
    },
    {
      path: "/about-us",
      name: "productsv2",
      component: AboutView,
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
      path: "/contact",
      name: "contact",
      component: () => import("@/views/faq.vue"),
      meta: {
        needsAuth: false,
      },
    },
  ],
});
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
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
