<template>


    


  <div class="gallery"> 
    <div class="galleryenroll">
      <button class="btn btn-sm btn-outline-secondary" style="color:white;" @click="click"><span>등록하기</span>
      </button>
      </div>
  <div class="gallery-wrap col-md-12" style="width:100%">
  <div class="sidebar">
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
  <div class="album ">
    <div class="album-container">

      <div class="row col-md-12">
        <div class="col-md-3">
          <div class="card shadow-sm">
           
              <img src="@/assets/wall-g7bf2bd61d_1920.jpg" alt="" class="bd-placeholder-img card-img-top" style="width:100%; height:225px">
           

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" @click="artdetail">View</button>
                </div>
          
              </div>
            </div>
          </div>
        </div>
                <div class="col-md-3">
          <div class="card shadow-sm">
           
              <img src="@/assets/wall-g7bf2bd61d_1920.jpg" alt="" class="bd-placeholder-img card-img-top" style="width:100%; height:225px">
           

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" @click="artdetail">View</button>
                </div>
          
              </div>
            </div>
          </div>
        </div>
                <div class="col-md-3">
          <div class="card shadow-sm">
           
              <img src="@/assets/wall-g7bf2bd61d_1920.jpg" alt="" class="bd-placeholder-img card-img-top" style="width:100%; height:225px">
           

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" @click="artdetail">View</button>
                </div>
          
              </div>
            </div>
          </div>
        </div>
                <div class="col-md-3">
          <div class="card shadow-sm">
           
              <img src="@/assets/wall-g7bf2bd61d_1920.jpg" alt="" class="bd-placeholder-img card-img-top" style="width:100%; height:225px">
           

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" @click="artdetail">View</button>
                </div>
          
              </div>
            </div>
          </div>
        </div>
       
      </div>
     

    </div>
  </div>
  
  </div>
  </div>



      



</template>

<script>
export default {
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
    }
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