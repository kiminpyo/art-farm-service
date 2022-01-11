<template>
<container-tag>
	<swiper class="swiper" ref="mySwiper" 
		:options="swiperOptions" 
		@slideChange="slideChangeTransitionStart"
	>

		<swiper-slide><img src="@/assets/wall-g7bf2bd61d_1920.jpg" alt=""></swiper-slide>
		<swiper-slide>2</swiper-slide>
		<swiper-slide>3</swiper-slide>
		
		<!-- pagination -->
		<div class="swiper-pagination" slot="pagination"></div>
        
		<!-- navigation -->
		<div class="swiper-button-prev swiper-btn-prev" slot="button-prev"></div>
		<div class="swiper-button-next swiper-btn-next" slot="button-next"></div>
	</swiper>
    </container-tag>
</template>


<script>

	
	import {Swiper,SwiperSlide} from 'vue-awesome-swiper'

	export default {
		name: 'ListItem',
		components: {
			Swiper,
			SwiperSlide
		},
		methods: {
			slideChangeTransitionStart() {
				console.log(this.swiper.activeIndex); //현재 index값 얻기
			}
		},
		data() {
			return {
				swiperOptions: {
					//loop: true,
					// autoplay:{
					//   delay:1000
					// },
					pagination: {
						el: '.swiper-pagination'
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},                    
				},
			}
		},

		//참조하고 있는 값이 변경될 때마다 정의된 계산식에 따라 값을 출력
		computed: {
			swiper() {
				return this.$refs.mySwiper.$swiper;
			}
		},

		//el이 새로 생성된 vm.$el로 인스턴스가 마운트 된 직후
		mounted() {
			//console.log('Current Swiper instance object', this.swiper)
			//this.swiper.slideTo(3, 1000, false)
		}


	}
</script>

<style lang="scss" scoped>
    .swiper{
        width:300px;
        height:300px;
    }
	.swiper-slide {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-weight: bold;
        width:300px;
        height:400px;
	}
    .swiper-slide img{
        overflow: hidden
    }
</style>