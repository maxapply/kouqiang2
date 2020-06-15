<template>
 <div class="myAbout">
   <!-- title部分 -->
    <div class="title">
        <div class="kuai"></div>
            <h1>关于我们:</h1>
            <span>About us.</span>
    </div>
    <!-- 公司介绍轮播图 -->
    <div class="swiper">
        <div class="block">
            <el-carousel height="500px">
              <el-carousel-item v-for="(item,index) in we_img" :key="index">
                <img style="width: 100%; height: 100%;" :src="item.src" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
    </div>
    <!-- 公司简介 -->
    <div class="text">
     <h1>医院简介</h1>
     <p>Hospital Proile</p>
     <article>         优贝口腔，是经过卫生主管部门批准的一家以高标准服务为起点，集口腔内科、口腔外科、口腔修复、口腔正畸、口腔种植为一体的精致口腔专科门诊;
        <span> </span> 现有门诊内主要医疗器械有;牙床椅、口腔内窥镜、真空消毒 锅、根管测量仪.口腔种植机，机扩、韩国BL热牙胶仪器等等;
        <span> </span> 优贝口腔的主治医师王医生曾在武汉大学口腔医学院分别跟随各位博士导师学习进修儿牙科、口内、正畸专业多年，在同济进修修复专业，
                       在重庆医科大跟随博士导师学习种植专业，口腔专业经验丰富.
     </article>
     <article>
        优贝口腔的医疗团队因经常出国学习，特参考了国外优秀牙科诊所设计经营理念，经专业团队独特思维设计装修，成为宜昌首家别具锐新、医生曾在武汉大学
        口腔医学院分别跟随各位博士导师学习进修儿牙科、口内、正畸专业多年，在同济进修修复专业，在重庆医科大跟随博士导师学习种植专业，口腔专业经验丰富.
        优贝口腔的医疗团队因经常出国学习，特参考了国外优秀牙科诊所设计经营理念，经专业团队独特思维设计装修，成为宜昌首家别具锐新、现代风格现代风格的专业口腔门诊。
     </article>
     <div class="img">
         <div class="flImg">
             <img style="width: 100%;height: 100%;" src="../image/关于我们/关于我们4.jpg" alt="">
         </div>
         <div class="cenImg">
             <img style="width: 100%;height: 100%;" src="../image/关于我们/关于我们3.jpg" alt="">
         </div>
         <div class="frImg">
            <img style="width: 100%;height: 100%;" src="../image/关于我们/关于我们2.jpg" alt="">
         </div>
     </div>

    </div>
    <!-- 联系区域 -->
    <div class="contact">
      <div>
          <a href="javascript:;" title="电话咨询">
           <img style="width: 100%;height: 100%;" src="../image/icon/photo.png" alt="">
          </a>
      </div>
      <div>
          <a href="javascript:;" title="QQ咨询" >
              <img style="width: 100%;height: 100%;" src="../image/icon/qq.png" alt="">
          </a>
      </div>
  </div>


 </div>
</template>
 
<script>
export default {
 name: 'myAbout',
 data () {
 return {
    we_img: [
        { src: require('../image/images/img/PC端_25.jpg') },
        { src: require('../image/images/img/PC端_25.jpg') },
        { src: require('../image/images/img/PC端_25.jpg') },
      ],
 }
 }
}
</script>
 
<style scoped lang = "less">
.myAbout {
    width: 720px;
    height: 1120px;
}

/* title部分 */
.title {
  width: 700px;
  height: 58px;
  margin-left: 20px;
  border-bottom: 1px solid #626262;
}
.title .kuai {
  width: 20px;
  height: 58px;
  background-color: #881bd9;
  float: left;
}
.title  h1 {
   padding-left: 8px;
  width: 130px;
  height: 58px;
  line-height: 58px;
  font-weight: normal;
  border-bottom: 1px solid #881bd9;
  float: left;
}
.title span {
  display: block;
  float: left;
  height: 58px;
  line-height: 58px;
}

/* 公司介绍轮播图 */
.swiper {
    width: 600px;
    height: 500px;
    margin-left: 60px;
    margin-top: 50px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
}

/* 公司介绍 */
.text {
    width: 560px;
    height: 460px;
    padding:10px 20px;
    margin-left: 60px;
}
.text h1 {
    font-weight: normal;
}
.text article {
    margin-top: 9px;
    text-indent:2em;
    line-height: 23px;
}
.text .img {
    width: 560px;
    height: 100px;
    margin-top: 10px;
    display: flex;
}
.text .flImg {
  height: 100px;
  margin-right: 10px;
  flex: 1;
}
.text .cenImg {
  height: 100px;
  margin-right: 10px;
  flex: 1;
}
.text .frImg {
  height: 100px;
  flex: 1;
}

/* 联系按钮 */
 .contact {
  width: 600px;
   height: 33px;
   margin-left: 60px;
}
/* 联系按钮 */
 .contact div {
  width: 200px;
  height: 30px;
  background-color: #fcca30;
  border-radius: 10px;
  float: left;
  margin-left: 80px;
}
 .contact div a {
  width: 200px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  display: block;
  text-decoration: none;
  font-size: 18px;
  color: #fff;
}
 

 
</style>