<!--
 * @LastEditTime: 2020-08-16 17:36:39
 * @Description: 轮播
-->

<template>
  <div class="swiper">
    <div class="image cursor-pointer"
      @mouseenter="hoverFn(currentIndex)"
      @mouseleave="swiper(currentIndex)"
      @click="goToPage(currentIndex)">
      <img :src="swiperList?swiperList[currentIndex].src:''" alt="">
    </div>
    <ul>
      <li v-for="(item, index) in swiperList" 
        :key="index" 
        :class="{active:index === currentIndex}"
        class="cursor-pointer"
        @mouseenter="hoverFn(index)"
        @mouseleave="swiper(index)"
        @click="goToPage(currentIndex)">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
@Component({
  name: 'Swipper',
})
export default class Swipper extends Vue {
  @Prop({
    required: true,
    type: Array,
    default: () => [],
    validator: (swiperList: []) => {
      return swiperList.length > 0;
    },
  }) private swiperList!: [];

  private currentIndex: number = 0;
  private time: number = 3000;
  private timer: any = null;

  private beforeDestroyed(): void {
    this.destroyInterval();
  }

  @Watch('$route', { immediate: true })
  private onRouteChanged(val: string): void {
    if (this.timer) {
      this.destroyInterval();
    } else {
      this.swiper();
    }
  }

  private swiper(index: number = this.currentIndex) {
    this.timer = setInterval(() => {
      this.currentIndex ++;
      if ( this.currentIndex > (this.swiperList.length - 1) ) {
        this.currentIndex = 0;
      }
    }, this.time);
  }

  private destroyInterval() {
    clearInterval(this.timer);
    this.timer = null;
    this.currentIndex = 0;
  }

  private hoverFn(index: number): void {
    clearInterval(this.timer);
    this.timer = null;
    this.currentIndex = index;
  }

  private goToPage(index: number): void {
    // 跳转到对应的页面
  }

}
</script>

<style lang="less" scoped>
.swiper {
  height: 252px; 
  position: relative;
  .image {
    height: 252px; 
    background-color: @theme-color;
  }
  ul {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 40px;
    line-height: 40px;
    li {
      display: inline-block;
      width: 20%;
      text-align: center;
      color: #fff;
      box-sizing: border-box; 
    }
    li:not(:last-child) {
      border-right: 1px #fff solid;
    }
    li.active {
      background-color: @theme-color;
    }
  }
}
</style>