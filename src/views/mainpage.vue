<template>
    
    <div class="fullpage">
        <div class="firstpage" style="background-image: linear-gradient(to left, #55ec00, #65da29, #80c93f, #8eb853, #94a866); height: 1200px; color:white; display:flex">
        
            <div style="width:100%;">
                <div class="firstpage-wrap" style="margin-top:170px;">
                    <div class="firstpage-header"> <span style="color:rgb(226, 190, 143);" >A</span>rtfarm</div>
                    <div class="firstpage-subheader"><span style="color:rgb(226, 190, 143);">온라인</span> 전시회 소개 플랫폼</div>
                    <div class="firstpage-context">
                        <p><span style="color:rgb(226, 190, 143);">아트팜</span>은 문화예술의 <span style="color:rgb(226, 190, 143);">텃밭</span>입니다</p>
                        <p>언제나 청년 예술가들의 <span style="color:rgb(226, 190, 143);">작품</span>을 기다리고 있습니다</p>
                        <p>그들의 <span style="color:rgb(226, 190, 143);">출발</span>을 지켜봐주실 분들도 기다리고 있습니다</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="secondpage" >
            <div class="secondpage-header">introduction</div>
            <div class="secondpage-content-wrap">
                <div class="secondpage-content-img">
                    <div><img src="@/assets/갤러리.gif" alt="" srcset="" style="width:400px; height:300px; border-radius:80px;"></div>
                    <div>갤러리</div>
                </div>

                <div class="secondpage-content-arrow">
                    <i class="fas fa-arrow-circle-right" style="width:100px;"></i>
                </div>
            
                <div class="secondpage-content-img">
                    <div>
                        <img src="@/assets/갤러리상세보기.gif" alt="" srcset="" style="width:400px; height:300px; border-radius:80px;">
                    </div>
                    <div>갤러리 상세보기</div>
                </div>
            </div>
        </div>
    
        <div class="thirdpage">
            <div class="thirdpage-header">전시회 위치보기</div> 
            <div id="map" style="width:40%; height:50%; margin-left:10%; margin-top:100px; display:inline-block;"></div>
            <v-tab type="button" style="border:1px solid black; display:inline-block; margin-left:30px; width:100px;" to="/artcreate">등록하기</v-tab>
            <div style="display:inline-block;"></div>
        </div>
        <div class="fourthpage">
            <div class="fourthpage-header">Later</div>
            <div class="fourthpage-content-wrap">
                <div class="fourthpage-content-before" style="margin:auto; width:100%">
                    <div class="fourthpage-content-header" style="font-size:35px;">향후 개선 기술</div>
                    <div style="text-align:start; display:flex;  justify-content: space-evenly; margin-top:40px; font-size:20px; font-weight:bold; " >
                        <div class="fourthpage-content-first" >
                            <p >○ NFT 도입</p>
                            <p>- 온라인으로 저작(소유)권을 판매 함으로써 신진 작가에게는 수입원을 제공하고</p>
                            <p>소비자에게는 다소 적은 금액으로도 작품을 소유·투자할 기회 제공</p>
                            <p>- 블록체인 관련 기술을 도입하여 전문성을 확보한 후 창출되는 수입으로 R&D에</p>
                            <p>재투자함으로써 새로운 트렌드(ex) dutch auction 등)를 이끌 수 있는 전문인력 확보</p>
                        </div>
                    
                        <div class="fourthpage-content-second">
                            <p>○ 메타버스</p>
                            <p>- 비대면 시대에 발맞추어 온라인 전시회를 제공함으로써,</p>
                            <p>관람문화에 대한 장벽을 좀 더 허물 수 있음.</p>
                            <p>- 문화·예술을 이끄는 플랫폼으로써 자리매김하여 신진 작가에게는 더 많은 기회를,</p>
                            <p>선두에서 이끄는 작가에게는 수요층과의 거리를 좁혀주는 장을 제공.</p>
                        </div>
                    </div>
                </div>
                <div class="fourthpage-content-icon"></div>
                <div class="fourthpage-content-after">
                    <div class="fourthpage-content-header"></div>
                </div>
            </div>
            <div class="fourthpage-ourprofile">
                <div class="fourthpage-subheader">about me</div>
                <div class="fourthpage-container">
                    <img src="https://images.unsplash.com/photo-1569390173732-5c735072c80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="">
                    <img src="https://images.unsplash.com/photo-1582842195329-6a0baffd2a39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="">
                    <img src="https://images.unsplash.com/photo-1600722230999-22c256d38cb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="">
                </div>
            </div>
        </div>
        <div class="fifthpage">
            <div class="fifthpage-header">gallery</div>
            <div class="container1" >
                <div class="hometitle"></div>
                <div id="carousel">        
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
                    <ul class="gallery col-md-12">
                        <li>
                            <div class="flip">
                                <div class="front-side">
                                </div>
                                <div class="back-side">
                                    <a href="#">
                                    <div class="content">
                                        <div class="loader"></div>
                                        <div class="text">
                                            <div class="btn-group">
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
                                <div class="front-side">
                                </div>
                                <div class="back-side">
                                    <a href="#">
                                    <div class="content">
                                        <div class="loader">
                                        </div>
                                        <div class="text">
                                            <h3>CRYSTAL MAIDEN</h3>
                                            <p>Born in a temperate realm, raised with her fiery older sister Lina, Rylai the Crystal Maiden soon found that her innate elemental affinity to ice created trouble for all those around her. Wellsprings and mountain rivers froze in moments if she stopped to rest nearby; ripening crops were bitten by frost, and fruiting orchards turned to mazes of ice and came crashing down, spoiled. When their exasperated parents packed Lina off to the equator, Rylai found herself banished to the cold northern realm of Icewrack, where she was taken in by an Ice Wizard who had carved himself a hermitage at the crown of the Blueheart Glacier.
                                            </p>
                                        </div>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flip">
                                <div class="front-side">
                                </div>
                                <div class="back-side">
                                    <a href="#">
                                    <div class="content">
                                        <div class="loader"></div>
                                        <div class="text">
                                            <div class="btn-group">
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
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary" v-on:click="artdetail(data)">View</button>
                                            </div>
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
    </div>

</template>

<script>
    import list from '@/data/list.json';
    
    export default {
        data(){
            return{
                iwContent: ''
            }
        },
        mounted(){
            window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
            console.log(list);
        },
        methods: {
            detail(){
                console.log('hi');
                this.$router.push({
                    name:"artdetail"
                });
            },
            initMap(){

                if(navigator.geolocation){
                    
                    navigator.geolocation.getCurrentPosition(function(position) {
                    
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        const locPositon= new kakao.maps.LatLng(lat, lon);

                        console.log(locPositon);
                        map.setCenter(locPositon);
                    });
                }
        
                var container = document.getElementById('map'); 
          
                var options = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 13
                }; 
                
                var map = new kakao.maps.Map(container, options); 
      
                const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
                imageSize = new kakao.maps.Size(45, 45), // 마커이미지의 크기입니다
                imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
                // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    
                for(let i= 0; i < list.records.length -1500 ; i++){
                    
                    let marker= new kakao.maps.Marker({
                        image: markerImage,
                        map : map,
                        clickable: true,
                        position: new kakao.maps.LatLng(list.records[i].위도,list.records[i].경도)
                    });
                    
                    marker.setMap(map);
                     
                    let iwContent;
                    iwContent = '<div style="width:300px; height:100%;">'
                    iwContent += '<div style="font-weight:bold; border-bottom:solid 1px black; margin-bottom:10px; background-color:rgb(226, 190, 143);">'+list.records[i].시설명+'</div>';
                    iwContent += '<div>'+list.records[i].소재지도로명주소+'</div>';
                    iwContent += '<div>'+list.records[i].관리기관전화번호+'</div>'; 
                    iwContent += '</div>'
              /*    iwContent = '<div class="kakao-wrap" style="position: absolute;left: 0;width: 288px;height: 132px;text-align: left;overflow: hidden;font-size: 12px;font-family: "Malgun Gothic", dotum, "돋움", sans-serif;line-height: 1.5;" >' + 
            '    <div class="kakao-info" style="width: 286px;height: 120px;border-radius: 5px;border-bottom: 2px solid #ccc;border-right: 1px solid #ccc;overflow: hidden;background: #fff;">' + 
            '        <div class="kakao-title" style="padding: 5px 0 0 10px;height: 30px;background: #eee;border-bottom: 1px solid #ddd;font-size: 18px;font-weight: bold;">' + 
            '            전시회정보' + 
            '            <div class="kakao-close"  v-on:click="closeOverlay" title="닫기" style="position: absolute;top: 10px;right: 10px;color:#888;width: 17px;height: 17px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png)"></div>' + 
            '        </div>' + 
            '        <div class="kakao-body" style="position: relative;overflow: hidden;">' + 
            '            <div class="kakao-desc" style="position: relative;margin: 13px 0 0 90px;height: 75px;">' + 
            '                <div class="kakao-ellipsis">'+list.records[i].시설명+'</div>' + 
            '                <div class="kakao-jibun ellipsis" style="font-size: 11px;color: #888;margin-top: -2px; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">'+list.records[i].소재지도로명주소+'</div>' + 
            '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="kakao-link">홈페이지</a></div>' + 
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>'; */
                    console.log(iwContent)
               
                    let iwRemoveable = true; 
                    let infowindow = new kakao.maps.InfoWindow({
                      
                        content : iwContent,
                        removable : iwRemoveable 
                    });


                    kakao.maps.event.addListener(marker, 'click', function() {
                    // 마커 위에 인포윈도우를 표시합니다
                        infowindow.open(map, marker);  
                        console.log("맵 & 마커"+ map, marker)
                    });  
         
        
          // 커스텀 오버레이시에는 이벤트가 따로 먹지않아서 나중에 구현예정    
           /*     var customOverlay = new kakao.maps.CustomOverlay({
                          map: map,
                          position: marker.getPosition(),
                          content: iwContent                 
                    });
         
                    kakao.maps.event.addListener(marker,'click', function(){
                      
                      customOverlay.setMap(map)
                      console.log(iwContent)
                    }),

                   function closeOverlay(){
              customOverlay.setMap(null)  
        }  */
                }
            },
            addScript() { 

                const script = document.createElement('script');
          /* global kakao */
                script.onload = () => kakao.maps.load(this.initMap);
                script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=b0f10802dba217cd58a1402426df93cb'; 
                document.head.appendChild(script);
            },
        }
    }

</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans:400,700");
@import url("https://fonts.googleapis.com/css?family=Anaheim");
@import url("https://fonts.googleapis.com/css?family=Playfair+Display");
@import url("https://fonts.googleapis.com/css?family=Fauna+One");

.fullpage{  
    color:black;
    height:7000px;
}

.firstpage-header{
    margin-left:300px;
    margin-top:300px;
    font-weight:bold;
    font-size:150px;
    font-family: 'Roboto', sans-serif;
}

.firstpage-subheader{
    margin-left:300px;
    margin-top:-50px;
    font-size: 30px;
    font-weight:bold;
}
.firstpage-context{
    margin-top:40px;
    margin-left:300px;
    font-size: 40px;
    display:inline-block;
}
.secondpage{
    background-image: linear-gradient(to left, #7581ac, #3c7e9c, #1c777a, #346a51, #4d5a2f);
    height:1400px;
}

.secondpage-header{
    text-align:center;
    padding-top:40px;
    font-weight:bold;
    font-size: 150px;
}
.secondpage-content-wrap{
    display:flex;
    justify-content: space-evenly;
    text-align:center;
}

.secondpage-content-arrow{
    height:100%;
    line-height: 35;
    width:200px;
  
}
.secondpage-content-img{
    margin-top:150px;
}
.kakao-wrap {
    position: absolute;
    left: 0;bottom: 40px;
    width: 288px;
    height: 132px;
    margin-left: -144px;
    text-align: left;
    overflow: hidden;
    font-size: 12px;
    font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;line-height: 1.5;
    }
.kakao-wrap * {
    padding: 0;
    margin: 0;
    }
.kakao-wrap .kakao-info {
    width: 286px;
    height: 120px;
    border-radius: 5px;
    border-bottom: 2px solid #ccc;
    border-right: 1px solid #ccc;
    overflow: hidden;background: #fff;
    }
.kakao-wrap .kakao-info:nth-child(1) {border: 0;box-shadow: 0px 1px 2px #888;}
.kakao-info .kakao-title {padding: 5px 0 0 10px;height: 30px;background: #eee;border-bottom: 1px solid #ddd;font-size: 18px;font-weight: bold;}
.kakao-info .kakao-close {position: absolute;top: 10px;right: 10px;color: #888;width: 17px;height: 17px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');}
.kakao-info .kakao-close:hover {cursor: pointer;}
.kakao-info .kakao-body {position: relative;overflow: hidden;}
.kakao-info .kakao-desc {position: relative;margin: 13px 0 0 90px;height: 75px;}
.kakao-desc .kakao-ellipsis {overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.kakao-desc .jibun {font-size: 11px;color: #888;margin-top: -2px;}
.kakao-info .kakao-img {position: absolute;top: 6px;left: 5px;width: 73px;height: 71px;border: 1px solid #ddd;color: #888;overflow: hidden;}
.kakao-info:after {content: '';position: absolute;margin-left: -12px;left: 50%;bottom: 0;width: 22px;height: 12px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')}
.kakao-info .kakao-link {color: #5085BB;}
.thirdpage{ 
    height:1400px;
    background-image: linear-gradient(to right bottom, #1a1b1d, #2e2c31, #453e44, #605155, #796563);
   
    }
.thirdpage-header{
    padding-top:30px;
     text-align:center;
    font-size:120px;
    font-weight:bold;
}
.fourthpage{
    height:1400px;
    background-color: #7581ac;
}
.fourthpage-header{
    font-size:140px;
    font-weight:bold;
    text-align: center;

}
.fourthpage-content-wrap{
    margin-top:50px;
    display: flex;
   
    text-align: center;
    justify-content: space-evenly;
    height:30%;
    
}
.fourthpage-content-before {

}
.fourthpage-content-icon{

}
.fourthpage-content-after{
    
}
.fourthpage-content-header{
    font-size:20px;
    font-weight:bold;
}
.fourthpage-ourprofile{
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.fourthpage-subheader{
    font-size:80px;
    font-weight:bold;
    margin-top:20px;
}
img {
  width: 30%;
  height: 100%;
  object-fit:cover;
  
  -webkit-box-reflect:below 2px linear-gradient(transparent, transparent, #0004);
  
  transform-origin:center;
  transform:perspective(800px) rotateY(25deg);
  transition:0.5s;
}
.fourthpage-container {
  max-width:600px;
  max-height:350px;
  
  
  
  display:flex;
  justify-content:center;
  align-items:center;
  gap:20px;
  
}
.fourthpage-container:hover img {
  opacity:0.3;
}
.fourthpage-container img:hover {
  transform:perspective(800px)       rotateY(0deg);
  opacity:1;
  }
  .fifthpage{
      height:1400px;
     background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  }
  /*  여기부턴 기존의 메인에 있던 css를 다 긁어온 곳 */
.fifthpage-header{
    text-align: center;
    font-size:140px;
    font-weight:bold;
}
.container1{
  margin:auto;
	width: 400px;
	height: 140px;
	position: relative;
	perspective: 1500px;
    
}
#carousel{
  margin-top:180px;
	width: 100%;
	height: 100%;
	position: absolute;
	transform-style: preserve-3d;
	animation: rotation 15s infinite linear;
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
	overflow: hidden;

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
/*2nd의 전체적인 틀*/
.second{
    margin-top:400px;
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
    height: 300px;
    overflow: hidden;
    padding:0;
    margin-left:20%;
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
.gallery .front-side ,.gallery .back-side {
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