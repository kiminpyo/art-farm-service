<template>

  <div class="gallery"> 

    <div class="galleryenroll">
      <div class="btn btn-sm btn-outline-secondary" style="color:white;" @click="click">
        <span>등록하기</span>
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
              <a href="#" class="nav-link text-white" @click="selectcate" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brush" viewBox="0 0 16 16">
                  <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z"/>
                </svg>
                미술관
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                </svg>
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
      
      getItem(){
        const page = 0;

          axios.get("http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/exhibitionlist?page=" + page)
          .then((response) => {
            this.data = response.data;  
            /*console.log(this.data)
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
        url: "http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/exhibitionlist?page=" + (pageNo-1),
        type : "get",
      })
      .then((response) =>{
        this.data = response.data;
        console.log(this.data.content)
        console.log(this.data)
      /*var list= '';
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
    selectcate(){
      console.log("hi")
    }
    
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
  }

.galleryenroll  {
  text-align:center;
}

</style>