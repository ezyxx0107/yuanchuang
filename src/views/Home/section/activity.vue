<!--
 * @LastEditTime: 2020-08-16 17:47:21
 * @Description: 活动专区
-->
<template>
  <div class="activity mb20 padding20 br5 bg-white">
    <h3 class="h3-title mb20">活动专区</h3>
    <div class="list flexbox-space-betwwen">
      <div 
        v-for="item in activityList" 
        :key="item.id"  
        class="clearfix li"
        @click="goToPage(item)">
        <p class="fl">
          <span class="dot" :class="{active:item.status}"></span>
          <span class="title book-title text-overflow">{{item.title}}</span> 
        </p>
        <p class="fr">
          <img v-if="!item.status" src="@/assets/icon/people.png" alt="" class="icon">
          <img v-if="item.status" src="@/assets/icon/people-active.png" alt="" class="icon">
          <span class="ft12 gray-text">{{item.count}}人</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface ActivityValidator {
  id: number;
  title: string; // 主题名
  count: number; // 人数
  status: boolean; // 活动状态：是否进行中
}
@Component({
  name: 'Activity',
})
export default class Activity extends Vue {
  private activityList: ActivityValidator[] = [
    {
      id: 1,
      title: '第七十六次作业主题【游乐园】',
      count: 15,
      status: true,
    },
    {
      id: 2,
      title: '第七十六次作业主题【游乐园】',
      count: 17,
      status: true,
    },
    {
      id: 3,
      title: '第七十六次作业主题【游乐园】',
      count: 12,
      status: false,
    },
    {
      id: 4,
      title: '第七十六次作业主题【游乐园】',
      count: 12,
      status: false,
    },
  ];

  private goToPage(item: ActivityValidator): void {
    // 帖子详情
  }
}
</script>

<style lang="less" scoped>
.activity {
  .li {
    display: inline-block;
    padding: 0 2%;
    margin-bottom: 15px;
    width: 45%;
    box-shadow: 0 2px 11px 0 rgba(242,162,162,0.2); 
    line-height: 34px;
    height: 34px; 
    span {
      display: inline-block;
      vertical-align: middle;
    }
    .fl {
      width: 80%;
    }
    .dot {
      border-radius: 50%;
      width: 8px;
      height: 8px;
      background-color: #D5D5D5;
      margin-right: 10px;
    }
    .dot.active {
      background-image: linear-gradient(143deg, #FF8938 0%, #F74545 100%);
    } 
    .title {
      width: 90%;
    }
    .icon {
      width: 15px;
      height: 15px;
      vertical-align: middle;
      margin: 0 2px 1px 0;
    }
  }
}
</style>