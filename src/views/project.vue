<template>
 <div class="app-project">
       <!-- title部分 -->
    <div class="title">
        <div class="kuai"></div>
        <h1>主治项目:</h1>
        <span>Project governance</span>
    </div>
    <!-- 主治项目 -->
    <div class="project">
           <!-- 1 -->
           <div class="pro">
                <!-- 左 -->
                <div class="proFl">
                <img  src="../image/主治项目类/主治项目类3.jpg" alt="">
                <div class="details">
                    <h3>牙齿种植</h3>
                    <h6>Dental cultivation</h6>
                    <p>韩国Dentis种植牙、瑞士ITI系统、德国Bego</p>
                    <p>系统、瑞典Nobel种植体。</p>
                    <div class="p">
                        <p >优势：立拔立种，稳定固位，形态自然，安全</p>
                        <p >舒适、美观，适应症广。</p>
                    </div>
                    <div class="btn">
                        <a href="javascript:;" title="点击咨询"> 点击咨询</a>
                    </div>
                </div>
                </div>
                <!-- 右 -->
                <div class="proFr">
                <img  src="../image/主治项目类/主治项目类2.jpg" alt="">
                <div class="details">
                   <h3>牙齿正畸</h3>
                   <h6>Orthodontic teeth</h6>
                   <p>时代天使、隐适美、德国牙齿正畸技术，全隐</p>
                   <p>形矫正、陶瓷自锁托槽矫正、钢丝矫正。</p>
                   <div class="p">
                     <p >优势：舒适服帖，无异物感，自行摘戴，快速</p>
                     <p >矫正时间短。</p>
                   </div>
                   <div class="btn">
                       <a href="javascript:;" title="点击咨询"> 点击咨询</a>
                   </div>
                </div>
            </div>

           </div>

           <!-- 2 -->
           <div class="pro">
            <!-- 左 -->
            <div class="proFl">
            <img  src="../image/主治项目类/主治项目类1.jpg" alt="">
            <div class="details">
                <h3>拔牙</h3>
                <h6>tooth extraction</h6>
                <p>引进德国微创拔除牙齿技术，拔除残留乳牙、</p>
                <p>牙根牙冠、错位牙、坏牙、松动牙、智牙。</p>
                <div class="p">
                    <p >优势：无痛拔牙、安全放心、出血少安全性</p>
                    <p >高、拔牙后恢复快。</p>
                </div>
                <div class="btn">
                    <a href="javascript:;" title="点击咨询"> 点击咨询</a>
                </div>
            </div>
            </div>
            <!-- 右 -->
            <div class="proFr">
            <img  src="../image/主治项目类/主治项目类4.jpg" alt="">
            <div class="details">
               <h3>洗牙</h3>
               <h6>Toothwash</h6>
               <p>超声波洁牙，无痛洁牙，抛光上药。</p>
               <div class="p">
                 <p >优势：无痛零压力洁牙，30分钟全程细致体验，</p>
                 <p >洁后抛光。安全舒心。</p>
               </div>
               <div class="btn">
                   <a href="javascript:;" title="点击咨询"> 点击咨询</a>
               </div>
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
  name: 'MyProject',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang = "less">
.app-project {
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
/* 主治项目 */
.project {
    width: 100%;
    height: 1020px;
    padding: 30px 30px;
}
.project .pro {
   width: 100%;
   height: 450px;
   margin-bottom: 55px;
}
/* 左 */
.project .pro .proFl {
    width: 310px;
    float: left;
}
.project .pro .proFl img {
    width: 300px;
    height: 200px;
    box-shadow: 0px 2px 5px 5px rgba(0,0,0,0.3);
}
.project .pro .proFl .details {
   width: 300px;
   height: 250px;
   box-shadow: 0px 2px 5px 5px rgba(0,0,0,0.3);
}
.project .pro .proFl .details h3 {
    margin-left: 10px;
    height: 48px;
    line-height: 60px;
}
.project .pro .proFl .details h6 {
    margin-left: 10px;
    font-weight: normal;
    color: #b4b4b4;
    margin-bottom: 25px;
}
.project .pro .proFl .details p {
    margin-left: 10px;
}
.project .pro .proFl .details .p {
    color: #999999;
    margin-top: 20px;
}
.project .pro .proFl .details .btn {
     width: 100px;
     height: 30px;
     background-color: #871cd9;
     margin-top: 20px;
     margin-left: 20px;
}
.project .pro .proFl .details .btn a {

    width: 100px;
    height: 30px;
    line-height: 30px;
    text-decoration: none;
    color: #fff;
    display: block;
    text-align: center;
    font-size: 12px;
}
/* 右 */
.project .pro .proFr {
    width: 300px;
    float: right
}
.project .pro .proFr img {
    width: 300px;
    height: 200px;
   box-shadow: 0px 2px 5px 5px rgba(0,0,0,0.3);
}
.project .pro .proFr .details {
   width: 300px;
   height: 250px;
  box-shadow: 0px 2px 5px 5px rgba(0,0,0,0.3);
}
.project .pro .proFr .details h3 {
    margin-left: 10px;
    height: 48px;
    line-height: 60px;
}
.project .pro .proFr .details h6 {
    margin-left: 10px;
    font-weight: normal;
    color: #b4b4b4;
    margin-bottom: 25px;
}
.project .pro .proFr .details p {
    margin-left: 10px;
}
.project .pro .proFr .details .p {
    color: #999999;
    margin-top: 20px;
}
.project .pro .proFr .details .btn {
     width: 100px;
     height: 30px;
     background-color: #871cd9;
     margin-top: 20px;
     margin-left: 20px;
}
.project .pro .proFr .details .btn a {

    width: 100px;
    height: 30px;
    line-height: 30px;
    text-decoration: none;
    color: #fff;
    display: block;
    text-align: center;
    font-size: 12px;
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
