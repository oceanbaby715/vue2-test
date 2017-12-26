<template>
	<div>
    <h1>{{ msg }}</h1>
    <p>
    	newsId:{{ $route.params.newsId}}
    	<br>
    	newsTitle:{{ $route.params.newsTitle}}
    </p>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'I am Params page'
    }
  },
  beforeRouteEnter:(to,from,next)=>{
  	console.log("准备进入params路由模板");
  	next()
  },
  beforeRouteLeave:(to,from,next)=>{
  	console.log("准备离开params路由模板")
  	next()
  }
}
</script>

<style scoped>

</style>
