<template>
  <div class="header">
    <div class="sign">
      <router-link to="/login">
        <!-- <i class="fas fa-sign-out-alt"></i> -->
        <i class="fas fa-user-circle"></i>
      </router-link>
      <!-- <i class="fas fa-user-plus" @click="signUp"></i> -->
    </div>

  </div>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style scoped>
.header .sign { position:fixed; top:15px; right:15px; z-index:10;}
.header .sign i { cursor:pointer; }
.header .sign .fa-user-circle { font-size:30px; color:#aaa; margin-right:10px; vertical-align: top;}
.header .sign .fa-user-plus { font-size:25px; color:#aaa; vertical-align: top; margin-top:2px; }
.fa-sign-out-alt { font-size:30px; color:#aaa; margin-right:10px; vertical-align: top;}

</style>
