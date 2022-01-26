
<template>
  <swiper class="swiper" :options="swiperOption"  >
    <div v-for="data in data.exhFile" :key="data.exhibitionIdx">
        <swiper-slide>Slide 1</swiper-slide>
    </div>
    
   
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name: 'swiper-example-loop',
    title: 'Loop mode / Infinite loop',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
       const exhibitionIdx = this.$route.query.artexhibitionIdx;
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        data: [],
        file: [],
        exhibitionIdx: exhibitionIdx
      }
    },
    created(){

    console.log(this.discription,this.title, this.author, this.place, this.artexhPeriod)
    console.log(this.exhibitionIdx)
    this.getFile();
  }, 
  methods:{
    getFile(){
      axios.get("http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/exhibition?exhibitionIdx=" + this.exhibitionIdx)
      .then((response) => {
        console.log(response.data)
         this.data =response.data;
          this.file = this.data.exhFile;
           for(let i = 0 ; i <= this.file.length; i++){
            /* this.fileUrl = this.file[i].filePath; */
         /*    console.log("fileurl==>"+ this.fileUrl) */
        
          } 
         
      })
      
    }
  }
  }
</script>

<style lang="scss" scoped>
 .swiper { height: 300px; width: 100%;
 } 
 .swiper-slide { display: flex; 
  justify-content: center;
  align-items: center; 
  text-align: center;
   font-weight: bold; 
   color:white;
   } 
   


</style>

