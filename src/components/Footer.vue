<template>
	<footer id="footer">
		<p class="copyright">{{ copyright }} {{ logo }}</p>
	</footer>
</template>

<script>
import { bus } from '../main';

export default {
	props: {
		logo: {
			type: String
		}
	},
	data(){
		return {
			copyright: 'Copyright 2019'
		}
	},
	created(){
		bus.$on('logoChanged', (data) => {
			this.logo = data;
		})
	}
}
</script>

<style scoped>
.copyright{
	text-align:center;
}
</style>