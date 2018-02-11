<template>
  <div id="add-blog">
    <h1>{{ msg }}</h1>
    <form v-if="!submited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required>
      <label>博客内容：</label>
      <textarea v-model="blog.content">
        
      </textarea>
      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Angular4</label>
        <input type="checkbox" value="Angular4" v-model="blog.categories">
      </div>
      <label>作者：</label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author">{{author}}</option>
      </select>
      <button @click.prevent="post">添加博客</button>
    </form>
    <div v-if="submited">您的博客已成功发布！</div>
    <div id="preview">
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <div>{{blog.content}}</div>
      <p>分类：</p>
      <ul><li v-for="cate in blog.categories" :key="cate">{{cate}}</li></ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'add-blog',
  data () {
    return {
      msg: '发布博客',
      blog:{
        title:'',
        content:'',
        categories:[],
        author:''
      },
      authors:['author1','author2','author3'],
      submited: false
    }
  },
  methods:{
    post: function () {
      // this.$http.post('https://wd6017368148uwsznl.wilddogio.com/blog.json',this.blog).
      // then(function(res){
      //   this.submited = true;
      // });
      // var _this = this;
      // axios.post('https://wd6017368148uwsznl.wilddogio.com/blog.json',this.blog).
      // then(function(res){
      //   this.submited = true;
      // });

      axios.post('/blog.json',this.blog).
      then((res) =>{
        this.submited = true;
      });
    }
  }
}
</script>

<style scoped>
  #add-blog *{
    box-sizing: border-box;
  }
  #add-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
  }
  textarea{
    height: 200px;
  }
  #checkboxes label{
    display: inline-block;
    margin-top: 0;
  }
  #checkboxes input{
    display: inline-block;
    margin-right: 10px;
  }
  button{
    display: block;
    margin: 20px 0;
    background-color: crimson;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }
  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
</style>
