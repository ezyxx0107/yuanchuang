<!--
 * @LastEditTime: 2020-08-16 17:49:17
 * @Description: 最新更新
-->
<template>
  <div class="latest-update clearfix mb20 padding20 br5 bg-white">
    <h3 class="h3-title fl">最新更新</h3>
    <div class="fr">
      <p v-for="item in latestUpdateLlist" :key="item.id" class="cursor-pointer"
        @click="goToPage(item)">
        <span class="title book-title text-overflow">{{item.title}}</span>
        <span class="chapter text-overflow ft12 gray-text">{{`更新第${item.chapter}章：${item.chapterTitle}`}}</span>
        <span class="time text-overflow ft12 gray-text">{{item.updateTime}}</span> 
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
interface BookValidator {
  id: number;
  title: string; // 书名
  chapter: number; // 最新章节
  chapterTitle: string; // 最新章节
  updateTime: string; // 更新时间
}

@Component({
  name: 'LatestUpdate',
})
export default class LatestUpdate extends Vue {
  private latestUpdateLlist: BookValidator[] = [
     {
      id: 1,
      title: '反穿之全能小厨娘反穿之全能小厨娘反穿之全能小厨娘',
      chapter: 1,
      chapterTitle: '大出血',
      updateTime: '16:341',
    },
    {
      id: 2,
      title: '反穿之全能小厨娘',
      chapter: 1,
      chapterTitle: '大出血',
      updateTime: '16:34',
    },
    {
      id: 3,
      title: '反穿之全能小厨娘',
      chapter: 1,
      chapterTitle: '大出血',
      updateTime: '16:34',
    },
    {
      id: 4,
      title: '反穿之全能小厨娘',
      chapter: 1,
      chapterTitle: '大出血',
      updateTime: '16:34',
    },
  ];

  private goToPage(item: BookValidator): void {
    // 该章节详情页
    console.log(item);
  }
}
</script>

<style lang="less" scoped>
.latest-update {
  .h3-title {
    margin-right: 40px;
    line-height: 50px;
  }
  div.fr {
    width: 80%;
    margin: 5px 0;
    p {
      display: inline-block;
      width: 50%;
      line-height: 20px;
      span {
        display: inline-block;
        padding-right: 10px;
        box-sizing: border-box;
      }
      .title,.chapter {
        width: 40%;
      } 
      .time {
        width: 20%;
      }
      .chapter,.time {
        padding-top: 2px;
      }
    }
  }
}
</style>