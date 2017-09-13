<template>
	<div class=''>
		<p>id:{{item.mes}}</p> 
		<p>{{mes}}</p>
		<!--<div>{{$route.params.newsId}}</div>
		<div>{{$route.params.newsTitle}}</div>-->
	</div>
	
</template>
 
<script>
	export default({
		name:'param',
		data(){
			return {
				mes:'params page',
//				id:this.$route.params.id
                item:this.$route.query.item,
                

			}
		}  
	})
</script>

<style>
</style>