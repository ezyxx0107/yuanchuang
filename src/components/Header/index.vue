<!--
 * @LastEditTime: 2020-08-16 17:27:36
 * @Description: 公共头部，包含logo，查询，登陆，注册，导航 
-->
<template>
  <div class="header">
    <div class="inner top clearfix">
      <div class="logo fl">
          LOGO
      </div>
      <SearchInput inputWidth="230" class="fl search"/>
      <div class="fr">
        <p class="sigin-up cursor-pointer">登陆</p>
        <p class="sigin-in cursor-pointer">注册</p>
      </div>
    </div>
    <div class="nav">
      <ul class="inner">
        <li v-for="(item, index) in navigations" :key="item.key" :class="{active:index===0}" class=" cursor-pointer">
          <p>
            <img v-if="item.key === 'mobileWeb'" src="@/assets/icon/phone.png" alt="" class="icon">
            <span>{{ item.name }}</span>
          </p> 
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import SearchInput from '@/components/SearchInput/index.vue';
interface NavigationValidator {
  readonly name: string;
  readonly key: string;
  readonly path: string;
}
@Component({
  name: 'Header',
  components: {
    SearchInput,
  },
})
export default class Header extends Vue {
  private navigations: NavigationValidator[] = [
    {
      name: '首页',
      key: 'home',
      path: '/',
    },
    {
      name: '热门小说',
      key: 'hot',
      path: '/hot',
    },
    {
      name: '热追现言',
      key: 'mordenRomance',
      path: '/mordenRomance',
    },
    {
      name: '热追古言',
      key: 'ancientRomance',
      path: '/ancientRomance',
    },
    {
      name: '热追幻言',
      key: 'fantasyRomance',
      path: '/fantasyRomance',
    },
    {
      name: '热门男频',
      key: 'menChannel',
      path: '/menChannel',
    },
    {
      name: '热读纯爱',
      key: 'romance',
      path: '/romance',
    },
    {
      name: '精品书库',
      key: 'boutique',
      path: '/boutique',
    },
    {
      name: '已完结',
      key: 'finished',
      path: '/finished',
    },
    {
      name: '手机站',
      key: 'mobileWeb',
      path: '/',
    },
  ];
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>