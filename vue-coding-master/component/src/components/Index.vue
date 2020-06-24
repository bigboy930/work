<template>
  <div>
    <ul class="link-list">
      <li v-for="link in links" :key="link">
        <router-link :to="`${link}`">{{ link }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      links: [
        'accordion',
        'scroll',
        'carousel'
      ]
    }
  }
}
</script>

<style scoped>
.link-list { text-align:left; }
</style>