<template>
  <div v-theme:column="'normal'" id="show-blogs">
    <h1>博客总览</h1>
    <input v-model="search" type="text" placeholder="Search blogs">
    <div v-for="blog in filteredBlogs" :key="blog.title" class="single-blog">
      <router-link v-bind:to="'/blog/'+blog.id"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
      <article>
        <div>{{blog.content | snippet}}</div>
        <div class="author-info">
          <span>{{blog.author}}</span>
          <span class="cate">
            <span v-for="cate in blog.categories" :key="cate">{{ cate }}</span>
          </span>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'show-blogs',
    data(){
      return {
        blogs:[],
        search: ''
      }
    },
    created(){
      // this.$http.get('https://wd6017368148uwsznl.wilddogio.com/blog.json').
      axios.get('/blog.json').
      then((res) => {
          // this.blogs = res.data.slice(0,10);
          var blogs = [];
          for (var key in res.data){
            res.data[key].id = key;
            blogs.push(res.data[key]);
          }
          this.blogs = blogs;
      });
    },
    computed:{
      filteredBlogs:function(){
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);
        })
      }
    },
    filters:{
      // 'to-uppercase':function(value){
      //   return value.toUpperCase();
      // }
      toUppercase(value){
        return value.toUpperCase();
      },
      'snippet':function(value){
        return value.slice(0,100) + ' ......';
      }
    },
    directives:{
      'rainbow':{
        bind(el,binding,vnode){
          el.style.color =  '#' + Math.random().toString(16).slice(2,8);
        }
      }
    }
  }

</script>

<style scoped>
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: #eee;
    border: 1px dotted #aaa;
  }
  .single-blog h2{
    font-size: 20px;
  }
  .single-blog article{
    font-size: 14px;
  }
  .author-info{
    padding-top: 8px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #777;
  }
  .author-info span:first-child{
    order: 1;
  }
  .cate span{
    display: inline-block;
    margin-right: 10px;
  }
  #show-blogs a{
    text-decoration: none;
  }
  #show-blogs h1{
    margin-bottom: 20px;
  }
  input[type='text']{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
  @media screen and (max-width: 400px){
    #show-blogs{
      max-width: 400px;
      margin: 0 auto;
      padding:0 15px;
    }
    #show-blogs a{
      text-decoration: none;
    }
    #show-blogs h1{
      margin-bottom: 20px;
      font-weight: 500;
      color: #444;
    }
    .single-blog{
      padding: 10px;
      margin: 20px 0;
      box-sizing: border-box;
      background-color: #fff;
      border: 1px solid #dfdfdf;
      border-radius: 10px;
      box-shadow: 3px 3px 3px #dfdfdf;
    }
    .single-blog h2{
      font-size: 20px;
      font-weight: 500;
    }
    .single-blog article{
      font-size: 14px;
    }
    .author-info{
      padding-top: 8px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #777;
    }
    .author-info span:first-child{
      order: 1;
    }
    .cate span{
      display: inline-block;
      margin-right: 10px;
    }

    input[type='text']{
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
    }
  }
</style>