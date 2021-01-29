<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <!-- <h1>{{ $page.tag.title }}</h1> -->
              <h1>标签：{{ $page.allTag.edges[0].node.title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <!-- <div class="col-lg-8 col-md-10 mx-auto">
          <div
            class="post-preview"
            v-for="item in $page.tag.posts"
            :key="item.id"
          >
            <g-link :to="`/post/${item.id}`">
              <h2 class="post-title">
                {{ item.title }}
              </h2>
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#">Start Bootstrap</a>
              on {{ item.created_at }}
            </p>
            <hr />
          </div>
        </div> -->
        <h2 style="color:green;margin: 0 auto; marginBottom:50px;">
          展示{{ $page.allTag.edges[0].node.title }}标签的全部文章
        </h2>
        <div class="col-lg-8 col-md-10 mx-auto">
          <div
            class="post-preview"
            v-for="item in $page.allTag.edges[0].node.posts"
            :key="item.id"
          >
            <g-link :to="`/post/${item.id}`">
              <h2 class="post-title">
                {{ item.title }}
              </h2>
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#">Start Bootstrap</a>
              on {{ item.created_at }}
            </p>
            <hr />
          </div>
        </div>
      </div>
      <!-- 分页 -->
      <!-- <div class="clearfix">
        <Pager :info="$page.allTag.pageInfo" />
      </div> -->
    </div>

    <hr />
  </Layout>
</template>

<page-query>
  query($page:Int,$id:ID){
    tag:strapiTag(id:$id){
      id
      title
      posts{
        id
        title
        created_at
      }
      created_at
    }
    allTag:allStrapiTag(perPage:1,page:$page)@paginate{
      pageInfo{
        totalPages
        currentPage
      }
      edges{
        node{
          id
          title
          created_at
          posts{
            id
            title
            created_at
          }
        }
      }
  }
   
  }
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
  metaInfo: {
    title: 'qwd',
  },
  props: [''],
  components: { Pager }, // 注册组件
  name: 'Tag',
  data() {
    return {}
  },

  mounted() {}, // 生命周期 - 挂载之后
}
</script>

<style scoped>
.clearfix > nav {
  width: 400px;
  margin: auto;
}
.clearfix > nav > a {
  width: 20px;
  margin-right: 20px;
}
</style>
