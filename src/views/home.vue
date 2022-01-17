<template>
  <div>
    <v-app v-if="!isLoaded">
       <splash-component></splash-component> 

      </v-app> 
    <!--스플래쉬 생성시 메인단의 화면을 뿌려서 데이터의 로딩저하를 막음-->

         <!--  <div v-else> -->

      <div class="container1">
       
        <div id="carousel">
           <h1>gallery</h1>
          <figure><img src="@/assets/constellations-g95da062c7_1920.jpg" alt="" @:click="detail"></figure>
          <figure><img src="@/assets/galaxy-ge099f3f44_1280.jpg" alt=""  @:click="detail"></figure>
          <figure><img src="@/assets/milky-way-gd0a11e093_1920.jpg" alt=""  @:click="detail"></figure>
          <figure><img src="@/assets/orion-nebula-g627181e6f_1920.jpg" alt=""  @:click="detail"></figure>
          <figure><img src="@/assets/constellations-g95da062c7_1920.jpg" alt=""  @:click="detail"></figure>
          <figure><img src="@/assets/starry-sky-gd2b975337_1920.jpg" alt=""  @:click="detail"></figure>
          <figure><img src="@/assets/starry-sky-gd2b975337_1920.jpg" alt=""  @:click="detail"></figure>
          <figure><img src="@/assets/wall-g7bf2bd61d_1920.jpg" alt=""  @:click="detail"></figure>
          
          
        </div>
       </div>
      
        
          
      
       <div class="second">
        
        <div>
          <hr style="color:white"/>
          <ul class="gallery">
        <li>
          <div class="flip">
            <div class="front-side"></div>
            <div class="back-side">
              <a href="#">
                <div class="content">
                  <div class="loader"></div>
                  <div class="text">
                     <div class="btn-group" >
                    <button type="button" class="btn btn-sm btn-outline-secondary" v-on:click="artdetail(data)">View</button>
                  </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </li>
            <li>
          <div class="flip">
            <div class="front-side"></div>
            <div class="back-side">
              <a href="#">
                <div class="content">
                  <div class="loader"></div>
                  <div class="text">
                    <h3>CRYSTAL MAIDEN</h3>
                    <p>Born in a temperate realm, raised with her fiery older sister Lina, Rylai the Crystal Maiden soon found that her innate elemental affinity to ice created trouble for all those around her. Wellsprings and mountain rivers froze in moments if she stopped to rest nearby; ripening crops were bitten by frost, and fruiting orchards turned to mazes of ice and came crashing down, spoiled. When their exasperated parents packed Lina off to the equator, Rylai found herself banished to the cold northern realm of Icewrack, where she was taken in by an Ice Wizard who had carved himself a hermitage at the crown of the Blueheart Glacier.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </li>
        
       
        
          </ul>
        </div>
      </div>
     
    
              <div class="scene">
           <hr style="color:white"/>
            <!-- camera -->
            <div class="roll-camera">
              <h1
              style="padding:0;margin-bottom:0;">article</h1>
          <!-- shelf -->
          <div class="shelf top" style="margin:0">
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
          <div class="shelf bottom" style="margin:0">
            <div class="face top"></div>
            <div class="face front">

              <a class="photocard">
                <img src="https://raw.github.com/peterwestendorp/shelves/master/photos/7.jpg" alt="">
              </a>
              <a href="#" class="photocard">
                <img src="https://raw.github.com/peterwestendorp/shelves/master/photos/8.jpg" alt="">
              </a>
              <a class="photocard" >
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

import SplashComponent from '@/views/splash.vue' 

  export default {
    
     components: {
         SplashComponent,
       }, 
         data: () => ({
         isLoaded: false
       }),
         created() {
         this.splashing()
       },
    
   methods:{
     splashing() {
           setTimeout(() => {
             this.isLoaded = true
           }, 10)
         },
     detail(){
        
       console.log('hi')
       this.$router.push({
         name:"artdetail"
       })
  
   },
   
  
   },
   
  
}
</script>

<style scoped lang="scss" >
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans:400,700");
@import url("https://fonts.googleapis.com/css?family=Anaheim");
@import url("https://fonts.googleapis.com/css?family=Playfair+Display");
@import url("https://fonts.googleapis.com/css?family=Fauna+One");


/* detail에서 a태그와 button태그 차이때문에 주석처리함

button {
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
} */

 h1 { 
  font-weight: 400;
  }

code { 
  color: #e4cb58;
  font: inherit;
} 

/* first section */

 h1{
	display: table;
	margin: 5% auto 0;
	text-transform: uppercase;
	font-family: 'Anaheim', sans-serif;
	font-size: 4em;
	font-weight: 400;
	text-shadow: 0 1px white, 0 2px black;
}
.container1{
  margin:auto;
	width: 400px;
	height: 140px;
	position: relative;
	perspective: 1500px;
}

#carousel{
  margin-top:200px;
	width: 100%;
	height: 100%;
	position: absolute;
	transform-style: preserve-3d;
	animation: rotation 20s infinite linear;
}
#carousel:hover{
	animation-play-state: paused;
}
#carousel figure{
	display: block;
	position: absolute;
	width: 150px;
	height: 180px;
	left: 10px;
	top: 10px;
	background: wi;
	overflow: hidden;
	border: solid 5px white;
}
#carousel figure img{
  overflow: hidden;
  height:100%;
  width:100%;
}
#carousel figure:nth-child(1){transform: rotateY(0deg) translateZ(288px);}
#carousel figure:nth-child(2) { transform: rotateY(40deg) translateZ(288px);}
#carousel figure:nth-child(3) { transform: rotateY(80deg) translateZ(288px);}
#carousel figure:nth-child(4) { transform: rotateY(120deg) translateZ(288px);}
#carousel figure:nth-child(5) { transform: rotateY(160deg) translateZ(288px);}
#carousel figure:nth-child(6) { transform: rotateY(200deg) translateZ(288px);}
#carousel figure:nth-child(7) { transform: rotateY(240deg) translateZ(288px);}
#carousel figure:nth-child(8) { transform: rotateY(280deg) translateZ(288px);}
#carousel figure:nth-child(9) { transform: rotateY(320deg) translateZ(288px);}

@keyframes rotation{
	from{
		transform: rotateY(0deg);
	}
	to{
		transform: rotateY(360deg);
	}
} 
/*2nd*/
.second{
  margin-top:600px;
}
 .img-wrap{
  width:100%;
  display:flex;
  justify-content: space-evenly;
  
}
.img-wrap li{
  width:20%;
  list-style:none;
}
.img-wrap li img{
  width: 100%;
  border-radius:70px;
  height:300px;
  opacity: 0.5;
}
.img-wrap li img:hover{
  opacity: 1;
} 
/*
2nd 이미지파트*/
.gallery {
  list-style-type: none;
  height: 500px;
  overflow: hidden;
  padding:0;
  margin-left:25%;
 
}
.gallery li {
  float: left;
  height: 100%;
     width:15%;

  background: #2E4053;
}
.gallery .flip {
  height: 100%;
  width: 100%;
  
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;

  -webkit-perspective: 2000px;
  -moz-perspective: 2000px;
  perspective: 2000px;
}
.gallery li:hover .front-side {
  opacity: 0;
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.gallery li:hover .back-side {
  background: #000;
  opacity: 1;
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.gallery .front-side,
.gallery .back-side {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility:  hidden;
  -moz-backface-visibility:  hidden;
  backface-visibility:  hidden;

  -webkit-transition: transform 0.4s ease-out, opacity 0.3s ease-out;
  -moz-transition: transform 0.4s ease-out, opacity 0.3s ease-out;
  transition: transform 0.4s ease-out, opacity 0.3s ease-out;
}
.gallery .front-side {
  opacity: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.gallery .back-side {
  opacity: 0;
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
.gallery .back-side > a {
  display: block;
  width: 100%;
  height: 100%;
}

.gallery li:nth-child(1) .front-side {
  background-image:url('https://media4.giphy.com/media/l2JJC1sjFGQ22rNSw/giphy.gif?cid=ecf05e471s6tfym5j5kgkekeqksorbi16hwcv1i66mk9f7yz&rid=giphy.gif&ct=g');
}
.gallery li:nth-child(1) .loader {
  border-top-color: #F39C12;
  border-left-color: #F39C12;
}
.gallery li:nth-child(1) .text h3 {
  color: #F39C12;
}
.gallery li:nth-child(1) .text h3:after {
  background: #F5B041;
}
.gallery li:nth-child(2) .front-side {
  background-image: url('https://media4.giphy.com/media/l2JJC1sjFGQ22rNSw/giphy.gif?cid=ecf05e471s6tfym5j5kgkekeqksorbi16hwcv1i66mk9f7yz&rid=giphy.gif&ct=g');
}

.gallery li:nth-child(3) .front-side {
  background-image: url('https://media4.giphy.com/media/l2JJC1sjFGQ22rNSw/giphy.gif?cid=ecf05e471s6tfym5j5kgkekeqksorbi16hwcv1i66mk9f7yz&rid=giphy.gif&ct=g');
}
.gallery li:nth-child(3) .loader {
  border-top-color: #424949;
  border-left-color: #424949;
}
.gallery li:nth-child(3) .text h3 {
  color: #424949;
}
.gallery li:nth-child(3) .text h3:after {
  background: #515A5A;
}

.gallery li:nth-child(4) .front-side {
  background-image: url('https://media4.giphy.com/media/l2JJC1sjFGQ22rNSw/giphy.gif?cid=ecf05e471s6tfym5j5kgkekeqksorbi16hwcv1i66mk9f7yz&rid=giphy.gif&ct=g');
}
.gallery li:nth-child(4) .loader {
  border-top-color: #F1C40F;
  border-left-color: #F1C40F;
}
.gallery li:nth-child(4) .text h3 {
  color: #F1C40F;
}
.gallery li:nth-child(4) .text h3:after {
  background: #F7DC6F;
}

.gallery li:nth-child(5) .front-side {
  background-image: url('https://media4.giphy.com/media/l2JJC1sjFGQ22rNSw/giphy.gif?cid=ecf05e471s6tfym5j5kgkekeqksorbi16hwcv1i66mk9f7yz&rid=giphy.gif&ct=g');
}
.gallery li:nth-child(5) .loader {
  border-top-color: #1ABC9C;
  border-left-color: #1ABC9C;
}
.gallery li:nth-child(5) .text h3 {
  color: #1ABC9C;
}
.gallery li:nth-child(5) .text h3:after {
  background: #48C9B0;
}

.gallery li:nth-child(6) .front-side {
  background-image: url('https://media4.giphy.com/media/l2JJC1sjFGQ22rNSw/giphy.gif?cid=ecf05e471s6tfym5j5kgkekeqksorbi16hwcv1i66mk9f7yz&rid=giphy.gif&ct=g');
}
.gallery li:nth-child(6) .loader {
  border-top-color: #E74C3C;
  border-left-color: #E74C3C;
}
.gallery li:nth-child(6) .text h3 {
  color: #E74C3C;
}
.gallery li:nth-child(6) .text h3:after {
  background: #EC7063;
}

.gallery li:nth-child(7) .front-side {
  background-image: url('https://media4.giphy.com/media/l2JJC1sjFGQ22rNSw/giphy.gif?cid=ecf05e471s6tfym5j5kgkekeqksorbi16hwcv1i66mk9f7yz&rid=giphy.gif&ct=g');
}
.gallery li:nth-child(7) .loader {
  border-top-color: #8E44AD;
  border-left-color: #8E44AD;
}
.gallery li:nth-child(7) .text h3 {
  color: #8E44AD;
}
.gallery li:nth-child(7) .text h3:after {
  background: #A569BD;
}

.gallery li:nth-child(8) .front-side {
  background-image: url('https://media4.giphy.com/media/l2JJC1sjFGQ22rNSw/giphy.gif?cid=ecf05e471s6tfym5j5kgkekeqksorbi16hwcv1i66mk9f7yz&rid=giphy.gif&ct=g');
}
.gallery li:nth-child(8) .loader {
  border-top-color: #F39C12;
  border-left-color: #F39C12;
}
.gallery li:nth-child(8) .text h3 {
  color: #F39C12;
}
.gallery li:nth-child(8) .text h3:after {
  background: #F5B041;
}
.gallery .content {
  text-align: center;
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  transform: translateY(-50%);
  padding: 25px 20px;
}

.gallery li:hover .text {
  opacity: 1;
  visibility: visible;
  max-height: 2000px;
  -webkit-transition: opacity .3s ease-in 1.5s, max-height .1s ease 1.5s;
  -moz-transition: opacity .3s ease-in 1.5s, max-height .1s ease 1.5s;
  transition: opacity .3s ease-in 1.5s, max-height .1s ease 1.5s;
}
.gallery li:hover .loader {
  opacity: 1;
  visibility: visible;
  -webkit-animation: hide .1s ease-in-out 1.4s forwards, load .75s infinite;
  -moz-animation: hide .1s ease-in-out 1.4s forwards, load .75s infinite;
  animation: hide .1s ease-in-out 1.4s forwards, load .75s infinite;
}
.gallery .text {
  opacity: 0;
  visibility: hidden;
  max-height: 0;
}
.gallery .content h3 {
  position: relative;
  color: #3498DB;
  font: normal 30px/1.25 'Open Sans';
  margin-bottom: 25px;
}
.gallery .content h3:after {
  content: '';
  position: absolute;
  width: 50px;
  height: 3px;
  bottom: -10px;
  left: 50%;
  margin-left: -25px;
  background: #85C1E9;
}
.gallery .content p {
  margin: 10px 0;
  color: #D6DBDF;
  font: normal 16px/1.25 'Open Sans';
}
.gallery .loader {
  opacity: 0;
  visibility: hidden;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #3498DB;
  border-left-color: #3498DB;
}

@-webkit-keyframes load {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes load {
  0% {
    -moz-transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(360deg);
  }
}
@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes hide {
  100% {
    visibility: hidden;
    opacity: 0;
  }
}
@-moz-keyframes hide {
  100% {
    visibility: hidden;
    opacity: 0;
  }
}
@keyframes hide {
  100% {
    visibility: hidden;
    opacity: 0;
  }
}
/*third */


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
  top: 300px;
}
.shelf.middle {
  top: 500px;
}
.shelf.bottom {
  top: 700px;
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

</style>