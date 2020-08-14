<!--
 * @LastEditTime: 2020-08-14 15:51:11
 * @Description: 论坛社区
-->
<template>
  <div class="forum mb20 padding20 br5 bg-white">
    <h3 class="h3-title mb20">论坛社区</h3>
    <div class="flexbox-space-betwwen">
      <div class="padding20 br5 box">
        <div
          class="swiper">
          <h4>{{ currentItem.category }}</h4>
          <p class="gray-text ft12">{{ currentItem.signature }}</p>
          <p class="content text-more-overflow">{{ currentItem.content }}</p>
          <p class="author">—— <span class="theme-color-text">{{ currentItem.author }}</span></p>
        </div>
      </div>
      <div class="padding20 br5 box">
        <h4>{{ forum.category }}</h4>
        <p class="gray-text ft12">{{ forum.signature }}</p>
        <p class="content text-more-overflow">{{ forum.content }}</p>
        <div class="flexbox-space-betwwen">
          <p class="count ft12">
            <span>{{ forum.like }}</span>
            <span>{{ forum.commentCount }}</span>
          </p>
          <p class="author">—— <span class="theme-color-text">{{ forum.author }}</span></p>
        </div>
      </div> 
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

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
      category: '随笔随文', // 分类
      signature: '灵感往往来自一瞬间，记录下来叭！', // 签名、宣传语
      content: '收集一下各位姐妹们的喜好哈，有什么脑洞也说说叭，随机翻牌子！顺便想收集点主角名字，多说说，说不收集一下各位姐妹们的喜好哈，有什么脑洞也说说叭，随机翻牌子！顺便想收集点主角名字，多说说，说不收集一下各位姐妹们的喜好哈，有什么脑洞也说说叭，随机翻牌子！顺便想收集点主角名字，多说说，说不',  // 内容
      author: '小学鸡',  // 作者
    },
    {
      id: 2,
      category: '随笔随文', // 分类
      signature: '灵感往往来自一瞬间，记录下来叭！', // 签名、宣传语
      content: '收集一下各位姐妹们的喜好哈，有什么脑洞也说说叭，随机翻牌子！顺便想收集点主角名字，多说说，说不',  // 内容
      author: '小学鸡2号',  // 作者
    },
  ];
  private forum: ForumObject = {
    id: 1,
    category: '日常闲谈', // 分类
    signature: '灵感往往来自一瞬间，记录下来叭！', // 签名、宣传语
    content: '收集一下各位姐妹们的喜好哈，有什么脑洞也说说叭，随机翻牌子！顺便想收集点主角名字，多说说，说不收集一下各位姐妹们的喜好哈，有什么脑洞也说说叭，随机翻牌子！顺便想收集点主角名字，多说说，说不收集一下各位姐妹们的喜好哈，有什么脑洞也说说叭，随机翻牌子！顺便想收集点主角名字，多说说，说不',  // 内容
    author: '小学鸡',  // 作者
    like: 12,  // 点赞数
    commentCount: 55,
  };

  private currentIndex: number = 0;
  private time: number = 3000;
  private timer: any = null;

  private beforeDestroyed(): void {
    this.destroyInterval();
  }

  get currentItem() {
    return this.swiperList[this.currentIndex] || {};
  }

  @Watch('$route', { immediate: true })
  private onRouteChanged(val: string): void {
    if (this.timer) {
      this.destroyInterval();
    } else {
      this.swiper();
    }
  }

  private swiper() {
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
}
</script>

<style lang="less" scoped>
.forum {
  .box {
    display: inline-block;
    border: 1px #F8E9EA solid;
    width: 45%;
    position: relative;
    h4 { 
      line-height: 1.5;
      font-size: 18px;
    }
    .content {
      margin: 10px 0;
      height: 54px;
      line-height: 1.3; 
      -webkit-line-clamp: 3; 
    }
    .author {
      text-align: right;
    }
    .count span{
      display: inline-block;
      margin-right: 10px;
      color: rgba(0, 0, 0, 0.8)
    } 
  }
}
</style>