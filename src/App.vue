<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title id="art"><h1>ART FARM</h1></v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs id="tabs"
          v-model="selectedTab"
          grow
          centered
        >
          <v-tab>
            <router-link to="/">Home</router-link>
          </v-tab>
          <v-tab>
            <router-link to="/board">게시판</router-link>
          </v-tab>
          <v-tab>
            <router-link to="/Gallery">전시글</router-link>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 100px;"></v-container>
    </v-sheet>
    <router-view class="body"></router-view>
  </v-card>
  
</template>
<script>
export default {
  
  components: {
    
    }
}
</script>
<style scoped>
*{
  /*background-image:url('https://cdn.pixabay.com/photo/2018/08/17/22/19/m42-3613914_1280.jpg'); */
  background-repeat : no-repeat;
  background-size:cover;
  color:black;
  opacity: 1;
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
