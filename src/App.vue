<template>
<div>
    <v-card model="" class="overflow-hidden">
    <v-app-bar
      absolute
      dark

      src="https://cdn.pixabay.com/photo/2018/08/17/22/19/m42-3613914_1280.jpg" 
      >
        <template v-slot:img="{ props }">
          <v-img
             v-bind="props"
              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>


        <template>

          <div class="logo" style="margin:0 auto;">   
            <router-link to="/" style="display:flex;">
              <h1 class="justify-center"><img src="@/assets/3.png" alt="" style="width:300px;"></h1>
           <!--    <img src="@/assets/artfarm.png" alt="" style="width:50px; height:45px"> -->

            </router-link>
          </div>
        </template>

        <template v-slot:extension>
          <v-tabs id="tabs"
            grow
            centered
          >
          <v-tab to="/">
              홈
              </v-tab>
            <v-tab to="/board">
             게시판
            </v-tab>
            <v-tab to="/Gallery">
            전시글
            </v-tab>
            <v-tab to="/cal">
              일정
            </v-tab>
            
          </v-tabs>
          
        </template>
      
    </v-app-bar>
    

    <router-view class="body">
    
    </router-view>


    <foot-component></foot-component>

  </v-card>
     
</div>
  
  
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
document.cookie="safeCookie1=foo;SameSite=Lax";
document.cookie="safeCookie=foo";
document.cookie="crossCookie=bar;SameSite=None;Secure";
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
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Roboto', sans-serif;
}

#app {
  font-family: 'Roboto', sans-serif;
}
*{
   font-family: 'Roboto', sans-serif;
}
.body{
  background-image: linear-gradient(to bottom, #5c6772, #4f5761, #414851, #353941, #282b32);
 /*  background-image:url('https://cdn.pixabay.com/photo/2018/08/17/22/19/m42-3613914_1280.jpg');   */
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
.v-toolbar__content{
  justify-content: center;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
