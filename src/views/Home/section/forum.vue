<!--
 * @LastEditTime: 2020-08-13 12:54:37
 * @Description: 论坛社区
-->
<template>
  <div class="forum mb20 padding20 br5 bg-white">
    <h3 class="h3-title mb20">论坛社区</h3>
    <div class="flexbox-space-betwwen">
      <div class="padding20 br5 box">
        <div 
          v-for="item in swiperList"
          :key="item.id"
          class="swiper">

        </div>
      </div>
      <div class="padding20 br5 box">
      </div> 
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

interface ForumObject {
  id: number;
  category: string; // 分类
  signature: string; // 签名、宣传语
  content: string;  // 内容
  author: string;  // 作者
  like?: number;  // 点赞数
  commentCount?: number;  // 评论数
}

@Component({
  name: 'Forum',
})
export default class Forum extends Vue {
  private swiperList: ForumObject[] = [
    {
      id: 1,
      category: '灵感往往来自一瞬间，记录下来叭！', // 分类
      signature: '灵感往往来自一瞬间，记录下来叭！', // 签名、宣传语
      content: '收集一下各位姐妹们的喜好哈，有什么脑洞也说说叭，随机翻牌子！顺便想收集点主角名字，多说说，说不',  // 内容
      author: '小学鸡',  // 作者
      like: 12,  // 点赞数
      commentCount: 55,  // 评论数
    },
    {
      id: 2,
      category: '灵感往往来自一瞬间，记录下来叭！', // 分类
      signature: '灵感往往来自一瞬间，记录下来叭！', // 签名、宣传语
      content: '收集一下各位姐妹们的喜好哈，有什么脑洞也说说叭，随机翻牌子！顺便想收集点主角名字，多说说，说不',  // 内容
      author: '小学鸡',  // 作者
      like: 12,  // 点赞数
      commentCount: 55,  // 评论数
    },
  ];
}
</script>

<style lang="less" scoped>
.forum {
  .box {
    border: 1px #F8E9EA solid;
  }
}
</style>