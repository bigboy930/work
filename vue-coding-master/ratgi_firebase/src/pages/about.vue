<template>
  <section>
    <div class="detail-wrap">
      <div class="inner">
        <h1 class="pg-tit mb-30">About</h1>
        <div class="intro clear">
          <p class="desc mb-40">디자인, 퍼블리싱, 프론트엔드 개발 등 프론트 전반의 영역에 많은 관심과 흥미를 갖고,<br>
          프론트 총괄 마스터를 지향하며 그에 걸맞는 역량을 키워 나가고 있습니다.<br>
          현재까지의 경험은 디자인과 퍼블리싱이 주된 실무 경험이었으며, 점차 프론트엔드 개발 영역까지 확장해나가는 중에 있습니다.<br>
          한 가지 분야만 고집하기 보다는 폭 넓은 경험과 시야를 가진 전문가이고 싶습니다. <br>
          관심 가져 주셔서 감사합니다.</p>
          <div class="contect clear">
            <div class="col">
              <!-- <i class="fas fa-envelope"></i> -->
              <img src="../assets/images/icon_email.png" alt="">
              <span>actionbeem929@gmail.com</span>
            </div>
            <div class="col">
              <!-- <i class="fas fa-phone"></i> -->
              <img src="../assets/images/icon_telephone.png" alt="">
              <span>01093796527</span>
            </div>
            <div class="col">
              <!-- <i class="fas fa-phone"></i> -->
              <img src="../assets/images/icon_kakao.png" alt="">
              <span>actionbeem</span>
            </div>
            <div class="btn-wrap">
              <button>
                <a href="https://github.com/actionbeem?tab=repositories" target="blank">Go to Github</a>
              </button>
            </div>

          </div>      
        </div>


        <div class="skill-wrap clear">
          <div class="half mb-30 clear" v-for="skill in skills" :key="skill.name">
            <div class="logo">
              <img :src="require('../assets/images/logo_' + skill.logo + '.png')" alt="로고">
            </div>
            <div class="graph">
              <p class="label">{{ skill.name }}</p>
              <div class="gage">
                <p class="bar" :class="skill.name" :style="`background-color:${skill.color}`"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-cover"></div>
  </section>
</template>

<script>

export default {
  name: 'about',
  data(){
    return {
      skills: [
        { name: 'VueJs', width: '70%', logo:'vue', color: '#41b883', },
        { name: 'Javascript', width: '60%', logo:'javascript', color: '#f2dc1c', },
        { name: 'JQuery', width: '85%', logo:'jquery', color: '#0868ac', },
        { name: 'Nuxt', width: '30%', logo:'nuxt', color: '#00ac5d', },
        { name: 'HTML', width: '90%', logo:'html5', color: '#f46b2a', },
        { name: 'CSS', width: '90%', logo:'css3', color: '#337bc5', },        
        { name: 'Photoshop', width: '90%', logo:'photoshop', color: '#00c7ff', },
        { name: 'Illustrator', width: '80%', logo:'illustrator', color: '#ff7d00', },        
        { name: 'TypeScript', width: '20%', logo:'typescript', color: '#007acc', },
        { name: 'NodeJs', width: '20%', logo:'node', color: '#41873f', },
      ],
    }
  },
  mounted(){
    this.skills.forEach(skill => {
      document.querySelector(`.${skill.name}`).style.width = `${skill.width}`;
      document.querySelector(`.${skill.name}`).style.transition = 'width 1.5s ease';     
    })
  }
}
</script>

<style scoped>
.detail-wrap { padding-top:140px; margin-bottom:100px; }
.detail-wrap .inner { width:900px; margin:0 auto; }

.intro .desc { width:70%; float:left; padding-right:50px; box-sizing:border-box; font-size:17px; line-height:2; color:#999; font-weight:normal; word-break: keep-all; }
.intro .contect { width:30%; float:left; padding:20px; box-sizing:border-box; border-radius:12px;  background-color:#eee; }
.intro .contect .col { margin-bottom:20px; }
.intro .contect .col img { width:17px; opacity:.7; margin-right:10px;}
.intro .contect .col span { font-size:16px; color:#888; }
.intro .contect .btn-wrap { text-align:center; margin-top:40px; }
.intro .contect button a { display:inline-block; font-size:14px; padding:8px 18px; border-radius:25px; background-color:#222; color:#fff; }

.half { width:50%; float:left; box-sizing:border-box; }
.half:nth-child(odd) { padding-right:25px; }
.half:nth-child(even) { padding-left:25px; }
.skill-wrap { margin-top:50px;}
.skill-wrap .logo { width:20%; float:left; }
.skill-wrap .logo > img { width:60px; border-radius:8px; box-shadow:0 10px 15px rgba(0,0,0,0.1);}
.skill-wrap .graph { width:80%; float:left; padding-top:8px; }
.skill-wrap .label { font-size:15px; margin-bottom:10px; }
.skill-wrap .gage { height:10px; background-color:#eee; border-radius:15px; position:relative; }
.skill-wrap .bar { width:0; height:10px; border-radius:15px; position:absolute; top:0px; left:0px; }

@media (max-width:1700px) {
  .detail-wrap { padding-top:90px;}
}
</style>
