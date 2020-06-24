<template>
  <section class="question-form">
    <div class="inner">
      <h2>{{ info.itemId}}. {{ info.title }}</h2>
      <div class="checkbox-wrap" v-for="opt in info.options" :key="opt.id" ref="checkboxList">
        <input type="checkbox" :id="`opt${opt.id}`" :value="opt.text" v-model="inputResult">
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
      inputResult: [],
    }
  },
  computed: {
    ...mapState(['answerResult']),
  },
  components: {
    BtnControl
  },
  watch: {
    inputResult(val){
      let answer = { id:1, answer:val.join() }
      this.answerResult.items[0] = answer; 
    }
  },
  mounted(){
    let answerItem = this.answerResult.items[0];
    let checkboxList = this.$refs.checkboxList;
    if(answerItem){
      let prevAnswer = answerItem.answer.split(',');
      prevAnswer.forEach(answer => {
        checkboxList.forEach(checkItem => {
          if(checkItem.querySelector('input').value === answer){
            checkItem.querySelector('input').checked = true;
            this.inputResult.push(answer)
          }
        })
      })
    }
  },
}
</script>

<style>
.question-form { background-color:#fff; box-shadow:0 0 20px rgba(0,0,0,0.1); }
.question-form h2 { font-size:18px; margin-bottom:25px; }
.question-form .inner { padding:15px 20px; box-sizing:border-box;}
.question-form label { font-size:15px; }
.radio-wrap, .checkbox-wrap { margin-bottom:20px; }
.radio-wrap input, .checkbox-wrap input { margin-right:10px; }
</style>
