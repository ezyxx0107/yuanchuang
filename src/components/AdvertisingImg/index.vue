<!--
 * @LastEditTime: 2020-08-13 09:37:30
 * @Description: 广告位图片
 * @props:
    src 图片路径，必传 
    heigh 图片高度，非必传，默认高度46px
-->

<template>
  <div class="advertising-image" :style="{height: `${height}px`}">
    <img :src="src" alt="">
    <span class="advertising-label">广告</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  name: 'AdvertisingImage',
})
export default class AdvertisingImage extends Vue {
  /**
   * @description: 广告图片路径，必传
   * @param {type} String
   * @return {type} void
   */
  @Prop({ default: ''}) private src!: string;
  /**
   * @description: 广告图片高度
   * @param {type} Number
   * @return {type} void
   */
  @Prop({ default: '85'}) private height?: number;
}
</script>

<style lang="less" scoped>
.advertising-image {
  position: relative;
  background-color: @theme-color;
  .advertising-label {
    display: inline-block;
    padding: 2px 5px;
    background-color: rgba(250, 250, 250, 0.4);
    font-size: 12px;
    color: #fff;
    position: absolute;
    right: 4px;
    bottom: 4px;
  }
}
</style>