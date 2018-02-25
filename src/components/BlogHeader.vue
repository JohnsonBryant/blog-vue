<template>
  <nav>
    <ul>
      <li>
        <router-link to="/index" exact>博客</router-link>
        <router-link to="/add" exact>写博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name:'blog-header',
  }
</script>

<style scoped>
  nav{
    background-color: crimson;
    padding: 30px 0;
    margin-bottom: 30px;
  }
  ul{
    list-style-type: none;
    text-align: center;
    margin:0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
  }
  .router-link-active{
    background-color: rgba(255,255,255,.8);
    color: #444;
  }
  @media screen and (max-width: 400px){
    nav{
      background-color: rgb(60, 167, 185);
      padding: 20px 0;
      margin-bottom: 20px;
      border-bottom-left-radius:10px;
      border-bottom-right-radius:10px;
    }
    ul{
      list-style-type: none;
      text-align: center;
      margin:0;
    }
    li{
      display: inline-block;
      margin: 0 10px;
    }
    a{
      color: #fff;
      text-decoration: none;
      font-size: 14px;
      padding: 4px 8px;
      border-radius: 5px;
    }
    .router-link-active{
      background-color: rgba(255,255,255,.6);
      color: #777;
    }    
  }
</style>