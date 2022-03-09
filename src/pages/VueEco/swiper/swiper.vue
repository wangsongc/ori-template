<template>
  <el-card>
    Most modern mobile touch slider with hardware accelerated transitions.
  </el-card>
  <el-card>
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="10"
      :pagination="pagination"
      :scrollbar="{ draggable: true }"
      :autoplay="autoplay"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
      <swiper-slide class="slide-6"></swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </el-card>

  <el-card> </el-card>
</template>
<script lang="ts">
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper: any) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    const pagination = {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index: any, className: any) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    };
    const autoplay = {
      delay: 2500,
      disableOnInteraction: false
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      pagination,
      autoplay
    };
  }
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.slide-1 {
  background-image: url('./images/nature-1.jpg');
}
.slide-2 {
  background-image: url('./images/nature-2.jpg');
}
.slide-3 {
  background-image: url('./images/nature-3.jpg');
}
.slide-4 {
  background-image: url('./images/nature-4.jpg');
}
.slide-5 {
  background-image: url('./images/nature-5.jpg');
}
.slide-6 {
  background-image: url('./images/nature-6.jpg');
}

:deep(.swiper-pagination-bullet) {
  width: 20px !important;
  height: 20px !important;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}

:deep(.swiper-pagination-bullet-active) {
  color: #fff;
  background: #00ff22 !important;
}
</style>
