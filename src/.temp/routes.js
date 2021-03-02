const c1 = () => import(/* webpackChunkName: "page--src--pages--blog-html--blog-post-one-vue" */ "/Users/gunjandeore/gridsome-netlify/src/pages/blogHtml/blogPostOne.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--blog-html--blog-post-three-vue" */ "/Users/gunjandeore/gridsome-netlify/src/pages/blogHtml/blogPostThree.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-html--blog-post-two-vue" */ "/Users/gunjandeore/gridsome-netlify/src/pages/blogHtml/blogPostTwo.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/gunjandeore/gridsome-netlify/src/templates/Post.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/gunjandeore/gridsome-netlify/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/gunjandeore/gridsome-netlify/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/gunjandeore/gridsome-netlify/src/pages/Index.vue")

export default [
  {
    path: "/blog-html/blog-post-one/",
    component: c1
  },
  {
    path: "/blog-html/blog-post-three/",
    component: c2
  },
  {
    path: "/blog-html/blog-post-two/",
    component: c3
  },
  {
    path: "/blog/blog-post-f5/",
    component: c4
  },
  {
    path: "/blog/blog-post-four/",
    component: c4
  },
  {
    path: "/blog/blog-post-one/",
    component: c4
  },
  {
    path: "/blog/blog-post-three/",
    component: c4
  },
  {
    path: "/blog/blog-post-two/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
