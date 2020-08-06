<template>
  <div class="input-form">
    <div class="step-container">
      <ul class="steps" ref="steps">
        <li v-for="(step, index) in questionData" :key="index">
          <div class="num">{{ index + 1 }}</div>
          <p class="txt">STEP {{ index + 1 }}</p>
        </li>
      </ul>
    </div>
    <transition name="question">
      <component :is="whichForm" :info="questionData[stepIndex]"></component>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data(){
    return {
      beforeStep: 0,
    }
  },
  computed: {
    ...mapState(['questionData','stepIndex']),

    whichForm(){
      switch(this.stepIndex){
        case 0 :
          return 'FormCheckbox'
        case 1 :
          return 'FormRadio'
        case 2 :
          return 'FormTextarea'
        case 3 :
          return 'FormSelect'
      }
    }
  },
  components: {
    FormCheckbox: () => import('../components/FormCheckbox.vue'),
    FormRadio: () => import('../components/FormRadio.vue'),
    FormTextarea: () => import('../components/FormTextarea.vue'),
    FormSelect: () => import('../components/FormSelect.vue'),
  },
  watch:{
    stepIndex(val, oldVal){
      let steps = this.$refs.steps;
      let beforeStep = this.beforeStep;
      steps.childNodes[val].classList.add('active');
      steps.childNodes[oldVal].classList.remove('active');
      this.beforeStep = val;
    }
  },
  mounted(){
    let steps = this.$refs.steps;
    steps.childNodes[0].classList.add('active');
  },
}
</script>

<style scoped>
.input-form { width:500px;  margin:100px auto; }
.question .tit { font-size:18px; font-weight:normal; }
.step-container { position:relative; height:100px; margin-bottom:50px;}
.step-container:after { content:""; display:block; width:90%; height:1px; background-color:#e0e0e0; position:absolute; top:46px; left:50%; transform:translate(-50%,0); z-index:0; }
.steps { position:absolute; top:0; left:0; width:100%; display:flex; justify-content:space-between; padding:15px; box-sizing:border-box; margin:0; z-index:10;   }
.steps li { display:inline-block;  text-align:center;   }
.steps li .num { display:inline-block; font-size:23px; width:45px; height:45px; border-radius:50%; background-color:#eee; color:#999; line-height:48px;   margin-bottom:10px; border:8px solid #f6f6f6; }
.steps li .txt { font-size:14px; color:#bbb;} 
.steps li.active .num { background-color:#333; color:#fff; }
.steps li.active .txt { color:#333;}

.question-enter-active { transition: all .3s ease; }
.question-enter { transform: translateX(20px); opacity: 0; }
</style>
