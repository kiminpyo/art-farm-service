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
          <figure><img src="@/assets/constellations-g95da062c7_1920.jpg" alt="" v-on:click="detail"></figure>
          <figure><img src="@/assets/galaxy-ge099f3f44_1280.jpg" alt=""  v-on:click="detail"></figure>
          <figure><img src="@/assets/milky-way-gd0a11e093_1920.jpg" alt=""  v-on:click="detail"></figure>
          <figure><img src="@/assets/orion-nebula-g627181e6f_1920.jpg" alt=""  v-on:click="detail"></figure>
          <figure><img src="@/assets/constellations-g95da062c7_1920.jpg" alt=""  v-on:click="detail"></figure>
          <figure><img src="@/assets/starry-sky-gd2b975337_1920.jpg" alt=""  v-on:click="detail"></figure>
          <figure><img src="@/assets/starry-sky-gd2b975337_1920.jpg" alt=""  v-on:click="detail"></figure>
          <figure><img src="@/assets/wall-g7bf2bd61d_1920.jpg" alt=""  v-on:click="detail"></figure>
          
          
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
                    <h3>LINA</h3>
                    <p>The sibling rivalries between Lina the Slayer, and her younger sister Rylai, the Crystal Maiden, were the stuff of legend in the temperate region where they spent their quarrelsome childhoods together. Lina always had the advantage, however, for while Crystal was guileless and naive, Lina's fiery ardor was tempered by cleverness and conniving. The exasperated parents of these incompatible offspring went through half a dozen homesteads, losing one to fire, the next to ice, before they realized life would be simpler if the children were separated.</p>
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
        <li>
          <div class="flip">
            <div class="front-side"></div>
            <div class="back-side">
              <a href="#">
                <div class="content">
                  <div class="loader"></div>
                  <div class="text">
                    <h3>DROW RANGER</h3>
                    <p>Drow Ranger's given name is Traxex--a name well suited to the short, trollish, rather repulsive Drow people. But Traxex herself is not a Drow. Her parents were travelers in a caravan set upon by bandits, whose noisy slaughter of innocents roused the ire of the quiet Drow people. After the battle settled, the Drow discovered a small girl-child hiding in the ruined wagons, and agreed she could not be abandoned. Even as child, Traxex showed herself naturally adept at the arts they prized: Stealth, silence, subtlety. In spirit, if not in physique, she might have been a Drow changeling, returned to her proper home. But as she grew, she towered above her family and came to think of herself as ugly.</p>
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
                    <h3>WINDRANGER</h3>
                    <p>The western forests guard their secrets well. One of these is Lyralei, master archer of the wood, and favored godchild of the wind. Known now as Windranger, Lyralei's family was killed in a storm on the night of her birth--their house blown down by the gale, contents scattered to the winds. Only the newborn survived among the debris field of death and destruction. In the quiet after the storm, the wind itself took notice of the lucky infant crying in the grass. The wind pitied the child and so lifted her into the sky and deposited her on a doorstep in a neighboring village.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </li>
        
          </ul>
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

/* 2nd section */

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
3rd 이미지파트*/
.gallery {
  list-style-type: none;
  height: 500px;
  overflow: hidden;
  padding:0;
}
.gallery li {
  float: left;
  height: 100%;
  width: 25%;
  background: #2E4053;
}
.gallery .flip {
  height: 100%;
  width: 100%;
  position: relative;
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


</style>