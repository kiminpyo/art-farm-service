<template>
  <div id="app">
    <div>
     <h1>모두의 전시</h1>
    </div>
    <div id="nav" >
      <router-link to="/home">home</router-link> |
      <router-link to="/board">게시판</router-link> |
      <router-link to="/about">전시글</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  components: {
    
    }
}
</script>
<style scoped>
a{
  text-decoration:none;
  color:black;

}
h1{
  text-align:center;
}
#nav{
  text-align: center;
}
</style>
