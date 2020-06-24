<template>
  <section class="question-form">
    <div class="inner">
      <h2>{{ info.itemId}}. {{ info.title }}</h2>
      <textarea v-model="inputResult" ref="textarea" placeholder="자유롭게 작성해주세요.">

      </textarea>
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
      let answer = { id:3, answer:val }
      this.answerResult.items[2] = answer; 
    }
  },
  mounted(){
    let answerItem = this.answerResult.items[2];
    let textarea = this.$refs.textarea;
    if(answerItem){
      let prevAnswer = answerItem.answer
      textarea.value = prevAnswer;
      this.inputResult = prevAnswer;
    }
  },
}
</script>

<style>
.question-form textarea { width:100%; height:150px; border:0; resizd:none; padding:15px; font-size:14px; box-sizing:border-box;; resize:none; margin-bottom:20px; background-color:#f6f6f6; border-radius:3px; }
</style>