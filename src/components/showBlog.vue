<template>
	<div>
		<h1 class="text-center">All Articles</h1>

		<div class="panel panel-warning" v-for="article in blogs">
			<div class="panel-heading" v-theme:wrap="'border'">
				<h3 class="panel-title" v-rainbow>{{ article.title }}</h3>
			</div>
			<div class="panel-body">
				{{ article.body | snippet }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			blogs: []
		}
	},
	methods: {

	},
	created(){
		this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
			this.blogs = data.body.slice(0,10);
		})
	}
}
</script>

<style scoped>

</style>