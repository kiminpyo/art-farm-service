<template>
  <div  >
    <div class="artdetail" style="text-align:center; margin-left:30%;">
   

      <div v-for="data in data.exhFile" :key="data.exhibitionIdx">
       <div>
       <img 
       :src="data.filePath" 
       alt=""/>
       </div>
      </div> 
      <div class="artinfo">
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
        <div class="artintro">
          {{this.discription}}
        </div>
      </div>
      <div class="artbtn">
        <button
        style="background-color:white;">수정</button>
        <button 
        style="background-color:white;"
        v-on:click="picturedetail">더보기 </button>
        <button
        style="background-color:white;">뒤로가기</button>
      </div>
    </div>
  </div>
</template>

<script>
/* import Lingallery from 'lingallery'; */
import axios from 'axios';

//gallery에서 내려온 propsdata고, return값으로 반환 해줌
	export default {

  props:['artdetail'],
	data(){

    const discription = this.$route.query.artdiscription
    const title = this.$route.query.arttitle 
    const author = this.$route.query.artauthor
    const place = this.$route.query.artplace
    const exhPeriod = this.$route.query.artexhPeriod
    const exhibitionIdx = this.$route.query.artexhibitionIdx

    return{
      discription : discription, 
      title: title,
      author : author,
      place : place,
      exhPeriod: exhPeriod,
      exhibitionIdx : exhibitionIdx,
      data: [],
      
      
      };
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
  border:1px solid;
}
</style>