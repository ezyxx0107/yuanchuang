<!--
 * @Date: 2020-08-12 21:13:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-13 12:43:48
 * @Description: 活动专区
-->
<template>
  <div class="activity mb20 padding20 br5 bg-white">
    <h3 class="h3-title mb20">最新更新</h3>
    <div class="list flexbox-space-betwwen">
      <div 
        v-for="item in activityList" 
        :key="item.id"  
        class="clearfix li">
        <p class="fl">
          <span class="dot" :class="{active:item.count > 12}"></span>
          <span class="title text-overflow">{{item.title}}</span> 
        </p>
        <p class="fr">
          <span></span>
          <span class="ft12 gray-text">{{item.count}}人</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

interface ActivityValidator {
  id: number;
  title: string; // 主题名
  count: number; // 人数
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
    },
    {
      id: 2,
      title: '第七十六次作业主题【游乐园】',
      count: 17,
    },
    {
      id: 3,
      title: '第七十六次作业主题【游乐园】',
      count: 12,
    },
    {
      id: 4,
      title: '第七十六次作业主题【游乐园】',
      count: 12,
    },
  ];
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
  }
}
</style>