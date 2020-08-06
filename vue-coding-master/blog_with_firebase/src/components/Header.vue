<template>
  <div class="header">
    <div class="sign">
      <i class="fas fa-sign-out-alt" v-if="currentUserUid" @click="googleLogout"></i>
      <i class="fas fa-user-circle" v-else @click="googleLogin"></i>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['currentUserUid'])
  },
  methods: {
    googleLogin(){
      const auth = firebase.auth();
      const authProvider = new firebase.auth.GoogleAuthProvider();

      auth.signInWithPopup(authProvider).then((result) => {
        const currentUser = result.user;
        firebase.database().ref(`users/${currentUser.uid}`).set({
          uid: currentUser.uid,
          email: currentUser.email,
        });
        this.$store.commit('FETCH_USER', currentUser.uid)
        this.$router.push('/')
      })      

      auth.onAuthStateChanged(currentUser => {

      });    
    },
    googleLogout(){
      firebase.auth().signOut().then(()=> {
        alert('로그아웃 되었습니다.')
        this.$store.commit('REMOVE_USER')
        this.$router.push('/')
      }).catch((error) => {});
    },
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
