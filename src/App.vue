<template>
  <div id="app" >
    
    <div>
     <h1><router-link to="/home">모두의 전시</router-link></h1>
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
*{
  background-color: black;
  color:white;
}
a{
  text-decoration:none;
  
}

h1{
  text-align:center;
}
#nav{
  text-align: center;
  
  
}
</style>
