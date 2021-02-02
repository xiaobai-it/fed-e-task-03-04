// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Blog',
  plugins: [
    {
      // @gridsome/source-strapi 用来实现获取strapi内容管理系统中，管理的数据
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: 'http://localhost:1337',
        // apiURL: 'http://117.50.90.140:1337',
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag'], // 对应的是strapi内容管理系统中的表（集合）的名字，例如：Post
        // typeName: ['StrapiPost','StrapiTag'], 集合的名字，默认是Strapi+strapi内容管理系统中的表（集合）的名字
        singleTypes: ['general'], // 获取strapi内容管理系统中的单个类型的
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: '',
        // },
      },
    },
  ],
  templates: {
    // StrapiPost:是集合的名字
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue',
      },
    ],
    // StrapiTag:是集合的名字
    StrapiTag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue',
      },
    ],
  },
}
