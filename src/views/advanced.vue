<template>
 <div class="advanced">
    <!-- title部分 -->
    <div class="title">
        <div class="kuai"></div>
        <h1>先进设备:</h1>
        <span>Advanced equipment</span>
    </div>

   <!-- 设备图片区域 -->
   <div class="advImg">
       <!-- 上图 -->
     <div class="advTit">

         <div class="advFl">
             <div class="equimg">
                 <!-- 上图 -->
                 <div class="equimg1">
                    <img style="width: 100%;height: 100%;" src="../image/先进设备/先进设备1.jpg" alt="">
                 </div>
                 <!-- 下文字 -->
                 <div class="equText">
                     <h1>超声波清洗机</h1>
                     <p>灭菌效果，密封性好。</p>
                 </div>
             </div>
         </div>

         <div class="advFl">
            <div class="equimg">
                <!-- 上图 -->
                <div class="equimg1">
                   <img style="width: 100%;height: 100%;" src="../image/先进设备/先进设备2.jpg" alt="">
                </div>
                <!-- 下文字 -->
                <div class="equText">
                    <h1>儿童牙科综合治疗仪</h1>
                </div>
            </div>
        </div>

         <div class="advFl">
            <div class="equimg">
                <!-- 上图 -->
                <div class="equimg1">
                   <img style="width: 100%;height: 100%;" src="../image/先进设备/先进设备3.jpg" alt="">
                </div>
                <!-- 下文字 -->
                <div class="equText">
                    <h1>X光机</h1>
                </div>
            </div>
        </div>
     </div>

     <!-- 分割线 -->
     <div class="Line"></div>
     <!-- <div style="background:linear-gradient(to left,#efefef,#b6b6b6,#efefef);height:1px;"></div> -->

     <!-- 中图 -->
     <div class="advTit">

        <div class="advFl">
            <div class="equimg">
                <!-- 上图 -->
                <div class="equimg1">
                   <img style="width: 100%;height: 100%;" src="../image/先进设备/先进设备4.jpg" alt="">
                </div>
                <!-- 下文字 -->
                <div class="equText">
                    <h1>德国希诺德</h1>
                    <h1>（SIRONA）牙椅</h1>
                </div>
            </div>
        </div>

        <div class="advFl">
           <div class="equimg">
               <!-- 上图 -->
               <div class="equimg1">
                  <img style="width: 100%;height: 100%;" src="../image/先进设备/先进设备5.jpg" alt="">
               </div>
               <!-- 下文字 -->
               <div class="equText">
                   <h1>根管测量仪</h1>
               </div>
           </div>
       </div>

        <div class="advFl">
           <div class="equimg">
               <!-- 上图 -->
               <div class="equimg1">
                  <img style="width: 100%;height: 100%;" src="../image/先进设备/先进设备6.jpg" alt="">
               </div>
               <!-- 下文字 -->
               <div class="equText">
                   <h1>瑞典诺贝尔种植机</h1>
               </div>
           </div>
       </div>
    </div>

       <!-- 分割线 -->
    <div class="Line"></div>

    <!-- 下图 -->
    <div class="advTit">

        <div class="advFl">
            <div class="equimg">
                <!-- 上图 -->
                <div class="equimg1">
                   <img style="width: 100%;height: 100%;" src="../image/先进设备/先进设备1.jpg" alt="">
                </div>
                <!-- 下文字 -->
                <div class="equText">
                    <h1>法国DHT无痛麻醉系统</h1>
                </div>
            </div>
        </div>

        <div class="advFl">
           <div class="equimg">
               <!-- 上图 -->
               <div class="equimg1">
                  <img style="width: 100%;height: 100%;" src="../image/先进设备/先进设备2.jpg" alt="">
               </div>
               <!-- 下文字 -->
               <div class="equText">
                   <h1>德国卡瓦喷砂洁牙</h1>
               </div>
           </div>
       </div>

        <div class="advFl">
           <div class="equimg">
               <!-- 上图 -->
               <div class="equimg1">
                  <img style="width: 100%;height: 100%;" src="../image/先进设备/先进设备3.jpg" alt="">
               </div>
               <!-- 下文字 -->
               <div class="equText">
                   <h1>德国KaVo口腔全景机</h1>
               </div>
           </div>
       </div>
    </div>

     <!-- 分割线 -->
    <div class="butLine"></div>
     
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


 </div>
</template>
 
<script>
export default {
 name: 'MyAdvanced',
 data () {
 return {
 }
 }
}
</script>
 
<style scoped lang = "less">
.advanced {
    width: 720px;
    height: 1120px;
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

 /* 设备图片区域 */
 .advImg {
    width: 620px;
    height: 900px;
    /* background-color: yellow; */
    padding: 0 30px;
 }
 .advImg .advTit {
    width: 620px;
    height: 240px;
    display: flex;
    margin-bottom: 40px;
    margin-top: 40px;
    
 }
 .advImg .advTit .advFl{
     flex: 1;
     /* margin: 0 10px; */
     margin-left: 15px;
 }
 .advImg .advTit .advFl .equimg1 {
      width: 180;
      height: 130px;
      border: 1px solid #a0a0a0;
 }
 .equText {
    width: 200px;
    height: 80px;
    border-bottom: 1px solid #a0a0a0;
 }
 .equText h1 {
    width: 200px;
     font-weight: normal;
     text-align: center;
     padding-top: 15px;
     font-size: 18px;
 }
 .equText p {
    width: 200px;
    padding-top: 5px;
    text-align: center;
    font-size: 15px;
 }
 /* 分割线 */
 .Line {
   width: 400px;
   margin: 0 auto;
   background:linear-gradient(to left,#efefef,#b6b6b6,#efefef);
   height:1px;
 }
 .butLine {
   width: 400px;
   margin: 0 auto;
   background:linear-gradient(to left,#efe0fa,#c78fef,#efe0fa);
   height:2px;
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
  margin-top: 35px;
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
/* .contact div a img {
    box-shadow: 4px 5px 3px 0px rgba(0,0,0,0.3);
} */

 
</style>