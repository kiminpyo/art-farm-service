<template>

  <div class="gallery"> 
    <div class="galleryenroll">
      <div class="btn btn-sm btn-outline-secondary" style="color:white;" @click="click"><span>등록하기</span>
      </div>
      </div>
  <div class="gallery-wrap col-md-12" >
  <div class="sidebar col-md-2" style="width:100%; height:100%; position:fixed;">
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white " style="width: 280px;  ">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <span class="fs-4">카테고리</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link text-white" >
          <svg class="bi me-2" width="16" height="16" ></svg>
          미술관
        </a>
      </li>
      <li>
        
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"  ><use xlink:href="#speedometer2"/></svg>
          사진전
        </a>
      </li>
      <li>
        
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          개인전
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          사진
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
          기사
        </a>
      </li>
    </ul>
    <hr>
     <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <span class="fs-4">카테고리</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
     
      <li class="ingbtn">
        <v-button class="" 
            v-model="data.currentPage"
            :length="data.totalPages"
            @click="handleDateChange"
         >
          <svg class="bi me-2" width="16" height="16"></svg>
          진행중인 전시</v-button>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          종료된 전시
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          예정 전시
        </a>
      </li>
     
    </ul>
    <hr>
   
  </div>
  </div>
  <div class="col-md-8" style="margin-left:350px;">
    <div class="album-wrap row">
    <div class="album-container col-md-3" v-for="data in data.content" :key="data.exhibitionIdx">

          <div class="card shadow-sm">
           <img src="@/assets/wall-g7bf2bd61d_1920.jpg" class="bd-placeholder-img card-img-top" style="width:100%; height:225px">
            <div class="card-body">
            <p class="card-text">{{data.title}}</p>
            <p class="card-text">{{data.place}}</p>
             <p class="card-text">{{data.author}}</p>
     
           <div class="d-flex justify-content-between align-items-center">
             <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" @click="artdetail(data)">View</button>
           </div>
           </div>
          </div>
            </div>
         
    </div>
          <div class="page">
          <v-pagination 
            v-model="data.currentPage"
            :length="data.totalPages"
            @input="handlePageChange"
          ></v-pagination> 
        
          
          
           
          
      </div>
      
      </div>
  </div>
  
  </div>
  
  </div>



      



</template>

<script>
 import $ from 'jquery' 
import axios from 'axios'
export default {
  
  data(){
    return{
      data:[],
      todaydata:[],
       page: 1
    }
  },
  methods: {
      click(){
        this.$router.push({
          name: "artcreate"
        })
      },
      
      artdetail(data){
        console.log(data)
        this.$router.push({
          name: "artdetail",
            query :{
              artdata: data.discription
            }
        })
    console.log(this.artdata)
      },
      selectDate() {  
          let date = new Date();
          var year = date.getFullYear(); //년도
          var month = date.getMonth()+1; //월
          var day = date.getDate()+" "; //일
       /*  var hour = date.getHours();
        var minute = date.getMinutes();  */
          if ((day+"").length < 2) {       // 일이 한자리 수인 경우 앞에 0을 붙여주기 위해
            day = "0" + day;
        }
         if ((month+"").length < 2) {       // 일이 한자리 수인 경우 앞에 0을 붙여주기 위해
            month = "0" + month;
        }

    
      // date = year+"-"+month+"-"+day+ hour+":" + minute;  
       date = year+"-"+month+"-"+day// 오늘 날짜
        let registdate = this.data.registDate;
       console.log(registdate)
      console.log("date===>"+date)
     
    
       console.log(date)
        axios.get('http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/exhibition/period?date='+ date)
        .then((response) => {
          console.log(response.data)
          this.todaydata = response.data; //현재 진행중인 데이터
          console.log(this.todaydata)

         
        })
      },
      handleDateChange() {
          let date = new Date();
          var year = date.getFullYear(); //년도
          var month = date.getMonth()+1; //월
          var day = date.getDate()+" "; //일
       /*  var hour = date.getHours();
        var minute = date.getMinutes();  */
          if ((day+"").length < 2) {       // 일이 한자리 수인 경우 앞에 0을 붙여주기 위해
            day = "0" + day;
        }
         if ((month+"").length < 2) {       // 일이 한자리 수인 경우 앞에 0을 붙여주기 위해
            month = "0" + month;
        }

    
      // date = year+"-"+month+"-"+day+ hour+":" + minute;  
       date = year+"-"+month+"-"+day// 오늘 날짜
      this.page = date;
      console.log(this.page)
    axios({
        url: "http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/exhibition/period?date=" + date,
        type : "get",
       
      })
       .then((response) =>{
        this.data = response.data;
        console.log(this.data.content)
        console.log(this.data)

    })
    },
   
       getItem(){
        const page = 0;

          axios.get("http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/exhibitionlist?page=" + page)
          .then((response) => {
              this.data = response.data;  
               console.log(this.data)
              console.log( this.data.totalPages)
              console.log(this.data.totalElements)
              console.log(this.data.size)
              console.log(this.data.numberOfElements)
              console.log(this.data.content) 
            var pageBtn  = '';
            
            for(var pageNo = 0; pageNo < this.data.totalPages; pageNo++){ 
                pageBtn += "<li>";
                pageBtn += "<button id=\"btn_write\" class=\"btn_write btn btn-primary btn-floating\" v-on:click=\"page("+ (pageNo+1) +")\">" +(pageNo+1)+"</button>";
                pageBtn += "</li>";

            }
            console.log(pageBtn)
            $("ul#pages").append(pageBtn)
        })
      }, 
        handlePageChange(pageNo) {
      this.page = pageNo;
      console.log(this.page)
    axios({
        url: "http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/exhibitionlist?page=" + (pageNo-1),
        type : "get",
       
      })
       .then((response) =>{
        this.data = response.data;
        console.log(this.data.content)
        console.log(this.data)
  
    /*     var list= '';
        for(let i = 0; i < this.data.numberOfElements; i++){
            list += '<div class="col-md-3">';
            list += '<div class="card shadow-sm">';
            list += '<img src="@/assets/wall-g7bf2bd61d_1920.jpg" class="bd-placeholder-img card-img-top" style="width:100%; height:225px">';
           

            list += '<div class="card-body">'
            list += '<p class="card-text">' + this.data.content[i].title + '</p>'
            list += '<p class="card-text">' + this.data.content[i].place + '</p>'
     
            list +=  '<div class="d-flex justify-content-between align-items-center">'
            list +=   '<div class="btn-group">'
            list +=   '<button type="button" class="btn btn-sm btn-outline-secondary" @click="artdetail">View</button>'
            list +=     '</div>'
            list +=      '</div>'
            list += '</div>'
            list +=  '</div>'
            list +=  '</div>'
        }
         
           $(".album-container").empty();
           $(".album-container").append(list); */

    
    })
    },
  
    
  },
     created(){
         /*  this.handlePageChange() */
            this.getItem()
        /*   this.selectDate()  */
      } 
  

}
</script>

<style scoped lang="scss">
.gallery-wrap{
display:flex;
}
.gallery{
  margin-top:10%;
}
.galleryenroll  {
 text-align:center;

}
.ingbtn:click{
  color:red;
}
.ingbtn:hover{
  color:green;
}


</style>