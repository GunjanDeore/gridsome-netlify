<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <h3>Gunjan</h3>
    <h1>Blog using Netlify CMS</h1>

    <h1>Default Blogs</h1>
    <ul>
      <li><g-link to="/blog-Html/blog-Post-One/">Blog Post One</g-link></li>
      <li><g-link to="/blog-Html/blog-Post-Two/">Blog Post Two</g-link></li>
      <li><g-link to="/blog-Html/blog-Post-Three/">Blog Post Three</g-link></li>
    </ul>

    <h1>Automatic Generate using Netlify CMS</h1>
    <ul>
      <li v-for="post in $page.posts.edges" :key="post.id">
        <g-link :to="post.node.path">
          {{ post.node.title }}
        </g-link>
      </li>
    </ul>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>
<page-query>
query posts{
  posts: allPost{
    edges{
      node{
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
