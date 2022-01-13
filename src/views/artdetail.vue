<template>
  <div class="artdetail">
  
  <v-app id="inspire">
    <v-carousel 
    style="width:50%; border-radius:70%; margin-left:25%; margin-top:140px;"
    v-model="model">
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
     <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-card-text>
        <div>Word of the Day</div>
        <p class="text-h4 text--primary">
          el·ee·mos·y·nar·y
        </p>
        <p>adjective</p>
        <div class="text--primary">
          relating to or dependent on charity; charitable.<br>
          "an eleemosynary educational institution."
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="teal accent-4"
        
        >
          Learn More
        </v-btn>
      </v-card-actions>
     </v-card>
  </v-app>
  


</div>
		

  

	
		
		

</template>


<script>




	export default {
  props:['artdetail'],
	data(){
    const data = this.$route.query.artdata
    return{
  model: 0,
    colors: [
      '',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
    data : data
  }
  },
  created(){
    console.log(this.data)
  }
}
  
    
    
    
   

  


	
</script>

<style lang="scss" scoped>
.artdetail{
  background: none;
}

.v-app{
  margin:0;
  padding:0 ;
}
.artdetail{
 margin:0;
 padding:0; 
}


</style>