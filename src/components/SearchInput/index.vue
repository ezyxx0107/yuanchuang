<!--
 * @LastEditTime: 2020-08-16 17:28:09
 * @Description: 搜索框
 * @props:
    inputWidth 搜索框input的宽度，非必传，默认40 
-->
<template>
  <div class="search-input">
    <input :style="{width:`${inputWidth}px`}" type="text" v-model="inputValue" @keyup.enter="searchFn" class="input">
    <div class="search-icon" @click="searchFn">
      <svg t="1597132271577" class="search-svg cursor-pointer" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1252" width="20" height="20">
        <path d="M662.635 460.563q0-87.1-61.912-149.013t-149.013-61.912-149.013 61.912-61.912 149.013 61.912 149.013 149.013 61.912 149.013-61.912 61.912-149.013zM903.69 852.278q0 24.482-17.891 42.373t-42.373 17.891q-25.424 0-42.373-17.891l-161.488-161.017q-84.276 58.381-187.853 58.381-67.326 0-128.768-26.13t-105.933-70.622-70.622-105.933-26.13-128.768 26.13-128.768 70.622-105.933 105.933-70.622 128.768-26.13 128.767 26.13 105.933 70.622 70.622 105.933 26.13 128.768q0 103.578-58.381 187.853l161.488 161.488q17.421 17.421 17.421 42.373z" p-id="1253" fill="#ffffff"></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  name: 'SearchInput',
})
export default class SearchInput extends Vue {
  /**
   * @description: 搜索框input宽度，非必传，默认40
   * @param {type} Number
   * @return {type} void
   */
  @Prop({ default: '40' }) private inputWidth?: number;

  private inputValue: string = '';

  private searchFn(): void {
    console.log(this.inputValue);
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>