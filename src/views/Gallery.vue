<template>

  <div class="gallery"> 
    <div class="galleryenroll">
      <button class="btn btn-sm btn-outline-secondary" style="color:white;" @click="click"><span>등록하기</span>
      </button>
      </div>
  <div class="gallery-wrap col-md-12" style="width:100%">
  <div class="sidebar col-md-2">
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white " style="width: 280px; height:100%">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <span class="fs-4">카테고리</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link text-white" >
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
          미술관
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
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
   
  </div>
  </div>
  <div class="album com-md-10 row ">
    <div class="album-container" v-for="data in data.content" :key="data.exhibitionIdx">
          <div class="col-md-3">
          <div class="card shadow-sm">
           <img src="@/assets/wall-g7bf2bd61d_1920.jpg" class="bd-placeholder-img card-img-top" style="width:100%; height:225px">
            <div class="card-body">
            <p class="card-text">{{data.title}} </p>
            <p class="card-text">{{data.place}}</p>
     
           <div class="d-flex justify-content-between align-items-center">
             <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" @click="artdetail">View</button>
           </div>
           </div>
          </div>
            </div>
         </div>
    </div>
     <div >
          <v-pagination 
            v-model="data.currentPage"
            :length="data.totalPages"
            @input="handlePageChange"
          ></v-pagination>    
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
      data:[


      ]   ,
       page: 1
    }
  },
  methods: {
      click(){
        this.$router.push({
          name: "artcreate"
        })
      },
      
      artdetail(){
        this.$router.push({
          name: "artdetail"
        })
      },
      getItem(){
        const page = 0;

          axios.get("http://localhost:8080/api/exhibitionlist?page=" + page)
          .then((response) => {
              this.data = response.data;  
     /*          console.log(this.data)
              console.log( this.data.totalPages)
              console.log(this.data.totalElements)
              console.log(this.data.size)
              console.log(this.data.numberOfElements)
              console.log(this.data.content) */
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
        url: "http://localhost:8080/api/exhibitionlist?page=" + (pageNo-1),
        type : "get",
       
      })
       .then((response) =>{
        this.data = response.data;
        console.log(this.data.content[0].exhibitionIdx)
  
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
          this.handlePageChange()
          this.getItem();
      }
  

}
</script>

<style scoped lang="scss">
.gallery-wrap{
display:flex;
margin-top:5%;


}
.galleryenroll  {
 text-align:center;

}


</style>