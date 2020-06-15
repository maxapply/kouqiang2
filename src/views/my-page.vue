<template>
 <div class="my-about">
      <!-- title标题 -->
      
            <!-- title部分 -->
            <div class="title">
              <div class="kuai"></div>
              <h1>来院地址:</h1>
              <span>Hospital route</span>
            </div>




        <!-- 地图导航 -->
          <div class="maps">
 
            <baidu-map class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
              <!--缩放-->
              <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
              <!--定位-->
              <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
              <!--点-->
              <bm-marker :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">
                  <!--提示信息-->
                  <bm-info-window :show="map.show"><br/>北京市昌平区南环中路24号(优贝口腔)</bm-info-window>
              </bm-marker>
          </baidu-map>
            </baidu-map>
          </div>

          <!-- 线路 -->
          <div class="line">
            <h1>来院路线</h1>

            <div class="gongjiao">
              <span><img style="width: 100%; height: 100%;" src="../image/icon/公交.png" alt=""></span>
              <h3>公交路线</h3>
              <p>559路公交 <span> </span>   345路公交<span> </span> 昌57路公交<span> </span> 326路公交<span> </span> 昌55路公交</p>
              <p>884路公交</p>
            </div>

            <div class="ditie">
              <span><img style="width: 100%; height: 100%;" src="../image/icon/地铁.png" alt=""></span>
              <h3>地铁路线</h3>
              <p>地铁昌平线</p>
            </div>

            <div class="zijia">
              <span><img style="width: 100%; height: 100%;" src="../image/icon/车.png" alt=""></span>
            <h3>自驾路线</h3>
            <p>昌平区鼓楼北街商业综合街101</p>
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
 </div>
</template>
 
<script>
export default {
 name: 'MyAbout',
 data () {
 return {
     map:{
        center:{lng: 116.238058 , lat: 40.21807},
        zoom: 16,
        show: true,
        dragging: true
      },
    }
 },

   methods: {
    handler ({BMap, map}) {
                let me = this;
                // console.log(BMap, map)
                // 鼠标缩放
                map.enableScrollWheelZoom(true);
                // 点击事件获取经纬度
                
                map.addEventListener('click',  (e)=>{
                    console.log(e.point.lng, e.point.lat)
                })

    

            }
      },

}
</script>
 
<style scoped lang = "less">

  /* title部分 */
.title {
  width: 700px;
  height: 58px;
  margin-left: 20px;
  margin-top: -50px;
  border-bottom: 1px solid #626262;
  margin-bottom: 50px;
  float: left;
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


/* 地图部分 */
.maps {
  width: 600px;
  height: 500px;
  margin-top: 50px;
  margin-left: 60px;
}
.maps .map {
  width: 100%;
  height: 100%;
}






/* 线路部分 */
.line {
  width: 600px;
  height: 475px;
  background-color: #fff;
  margin-left: 60px;
  padding-top: 95px;

}
.line h1 {
  /* display: block; */
  font-weight: normal;
}
.line .gongjiao {
   width: 500px;
   height: 80px;
   margin-top: 30px;
   margin-left: 40px;
   position: relative;
}
.gongjiao span {
  width: 45px;
  height: 35px;
  position: absolute;
  left: -47px;
  top: -7px;
}


.line .gongjiao h3 {
  margin-bottom: 15px;
}
.line .gongjiao p {
  height: 30px;
  line-height: 30px;
  display: block;
}
.line .gongjiao p span {
  /* display: block; */
  margin: 0 5px;
}

.line .ditie {
  width: 500px;
   height: 80px;
   margin-top: 50px;
   margin-left: 40px;
   position: relative;
}
.line .ditie span {
  width: 45px;
  height: 35px;
  position: absolute;
  left: -47px;
  top: -7px;
}

.line .ditie h3 {
  margin-bottom: 15px;
}
.line .ditie p {
  height: 30px;
  line-height: 30px;
  display: block;
}
.line .zijia {
  width: 500px;
   height: 80px;
   margin-top: 30px;
   margin-left: 40px;
   position: relative;
}
.line .zijia span {
  width: 45px;
  height: 35px;
  position: absolute;
  left: -47px;
  top: -7px;
}
.line .zijia h3 {
  margin-bottom: 15px;
}
.line .zijia p {
  height: 30px;
  line-height: 30px;
  display: block;
}

.line .contact {
   width: 100%;
   height: 100px;
}
/* 联系按钮 */
.line .contact div {
  width: 200px;
  height: 30px;
  background-color: #fcca30;
  border-radius: 10px;
  float: left;
  margin-left: 80px;
  margin-top: 55px;
}
.line .contact div a {
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