<template>
  <section class="question-form">
    <div class="inner">
      <h2>{{ info.itemId}}. {{ info.title }}</h2>
      <div class="radio-wrap" v-for="opt in info.options" :key="opt.id" ref="radioList">
        <input type="radio" :id="`opt${opt.id}`" :value="opt.text" v-model="inputResult">
        <label :for="`opt${opt.id}`">{{ opt.text }}</label>
      </div>
    </div>
    <btn-control :inputValue="inputResult"></btn-control>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import BtnControl from './BtnControl.vue'

export default {
  props: {
    info: Object,
  },
  data(){
    return {
      inputResult: '',
    }
  },
  computed: {
    ...mapState(['answerResult']),
  },
  components: {
    BtnControl
  },
  watch: {
    inputResult: function(val){
      let answer = { id:2, answer:val }
      this.answerResult.items[1] = answer; 
    }
  },
  mounted(){
    let answerItem = this.answerResult.items[1];
    let radioList = this.$refs.radioList;
    if(answerItem){
      let prevAnswer = answerItem.answer
      radioList.forEach(checkItem => {
        if(checkItem.querySelector('input').value === prevAnswer){
          checkItem.querySelector('input').checked = true;
          this.inputResult = prevAnswer;
        }
      })
    }
  },
}
</script>

<style>

</style>
