<template>
  <div>
   

<tr>{{$route.query.id}}</tr>
<tr>{{$route.query.title}}</tr>
<tr>{{$route.query.body}}</tr>



  </div>
</template>

<script>

export default {
   props:['detail'],

 

}
</script>

<style>

</style>