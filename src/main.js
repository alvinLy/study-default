import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

// export const bus = new Vue()

Vue.use(VueResource);

Vue.directive('rainbow',{
	bind(el, binding, vnode){
		el.style.color = '#' + Math.random().toString().slice(2,8);
	}
})

Vue.directive('theme',{
	bind(el, binding, vnode){
		if(binding.value == 'border'){
			el.style.borderColor = '#' + Math.random().toString().slice(2,8);
		}
		else if(binding.value == 'background'){
			el.style.backgroundColor = '#' + Math.random().toString().slice(2,8);
		}

		if(binding.arg == 'wrap') {
			el.style.textTransform = 'capitalize';
			el.style.textAlign = 'center';
		}
	}
})

Vue.filter('snippet', function(value){
	return value.slice(0,150) + '...';
})

new Vue({
	render: h => h(App),
}).$mount('#app')
