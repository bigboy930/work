<template>
  <section class="container">
    <ul class="tab-menu">
      <li v-for="tab in tabMenu" :key="tab" @click="tabClick">{{ tab }}</li>
    </ul>
    <ul class="tab-content">
      <li></li>
    </ul>
  </section>
</template>

<script>

export default {
  data(){
    return {
      tabMenu: ['tab01','tab02','tab03','tab04'],
      tabContent: [
        "chapter01. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ad in corrupti, iusto fuga totam aut quaerat accusantium suscipit, inventore quasi perferendis, ipsam sit id voluptatibus quisquam quam minima libero. ",
        "chapter02. Incidunt reprehenderit fuga corporis consectetur quam doloribus laboriosam laudantium veniam magnam molestiae iste esse, pariatur suscipit ipsa, quidem dolorem, error possimus blanditiis saepe? Minus commodi voluptatem totam! Architecto, nam? Eaque Laboriosam eius facilis saepe cum iure? Libero reprehenderit, non deleniti sunt asperiores ut! Pariatur sed reprehenderit et corporis consequatur officia in hic, quae dicta ullam, eaque aliquam doloremque nemo facere.",
        "chapter03. Sequi ab earum veniam pariatur doloremque deserunt nobis. Laboriosam facilis eius recusandae, nam numquam dolor sequi eum obcaecati distinctio molestiae facere repudiandae veritatis veniam pariatur sit, fugit itaque provident quibusdam! Sit quos rem temporibus aliquid illo voluptas perferendis totam tenetur similique! Tenetur itaque quibusdam quod facilis suscipit optio",
        "chapter04. Accusamus deleniti eum impedit architecto cum commodi mollitia, quis fugit nulla dolorem corporis blanditiis neque voluptatibus. Alias cupiditate porro non accusamus, assumenda veniam vitae repudiandae aperiam ducimus in iste id! Modi quos culpa, provident aut autem assumenda doloribus asperiores necessitatibus amet error excepturi distinctio, minima, magni delectus rerum alias deserunt odit. Nesciunt dolor eveniet culpa libero saepe fuga quo blanditiis!",
      ]
    }
  },
  methods: {
    tabClick(){
      
    }
  }
}
</script>

<style scoped>
.tab-menu { width:400px; margin:0 auto; }
.tab-menu li { display:inline-block; width:100px; line-height:50px; text-align:center; font-size:16px; background-color:#eee; cursor:pointer; border:1px solid #fff; }
</style>

