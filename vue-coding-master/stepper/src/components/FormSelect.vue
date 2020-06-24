<template>
  <section class="question-form">
    <div class="inner">
      <h2>{{ info.itemId}}. {{ info.title }}</h2>
      <select v-model="inputResult" ref="selectBox">
        <option disabled value="">답변을 선택해주세요.</option>
        <option v-for="opt in info.options" :key="opt.id" :value="opt.text">{{ opt.text }}</option>
      </select>
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
      let answer = { id:4, answer:val }
      this.answerResult.items[3] = answer; 
    }
  },  
  mounted(){
    let answerItem = this.answerResult.items[3];
    let selectBox = this.$refs.selectBox;
    if(answerItem){
      let prevAnswer = answerItem.answer;
      let options = selectBox.querySelectorAll('option');
      options.forEach(option => {
        if(option.value === prevAnswer){
          option.selected = true;
          this.inputResult = prevAnswer;
        }
      })
    }
  },
}
</script>

<style>
.question-form select { width:100%; height:30px; outline-width:0; font-size:14px; margin-bottom:40px;}
</style>