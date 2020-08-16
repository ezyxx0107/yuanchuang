<!--
 * @LastEditTime: 2020-08-16 17:47:48
 * @Description: Description
-->
<template>
  <div class="comment padding20 mb20 br5 bg-white">
    <h3 class="h3-title mb10">最新评论</h3>
    <div 
      v-for="item in comments"
      :key="item.id"
      class="li mb20">
      <div class="header flexbox-space-betwwen mb10">
        <p>
          <span class="user">{{ item.user }}</span>
          <span class="lever white-text">{{ item.lever }}</span>
        </p>
        <p class="gray-text cursor-pointer" @click="goToPage('book', item)">《{{ item.title }}》</p>
      </div>
      <p class="content text-more-overflow mb10 cursor-pointer"
         @click="goToPage('comment', item)">{{ item.comment }}</p>
      <div class="footer flexbox-space-betwwen gray-text  mb10">
        <p>{{ `来自 第${item.chapter}章 ${item.chapterTitle}` }}</p>
        <p>{{ item.time }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface CommentValidator {
  id: number;
  user: string; // 用户名
  lever: number;  // 等级
  title: string;  // 书名
  comment: string;  // 评论
  chapter: number;  // 章节
  chapterTitle: string; // 章节标题
  time: string; // 发布时间
}
@Component({
  name: 'Comment',
})
export default class Comment extends Vue {
  private comments: CommentValidator[] = [
    {
      id: 1,
      user: '慕长安',
      lever: 5,
      title: '被师傅捡来',
      comment: '被师傅捡来的小和尚五岁了，该下山找爸爸了。小和尚软软抱着一只小狼崽，迈着小短腿儿冲过去就抱着自己爸爸的大长腿奶声奶气的喊道“爸爸！”被师傅捡来的小和尚五岁了，该下山找爸爸了。小和尚软软抱着一只小狼崽，迈着小短腿儿冲过去就抱着自己爸爸的大长腿奶声奶气的喊道“爸爸！”被师傅捡来的小和尚五岁了，该下山找爸爸了。小和尚软软抱着一只小狼崽，迈着小短腿儿冲过去就抱着自己爸爸的大长腿奶声奶气的喊道“爸爸！”被师傅捡来的小和尚五岁了，该下山找爸爸了。小和尚软软抱着一只小狼崽，迈着小短腿儿冲过去就抱着自己爸爸的大长腿奶声奶气的喊道“爸爸！”',
      chapter: 5,
      chapterTitle: '被师傅捡来',
      time: '2020-08-09',
    },
    {
      id: 12,
      user: '慕长安',
      lever: 51,
      title: '被师傅捡来',
      comment: '被师傅捡来的小和尚五岁了，该下山找爸爸了。小和尚软软抱着一只小狼崽，迈着小短腿儿冲过去就抱着自己爸爸的大长腿奶声奶气的喊道“爸爸！”',
      chapter: 5,
      chapterTitle: '被师傅捡来',
      time: '2020-08-09',
    },
  ];

  private goToPage(type: string, item: CommentValidator): void {
    console.log(type, item);
  }

}

</script>

<style lang="less" scoped>
.comment {
  .li {
    span {
      display: inline-block;
    }
    .header {
      line-height: 1.5;
      .user {
        font-size: 16px;
        margin-right: 10px;
      } 
      .lever {
        padding:0 8px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        background-color: @theme-color; 
        font-weight: bold;
        position: relative;
        margin-left: 20px;
      }
      .lever::after {
        content: 'lv';
        width: 22px;
        height: 22px;
        line-height: 22px;
        border-radius: 50%;
        background-color: @theme-color; 
        border:1px #fff solid;
        position: absolute;
        left: -20px;
        top: -2px;
        font-size: 12px;
      }
    }
    .content {
      height: 54px;
      line-height: 1.3;
      -webkit-line-clamp: 3;
    }
  }
  .li:not(:last-child) {
    border-bottom: 1px solid rgba(172,0,16,0.09);
  }
}
</style>