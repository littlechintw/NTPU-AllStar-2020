import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta:{
      title: 'NTPU ALLSTAR 2020',
    },
  },
  {
    path: '/vote',
    name: 'Vote',
    component: () => import('../views/Vote.vue'),
    meta:{
      title: 'ALLSTAR - Vote',
    },
  },
  {
    path: '/vote/:id?',
    name: 'Vote - Basketball',
    component: () => import('../views/VotePanel.vue'),
    meta:{
      title: 'ALLSTAR - Vote',
    },
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: () => import('../views/Leaderboard.vue'),
    meta:{
      title: 'ALLSTAR - Leaderboard',
    },
  },
  {
    path: '/govote/:id?',
    name: 'Vote - GoVote',
    component: () => import('../views/GoVote.vue'),
    meta:{
      title: 'ALLSTAR - GoVote',
    },
  },
  // {
  //   path: '/vote/basketballM',
  //   name: 'Vote - Basketball',
  //   component: () => import('../views/BasketballM.vue'),
  //   meta:{
  //     title: 'ALLSTAR - 男籃',
  //   },
  // },
  // {
  //   path: '/vote/volleyballW',
  //   name: 'Vote - Volleyball',
  //   component: () => import('../views/VolleyballW.vue'),
  //   meta:{
  //     title: 'ALLSTAR - 女排',
  //   },
  // },
  // {
  //   path: '/vote/volleyballM',
  //   name: 'Vote - Volleyball',
  //   component: () => import('../views/VolleyballM.vue'),
  //   meta:{
  //     title: 'ALLSTAR - 男排',
  //   },
  // },
  // {
  //   path: '/vote/badminton',
  //   name: 'Vote - Badminton',
  //   component: () => import('../views/Badminton.vue'),
  //   meta:{
  //     title: 'ALLSTAR - 羽球',
  //   },
  // },
  // {
  //   path: '/vote/table_tennis',
  //   name: 'Vote - Table_Tennis',
  //   component: () => import('../views/Table_Tennis.vue'),
  //   meta:{
  //     title: 'ALLSTAR - 桌球',
  //   },
  // },
  // {
  //   path: '/vote/softball',
  //   name: 'Vote - Softball',
  //   component: () => import('../views/Softball.vue'),
  //   meta:{
  //     title: 'ALLSTAR - 壘球',
  //   },
  // },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/Logout.vue'),
    meta:{
      title: 'Logout...',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta:{
      title: 'Login...',
    },
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('../views/Error.vue'),
    meta:{
      title: 'Error...',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
