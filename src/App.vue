<template>

    <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      dark
      src="https://cdn.pixabay.com/photo/2018/08/17/22/19/m42-3613914_1280.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img

          v-bind="props"

          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <template>
        <router-link to="/">
        <div class="logo">   
          <h1 class="justify-center">ART FARM</h1>
           <img src="@/assets/artfarm.png" alt="" style="width:50px; height:45px"> </div>
          </router-link>
      </template>

      <template v-slot:extension>
        <v-tabs id="tabs"
          grow
          centered
        >
          <v-tab to="/">
            HOME
          </v-tab>
          <v-tab to="/board">
            게시판
          </v-tab>
          <v-tab to="/Gallery">
            전시글
          </v-tab>
          <v-tab to="/cal">
            전시일정
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container ></v-container>
    </v-sheet>
    <router-view class="body"></router-view>

    <foot-component></foot-component>

  </v-card>

  
  
 <!--  
  <div id="app" >
     <v-app v-if="!isLoaded">
    <splash-component></splash-component>
  </v-app>

 <v-app v-else>
   <div class="header">
     <router-link to="/"><h1>ART FARM</h1></router-link>
      <div id="nav" >
         
      <router-link to="/">home</router-link> |
      <router-link to="/board">게시판</router-link> |
      <router-link to="/Gallery">전시글</router-link>
    </div>
       
    </div>
   

    <router-view class="body"/>

  </v-app> 
  </div>-->   
  
</template>
<script>
import footComponent from '@/views/foot.vue'
export default{
  components: {
    footComponent
    }
  
}

/*import footer from './components/footer.vue'
export default{
  name:'App',
  components: {
    'footer':footer
  }
}*/
 /*     import SplashComponent from '@/views/splash.vue'

  export default {
    components: {
        SplashComponent
      },
      data: () => ({
        isLoaded: false
      }),
      created() {
        this.splashing()
      },
      methods: {
        splashing() {
          setTimeout(() => {
            this.isLoaded = true
          }, 1000)
        }
    } 
}  
  */
</script>
<style scoped>
*{
 
  list-style: none;
}
.body{
    background-color:pink;
 /*  background-image:url('https://cdn.pixabay.com/photo/2018/08/17/22/19/m42-3613914_1280.jpg'); */
  background-repeat: repeat;
  margin-top:80px;
  height:3000px;
}
.logo{
      display: flex;
}

a{
  text-decoration:none;
  color:white;
  font-size:1.5rem;
}
h1{
  text-align:center;
  color:white;
}
#nav{
  text-align: center;
  justify-content: center;
}
#nav_menu:hover,
#nav_menu.router-link-active,
#nav_menu.router-link-exact-active {
  cursor: pointer;
}
#tabs{
  margin:0 auto;
}
#art{
  text-overflow:clip;
  overflow:visible;
  
}

</style>
