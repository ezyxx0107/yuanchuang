<!--
 * @Date: 2020-08-12 13:53:51
 * @LastEditors: cola
 * @LastEditTime: 2020-08-12 21:48:59
 * @Description: 编辑推荐
-->
<template>
  <div class="recommend br5 padding20 mb20">
    <h3 class="h3-title">编辑推荐</h3>
    <div class="container clearfix">
      <div class="fl">
        <div class="cover">
          <img src="" alt="">
          <span class="hot"></span>
        </div>
        <div class="book-info">
          <p class="title"></p>
          <p class="author"></p>
          <p class="content text-overflow"></p>
        </div>
      </div>
      <div class="fr"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
interface BookBookValidator {
 cover: string; // 封面
 title: string; // 书名
 author: string;  // 作者
 content: string; // 内容
 chapter?: number; // 最新章节
 hot?: number|undefined;  // 热度
 category?: string;  // 分类
}

@Component({
  name: 'Recommended',
})
export default class Recommended extends Vue {
  private mainBook: BookBookValidator = {
    cover: '',
    title: '',
    author: '',
    content: '',
    hot: undefined,
  };
  private recommendList: BookBookValidator[] = [
    {
      cover: '',
      title: '',
      author: '',
      category: '',
      content: '',
      chapter: undefined,
    },
  ];
}
</script>

<style lang="less" scoped>
.recommend {
  background-color: #fff;
}
</style>