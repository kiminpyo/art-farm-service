<template>
  <div>
    <div id="map" style="width:80%; height:50%; margin-top:100px;">
    
    </div>
    
  </div>
</template>

<script>

import list from '@/data/list.json';
export default {
    data(){

    return{
      
    }
  },
    mounted(){
      window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
      console.log(list)
    },
    methods: {

      initMap(){

        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(function(position) {
              
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            const locPositon= new kakao.maps.LatLng(lat, lon);
            console.log(locPositon)
            map.setCenter(locPositon)
         
          })
        }
        
           var container = document.getElementById('map'); 
          
          var options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),  
         
          level: 6
          }; 
           var map = new kakao.maps.Map(container, options); 
      
          const imageSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkU55Myo6HCgsLy21u2XqrLcrFm4HvDIbKQw&usqp=CAU', // 마커이미지의 주소입니다    
                 imageSize = new kakao.maps.Size(30, 39), // 마커이미지의 크기입니다
                 imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
                // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    
           for(let i= 0; i < list.records.length - 500; i++){
             
            
           let marker= new kakao.maps.Marker({
              image: markerImage,
               map : map,
               clickable: true,
               position: new kakao.maps.LatLng(list.records[i].위도,list.records[i].경도)
       
             });
               marker.setMap(map)
                     
                  let iwContent;
                    /*    iwContent += '<div>'+list.records[i].시설명+'</div>';
                       iwContent += '<div>'+list.records[i].소재지도로명주소+'</div>';
                      iwContent += '<div>'+list.records[i].관리기관전화번호+'</div>'; */
                      iwContent ='<div class="overlaybox">' +
                      '    <div class="boxtitle">금주 영화순위</div>' +
                      '    <div class="first">' +
                      '        <div class="triangle text">1</div>' +
                      '        <div class="movietitle text">'+  +'</div>' +
                      '    </div>' +
                      '    <ul>' +
                      '        <li class="up">' +
                      '            <span class="number">2</span>' +
                      '            <span class="title">명량</span>' +
                      '            <span class="arrow up"></span>' +
                      '            <span class="count">2</span>' +
                      '        </li>' +
                      '        <li>' +
                      '            <span class="number">3</span>' +
                      '            <span class="title">해적(바다로 간 산적)</span>' +
                      '            <span class="arrow up"></span>' +
                      '            <span class="count">6</span>' +
                      '        </li>' +
                      '        <li>' +
                      '            <span class="number">4</span>' +
                      '            <span class="title">해무</span>' +
                      '            <span class="arrow up"></span>' +
                      '            <span class="count">3</span>' +
                      '        </li>' +
                      '        <li>' +
                      '            <span class="number">5</span>' +
                      '            <span class="title">안녕, 헤이즐</span>' +
                      '            <span class="arrow down"></span>' +
                      '            <span class="count">1</span>' +
                      '        </li>' +
                      '    </ul>' +
                      '</div>';
                
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
        
        
         /* 커스텀 오버레이시에는 이벤트가 따로 먹지않아서 나중에 구현예정    
               var customOverlay = new kakao.maps.CustomOverlay({
                          map: map,
                          clickable: true,
                          content: test,
                          xAnchor: 0.3,
                          yAnchor: 0.91,
                         
                    });
                 
             
                    kakao.maps.event.addListener(marker,'click', function(){

                      customOverlay.setMap(map)
                      console.log(test,Content)
                    }) */
     
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

<style>
.overlaybox {position:relative;width:360px;height:350px;background:url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/box_movie.png') no-repeat;padding:15px 10px;}
.overlaybox div, ul {overflow:hidden;margin:0;padding:0;}
.overlaybox li {list-style: none;}
.overlaybox .boxtitle {color:#fff;font-size:16px;font-weight:bold;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png') no-repeat right 120px center;margin-bottom:8px;}
.overlaybox .first {position:relative;width:247px;height:136px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumb.png') no-repeat;margin-bottom:8px;}
.first .text {color:#fff;font-weight:bold;}
.first .triangle {position:absolute;width:48px;height:48px;top:0;left:0;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/triangle.png') no-repeat; padding:6px;font-size:18px;}
.first .movietitle {position:absolute;width:100%;bottom:0;background:rgba(0,0,0,0.4);padding:7px 15px;font-size:14px;}
.overlaybox ul {width:247px;}
.overlaybox li {position:relative;margin-bottom:2px;background:#2b2d36;padding:5px 10px;color:#aaabaf;line-height: 1;}
.overlaybox li span {display:inline-block;}
.overlaybox li .number {font-size:16px;font-weight:bold;}
.overlaybox li .title {font-size:13px;}
.overlaybox ul .arrow {position:absolute;margin-top:8px;right:25px;width:5px;height:3px;background:url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/updown.png') no-repeat;} 
.overlaybox li .up {background-position:0 -40px;}
.overlaybox li .down {background-position:0 -60px;}
.overlaybox li .count {position:absolute;margin-top:5px;right:15px;font-size:10px;}
.overlaybox li:hover {color:#fff;background:#d24545;}
.overlaybox li:hover .up {background-position:0 0px;}
.overlaybox li:hover .down {background-position:0 -20px;}   
</style>