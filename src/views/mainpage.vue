<template>

 <div class="fullpage">
     <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <div class="firstpage" style="background-image: linear-gradient(to left, #26ec00, #65da29, #80c93f, #8eb853, #94a866); height: 1200px; color:white; display:flex">
        <div style="width:100%;">
            <div class="firstpage-wrap" style="margin-top:170px;">
               <div class="firstpage-header">Artfarm..</div>
               <div class="firstpage-subheader">온라인 전시회 소개 플랫폼</div>
               <div class="firstpage-context">아트팜은 어떤 것을 소개합니까? <p>
                   아트팜은 어떤 것을 보여줍니까?</p></div>
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100">
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                        refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" />
                        </marker>
                    </defs>
                    <line x1="0" y1="50" x2="250" y2="50" stroke="#000" 
                    stroke-width="8" marker-end="url(#arrowhead)" />
                </svg>
             
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
        <div class="thirdpage-header">전시회 정보보기</div> 
        <div id="map" style="width:80%; height:50%; margin:auto; margin-top:150px;">
        </div>
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
    
           for(let i= 0; i < list.records.length -1510 ; i++){
             
            
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
                   iwContent = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            전시회정보' + 
            '            <div class="close"  v-on:click="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="desc">' + 
            '                <div class="ellipsis">'+list.records[i].시설명+'</div>' + 
            '                <div class="jibun ellipsis">'+list.records[i].소재지도로명주소+'</div>' + 
            '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' + 
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>';
            console.log(iwContent)
       /*          
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
         */
        
          // 커스텀 오버레이시에는 이벤트가 따로 먹지않아서 나중에 구현예정    
               var Overlay = new kakao.maps.CustomOverlay({
                          map: map,
                        
                          position: marker.getPosition(),
                          content: iwContent
                  
                      
                    });
                 
             
                    kakao.maps.event.addListener(marker,'click', function(){
                      
                      Overlay.setMap(map)
                      console.log(iwContent)
                    })
                 
                

                   
          
     
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

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
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
    color:rgb(226, 190, 143);
    font-weight:bold;
}
.firstpage-context{
    margin-top:40px;
    margin-left:300px;
    font-size: 40px;
    border:1px solid black;
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
   .wrap {position: absolute;left: 0;bottom: 40px;width: 288px;height: 132px;margin-left: -144px;text-align: left;overflow: hidden;font-size: 12px;font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;line-height: 1.5;}
    .wrap * {padding: 0;margin: 0;}
    .wrap .info {width: 286px;height: 120px;border-radius: 5px;border-bottom: 2px solid #ccc;border-right: 1px solid #ccc;overflow: hidden;background: #fff;}
    .wrap .info:nth-child(1) {border: 0;box-shadow: 0px 1px 2px #888;}
    .info .title {padding: 5px 0 0 10px;height: 30px;background: #eee;border-bottom: 1px solid #ddd;font-size: 18px;font-weight: bold;}
    .info .close {position: absolute;top: 10px;right: 10px;color: #888;width: 17px;height: 17px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');}
    .info .close:hover {cursor: pointer;}
    .info .body {position: relative;overflow: hidden;}
    .info .desc {position: relative;margin: 13px 0 0 90px;height: 75px;}
    .desc .ellipsis {overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .desc .jibun {font-size: 11px;color: #888;margin-top: -2px;}
    .info .img {position: absolute;top: 6px;left: 5px;width: 73px;height: 71px;border: 1px solid #ddd;color: #888;overflow: hidden;}
    .info:after {content: '';position: absolute;margin-left: -12px;left: 50%;bottom: 0;width: 22px;height: 12px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')}
    .info .link {color: #5085BB
    ;
    } 
.thirdpage{
    height:1400px;
    background-color:yellow;

    }

</style>