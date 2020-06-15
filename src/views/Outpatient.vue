<template>
 <div class="Outpatient">
    <!-- title部分 -->
    <div class="title">
        <div class="kuai"></div>
        <h1>门诊资质:</h1>
        <span>Outpatient qualification</span>
    </div>
    <div class="text">
        <h1>认证机构</h1>
    </div>
    <!-- 认证机构 -->
    <div class="out">
        <!-- 1 -->
        <div class="outtitle">
            <div class="outFl">
               <img  src="../image/证书/证书1.jpg" alt="">
               <div class="year">
                   <p>2015年10月</p>
                   <h3>Fotona欧洲之星授权</h3>
               </div>
            </div>
            <div class="outFr">
                <img  src="../image/证书/证书2.jpg" alt="">
                <div class="year">
                    <p>2015年12月</p>
                    <h3>美国GE牙科技术认证</h3>
                </div>
             </div>
        </div>
        <!-- 2 -->
        <div class="outtitle">
            <div class="outFl">
               <img  src="../image/证书/证书3.jpg" alt="">
               <div class="year">
                   <p>2016年03月</p>
                   <h3>洋紫荆优秀合作伙伴</h3>
               </div>
            </div>
            <div class="outFr">
                <img  src="../image/证书/证书4.jpg" alt="">
                <div class="year">
                    <p>2016年09月</p>
                    <h3 class="shanghai">上海正雅齿科科技股份</h3>
                    <h3 class="shanghai">有限公司认证授权</h3>
                </div>
             </div>
        </div>
        <!-- 3 -->
        <div class="outtitle">
            <div class="outFl">
               <img  src="../image/证书/证书5.jpg" alt="">
               <div class="year">
                   <p>2016年09月</p>
                   <h3>瑞士ITI指定临床应用基地</h3>
               </div>
            </div>
            <div class="outFr">
                <img  src="../image/证书/证书7.jpg" alt="">
                <div class="year">
                    <p>2016年10月</p>
                    <h3>登腾（上海）指定口腔定点诊疗单位</h3>
                </div>
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
 name: 'MyOutpatient',
 data () {
 return {
 }
 }
}
</script>
 
<style scoped lang = "less">
.Outpatient {
    width: 720px;
    height: 1120px;
    position: relative;
}
 /* title部分 */
.title {
  width: 700px;
  height: 58px;
  margin-left: 20px;
  border-bottom: 1px solid #626262;
  margin-bottom: 60px;
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
/* 文字内容 */
.text {
    width: 150px;
    height: 50px;
    border: 1px solid #b6b6b6;
    position: absolute;
    top: 95px;
    left: 260px;
    background-color: #fff;
}
.text h1 {
    width: 130px;
    height: 35px;
    margin: 8px auto;
    font-size: 20px;
    background-color: #871cd9;
    line-height: 35px;
    text-align: center;
    font-weight: normal;
    color: #fff;
}


/* 认证机构 */
 .out {
     width: 580px;
     height: 860px;
     margin: 0 auto;
     border-top: 1px solid #b6b6b6;
     padding: 50px 50px;
 }
 .outtitle {
     width: 100%;
     height: 280px;
     margin-bottom: 35px;
 }
 .outFl {
     width: 255px;
     height: 280px;
     float: left;
 }
 .outFl img {
    width: 255px;
    height: 190px;
    box-shadow: 4px 5px 3px 0px rgba(0,0,0,0.3);
    margin-bottom:15px;
 }
 .outFl .year {
    width: 245px;
    margin: 0 auto;
    height: 50px;
    border:1px solid #a0a0a0
 }
 .outFl .year p  {
    margin-top: 5px;
    text-align: center;
    font-size: 3px;
 }
 .outFl .year h3 {
   text-align: center;
   margin-top: 5px;
   font-size: 10px;
 }
 .outFr {
     width: 255px;
     height: 280px;
     float: right;
 }
 .outFr img {
    width: 255px;
    height: 190px;
    box-shadow: 4px 5px 3px 0px rgba(0,0,0,0.3);
    margin-bottom:15px;
 }
 .outFr .year {
    width: 245px;
    margin: 0 auto;
    height: 50px;
    border:1px solid #a0a0a0
 }
 .outFr .year p  {
    margin-top: 5px;
    text-align: center;
    font-size: 3px;
 }
 .outFr .year h3 {
   text-align: center;

   margin-top: 5px;
   font-size: 10px;
 }
 .outFr .year .shanghai {
    height: 12px;
    line-height: 12px;
    margin-top: 2px;
 }

  /* 联系区域 */
  .contact {
   width: 100%;
   height: 100px;
}
/* 联系按钮 */
 .contact div {
  width: 200px;
  height: 30px;
  background-color: #fcca30;
  border-radius: 10px;
  float: left;
  margin-left: 106px;
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