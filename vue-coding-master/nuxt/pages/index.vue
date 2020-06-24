<template>
  <section class="container">
    <ul>
      <li class="link-list" v-for="link in links" :key="link">
        <nuxt-link :to="link">{{ link }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data(){
    return {
      links: ['login','tabmenu']
    }
  },
  components: {

  }
}
</script>

<style>
.link-list { text-align:left; }
</style>

