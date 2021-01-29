<template>
  <Layout>
    <!-- Page Header -->
    <header
      class="masthead"
      :style="{
        backgroundImage: `url(http://localhost:1337${$page.general.edges[0].node.cover.url})`,
      }"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{{ $page.general.edges[0].node.title }}</h1>
              <span class="subheading">{{
                $page.general.edges[0].node.subtitle
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div
            class="post-preview"
            v-for="item in $page.posts.edges"
            :key="item.node.id"
          >
            <g-link :to="`/post/${item.node.id}`">
              <h2 class="post-title">
                {{ item.node.title }}
              </h2>
              <!-- <h3 class="post-subtitle">{{ item.node.content }}</h3> -->
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#">Start Bootstrap</a>
              on {{ item.node.created_at }}
            </p>
            <p>
              <g-link
                style="margin-right:10px;"
                v-for="tag in item.node.tags"
                :key="tag.id"
                :to="`/tag/${tag.id}`"
              >
                {{ tag.title }}
              </g-link>
            </p>
            <hr />
          </div>

          <!-- Pager -->
          <!-- <div class="clearfix">
            <a class="btn btn-primary float-right" href="#"
              >Older Posts &rarr;</a
            >
          </div> -->
        </div>
      </div>
      <!-- 分页 -->
      <div class="clearfix">
        <Pager :info="$page.posts.pageInfo" />
      </div>
      <!-- <Pager :info="$page.posts.pageInfo" /> -->
    </div>

    <hr />
  </Layout>
</template>

<page-query>
  query($page: Int){

    general:allStrapiGeneral{
      edges{
        node{
          id
          title
          subtitle
          created_at
          cover{
            url
          }
        }
      }
    }


    posts:allStrapiPost(perPage:1,page:$page)@paginate{
      pageInfo{
        totalPages
        currentPage
      }
      edges{
        node{
          id
          title
          content
          created_at
          tags{
            id
            title
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
  name: 'Home',
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
