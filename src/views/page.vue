<template>
 <div class="page">
     <!-- logo部分 -->
     <div class="banner">
        <header class="header">
          <div class="logo1">
            <h1><a href="javascript:;" title="优贝口腔">优贝口腔</a></h1>
          </div>

          <div class="input">
            <span></span>
            <input type="text" autofocus="autofocus"  >
          </div>

          <div class="photo">
            <div class="icon"></div>
            <ul>
              <li><span>24小时服务热线</span></li>
              <li><strong>010-8888888</strong></li>
            </ul>
          </div>

        </header>
      </div>

      <!-- 轮播图部分 -->
      <div class="swiper">
        <div class="block">
          <el-carousel height="380px">
            <el-carousel-item v-for="(item,index) in list" :key="index">
              <img style="width: 100%; height: 100%;" :src="item.src" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>

      </div>

      <!-- 内容部分 -->
      <div class="banner">

        <div class="content">
            <!-- 左 -->
          <div class="contentFl">
            <!-- 口腔课堂 -->
            <div class="room">

              <img v-if="isShow==='/project'" style="width: 100%;height: 100%;" src="../image/icon/主治项目.jpg" alt="">
              <img v-if="isShow==='/advanced'" style="width: 100%;height: 100%;" src="../image/icon/先进设备.jpg" alt="">
              <img v-if="isShow==='/about'" style="width: 100%;height: 100%;" src="../image/icon/关于我们.jpg" alt="">
              <img v-if="isShow==='/team'" style="width: 100%;height: 100%;" src="../image/icon/医生团队.jpg" alt="">
              <img v-if="isShow==='/info'" style="width: 100%;height: 100%;" src="../image/icon/相关资讯.jpg" alt="">
            </div>
            <!-- 关于我们 -->
            <div class="we">

            <div class="weLeft">
              <el-menu
              @select="handleSelect"
              background-color="#ededed"
              
                default-active="/page"
                active-text-color="#fff"
                router
                class="el-menu-vertical-demo"
                >
              <el-menu-item index="/about">

                    <span slot="title" >关于我们</span>
                  </el-menu-item>
                    <el-menu-item index="/project">

                    <span slot="title">主治项目</span>
                  </el-menu-item>
                    <el-menu-item index="/team">

                    <span slot="title">医生团队</span>
                  </el-menu-item>
                    <el-menu-item index="/advanced">

                    <span slot="title">先进设备</span>
                  </el-menu-item>
                  <el-menu-item index="/Outpatient">
                    <span slot="title">门诊资质</span>
                  </el-menu-item>
                    <el-menu-item index="/info">

                    <span slot="title">相关资讯</span>
                  </el-menu-item>

              </el-menu>

           </div>
            </div>
            <!-- 热线 -->
            <div class="Hotline">
              <div class="logoImg">
                <!-- <img src="../image/icon/" alt=""> -->
                <a href="javascript:;"  title="优贝口腔"></a>
              </div>
              <div class="HotlinePhoto">
               <div class="re">
                  <p>资讯热线:</p>
                  <h2>010-888888</h2>
               </div>
               <div class="HotlineBut">
                 <p>门诊地址:</p>
                 <h2>北京市昌平区鼓楼北街</h2>
                 <h2>商业综合街101</h2>
               </div>
              </div>
            </div>
            <div class="div"></div>
          </div>

         <!-- 中心 -->
        <div class="cen">
          <router-view></router-view>
        </div>

        <!-- 右 -->
        <div class="expert">
          <div class="exTitle">
            <a href="javascript:;" title="预约专家"><img style="width: 100%;height: 100%;" src="../image/专家/专家.jpg" ></a>
          </div>
          <div class="cent">
            <a href="javascript:;" title="种牙定制"><img style="width: 100%;height: 100%;" src="../image/专家/类型.jpg" ></a>
          </div>
          <div class="activity">
            <a href="javascript:;"  title="最新活动咨询" >
              <span><img style="width: 100%; height: 100%;" src="../image/icon/礼物.png" alt=""></span>
              <h1>最新活动咨询</h1>
            </a>
          </div>
          <div class="btn">
            <a href="javascript:;"  title="咨询在线客服">
              <img style="width: 100%;height: 100%;" src="../image/专家/客服.jpg" alt="">
            </a>
          </div>
        </div>

        </div>

      </div>

      <!-- 尾部 -->
      <footer class="footer" style="margin-top: 0px;height: 140px;">
        <div class="w">
          <!-- 中部 -->
          <div class="centent">
          </div>
            <!-- 底部 -->
          <div class="footerButtom">
            <div class="footFl">
            <p>门诊时间（无假日医院）</p>
            <h3>8：00AM ——— 5：30PM</h3>
            <p>医院地址:</p>
            <h3>北京市昌平区鼓楼北街商业综合街101</h3>
            </div>
            <div class="footfr">
            <p>24小时咨询热线</p>
            <h3> 010-80888888</h3>
            <p>乘车热线</p>
            <p>559路、345路、326路、昌57路/昌57路支线</p>
            </div>
          </div>

        </div>
        <div class="footBtn"></div>
      </footer>

 </div>
</template>

<script>
export default {
  name: 'page',
  data () {
    return {
      input1: '',
      list: [
        { src: require('../image/images/img/PC端_02.jpg') },
        { src: require('../image/images/img/PC端_02.jpg') },
        { src: require('../image/images/img/PC端_02.jpg') }
      ],
      isShow: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
      this.isShow = key
      // console.log(this.isShow)
    }
  }

}
</script>

<style scoped lang = "less">
* {
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
}
.page {
  background-color: #fff;
}
/* 版心 */
.banner {
  width: 1200px;
  margin: 0 auto;
}

/* logo部分 */
.header {
  width: 100%;
  height: 120px;
}
.header .logo1 {
  width: 368px;
  height: 120px;
  float: left;
}
.header  a {
      display: block;
      width: 368px;
      height: 120px;
      text-indent: -9999px;
      overflow: hidden;
      background:url('../image/images/log.png')no-repeat center;
}

/* 输入框 */
.input {
  width: 580px;
  height: 35px;
  margin-top: 45px;
  margin-left: 10px;
  margin-right: 10px;
  float: left;
  position: relative;
}
.input span {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
  background: url('../image/icon/search.png') no-repeat center;
  background-size: 30px 30px;
}

.input input {
  width: 540px;
  height: 100%;
  border:1px solid #ccc;
  padding-left: 40px;
  font-size: 16px
}
.photo {
  width: 220px;
  height: 120px;
  float: left;
}
/* 电话部分 */
.photo .icon {
  width: 50px;
  height: 48px;
  border-radius: 8px;
  background: url('../image/images/img/photo.png') no-repeat center;
  margin-top: 40px;
  margin-left: 15px;

}
.photo ul li {
    list-style: none;
    margin-left: 70px;
    margin-top: -43px;
    position: relative;
}
.photo ul li span {
    font-size: 12px;
    color: #000;
}
.photo ul li strong {
    font-size: 25px;
    color: #000;
    position: absolute;
    top: 43px;
}

/* 轮播图部分 */
.swiper {
  width: 100%;
  height: 380px;
  padding-bottom: 5px;
  border-bottom: 2px solid #ccc;
}

 /* 课堂部分 */
.content {
  width: 100%;
  height: 1140px;
  margin-top: 60px;
}
.content .contentFl {
  float: left;
}
.content .room {
  width: 180px;
  height: 120px;
  background-color: #881bd9;
  margin-bottom: 5px;
}
/* 关于我们 */
.content .contentFl .we {
  width: 145px;
  height: 564px;
  background-color: #ededed;
  padding-top: 100px;
  padding-left: 33px;
  margin-bottom: 5px;

}
.content .contentFl .weLeft {
      width: 116px;
      height: 400px;
      padding-top: 60px;
      border-left: 2px solid  #881bd9; 
}


.content .contentFl .we ul li {
  border-bottom: 1px solid #881bd9;
}

/* .content .contentFl .we .weLeft  ul li:hover {
  color: #fff;
  background-color: transparent !important;
} */

.el-menu-item.is-active {
  background: #881bd9 !important;
}
.el-submenu__title.is-active {
  background: #881bd9 !important;
}

.content .contentFl   .weCentent {
      width: 120px;
      height: 255px;
      border-left: 2px solid #9234d8;
      padding-top: 60px;
}
.content .weCentent ul {
  height: 255px;
  width: 120px;
}
.content .weCentent ul li {
  width: 120px;
  height: 36px;
  list-style: none;
  border-bottom: 1px solid #9234d8;
}
.content .weCentent ul .is {
  background-color: #9234d8;
}
.content .weCentent ul li a {
  width: 120px;
  height: 36px;
  line-height: 36px;
  text-decoration: none;
  padding-left: 15px;
  font-size: 18px;
  color: #000;
  font-weight:normal;
}
.content .weCentent ul li:hover {
  background-color: #9234d8;
  color: #fff;
}
.content .weCentent ul a:hover {
color: #fff;
}
/* 热线部分 */
.content .Hotline {
   width: 180px;
   height: 255px;
   background-color: #ededed;
}
.content .logoImg {
  width: 180px;
  height: 110px;
  background-color: #9234d8;
  background: url('../image/icon/logo.png') no-repeat center;
  background-size: 135px 75px;
}
.content .logoImg  a {
  width: 100%;
  height: 100%;
  display: block;
}
.HotlinePhoto {
  width: 180px;
  height: 145px;
}

.HotlinePhoto .re {
  width: 180px;
  height: 50px;
}
.HotlinePhoto .re p {
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  padding-top: 10px;
}
.HotlinePhoto .re h2 {
  font-weight: normal;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.HotlinePhoto .HotlineBut {
  width: 180px;
  height: 100px;
}
.HotlinePhoto .HotlineBut p {
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  padding-top: 20px;
}
.HotlinePhoto .HotlineBut h2 {
  font-size: 16px;
  height: 20px;
  line-height: 20px;
  font-weight: normal;
  text-align: center;
}
.content .div {
  width: 180px;
  height: 40px;
  margin-top: 5px;
  background-color: #9234d8;
}

.cen {
  float: left;
}

/* 右侧专家 */
.content .expert {
  width: 300px;
  height: 500px;
  float: right;
  margin-top: 70px;
}
.content .expert .exTitle {
  width: 100%;
  height: 255px;
  background-color: #ccc;
  margin-bottom: 10px;
}
.content .expert .cent {
  width: 100%;
  height: 450px;
  background-color: #ccc;
  margin-bottom: 10px;
}
.content .expert .activity {
  width: 100%;
  height: 60px;
  background-color: #8b8b8b;
  margin-bottom: 10px;
  position: relative;
}
.content .expert .activity a {
  text-decoration: none;
}
.content .expert .activity span {
  position: absolute;
    width: 40px;
    height: 40px;
    left: 23px;
    top: 8px;
}

.content .expert .activity h1 {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-weight: normal;
  color: #fff;
}
.content .expert .btn {
  width: 100%;
  height: 255px;
  background-color: #ccc;
}

/* 底部 */
.footBtn {
  width: 100%;
  height: 35px;
  background-color: #881bd9;
}

</style>
