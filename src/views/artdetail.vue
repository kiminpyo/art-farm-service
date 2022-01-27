<template>
  <div >
    <div class="artdetail" style="text-align:center;">
   
        <div style="display:flex; padding-top:150px;">
          <swiper class="swiper" :options="swiperOption" >
  
        <swiper-slide v-for="(path) in data.exhFile" :key="path.fileIdx"
        style="width:100%; height:600px; overflow:hidden;">
         <img :src="path.filePath" alt="" style=" width:40%; height:100%;">
        </swiper-slide>

          <div v-for="data in data.exhFile" :key="data.exhibitionIdx">
    </div>
    
   
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
        </div>
      
      <div class="artinfo" style="padding-top:100px; margin-left:30%;">
        <table>
          <colgroup>
            <col class="colth"> 
            <col>
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">기간</th>
              <td>{{this.exhPeriod}}</td>
            </tr>
            <tr>
              <th scope="row">제목</th>
              <td>{{this.title}}</td>
            </tr>
            <tr>
              <th scope="row">장소</th>
              <td>{{this.place}}</td>
            </tr>
            <tr>
              <th scope="row">작가</th>
              <td>{{this.author}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div class="artintro"  style="padding-top:100px; height:100%; margin-left:30%; line-height:200%; white-space:pre-wrap; text-align:start;" >
          {{this.discription}}
        </div>
      </div>
      <div class="artbtn" style="margin-top:100px; margin-left:500px;" >
        <router-link to="/Gallery">
        <button
        style="color:white; font-size:30px; border:3px solid white;">뒤로가기</button>
        </router-link>
      </div>
      
    </div>
  </div>
</template>

<script>
/* import Lingallery from 'lingallery'; */
import axios from 'axios';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
//gallery에서 내려온 propsdata고, return값으로 반환 해줌
	export default {
        name: 'swiper-example-loop',
        title: 'Loop mode / Infinite loop',
        components: {
        Swiper,
        SwiperSlide
        },
        props:['artdetail'],
	data(){

    const discription = this.$route.query.artdiscription;
    const title = this.$route.query.arttitle ;
    const author = this.$route.query.artauthor;
    const place = this.$route.query.artplace;
    const exhPeriod = this.$route.query.artexhPeriod;
    const exhibitionIdx = this.$route.query.artexhibitionIdx;

    return{
      discription : discription, 
      title: title,
      author : author,
      place : place,
      exhPeriod: exhPeriod,
      exhibitionIdx : exhibitionIdx,
      data: [],
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
         file: [],
       
        fileUrl: [],
        filePath:[]
      
      
      }
  },
 
  //import를 시켜주면 components로 등록해줘야 사용가능
 /*   components: {
      Lingallery
    }, */

    //콘솔을 찍기 힘들어서 즉시 실행함수에 부모쪽 데이터들이 잘 들어오는지 확인용
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
                console.log("fileurl==>"+ this.file) 
              
              let fileUrl = this.file[i].filePath;
                console.log(fileUrl)
            } 
          
        })
        
      },
      picturedetail(){
        console.log('hi')
        
      }
    }
}
  
	
</script>

<style lang="scss" scoped>

.v-app{
  margin:0;
  padding:0 ;
}
.artdetail{
  padding:0; 
 
}
.artinfo{
  width:1000px;
}
tbody > tr  th,td{
  padding: 25px;
  font-weight: bold;
  font-size:25px;
}
.colth{
  border-right: 2px solid white;
}
table{
  color:white;
  margin-top:3%;
  width:100%;
  height:auto;
  text-align:center;
}
.artintro{
  margin-top:3%;
  width:1000px;
  height:500px;
  color:white;
 
  font-size:20px;
}
.swiper { 
 
  overflow:hidden;
  
 } 
 .swiper-slide { display: flex; 
  justify-content: center;
  align-items: center; 
  text-align: center;
   font-weight: bold; 
   color:white;
  
   } 
</style>