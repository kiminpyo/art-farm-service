<template>
  <div class="artdetail">
 
  <lingallery iid.sync="currentId" :width="1000" :height="600"  :items="[
    {id:'someid1', src: 'https://picsum.photos/1000/600/?image=0', thumbnail: 'https://picsum.photos/64/64/?image=0', alt: 'Some alt text', caption: '제목이 들어갈 부분'},

    {id:'someid2', src: 'https://picsum.photos/1000/600/?image=10', thumbnail: 'https://picsum.photos/64/64/?image=10', alt: 'Another alt text', caption: 'Another Caption'},

    {id:'someid3', src: 'https://picsum.photos/1000/600/?image=20', thumbnail: 'https://picsum.photos/64/64/?image=20'},
    {id:'someid4', src: 'https://picsum.photos/1000/600/?image=30', thumbnail: 'https://picsum.photos/64/64/?image=30'},
    {id:'someid5', src: 'https://picsum.photos/1000/600/?image=40', thumbnail: 'https://picsum.photos/64/64/?image=40'},
    
    
]"/>
  <div class="artinfo">
    <table>
      <colgroup>
      <col class="colth"> 
      <col>
      </colgroup>
      <tbody>
        <tr>
          <th scope="row">기간</th>
        <td>021212~</td>
        </tr>
        <tr>
            <th scope="row">기간</th>
        <td>021212~</td>
        </tr>
        <tr>
            <th scope="row">기간</th>
        <td>021212~</td>
        </tr>
        <tr>
            <th scope="row">기간</th>
        <td>021212~</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <div class="artintro">
     수원과 경기남부권의 독창적인 미술문화를 중점 수용하는 복합 예술 공간입니다.
미술활동의 활성화를 위해 다양한 현대미술 전시 및 미술 담론을 생성하는 기획 전시로 수원지역 미술문화의 중심역할을 하고 있으며, 대관 및 전시연구기반의 확충, 교육, 홍보사업 등을 운영하여 지역미술문화를 선도해 나가고 있습니다
    </div>
  </div>
</div>
		

  

	
		
		

</template>


<script>
import Lingallery from 'lingallery';



	export default {
  props:['artdetail'],
	data(){
    const data = this.$route.query.artdata
    return{
    data : data,
     items: [
       
     
      ]};
  },
   components: {
      Lingallery
    },
  created(){
    console.log(this.data)
    
  },
   
}

  
    
    
    
   

  


	
</script>

<style lang="scss" scoped>

.artdetail{
 
}
.v-app{
  margin:0;
  padding:0 ;
}
.artdetail{
  
  padding:0; 
}

.artinfo{
  width:1000px;
  
}
tbody > tr  th,td{
  padding: 25px;
}
.colth{
  border-right: 2px solid white;
}
table{
  color:white;
  margin-top:3%;
  border: 1px solid white;
  width:100%;
  height:auto;
  text-align:center;
}
.artintro{
  margin-top:3%;
  width:1000px;
  height:500px;
  color:white;
}



</style>