<template>
<div>
 
  <div class="scene">
    <!-- camera -->
    <div class="roll-camera">
     
      
          <!-- shelf -->
          <div class="shelf top">
            <div class="face top"></div>
            <div class="face front">
             
              <a class="photocard">
                  <img src="https://raw.github.com/peterwestendorp/shelves/master/photos/2.jpg" alt="">
              </a>
              <a href="#" class="photocard">
                  <img src="https://raw.github.com/peterwestendorp/shelves/master/photos/2.jpg" alt="">
              </a>
              <a href="#" class="photocard">
                <img src="https://raw.github.com/peterwestendorp/shelves/master/photos/3.jpg" alt="">
              </a>
              

            </div>
            <div class="face back"></div>
            <div class="face left"></div>
            <div class="face bottom"></div>
          </div>
          <!-- /shelf -->

          <!-- shelf -->
          <div class="shelf middle">
            <div class="face top"></div>
            <div class="face front">

              <a  class="photocard">
                <img src="https://raw.github.com/peterwestendorp/shelves/master/photos/4.jpg" alt="">
              </a>
              <a href="#" class="photocard">
                <img src="https://raw.github.com/peterwestendorp/shelves/master/photos/5.jpg" alt="">
              </a>
              <a href="#" class="photocard">
                <img src="https://raw.github.com/peterwestendorp/shelves/master/photos/6.jpg" alt="">
              </a>

            </div>
            <div class="face back"></div>
            <div class="face left"></div>
            <div class="face bottom"></div>
          </div>
          <!-- /shelf -->

          <!-- shelf -->
          <div class="shelf bottom">
            <div class="face top"></div>
            <div class="face front">

              <a class="photocard">
                <img src="https://raw.github.com/peterwestendorp/shelves/master/photos/7.jpg" alt="">
              </a>
              <a href="#" class="photocard">
                <img src="https://raw.github.com/peterwestendorp/shelves/master/photos/8.jpg" alt="">
              </a>
              <a class="photocard" v-on:click="click">
                <img src="https://raw.github.com/peterwestendorp/shelves/master/photos/9.jpg" alt="">
              </a>

            </div>
            <div class="face back"></div>
            <div class="face left"></div>
            <div class="face bottom"></div>
          </div>
          <!-- /shelf -->
        
        <!-- /camera -->
      </div>
  </div>
</div>
</template>

<script>

export default {
  date(){
    return{
    }
  },

  methods:{
    click(){
      console.log('hi')
    }
  }
}
</script>

<style>



/* 3D scene */
.scene {
  overflow: hidden;
  margin:0 auto;
  width:100%;
  height:100%;
  perspective: 1000px;
  perspective-origin: 50% 25%;
  backface-visibility:  hidden;
  transform-style:  preserve-3d;
}



.roll-camera {
  transform-style: preserve-3d;
}
.roll-camera .move-camera {
  transform-style: preserve-3d;
  transform: translateY(0px);
  transition: all 3s ease-in-out;
}

body.view-top-shelf .roll-camera {
  animation: zoom-roll-top 3s ease-in-out;
}
body.view-top-shelf .roll-camera .move-camera {
  transform: translateY(0px);
}

body.view-middle-shelf .roll-camera {
  animation: zoom-roll-middle 3s ease-in-out;
}
body.view-middle-shelf .roll-camera .move-camera {
  transform: translateY(-200px);
}

body.view-bottom-shelf .roll-camera {
  animation: zoom-roll-bottom 3s ease-in-out;
}
body.view-bottom-shelf .roll-camera .move-camera {
  transform: translateY(-400px);
}

.wallpaper {
  position: absolute;
  width: 200%;
  height: 2000px;
  margin-left:-50%;
  background-image: none;
}
.wallpaper:before {
  content:"";
  display:block;
  width:100%;
  height:100%;
  background: none;
}
.shelf {
  position: absolute;
  left:50%;
  margin-left:-325px;
  transform-style:  preserve-3d;
  backface-visibility:  hidden;
  transform: rotateY(90deg) rotateX(90deg) translateX(199px);
}
.shelf.top {
  top: 450px;
}
.shelf.middle {
  top: 650px;
}
.shelf.bottom {
  top: 850px;
}
.shelf .face {
  position: absolute;
  top:0;
  left:0;
  background-color: #fff7eb;
  box-shadow: inset 0 0 75px 1.5px rgba(0, 0, 0, .1);
}
.shelf .front {
  width: 100px;
  height: 700px;
  transform-style: preserve-3d;
  transform: translateX(35px) translateY(-350px) translateZ(10px);
}
.shelf .back {
  width: 100px;
  height: 700px;
  transform: translateX(35px) translateY(-350px) translateZ(-10px);
}
.shelf .left {
  width: 20px;
  height: 700px;
  background: linear-gradient(0deg, #eae3d8 0%, #fff7eb 100%);
  transform: translateX(25px) translateY(-350px) rotateY(-90deg) translateZ(0);
}
.shelf .top {
  width: 20px;
  height: 100px;
  transform: translateX(75px) translateY(300px) rotateX(90deg) rotateZ(90deg);
}
.shelf .bottom {
  width: 20px;
  height: 100px;
  transform: translateX(75px) translateY(-400px) rotateX(90deg) rotateZ(90deg);
}

/* lighting */
.shelf:before {
  content:"";
  display:block;
  width: 670px;
  height:20px;
  box-shadow: 0 -30px 30px 20px rgba(0, 0, 0, 0.5);
  transform:  rotateX(90deg)
              rotateY(90deg)
              translateX(-20px)
              translateZ(-200px)
              skew(-45deg);
}
.shelf .back:before {
  content:"";
  position: absolute;
  display:block;
  width: 100%;
  height:100%;
  background: rgba(0, 0, 0, 0.65);
}
.shelf .top:before,
.shelf .bottom:before,
.shelf .left:before,
.shelf .right:before {
  content:"";
  position: absolute;
  display:block;
  width: 100%;
  height:100%;
  background: rgba(0, 0, 0, 0.25);
}


/* photo cards */
.shelf .photocard {
  position: relative;
  display:block;
  width: 150px;
  height:100px;
  transform-style:  preserve-3d;
  transform:        rotateX(-90deg)
                    rotateY(270deg)
                    translateY(-50px)
                    translateZ(25px);
}
.shelf .photocard:after {
  content:"";
  position: absolute;
  bottom:0px;
  right:0;
  display:block;
  width: 100px;
  height:1px;
  box-shadow: 0 30px 30px 20px rgba(0, 0, 0, 0.5);
  transform:  rotateX(90deg)
              rotateZ(180deg)
              translateX(25px)
              translateY(-15px)
              skew(-45deg);
  
  /* don't apply box-shadow to FF (render bug) */
  -moz-transform: scale(0);
}
.shelf .photocard:nth-child(1n) {
  top:75px;
}
.shelf .photocard:nth-child(2n){
  top:200px;
}
.shelf .photocard:nth-child(3n){
  top: 325px;
}
.shelf .photocard img {
  display:block;
  width:150px;
  height: 100px;
  outline: 1px solid transparent; /* triggers anti-anliasing in FF */
}
</style>