<template>
  <div class="wrapper">
    <ul class="accordion-menu">
      <li class="tab" v-for="(menu, index) in sideMenu" :key="index" @click="toggleMenu(index)" :class="{ active: menu.active }">
        <p class="tit">{{ menu.title }}</p>
        <img class="icon-arrow" src="../assets/images/icon_plus.png" alt="">
        <slide-up-down :active="menu.active" :duration="500">
          <ul class="dep2">
            <li v-for="list in menu.dep2" :key="list">{{ list }}</li>
          </ul>
        </slide-up-down>
      </li>
    </ul>

  </div>
</template>

<script>
import SlideUpDown from 'vue-slide-up-down'
import Vue from 'vue'

Vue.component('slide-up-down', SlideUpDown)

export default {
  name: 'Accordion',
  data(){
    return {
      pastIndex: null,
      sideMenu: [
        { 
          title: "menu01",
          active: false,
          dep2: ["01. 리스트 내용입니다.","02. 리스트 내용입니다.","03.리스트 내용입니다."]
        },
        { 
          title: "menu02",
          active: false,
          dep2: ["01. 리스트 내용입니다.","02. 리스트 내용입니다.","03.리스트 내용입니다."]
        },
        { 
          title: "menu03",
          active: false,
          dep2: ["01. 리스트 내용입니다.","02. 리스트 내용입니다.","03.리스트 내용입니다."]
        },
        { 
          title: "menu04",
          active: false,
          dep2: ["01. 리스트 내용입니다.","02. 리스트 내용입니다.","03.리스트 내용입니다."]
        },
        { 
          title: "menu05",
          active: false,
          dep2: ["01. 리스트 내용입니다.","02. 리스트 내용입니다.","03.리스트 내용입니다."]
        },
      ]
    }
  },
  methods: {
    toggleMenu(index){
      if(this.pastIndex !== index) this.sideMenu.forEach(val => val.active = false);
      this.sideMenu[index].active = !this.sideMenu[index].active;
      this.pastIndex = index;
    }
  },
}

</script>

<style scoped>
h3 { margin: 40px 0 0; }
ul { list-style-type: none; padding: 0; }
li { margin:0; }
a { color: #42b983; }

.wrapper { width:500px; margin:60px auto; text-align:left; }
.accordion-menu {  background-color:#fff; }
.accordion-menu .tab {  cursor:pointer; position:relative;  }
.accordion-menu .tab .tit { line-height:50px; text-align:left; padding:0 15px; border-radius:3px; border-bottom:1px solid #eee; }
.accordion-menu .tab .dep2 { background-color:#f6f6f6; }
.accordion-menu .tab .dep2 li { padding:0 15px; line-height:2.5; font-size:14px; color:#888;}
.accordion-menu .tab .icon-arrow { width:16px; position:absolute; top:17px; right:17px; transform:rotate(0deg); transition:all .6s ease; }
.accordion-menu .tab.active .icon-arrow { transform:rotate(135deg); transition:all .6s ease; cursor:pointer;}
</style>
