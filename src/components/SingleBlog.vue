<template>
  <div id="single-blog">
    <h2>{{blog.title}}</h2>
    <div class="author-info">
      <span>{{blog.author}}</span>
      <span class="cate"><span v-for="cate in blog.categories" :key="cate">{{ cate }}</span></span>
    </div>
    <article>{{blog.content}}</article>
    <button @click.prevent="deleteBlog">删除</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "single-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  methods: {
    deleteBlog: function() {
      axios.delete("https://wd6017368148uwsznl.wilddogio.com/blog/" + this.id)
    }
  },
  created() {
    // this.$http.get('https://wd6017368148uwsznl.wilddogio.com/blog/' + this.id + '.json').
    axios.get("/blog/" + this.id + ".json").then(res => {
      this.blog = res.data;
    });
  }
};
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background-color: #eee;
  border: 1px dotted #aaa;
}
#single-blog h2{
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}
#single-blog article{
  font-size: 14px;
  font-weight: 500;
}
.author-info{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #777;
}
.cate{
  padding:0;
}
.cate span{
  margin-left: 8px;
}
@media screen and (max-width: 400px){
  #single-blog {
    max-width: 80%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #dfdfdf;
    border-radius: 10px;
    box-shadow: 3px 3px 3px #dfdfdf;
  }
  #single-blog h2{
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  #single-blog article{
    font-size: 14px;
    font-weight: 500;
  }
  .author-info{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #777;
  }
  .cate{
    padding:0;
  }
  .cate span{
    margin-left: 8px;
  }
}
</style>