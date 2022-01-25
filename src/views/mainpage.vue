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
                    <div><img src="@/assets/3.png" alt="" srcset=""></div>
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
                    <img src="@/assets/3.png" alt="" srcset="">
                    </div>
                <div>갤러리 상세보기</div>
            </div>
        </div>
  
    </div>
    <div class="thirdpage" style="background-color:gray; height:1400px;">artfarm</div>
 </div>

</template>

<script>
export default {

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
    line-height:35;
    width:50px;
  
}

</style>