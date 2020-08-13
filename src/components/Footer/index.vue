<!--  
 * @Description: 首页公共Footer区，纯静态
-->
<template>
  <div class="footer">
    <p class="link"><a href="www.hongxiu.com">友情链接：www.hongxiu.com</a></p> 
    <p>Copyright © 1999-2020 www.hongxiu.com All Rights Reserved版权所有 北京红袖添香科技发展有限公司</p>
    <p>北京红袖添香科技发展有限公司 <span class="record">京ICP证090200号京ICP备09093681号-1京公网安备</span> 11010502030109号京网文[2015]0006-006号新出网证（京）字204号</p>
    <p>请所有作者发布作品时务必遵守国家互联网信息管理办法规定，我们拒绝任何色情小说，一经发现，即作删除！客服电话：010-59357051</p>
    <p>联系方式 总机 010-83050798-6000 地址：北京市朝阳区天辰东路7号楼-2至8层101内北区7层706室</p>
    <p>本站所收录作品、社区话题、书库评论及本站所做之广告均属个人行为，与本站立场无关</p>
  </div>
</template>

<style lang="less" scoped>
.footer {
  text-align: center;
  background-color: #D8D8D8;
  opacity: 0.4;
  font-size: 12px;
  color: #666;
  line-height: 20px;
  padding:30px 0 20px 0;
  .link {
    margin-bottom: 10px;
    a {
      color: #666;
    }
  }
  .record {
    color: @theme-color;
  }
}
</style>