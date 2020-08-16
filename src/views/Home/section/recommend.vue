<!--
 * @LastEditTime: 2020-08-16 17:51:19
 * @Description: 编辑推荐
-->
<template>
  <div class="recommend br5 padding20 mb20 bg-white">
    <h3 class="h3-title mb20">编辑推荐</h3>
    <div class="container flexbox-space-betwwen">
      <div class="main-book">
        <div class="cover mb10">
          <img :src="mainBook.cover" alt="">
          <p class="hot white-text">
            <img src="@/assets/icon/hot.png" alt="" class="hot-icon">
            <span>{{ mainBook.hot }}</span>
          </p> 
        </div>
        <div class="book-info">
          <p class="title book-title mb10" @click="goToPage(mainBook)">{{ mainBook.title }}</p>
          <p class="author mb10">
            <span class="circle"><span class="dot"></span></span>
            <span class="name">{{ mainBook.author }}</span>
          </p>
          <p class="content text-more-overflow ft14">{{ mainBook.content }}</p>
        </div>
      </div>
      <div class="flexbox-space-betwwen recommend-list">
        <div 
          v-for="item in recommendList"
          :key="item.id"
          class="li flexbox-space-betwwen mb10">
          <div class="cover">
            <img :src="item.cover" alt="">
          </div>
          <div class="book-info">
            <p class="title book-title mb5" @click="goToPage(item)">{{ item.title }}</p>
            <p class="author mb5">{{ item.author }}</p>
            <p class="category ft12 mb5">{{ item.category }}</p>
            <p class="content text-more-overflow ft12 mb10">{{ item.content }}</p>
            <p class="chapter ft12">{{ `更新至${item.chapter}章` }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
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
    cover: 'https://bookcover.yuewen.com/qdbimg/349573/c_13331693203170704/90',
    title: '我家宿主心怀叵测',
    author: '食喜',
    content: '一睁眼，叶涟想穿成书里一无是处的炮灰女配，而且马上就要领饭盒，她直接不干了。唱歌破音？万人演唱会一睁眼，叶涟想穿成书里一无是处的炮灰女配，而且马上就要领饭盒，她直接不干了。唱歌破音？万人演唱会一睁眼，叶涟想穿成书里一无是处的炮灰女配，而且马上就要领饭盒，她直接不干了。唱歌破音？万人演唱会',
    hot: 88,
  };
  private recommendList: BookBookValidator[] = [
    {
      cover: 'https://bookcover.yuewen.com/qdbimg/349573/c_13331693203170704/90',
      title: '我家宿主心怀叵测',
      author: '食喜',
      category: '言情',
      content: '一睁眼，叶涟想穿成书里一无是处的炮灰女配，而且马上就要领饭盒，她直接不干了。唱歌破音？…',
      chapter: 777,
    },
    {
      cover: 'https://bookcover.yuewen.com/qdbimg/349573/c_13331693203170704/90',
      title: '我家宿主心怀叵测',
      author: '食喜',
      category: '言情',
      content: '一睁眼，叶涟想穿成书里一无是处的炮灰女配，而且马上就要领饭盒，她直接不干了。唱歌破音？万人演唱会…',
      chapter: 777,
    },
    {
      cover: 'https://bookcover.yuewen.com/qdbimg/349573/c_13331693203170704/90',
      title: '我家宿主心怀叵测',
      author: '食喜',
      category: '言情',
      content: '一睁眼，叶涟想穿成书里一无是处的炮灰女配，而且马上就要领饭盒，她直接不干了。唱歌破音？万人演唱会…',
      chapter: 777,
    },
    {
      cover: 'https://bookcover.yuewen.com/qdbimg/349573/c_13331693203170704/90',
      title: '我家宿主心怀叵测',
      author: '食喜',
      category: '言情',
      content: '一睁眼，叶涟想穿成书里一无是处的炮灰女配，而且马上就要领饭盒，她直接不干了。唱歌破音？万人演唱会…',
      chapter: 777,
    },
    {
      cover: 'https://bookcover.yuewen.com/qdbimg/349573/c_13331693203170704/90',
      title: '我家宿主心怀叵测',
      author: '食喜',
      category: '言情',
      content: '一睁眼，叶涟想穿成书里一无是处的炮灰女配，而且马上就要领饭盒，她直接不干了。唱歌破音？万人演唱会…',
      chapter: 777,
    },
    {
      cover: 'https://bookcover.yuewen.com/qdbimg/349573/c_13331693203170704/90',
      title: '我家宿主心怀叵测',
      author: '食喜',
      category: '言情',
      content: '一睁眼，叶涟想穿成书里一无是处的炮灰女配，而且马上就要领饭盒，她直接不干了。唱歌破音？万人演唱会…',
      chapter: 777,
    },
  ];

  private goToPage(item: BookBookValidator): void {
    // 小说主页
    console.log(item);
  }
}
</script>

<style lang="less" scoped>
.recommend {
  span{
    display: inline-block; 
  }
  .main-book { 
    width: 210px;
    height: 471px;
    box-shadow: 0 3px 19px 0 rgba(202,202,202,0.33);
    .cover {
      position: relative;
      height: 260px;
      line-height: 26px;
      .hot {
        position: absolute;
        right: 0;
        bottom: 0;background-image: linear-gradient(143deg, #FF698A 0%, #F74545 100%);
        border-radius: 165px 0 0 165px;
        z-index: 99;
        width: 60px;
        height: 26px;
        line-height: 26px; 
        box-sizing: border-box;
        font-size: 20px; 
        text-align: center; 
        .hot-icon {
          display: inline-block;
          width: 15px;
          height: 18px;
          margin: 3px 8px 0 5px; 
        }
        span {
          vertical-align: top;
        }
      }
    }
    .book-info { 
      margin: 0 10px;
      .title {
        font-size: 20px;
        font-weight:bold;
        line-height: 1.5;
      }
      .author { 
        color: #959595;
        .circle { 
          margin: 0 5px 2px;
          width: 14px;
          height: 14px;
          text-align: center;
          border-radius: 100%; 
          background-color: @theme-color;
          vertical-align: middle; 
          .dot {
            margin-top:1px;
            border-radius: 100%;
            border: 2px #fff solid;
            width: 8px;
            height: 8px;
            background-color: @theme-color; 
          }
        } 
        .name {
          font-size: 16px;
        }
      }
      .content {
        -webkit-line-clamp: 7;  
        color: #666;
      }
    }
  }
  .recommend-list {
    width: 76%;
    .li {
      width: 49%;
      box-shadow: 0 3px 19px 0 rgba(202,202,202,0.33);
      .cover {
        width: 116px;
        height: 150px;
      }
      .book-info {
        padding: 10px 0 0 0;
        width: 62%;
        .title { 
          font-size: 16px; 
        }
        .author {
          font-size: 14px;
          color: #989898;
        }
        .category {
          border: 1px #A3A3A3 solid;
          border-radius: 5px;
          padding: 2px 5px;
          display: inline-block;
          color: #989898;
        }
        .content {
          -webkit-line-clamp: 4;
          color: #666;
        }
        .chapter {
          color: #CBCBCB; 
        }
      } 
    }
  }
}
</style>