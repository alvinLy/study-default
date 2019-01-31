<template>
	<div class="container">
		<h1 class="text-center">Form Helper</h1>
		
		<form>
			<div class="form-group">
				<slot name="row-email"></slot>
			</div>
			<div class="form-group">
				<slot name="row-password"></slot>
			</div>
			<div class="form-group">
				<slot name="row-input"></slot>				
			</div>
			<div class="checkbox">
				<slot name="checkbox"></slot>
			</div>
			<button type="submit" class="btn btn-default">Submit</button>
		</form>
	</div>
</template>

<script>
export default {
	data(){
		return {

		}
	}
}
</script>

<style scoped>

</style>