<template>
 <div class="team">
    <!-- title部分 -->
    <div class="title">
        <div class="kuai"></div>
        <h1>医生团队:</h1>
        <span>A team of doctors</span>
    </div>

    <!-- 医生详情 -->
    <div class="Ateam">
        <ul>
            <!-- 1 -->
            <li>
               <div class="he">
                <div class="AteamFl">
                    <img style="width: 100%; height: 100%;" src="../image/医生/1 (2).jpg" alt="">
                </div>
                <div class="AteamFr">
                     <h2>刘洋</h2>
                     <p>LIUYANG</p>
                     <span></span>
                     <h5>口腔国际医师</h5>
                     <h5>北京大学口腔医学院医生硕士</h5>
                     <h5>优贝口腔医学院第三门诊部主任</h5>
                     <h5>中华口腔医学会修复专委会委员</h5>
                     <h4>擅长:</h4>
                     <h6>显微疑难根管治疗，CEREC椅旁即刻修复，前牙美学设计与</h6>
                     <h6>修复，在美学失败病例再修复、种植修复等。</h6>
                </div>
               </div>
            </li>
            <!-- 2 -->
            <li>
              <div class="he">
                <div class="AteamFl">
                    <img style="width: 100%; height: 100%;" src="../image/医生/2 (2).jpg" alt="">
                </div>
                <div class="AteamFr">
                     <h2>张洪波</h2>
                     <p>ZHANGHONGBO</p>
                     <span></span>
                     <h5>金知名口腔正畸专家</h5>
                     <h5>优贝口腔总监级正畸专家</h5>
                     <h5>美国INVISLIGN隐形矫正认证专业医师</h5>
                     <h5>中华口腔医学会口腔正畸专委会委员</h5>
                     <h4>擅长:</h4>
                     <h6>MBT矫正技术、自锁矫正技术、隐形矫正技术、MBT矫正技术</h6>
                     <h6>自锁矫正技术、INVISLIGN隐形矫正技术。</h6>
                </div>
              </div>
            </li>
            <!-- 3 -->
            <li>
                <div class="he">
                  <div class="AteamFl">
                      <img style="width: 100%; height: 100%;" src="../image/医生/3.jpg" alt="">
                  </div>
                  <div class="AteamFr">
                       <h2>张鹏</h2>
                       <p>ZHANGPENG</p>
                       <span></span>
                       <h5>金牌首席儿童口腔学专家</h5>
                       <h5>优贝特邀口腔专家</h5>
                       <h5>北京儿童医院口腔科专家</h5>
                       <h5>国际口腔正畸学会会员</h5>
                       <h4>擅长:</h4>
                       <h6>儿童口腔正畸序列治疗、儿童口腔早期肌功能训练治疗、</h6>
                       <h6>儿童埋伏牙、阻生牙的导萌牵引等。</h6>
                  </div>
                </div>
              </li>
            <!-- 4 -->
            <li>
                <div class="he">
                  <div class="AteamFl">
                      <img style="width: 100%; height: 100%;" src="../image/医生/4 (2).jpg" alt="">
                  </div>
                  <div class="AteamFr">
                       <h2>罗旭</h2>
                       <p>LUOXU</p>
                       <span></span>
                       <h5>口腔预防科科主任</h5>
                       <h5>综合预防科科主任，主治医师</h5>
                       <h5>北京大学口腔医学院口腔专业修复学硕士学位</h5>
                       <h5>综合预防科第二门诊部科主任</h5>
                       <h4>擅长:</h4>
                       <h6>前牙美容修复，牙齿漂白及氟斑牙脱色</h6>
                  </div>
                </div>
              </li>
        </ul>

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
 name: 'MyTeam',
 data () {
 return {
 }
 }
}
</script>
 
<style scoped lang = "less">
.team {
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

/* 医生详情 */
.Ateam {
    width: 600px;
    margin: 0 auto;
}
.Ateam ul li {
    list-style: none;
    display: block;
}
.Ateam ul li .he {
    width: 600px;
    height: 190px;
    margin-bottom: 45px;
}
.Ateam ul li .AteamFl {
    width: 180px;
    height: 190px;
    border: 1px solid #a0a0a0;
    float: left;
}
.Ateam ul li .AteamFr {
    width:378px ;
    height: 192px;
    float: left;
    padding-left: 40px;
}
.Ateam ul li .AteamFr h2 {
    font-weight:normal
}
.Ateam ul li .AteamFr span {
    display: block;
    width: 15px;
    height: 5px;
    background-color: #871cd9;
    margin-top: 3px;
    margin-bottom: 3px;
}
.Ateam ul li .AteamFr h5 {
    font-weight:normal;
    color: #4e4e4e;
}
.Ateam ul li .AteamFr h4 {
    color: #434343;
    margin-top: 10px;
    font-size: 16px;
    margin-bottom: 5px;
}
.Ateam ul li .AteamFr h6 {
    font-size: 12px;
    font-weight:normal;
    color: #545454;
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



 
</style>