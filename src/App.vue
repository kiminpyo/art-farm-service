<template>

<div>
    
    <v-card class="overflow-hidden">
    <v-app-bar
      absolute>
      


        <template>

          <div class="logo" style="margin:0 auto;">   
            <router-link to="/" style="display:flex;">
              <h1 class="justify-center"><img src="@/assets/3.png" alt="" style="width:400px; margin-top:50px;"></h1>
           <!--    <img src="@/assets/artfarm.png" alt="" style="width:50px; height:45px"> -->

            </router-link>
          </div>
        </template>

        <template v-slot:extension>
          <v-tabs id="tabs"
            centered
            style="margin-top:100px;"
          >

          <v-tab id="tab" to="/">
              홈
              </v-tab>
            <v-tab id="tab" to="/board">
             게시판
            </v-tab>
            <v-tab id="tab" to="/Gallery">
            전시글
            </v-tab>
            <v-tab id="tab" to="/cal">
              일정
            </v-tab>

          </v-tabs>
          
        </template>
      
    </v-app-bar>
    

      <router-view class="body">
         
       <vue-page-transition name="fade">
 
      </vue-page-transition>
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
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Roboto', sans-serif;
 
}
#app {
  font-family: 'Roboto', sans-serif;

}
.body{
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='100%' height='3000px' viewBox='0 0 1350 900' enable-background='new 0 0 1350 900' xml:space='preserve'%3E%3Crect x='0.486' y='-3' fill='%23121222' width='1350' height='910'/%3E%3C!-- 1 --%3E%3Cdefs%3E%3Cpath opacity='1' id='path1' fill='%23FFFFFF' d='M176,209.88c0,4.308-3.424,7.8-7.647,7.8h-36.706c-4.223,0-7.647-3.492-7.647-7.8v-19.76 c0-4.308,3.424-7.8,7.647-7.8h36.706c4.223,0,7.647,3.492,7.647,7.8V209.88z'%3E%3Canimate attributeName='opacity' values='0;1;0' dur='5s' repeatCount='indefinite' /%3E%3C/path%3E%3C/defs%3E%3Cuse xlink:href='%23path1' transform='translate(150 200)'%3E%3CanimateTransform attributeName='transform' type='scale' begin='0s' dur='14s' values='1,1; 2,2' repeatCount='indefinite' /%3E%3Canimate attributeName='opacity' values='0;1;0' dur='7.5s' repeatCount='indefinite' /%3E%3C/use%3E%3C!-- 2 --%3E%3Cdefs%3E%3Cpath opacity='1' id='path2' fill='%23FFFFFF' d='M387.875,369.88c0,4.308-3.424,7.8-7.647,7.8h-36.706c-4.223,0-7.647-3.492-7.647-7.8v-19.76 c0-4.308,3.424-7.8,7.647-7.8h36.706c4.223,0,7.647,3.492,7.647,7.8V369.88z'%3E%3Canimate attributeName='opacity' values='0;1;0' dur='5s' repeatCount='indefinite' /%3E%3C/path%3E%3C/defs%3E%3Cuse xlink:href='%23path2' transform='translate(250 300)'%3E%3CanimateTransform attributeName='transform' type='scale' begin='0s' dur='12s' values='1,1; 2,2' repeatCount='indefinite' /%3E%3Canimate attributeName='opacity' values='0;1;0' dur='4.5s' repeatCount='indefinite' /%3E%3C/use%3E%3C!-- 3 --%3E%3Cdefs%3E%3Cpath opacity='1' id='path3' fill='%23FFFFFF' d='M814,360.88c0,4.308-3.424,7.8-7.647,7.8h-36.706c-4.223,0-7.647-3.492-7.647-7.8v-19.76 c0-4.308,3.424-7.8,7.647-7.8h36.706c4.223,0,7.647,3.492,7.647,7.8V360.88z'%3E%3Canimate attributeName='opacity' values='0;1;0' dur='5s' repeatCount='indefinite' /%3E%3C/path%3E%3C/defs%3E%3Cuse xlink:href='%23path3' transform='translate(250 300)'%3E%3CanimateTransform attributeName='transform' type='scale' begin='0s' dur='15s' values='1,1; 2,2' repeatCount='indefinite' /%3E%3Canimate attributeName='opacity' values='0;1;0' dur='3.40s' repeatCount='indefinite' /%3E%3C/use%3E%3C!-- 4 --%3E%3Cdefs%3E%3Cpath opacity='1' id='path4' fill='%23FFFFFF' d='M819.647,525.2c0,4.308-3.424,7.8-7.647,7.8h-36.706c-4.223,0-7.647-3.492-7.647-7.8v-19.76 c0-4.308,3.424-7.8,7.647-7.8H812c4.223,0,7.647,3.492,7.647,7.8V525.2z'%3E%3Canimate attributeName='opacity' values='0;1;0' dur='5s' repeatCount='indefinite' /%3E%3C/path%3E%3C/defs%3E%3Cuse xlink:href='%23path4' transform='translate(250 300)'%3E%3CanimateTransform attributeName='transform' type='scale' begin='0s' dur='10s' values='1,1; 1.75,1.75' repeatCount='indefinite' /%3E%3Canimate attributeName='opacity' values='0;1;0' dur='3.5s' repeatCount='indefinite' /%3E%3C/use%3E%3C!-- 5 --%3E%3Cdefs%3E%3Cpath opacity='1' id='path5' fill='%23FFFFFF' d='M1025.647,231.2c0,4.308-3.424,7.8-7.647,7.8h-36.706c-4.223,0-7.647-3.492-7.647-7.8v-19.76 c0-4.308,3.424-7.8,7.647-7.8H1018c4.223,0,7.647,3.492,7.647,7.8V231.2z'%3E%3Canimate attributeName='opacity' values='0;1;0' dur='5s' repeatCount='indefinite' /%3E%3C/path%3E%3C/defs%3E%3Cuse xlink:href='%23path5' transform='translate(250 300)'%3E%3CanimateTransform attributeName='transform' type='scale' begin='0s' dur='8s' values='1,1; 2.25,2.25' repeatCount='indefinite' /%3E%3Canimate attributeName='opacity' values='0;1;0' dur='4s' repeatCount='indefinite' /%3E%3C/use%3E%3C!-- 6 --%3E%3Cdefs%3E%3Cpath opacity='1' id='path6' fill='%23FFFFFF' d='M281.647,697.2c0,4.308-3.424,7.8-7.647,7.8h-36.706c-4.223,0-7.647-3.492-7.647-7.8v-19.76 c0-4.308,3.424-7.8,7.647-7.8H274c4.223,0,7.647,3.492,7.647,7.8V697.2z'%3E%3Canimate attributeName='opacity' values='0;1;0' dur='5s' repeatCount='indefinite' /%3E%3C/path%3E%3C/defs%3E%3Cuse xlink:href='%23path6' transform='translate(250 300)'%3E%3CanimateTransform attributeName='transform' type='scale' begin='0s' dur='10s' values='1,1; 2.10,2.10' repeatCount='indefinite' /%3E%3Canimate attributeName='opacity' values='0;1;0' dur='4.25s' repeatCount='indefinite' /%3E%3C/use%3E%3C!-- 7 --%3E%3Cdefs%3E%3Cpath opacity='1' id='path7' fill='%23FFFFFF' d='M561.647,101.2c0,4.308-3.424,7.8-7.647,7.8h-36.706c-4.223,0-7.647-3.492-7.647-7.8V81.44 c0-4.308,3.424-7.8,7.647-7.8H554c4.223,0,7.647,3.492,7.647,7.8V101.2z'%3E%3Canimate attributeName='opacity' values='0;1;0' dur='5s' repeatCount='indefinite' /%3E%3C/path%3E%3C/defs%3E%3Cuse xlink:href='%23path7' transform='translate(250 300)'%3E%3CanimateTransform attributeName='transform' type='scale' begin='0s' dur='17s' values='1,1; 1.30,1.30' repeatCount='indefinite' /%3E%3Canimate attributeName='opacity' values='0;1;0' dur='3.75s' repeatCount='indefinite' /%3E%3C/use%3E%3C!-- 8 --%3E%3Cdefs%3E%3Cpath opacity='1' id='path8' fill='%23FFFFFF' d='M914,94.88c0,4.308-3.424,7.8-7.647,7.8h-36.706c-4.223,0-7.647-3.492-7.647-7.8V75.12 c0-4.308,3.424-7.8,7.647-7.8h36.706c4.223,0,7.647,3.492,7.647,7.8V94.88z'%3E%3Canimate attributeName='opacity' values='0;1;0' dur='4s' repeatCount='indefinite' /%3E%3C/path%3E%3C/defs%3E%3Cuse xlink:href='%23path8' transform='translate(250 300)'%3E%3CanimateTransform attributeName='transform' type='scale' begin='0s' dur='16s' values='1,1; 2,2' repeatCount='indefinite' /%3E%3Canimate attributeName='opacity' values='0;1;0' dur='3s' repeatCount='indefinite' /%3E%3C/use%3E%3C!-- 9 --%3E%3Cdefs%3E%3Cpath opacity='1' id='path9' fill='%23FFFFFF' d='M98,384.88c0,4.308-3.424,7.8-7.647,7.8H53.647c-4.223,0-7.647-3.492-7.647-7.8v-19.76 c0-4.308,3.424-7.8,7.647-7.8h36.706c4.223,0,7.647,3.492,7.647,7.8V384.88z'%3E%3Canimate attributeName='opacity' values='0;1;0' dur='5s' repeatCount='indefinite' /%3E%3C/path%3E%3C/defs%3E%3Cuse xlink:href='%23path9' transform='translate(250 300)'%3E%3CanimateTransform attributeName='transform' type='scale' begin='0s' dur='9s' values='1,1; 2.5,2.5' repeatCount='indefinite' /%3E%3Canimate attributeName='opacity' values='0;1;0' dur='4.5s' repeatCount='indefinite' /%3E%3C/use%3E%3C!-- 10 --%3E%3Cdefs%3E%3Cpath opacity='1' id='path10' fill='%23FFFFFF' d='M96,80.88c0,4.308-3.424,7.8-7.647,7.8H51.647c-4.223,0-7.647-3.492-7.647-7.8V61.12 c0-4.308,3.424-7.8,7.647-7.8h36.706c4.223,0,7.647,3.492,7.647,7.8V80.88z'%3E%3Canimate attributeName='opacity' values='0;1;0' dur='3s' repeatCount='indefinite' /%3E%3C/path%3E%3C/defs%3E%3Cuse xlink:href='%23path10' transform='translate(250 300)'%3E%3CanimateTransform attributeName='transform' type='scale' begin='0s' dur='20s' values='1,1; 2,2' repeatCount='indefinite' /%3E%3Canimate attributeName='opacity' values='0;1;0' dur='5s' repeatCount='indefinite' /%3E%3C/use%3E%3C!-- 11 --%3E%3Cdefs%3E%3Cpath opacity='1' id='path11' fill='%23FFFFFF' d='M964,396.88c0,4.308-3.424,7.8-7.647,7.8h-36.706c-4.223,0-7.647-3.492-7.647-7.8v-19.76 c0-4.308,3.424-7.8,7.647-7.8h36.706c4.223,0,7.647,3.492,7.647,7.8V396.88z'%3E%3Canimate attributeName='opacity' values='0;1;0' dur='4s' repeatCount='indefinite' /%3E%3C/path%3E%3C/defs%3E%3Cuse xlink:href='%23path11' transform='translate(250 300)'%3E%3CanimateTransform attributeName='transform' type='scale' begin='0s' dur='15s' values='1,1; 1.75,1.75' repeatCount='indefinite' /%3E%3Canimate attributeName='opacity' values='0;1;0' dur='3.75s' repeatCount='indefinite' /%3E%3C/use%3E%3C!-- 12 --%3E%3Cdefs%3E%3Cpath opacity='1' id='path12' fill='%23FFFFFF' d='M1050,656.88c0,4.308-3.424,7.8-7.647,7.8h-36.706c-4.223,0-7.647-3.492-7.647-7.8v-19.76 c0-4.308,3.424-7.8,7.647-7.8h36.706c4.223,0,7.647,3.492,7.647,7.8V656.88z'%3E%3Canimate attributeName='opacity' values='0;1;0' dur='4s' repeatCount='indefinite' /%3E%3C/path%3E%3C/defs%3E%3Cuse xlink:href='%23path12' transform='translate(200 150)'%3E%3CanimateTransform attributeName='transform' type='scale' begin='0s' dur='7s' values='1,1; 2,2' repeatCount='indefinite' /%3E%3Canimate attributeName='opacity' values='0;1;0' dur='5s' repeatCount='indefinite' /%3E%3C/use%3E%3C/svg%3E%0A");
   width:100%;
   height:3000px;
padding-top:150px;
 
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
  display:flex;
  justify-content:center;
#tab{
  color:white;
  font-size:25px;
}
}
#tabs a{
  padding: 0 40px;
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
