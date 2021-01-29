<!-- 组件说明 -->
<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('/img/about-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="page-heading">
              <h1>About Me</h1>
              <span class="subheading">This is what I do.</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <h2>一个男生问:你觉得女孩子喜欢什么样的男孩子？</h2>
          <h5>
            另一个男生答:长得帅的，有钱的，其实我也羡慕这样的男孩子，因为他们拥有过很多女孩子的青春，而我只能的努力才能拥有一个他们拥有过的女孩子！！！
          </h5>
        </div>
      </div>
    </div>

    <hr />
  </Layout>
</template>

<script>
export default {
  props: [''],
  components: {}, // 注册组件
  name: 'About',
  data() {
    return {}
  },

  beforeCreate() {}, // 生命周期 - 创建之前

  created() {}, // 生命周期 - 创建之后

  mounted() {}, // 生命周期 - 挂载之后

  computed: {},

  methods: {},

  watch: {},
}
</script>
<style lang="" scoped></style>
