<template>
  <div>
     <div class="container1">
       <h1>gallery</h1>
		<div id="carousel">
			<figure><img src="@/assets/constellations-g95da062c7_1920.jpg" style="width:100%;" alt="" v-on:click="detail"></figure>
			<figure><img src="@/assets/galaxy-ge099f3f44_1280.jpg" alt="" style="width:100%;"></figure>
      <figure><img src="@/assets/milky-way-gd0a11e093_1920.jpg" alt="" style="width:100%;"></figure>
      <figure><img src="@/assets/orion-nebula-g627181e6f_1920.jpg" alt="" style="width:100%;"></figure>
      <figure><img src="@/assets/constellations-g95da062c7_1920.jpg" alt="" style="width:100%;"></figure>
      <figure><img src="@/assets/starry-sky-gd2b975337_1920.jpg" alt="" style="width:100%;"></figure>
      <figure><img src="@/assets/starry-sky-gd2b975337_1920.jpg" alt="" style="width:100%;"></figure>
      <figure><img src="@/assets/wall-g7bf2bd61d_1920.jpg" alt="" style="width:100%;"></figure>
      
		</div>
	</div>
  <div>
    <ul class="img-wrap" >
      <li><img src="https://media4.giphy.com/media/l2JJC1sjFGQ22rNSw/giphy.gif?cid=ecf05e471s6tfym5j5kgkekeqksorbi16hwcv1i66mk9f7yz&rid=giphy.gif&ct=g" alt=""></li>
      <li><img src="https://media4.giphy.com/media/l41YeHIAtnC6iTYPe/200w.webp?cid=ecf05e47d8p3t0de9f4sga4lke8z1s4502kvp21ho2sycq5l&rid=200w.webp&ct=g" alt=""></li>
      <li><img src="https://media4.giphy.com/media/3oGRFmcBmcSjkEmuac/200.webp?cid=ecf05e47d8p3t0de9f4sga4lke8z1s4502kvp21ho2sycq5l&rid=200.webp&ct=g" alt=""></li>
    </ul>
  </div>
  
 
  
  </div>
    
 
  
 
  

  
  
  
</template>

<script>

export default {
  
  methods:{
    detail(){
        
      console.log('hi')
      this.$router.push({
        name:"artdetail"
      })
   
  }
   
  }
}
</script>

<style scroped>

 .container{
   
   display: flex;
   margin-top:10%;
   }

button {
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
}

h1 { 
  font-weight: 400;
   }

code { 
  color: #e4cb58;
  font: inherit;
}
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans:400,700");
@import url(https://fonts.googleapis.com/css?family=Anaheim);
@import url(https://fonts.googleapis.com/css?family=Playfair+Display);
@import url(https://fonts.googleapis.com/css?family=Fauna+One);
.snip1482 {
  font-family: 'Fauna One', Arial, sans-serif;
  position: relative;
  margin: 10px 20px;
  min-width: 230px;
  max-width: 295px;
  min-height: 220px;
  width: 100%;
  color: #ffffff;
  text-align: right;
  line-height: 1.4em;
  background-color: #1a1a1a;
  font-size: 16px;
}
.snip1482 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.snip1482 img {
  overflow: hidden;
  right: 0%;
  top: 50%;
  opacity: 1;
  width: 100%;
  -webkit-transform: translate(0%, -50%);
  transform: translate(0%, -50%);
}
.snip1482 figcaption {

  width: 100%;
  top: 50%;
  left: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  padding: 20px 0 20px 20px;
}
.snip1482 h2,
.snip1482 p {
  margin: 0;
  width: 100%;
  -webkit-transform: translateX(20px);
  transform: translateX(20px);
  opacity: 0;
}
.snip1482 h2 {
  font-family: 'Playfair Display', Arial, sans-serif;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.snip1482 p {
  font-size: 0.8em;
}
.snip1482 a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.snip1482:hover img,
.snip1482.hover img {
  width: 55%;
  right: -10%;
}
.snip1482:hover figcaption h2,
.snip1482.hover figcaption h2,
.snip1482:hover figcaption p,
.snip1482.hover figcaption p {
  -webkit-transform: translateX(0px);
  transform: translateX(0px);
  opacity: 1;
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
	margin: 4% auto;
	width: 400px;
	height: 140px;
	position: relative;
	perspective: 1000px;
}
#carousel{
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
	width: 186px;
	height: 116px;
	left: 10px;
	top: 10px;
	background: wi;
	overflow: hidden;
	border: solid 5px white;
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
/*third */

.img-wrap{
  margin-top:20%;
  width:100%;
  display:flex;
  justify-content: space-evenly;
  
}
.img-wrap li{
  width:20%;
 
}
.img-wrap li img{
  width: 100%;
 border-radius:30px;
  height:200px;
  opacity: 0.5;
}
.img-wrap li img:hover{
  opacity: 1;
}



</style>