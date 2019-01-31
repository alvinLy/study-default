<template>
	<div>
		<h2 class="text-center">Blog</h2>

		<form class="form-horizontal" v-if="!added">
			<div class="form-group">
				<label for="inputEmail3" class="col-sm-2 control-label">Name</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" placeholder="Name" v-model.trim="blog.name">
				</div>
			</div>
			<div class="form-group">
				<label for="inputPassword3" class="col-sm-2 control-label">Address</label>
				<div class="col-sm-10">
					<textarea rows="5" class="form-control" placeholder="Address" v-model.lazy="blog.address"></textarea>
				</div>
			</div>			
		  	<div class="checkbox">
				<label>
					<input type="checkbox" value="success" v-model="blog.cates">
					success
				</label>
		  	</div>		
		  	<div class="checkbox">
				<label>
					<input type="checkbox" value="warning" v-model="blog.cates">
					warning
				</label>
		  	</div>		
		  	<div class="checkbox">
				<label>
					<input type="checkbox" value="error" v-model="blog.cates">
					error
				</label>
		  	</div>

		  	<select class="form-control" v-model="blog.sort">
				<option v-for="i in sorts">{{ i }}</option>
			</select>

			<button class="btn btn-success" @click.prevent="post">Submit post</button>
		</form>

		<blockquote v-if="added">
	  		<p>Post success</p>
		</blockquote>

		<div class="panel panel-info">
			<div class="panel-heading">{{ blog.name }}</div>
			<div class="panel-body">{{ blog.address }}</div>
			<ul class="list-group">
			  <li class="list-group-item" v-for="i in blog.cates">{{ i }}</li>
			</ul>
			<p>{{ blog.sort }}</p>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			blog: {
				name: '',
				address: '',
				cates: [],
				sort: ''
			},
			sorts: ['Price', 'Top Sellers', 'Newest first', 'Customer Top Rated'],
			added: false
		}
	},
	methods: {
		post: function(){
			this.$http.post('http://jsonplaceholder.typicode.com/posts', {
				title: this.blog.name,
				body: this.blog.address,
				userId: 1
			}).then(function(data){
				console.log(data);
				this.added = true
			});
		}
	}
}
</script>

<style scoped>

</style>