<template>
  <div  >
    <div class="artdetail" style="text-align:center; margin-left:30%;">
      <lingallery iid.sync="currentId" :width="1000" :height="600"  :items="[
        {id:'someid1', src: 'https://picsum.photos/1000/600/?image=0', thumbnail: 'https://picsum.photos/64/64/?image=0', alt: 'Some alt text', caption: '제목이 들어갈 부분'},
        {id:'someid2', src: 'https://picsum.photos/1000/600/?image=10', thumbnail: 'https://picsum.photos/64/64/?image=10', alt: 'Another alt text', caption: 'Another Caption'},
        {id:'someid3', src: 'https://picsum.photos/1000/600/?image=20', thumbnail: 'https://picsum.photos/64/64/?image=20'},
        {id:'someid4', src: 'https://picsum.photos/1000/600/?image=30', thumbnail: 'https://picsum.photos/64/64/?image=30'},
        {id:'someid5', src: 'https://picsum.photos/1000/600/?image=40', thumbnail: 'https://picsum.photos/64/64/?image=40'},
        ]"
      />
      <div class="artinfo">
        <table>
          <colgroup>
            <col class="colth"> 
            <col>
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">기간</th>
              <td>{{this.exhPeriod}}</td>
            </tr>
            <tr>
              <th scope="row">제목</th>
              <td>{{this.title}}</td>
            </tr>
            <tr>
              <th scope="row">장소</th>
              <td>{{this.place}}</td>
            </tr>
            <tr>
              <th scope="row">작가</th>
              <td>{{this.author}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div class="artintro">
          {{this.discription}}
        </div>
      </div>
      <div class="artbtn">
        <v-button
        style="background-color:white;">수정</v-button>
        <v-button
        style="background-color:white;">뒤로가기</v-button>
      </div>
    </div>
  </div>
</template>

<script>
import Lingallery from 'lingallery';
export default {
  props:['artdetail'],
	data(){

    const discription = this.$route.query.artdiscription
    const title = this.$route.query.arttitle 
    const author = this.$route.query.artauthor
    const place = this.$route.query.artplace
    const exhPeriod = this.$route.query.artexhPeriod

    return{
      discription : discription, 
      title: title,
      author : author,
      place : place,
      exhPeriod: exhPeriod,
      };
  },
  components: {
    Lingallery
  },
  created(){
    console.log(this.discription,this.title, this.author, this.place, this.artexhPeriod)
    console.log(this.exhPeriod)
  }, 
}
	
</script>

<style lang="scss" scoped>

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
  width:100%;
  height:auto;
  text-align:center;
}
.artintro{
  margin-top:3%;
  width:1000px;
  height:500px;
  color:white;
  border:1px solid;
}
</style>