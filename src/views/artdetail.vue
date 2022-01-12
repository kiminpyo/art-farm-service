<template>
  <div id="app">
  <v-app id="inspire">
    <v-carousel v-model="model">
      <v-carousel-item
        v-for="(color, i) in colors"
        :key="color"
      >
        <v-sheet
          :color="color"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="text-h2">
              Slide {{ i + 1 }}
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-app>
  <!--스플래쉬 파트-->
    <vue-splash
    :show="true"
    :logo="logo"
    title="Artfarm"
    color="#F29661"
    :size="500"
    :fixed="true"
  />
</div>
		

  

	
		
		

</template>


<script>

import YourLogo from "@/assets/wall-g7bf2bd61d_1920.jpg";



	export default {
 
	data: () => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
  }),
    computed: {
    logo() {
      return YourLogo;
    }
  },
  created() {
  setTimeout(() => {
      
    }, 1000);
  }

}
  


	
</script>

<style lang="scss" scoped>






</style>