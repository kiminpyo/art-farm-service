<template>
  <div id="app" >
    
    <div class="header">
     <router-link to="/"><h1>ART FARM</h1></router-link>
    </div>
    <div id="nav" >
         
      <router-link to="/">home</router-link> |
      <router-link to="/board">게시판</router-link> |
      <router-link to="/Gallery">전시글</router-link>
    </div>

    <router-view class="body"/>

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
  background-image:url('https://cdn.pixabay.com/photo/2018/08/17/22/19/m42-3613914_1280.jpg');
  background-repeat : no-repeat;
  background-size:cover;
  color:white;
  opacity: 1;
}


a{
  text-decoration:none;
  
}

h1{
  text-align:center;
}
#nav{
  text-align: center;
  justify-content: center;
  
}
</style>
