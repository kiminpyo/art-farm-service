<template>
  <div>
   

<tr>{{$route.query.id}}</tr>
<tr>{{$route.query.title}}</tr>
<tr>{{$route.query.body}}</tr>
<button 
v-on:click="update()">수정하기</button>
 

  </div>
</template>

<script>

export default {
    data() {
        const noticeIdx = this.$route.query.id;
        const title = this.$route.query.title;
        const body = this.$route.query.body;
        return{
        noticeIdx : noticeIdx,
        title : title,
        body: body
        }
    },
    props:['detail'],
    
  
  methods: {

  
   update(){
      console.log('hi')
      this.$router.push({
        name:"update",
         query: 
         {noticeIdx : this.noticeIdx,
         }
      })
    console.log(this.noticeIdx)
    },
  }
    
 
 

}
</script>

<style>

</style>