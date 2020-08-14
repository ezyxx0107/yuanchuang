<!--
 * @LastEditTime: 2020-08-14 14:26:14
 * @Description: Description
-->
<template>
  <div class="home">
    <!-- Header -->
    <Header class="mb20"/>
    <!-- Container -->
    <div class="container inner mb20">
      <div class="banner mb20 br5">
        <Swiper :swiperList="banners" />
      </div>
      <Recommend />
      <LatestUpdate />
      <AdvertisingImg class="mb20"/>
      <Activity />
      <Forum />
      <AdvertisingImg class="mb20"/>
      <Comment />
    </div> 
    <!-- Footer --> 
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import Header from '@/components/Header/index.vue';
import Swiper from '@/components/Swiper/index.vue';
import AdvertisingImg from '@/components/AdvertisingImg/index.vue';
import Footer from '@/components/Footer/index.vue';

import Recommend from './section/recommend.vue';
import LatestUpdate from './section/LatestUpdate.vue';
import Activity from './section/activity.vue';
import Forum from './section/forum.vue';
import Comment from './section/comment.vue';

interface BannerValidator {
 readonly id: number;
 readonly src: string;
 readonly label: string;
}

@Component({
  name: 'Home',
  components: {
    Header,
    Swiper,
    AdvertisingImg,
    Footer,
    Recommend,
    LatestUpdate,
    Activity,
    Forum,
    Comment,
  },
})
export default class Home extends Vue {
  private banners: BannerValidator[] = [
    {
      id: 1,
      src: 'http://readx-her-1252317822.image.myqcloud.com/boss/5120_pc%20%281%29.jpg',
      label: 'label',
    },
    {
      id: 2,
      src: 'http://readx-her-1252317822.image.myqcloud.com/boss/3169_1222111.jpg',
      label: 'label2',
    },
  ];
}
</script>

<style lang="less" scoped>
.home {
  .banner { 
    background-color: #fff;
    padding: 20px;
  }
}
</style>