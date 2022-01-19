<template>
  <div class="gallery">
    <!--원래 버튼있던 자리
    <div class="galleryenroll">
      <select class="btn" name="" id="">
        <option value=""></option>
      </select>
    </div>-->
    <div class="gallery-wrap col-md-12 justify-content-center">
      <div class="sidebar col-md-2" style="width:100%; height:100%; text-align:center">
        <div class="d-flex flex-column flex-shrink-0 p-3 text-white " style="width: 280px;   ">
        
          <svg class="bi me-5" width="40" height="32">
            <use xlink:href="#bootstrap" />
          </svg>
          <span class="fs-4">카테고리</span>
          
          <hr>
          <ul class="nav nav-pills flex-column mb-auto">
             <vue-page-transition 
           
             
             name="fade">
            </vue-page-transition>
            <li class="nav-item">
              <a href="#" class="nav-link text-white" id="VISUAL" v-on:click="category(bar, $event)" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette" viewBox="0 0 16 16">
                  <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                  <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
                </svg>
                미술
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white" id="INDUSTRIAL" v-on:click="category(bar, $event)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                </svg>
                시각
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white" v-on:click="category(bar, $event)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                  <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                </svg>
                산업
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white " v-on:click="category">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                </svg>
                건축
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white" v-on:click="category">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-handbag" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"/>
                </svg>
                패션
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white" v-on:click="category">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                  <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"/>
                </svg>
                공예
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white" v-on:click="category">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-reels" viewBox="0 0 16 16">
                  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
                  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
                  <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>
                영상
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white" v-on:click="category">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-controller" viewBox="0 0 16 16">
                  <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
                  <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
                </svg>
                게임
              </a>
            </li>
          </ul>
          <hr>
        
            <svg class="bi me-5" width="40" height="32">
              <use xlink:href="#bootstrap" />
            </svg>
            <span class="fs-4">카테고리</span>
        
          <hr>
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="ingbtn">
              <button
                :length="data.totalPages" 
                @click="handleDatenow">
                <svg class="bi me-2" width="16" height="16"></svg>
                진행중인 전시
              </button>
            </li>
            <li class="ingbtn">
              <button 
                :length="data.totalPages" 
                @click="handleDatenow">
                <svg class="bi me-2" width="16" height="16"></svg>
                진행중인 전시
              </button>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi me-2" width="16" height="16">
                  <use xlink:href="#grid" />
                </svg>
                예정 전시
              </a>
            </li>
          </ul>
          <hr>
        </div>
      </div>
      <div class="col-md-6" >
        <select class="btn" name="" id="">
          <option value="">5개씩 보기</option>
          <option value="">10개씩 보기</option>
          <option value="">15개씩 보기</option>
        </select>
        <div class="album-wrap row col-md-12">
          <div class="album-container col-md-3" v-for="data in data.content" :key="data.exhibitionIdx">
              <v-hover v-slot="{hover}">
                <v-card
                  v-model="data.items"
                  color="black"  
                >
                  <div class="card shadow-sm" >
              
                    <v-img src="@/assets/wall-g7bf2bd61d_1920.jpg" class="bd-placeholder-img card-img-top" style="width:100%; height:225px">
                    </v-img>
                    <div class="card-body">
                      <p class="card-text">{{data.title}}</p>
                      <p class="card-text">{{data.place}}</p>
                      <p class="card-text">{{data.category}}</p>
                    </div>
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out v-card--reveal"
                        style="height:100%;  background-image: linear-gradient(to right, #6770ab, #4d5e8a, #394c68, #2c3948, #22262a); width:100%"
                      >
                  <!-- 호버 시 나오는 데이터 -->
                        <div class="hoverwrap" >
                          <div class="btn-group" >
                            <button type="button" class="btn btn-sm btn-outline-secondary" style="color:white" v-on:click="artdetail(data)"><h2>view</h2></button>
                          </div>
                        </div>
                      </div>
                    </v-expand-transition>
                  </div>
                </v-card>
              </v-hover>
            </div>
            <div class="page">
              <v-pagination v-model="data.currentPage" :length="data.totalPages" @input="handlePageChange"></v-pagination>
              <div class="btn btn-sm btn-outline-secondary" style="color:white; width:100px; font-weight:bold; font-size: 15px; " @click="click">
              <span>등록하기</span>
            </div>
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
  data() {
    return {
      data: [],
      exhPeriod: [],
      todaydate: '',
      page: 1,
    }
  },
  methods: {
    click() {
      this.$router.push({
        name: "artcreate"
      })
    },
    artdetail(data) {
      for(let i = 0; i < data.exhPeriod.length; i++ ){
        console.log(data.exhPeriod[i].date)
        this.todaydate  += data.exhPeriod[i].date ;
        console.log(this.todaydate)
      }
      console.log(data)
      console.log(data.discription)
      console.log(data.title)
      console.log(data.place)
      console.log(this.todaydate)
      console.log(data.subTitle)
      console.log(data.author)
      this.$router.push({
        name: "artdetail",
        query: {
          artdiscription: data.discription,
          arttitle: data.title,
          artplace: data.place,
          artauthor: data.author,
          artexhPeriod: this.todaydate,
          artsubTitle: data.subTitle
        }
      }) 
    },
    selectDate() {
      let date = new Date();
      var year = date.getFullYear(); //년도
      var month = date.getMonth() + 1; //월
      var day = date.getDate() + " "; //일
      /*  var hour = date.getHours();
       var minute = date.getMinutes();  */
      if ((day + "").length < 2) { // 일이 한자리 수인 경우 앞에 0을 붙여주기 위해
        day = "0" + day;
      }
      if ((month + "").length < 2) { // 일이 한자리 수인 경우 앞에 0을 붙여주기 위해
        month = "0" + month;
      }
      // date = year+"-"+month+"-"+day+ hour+":" + minute;  

      date = year + "-" + month + "-" + day // 오늘 날짜
      let registdate = this.data.registDate;
      console.log(registdate)
      console.log("date===>" + date)


      console.log(date)
      axios.get('http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/exhibition/period?date=' + date)

      .then((response) => {
        console.log(response.data)
        this.data = response.data; //현재 진행중인 데이터
        console.log(this.data)
      })
    },
    handleDatenow() {
      let date = new Date();
      var year = date.getFullYear(); //년도
      var month = date.getMonth() + 1; //월
      var day = date.getDate() + " "; //일
      /*  var hour = date.getHours();
       var minute = date.getMinutes();  */
      if ((day + "").length < 2) { // 일이 한자리 수인 경우 앞에 0을 붙여주기 위해
        day = "0" + day;
      }
      if ((month + "").length < 2) { // 일이 한자리 수인 경우 앞에 0을 붙여주기 위해
        month = "0" + month;
      }
      // date = year+"-"+month+"-"+day+ hour+":" + minute;  
      date = year + "-" + month + "-" + day // 오늘 날짜
      this.page = date;
      console.log(this.page)
      axios({
        url: "http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/exhibition/period?date=" + date,
        type: "get",
      })
      .then((response) => {
        this.data = response.data;
        console.log(this.data.content[0])
      })
    },
    getItem() {
      const page = 0;

      axios.get("http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/exhibitionlist?size=20&page=" + page)
      .then((response) => {
        this.data = response.data;
        console.log(this.data)
        console.log(this.data.totalPages)
        console.log(this.data.totalElements)
        console.log(this.data.size)
        console.log(this.data.numberOfElements)
        console.log(this.data.content)
        console.log(this.data.content[0].author)
        var pageBtn = '';
        for (var pageNo = 0; pageNo < this.data.totalPages; pageNo++) {
          pageBtn += "<li>";
          pageBtn += "<button id=\"btn_write\" class=\"btn_write btn btn-primary btn-floating\" v-on:click=\"page(" + (pageNo + 1) + ")\">" + (pageNo + 1) + "</button>";
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
        url: "http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/exhibitionlist?page=" + (pageNo - 1),
        type: "get",
      })
      .then((response) => {
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
    category(bar, event){
      const targetId = event.currentTarget.id;
      console.log(targetId)
      axios({
        method: "get",
        url: "http://ec2-13-124-134-65.ap-northeast-2.compute.amazonaws.com:8080/api/exhibition/category?category=" + targetId,
        
      }).then((response) =>{
        console.log(response.data)
        this.data = response.data;
      })
    }
  },

  created() {
    this.handlePageChange() 
    this.getItem()
  }
}
</script>

<style scoped lang="scss">
.gallery-wrap {
  display: flex;
}
.nav-link{
  color:white;
}
.nav-link:hover{
  color: gray;
}
.ingbtn:click {
  color: red;
}
.ingbtn:hover {
  color: green;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
.v-responsive__content{
  flex: auto;
}


</style>