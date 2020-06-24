<template>
  <div class="btn-step clear">
    <div class="fl-r">
      <button class="btn-prev" @click="prevStep">
        <i class="fas fa-chevron-right reverse"></i> PREV
      </button>
      <button class="btn-submit" v-if="formCompleted" @click="completeStep">
        SUBMIT
      </button>
      <button class="btn-next" v-else @click="nextStep">
        NEXT <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    inputValue: null,
  },
  data(){
    return {
      formCompleted: false,
    }
  },
  computed: {
    ...mapState(['answerResult','questionData','stepIndex']),
  },
  created(){
    if(this.stepIndex === this.questionData.length - 1){
      this.formCompleted = true
    }
  },
  methods: {
    nextStep(){
      (this.inputValue.length !== 0) ? this.$store.commit('UP_STEP') : alert('답을 작성해주세요.')
    },
    prevStep(){
      (this.stepIndex > 0) ? this.$store.commit('DOWN_STEP') : alert('첫번째 입니다.')
    },
    completeStep(){
      (this.inputValue.length !== 0) ? alert('답변 결과 : ' + JSON.stringify(this.answerResult.items)) : alert('답을 작성해주세요.')
    }
  },
}
</script>


<style>
.btn-step { border-top:1px solid #e0e0e0;  padding:20px; background-color:#fafafa; }
.btn-step button { display:inline-block; font-size:15px; background-color:rgb(26, 192, 142); color:#fff; margin-left:10px; padding:10px 22px; border-radius:2px;  }
.btn-step .btn-prev { background-color:#bbb;}
.btn-step .btn-submit { background-color:rgb(255, 169, 40);}
.fa-chevron-right { margin-left:3px;}
.fa-chevron-right.reverse { transform:rotate(180deg); margin-right:3px;}
</style>
