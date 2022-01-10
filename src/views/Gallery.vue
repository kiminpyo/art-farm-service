<template>
  <div class="col-sm-12 d-flex">
      <div class="col-sm-2"></div>
      <!--sidebar-->
      <div class="side-bar col-sm-2">
        <div class="container1">
          <div class="row height d-flex justify-content-center align-items-center" style="margin-bottom:20px;">
              <div class="col-md-10">
                  <div class="search d-flex justify-content-center align-items-center">
                    <button class="btn btn-secondary" style="border-radius:20%;">
                      <i class="bi bi-search"></i>
                    </button>
                    <input type="text" class="form-control" placeholder="Have a question? Ask Now">
                  </div>
              </div>
              <div class="col-md-2"></div>
          </div>
          <div>
            <h5>전시</h5>
          </div>
          <hr style="width:80%">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              Default radio
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              Default checked radio
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
            <label class="form-check-label" for="flexRadioDefault3">
              Default radio
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked>
            <label class="form-check-label" for="flexRadioDefault4">
              Default checked radio
            </label>
          </div>
          <hr style="width:80%">
          <div>
            <h5>카테고리</h5>
          </div>
          <hr style="width:80%">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="check1">
            <label class="form-check-label" for="check1">
              Default checkbox
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="check2" checked>
            <label class="form-check-label" for="check2">
              Checked checkbox
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="check3">
            <label class="form-check-label" for="check3">
              Default checkbox
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="check4" checked>
            <label class="form-check-label" for="check4">
              Checked checkbox
            </label>
          </div>
        </div>
      </div>
      
      <div class="card-view col-sm-6">
        <div class="card-wrapper container">
          <div class="card">
            <div class="card-image" style="height:320px; background-color:white; border:1px solid black;">
              <img src="@/assets/logo.png" alt="">
            </div>
            <div class="card-balnk" style="height:20px;"></div>
            <div class="card-txt" style="height:60px;">
              <div class="title" style="height:20px; background-color:white; border:1px solid black;"></div>
              <div class="sub-title" style="height:20px; background-color:white; border:1px solid black;"></div>
              <div class="info d-flex col-sm-12">
                <div class="place col-sm-3" style="height:20px; background-color:white; border:1px solid black;"></div>
                <div class="date col-sm-9" style="height:20px; background-color:white; border:1px solid black;"></div>
              </div>
            </div>
          </div>
          <div class="card">

          </div>
          <div class="card">

          </div>
          <div class="card">

          </div>
          <div class="card">

          </div>
          <div class="card">

          </div>
          <div class="card">

          </div>
          <div class="card">

          </div>
          <div class="card">

          </div>
        </div>
      </div>
      <div class="col-sm-2"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style sceoped>
.side-bar{
  padding:20px 20px 20px 40px;
  background:#cdcdcd;
  
}
.side-bar hr{
  margin: 20px 0;
}
.card-view{
  padding:20px 40px 20px 20px;
  background:#cdcdcd;
  
}
.card-view .container1 div{
  height:100%;
}
.card-wrapper{
  display:grid;
  grid-template-columns: repeat(3,9fr);
  grid-gap:40px;
  grid-auto-rows:minmax(400px, auto);
}
.card{
  background-color: white;
}
</style>