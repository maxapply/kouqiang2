/* eslint-disable no-undef */
<template>
  <div class="home">
    <!-- 头部 -->
    <section class="shortcut">
      <div class="w">
        <div class="fl">
          <i class="el-icon-location-information my-icon" ></i>
          <span>北京市昌平区南环中路24号（昌平区人民法院斜对面往东100米）</span>
        </div>

        <div class="weixin">
          <i class="el-icon-chat-dot-round my-chat"></i>
          <span>微信号: rxys99</span>
        </div>
      </div>
    </section>

    <!-- logo部分 -->
    <header class="header w">
      <div class="logo" @click="toPage">
        <h1><a href="javascript:;" title="优贝口腔">优贝口腔</a></h1>
      </div>
      <div class="fr">
         <img src="../image/images/img/photo.png" alt="">
          <ul>
            <li><span>24小时服务热线</span></li>
            <li><strong>010-8888888</strong></li>
          </ul>
      </div>

    </header>

    <!-- 轮播图1 -->
    <div class="swiper ">
       <div class="block">
        <el-carousel height="380px">
          <el-carousel-item  v-for="(item, index) in abc_img" :key="index">

            <img style="width: 100%; height: 100%;" :src="item.src" alt="">

          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <!-- 导航部分 -->
    <div class="nav">
      <div class="w">

        <el-menu  active-text-color="#fff" background-color="#9234d8" text-color="#fff" class="el-menu-demo my-demo" mode="horizontal" @select="handleSelect">
        <el-submenu index="1">
          <template slot="title" class="my-title" style="font-size: 15px;"><div class="my-home">首页</div></template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="2" class="my-title" style="font-size: 20px;"><div>主治项目</div></el-menu-item>
        <el-menu-item index="3" class="my-title" style="font-size: 20px;"><div>医生团队</div></el-menu-item>
        <el-menu-item index="4" class="my-title" style="font-size: 20px;"><div>关于我们</div></el-menu-item>
        <el-menu-item index="5" class="my-title" style="font-size: 20px;"><div>先进设备</div></el-menu-item>
        <el-menu-item index="6" class="my-title" style="font-size: 20px;"><div>门诊资质</div></el-menu-item>
        <el-menu-item index="7" class="my-title" style="font-size: 20px;"><div>口腔课堂</div></el-menu-item>

        </el-menu>
      </div>
    </div>

    <!-- 项目部分 -->
    <div class="w">
      <div class="project">
        <div class="kuai"></div>
        <div class="demo"><h1>主治项目</h1></div><div class="Project"><span>Project governance</span></div>
      </div>

      <div class="my-type">
        <el-tabs type="border-card" stretch>
        <el-tab-pane >
            <span slot="label" style="font-size: 18px;" ><i class="el-icon-suitcase"></i>种植类</span>
          <div class="he">
              <!-- 盒子1 -->
              <div class="centent">
                  <div class="img">
                    <img style="width: 100%; height: 100%;" src="../image/种植类/种植类1.jpg" >
                    <a href="#" title="牙齿种植">牙齿种植</a>
                  </div>
                  <div class="imgBut">
                    <h1>瑞典Nobel种植体</h1>
           
                      <div class="my-text">
                        <p class="plantYi">瑞典Nobel种植体系统是经典的种植系统，其极高的成功率及一整套标准、系统的外科植入技术及修复设计制作方案作为口腔种植的标准操作规范。</p>
                        <p class="planEr">优势</p>
                        <p class="planSan">运用诺贝尔电脑速导种值牙技术可以让顾客花最少的钱获得最佳的治疗效果。患者不仅可以避免漫长而痛苦的等待期，而且大大减少了复诊的吃次数。</p>
                      </div>

                      <div class="btnService">
                        <a href="javascript:;" title="点击咨询">点击咨询</a>
                      </div>

                  </div>
              </div>
            <!-- 盒子2 -->
              <div class="centent">
                  <div class="img">
                    <img style="width: 100%; height: 100%;" src="../image/种植类/种植类2.jpg" >
                    <a href="#" title="牙齿种植">牙齿种植</a>
                  </div>
                  <div class="imgBut">
                    <h1>韩国Dentis种植牙</h1>
          
                      <div class="my-text">
                        <p class="plantYi">瑞士种植系统可以说是非埋植型两段式种植体系统的代表,期手术后暴露于口腔在非盖状态下胞合勿需二期手术,在骨整合完成后就可以直接接上基台完成牙齿的修复。</p>
                        <p class="planEr">优势</p>
                        <p class="planSan">在完美齿设计方案后，医生就可以约患者来接受手术，从开始准备到完全成功植入，患者只需进行一次无切口、不翻瓣、无缝合的微创手术治疗，就能拥有一个美观漂亮的固定义齿，而且治疗过程中患者无不适感，不影响患者日常生活和工作。</p>
                      </div>

                      <div class="btnService">
                        <a href="javascript:;" title="点击咨询">点击咨询</a>
                      </div>

                  </div>
              </div>
            <!-- 盒子3 -->
              <div class="centent">
                  <div class="img">
                    <img style="width: 100%; height: 100%;" src="../image/种植类/种植类3.jpg" >
                    <a href="#" title="牙齿种植">牙齿种植</a>
                  </div>
                  <div class="imgBut">
                    <h1>瑞士ITI系统</h1>
                
                      <div class="my-text">
                        <p class="plantYi">瑞典Nobel种植体系统是经典的种植系统，其极高的成功率及一整套标准、系统的外科植入技术及修复设计制作方案作为口腔种植的标准操作规范。</p>
                        <p class="planEr">优势</p>
                        <p class="planp">瑞士种植体的适应症</p>
                        <p class="planp">1、全口或半口缺牙。</p>
                        <p class="planp">2、缺牙的后方没有真牙。比时无论采用何种方法均不理想,而I种植牙会有最佳效果。</p>
                        <p class="planp">3、前牙脱落。如做活动假牙修复,需使用卡环或基托,影响美观和发音。种植牙可以较好地避免这些不足。</p>
          
                      </div>

                      <div class="btnService">
                        <a href="javascript:;" title="点击咨询">点击咨询</a>
                      </div>

                  </div>
              </div>
          </div>

        </el-tab-pane>
        <el-tab-pane >
          <span slot="label" style="font-size: 18px;"><i class="el-icon-suitcase"></i> 正畸类</span>

             <div class="he">
                <!-- 盒子1 -->
                <div class="centent">
                    <div class="img">
                      <img src="../image/images/img/PC端_05.jpg">
                      <a href="#" title="牙齿种植">牙齿种植</a>
                    </div>
                    <div class="imgBut">
                      <h1>牙齿种植</h1>
                      <span>Dental cul</span>
                        <div class="my-text">
                            <p class="yi">韩国Deetis种植牙、瑞士ITI系统、德国Bego系统、瑞典Nobel种植体。</p>
                          <p class="er">优势：立拔立种，稳定固位，形态自然，安全优势、美观，适应症广</p>
                        </div>

                        <div class="btn">
                          <a href="javascript:;" title="点击咨询">点击咨询</a>
                        </div>

                    </div>
                </div>
                <!-- 盒子2 -->
                  <div class="centent">
                      <div class="img">
                        <img src="../image/images/img/PC端_07.jpg">
                        <a href="#" title="牙齿种植">牙齿种植</a>
                      </div>
                      <div class="imgBut">
                        <h1>牙齿矫正</h1>
                        <span>Orthodontic teeth</span>
                          <div class="my-text">
                            <p class="yi">时代天使、隐适美、德国牙齿正畸技术，全隐形矫正，陶瓷自锁托槽矫正、钢丝矫正</p>
                            <p class="er">优势：舒适服帖，无异物感，自行摘戴，快速矫正时间短。</p>
                          </div>

                          <div class="btn">
                            <a href="javascript:;" title="点击咨询">点击咨询</a>
                          </div>

                      </div>
                  </div>
                <!-- 盒子3 -->
                <div class="centent">
                      <div class="img">
                        <img src="../image/images/img/PC端_09.jpg">
                        <a href="#" title="牙齿种植">牙齿种植</a>
                      </div>
                      <div class="imgBut">
                        <h1>拔牙</h1>
                        <span>tooth extraction</span>
                          <div class="my-text">
                            <p class="yi">引进德国微创拔除牙齿技术，拔除残留乳牙、牙根牙冠、错位牙、坏牙、松动牙、智齿。</p>
                            <p class="er">优势：无痛拔牙、安全放心、出血少安全性高、拔牙后恢复快。</p>
                          </div>

                          <div class="btn">
                            <a href="javascript:;" title="点击咨询">点击咨询</a>
                          </div>

                      </div>
                </div>
             </div>

        </el-tab-pane>
        <el-tab-pane >
           <span slot="label" style="font-size: 18px;"><i class="el-icon-suitcase"></i> 美学修复类</span>

              <div class="he">
                <!-- 盒子1 -->
                <div class="centent">
                    <div class="img">
                      <a href="#" title="牙齿种植">牙齿种植</a>
                    </div>
                    <div class="imgBut">
                      <h1>牙齿种植</h1>
                      <span>Dental cul</span>
                        <div class="my-text">
                            <p class="yi">韩国韩国韩国韩国韩国韩国国韩国韩国韩国韩国韩国韩国韩国韩国</p>
                          <p class="er">优势优势优势势优势优势优势优势优势优势优势优势优势</p>
                        </div>

                        <div class="btn">
                          <a href="javascript:;" title="点击咨询">点击咨询</a>
                        </div>

                    </div>
                </div>
                <!-- 盒子2 -->
                  <div class="centent">
                      <div class="img">
                        <a href="#" title="牙齿种植">牙齿种植</a>
                      </div>
                      <div class="imgBut">
                        <h1>牙齿种植</h1>
                        <span>Dental cul</span>
                          <div class="my-text">
                            <p class="yi">韩国韩国韩国韩国韩国韩国国韩国韩国韩国韩国韩国韩国韩国韩国</p>
                            <p class="er">优势优势优势势优势优势优势优势优势优势优势优势优势</p>
                          </div>

                          <div class="btn">
                            <a href="javascript:;" title="点击咨询">点击咨询</a>
                          </div>

                      </div>
                  </div>
                <!-- 盒子3 -->
                <div class="centent">
                      <div class="img">
                        <a href="#" title="牙齿种植">牙齿种植</a>
                      </div>
                      <div class="imgBut">
                        <h1>牙齿种植</h1>
                        <span>Dental cul</span>
                          <div class="my-text">
                            <p class="yi">韩国韩国韩国韩国韩国韩国国韩国韩国韩国韩国韩国韩国韩国韩国</p>
                            <p class="er">优势优势优势势优势优势优势优势优势优势优势优势优势</p>
                          </div>

                          <div class="btn">
                            <a href="javascript:;" title="点击咨询">点击咨询</a>
                          </div>

                      </div>
                </div>
             </div>

        </el-tab-pane>
      </el-tabs>

      </div>
    </div>

    <!-- 轮播图2 -->
   <div class="swpier2">
     <div class="w">
      <img style="width: 100%;height: 100%;margin-top: 30px;" src="../image/images/img/PC端1_03.jpg" alt="">
     </div>
   </div>

    <!-- 问题部分 -->
   <div class="w">
     <div class="problem">
       <div class="btnFl">
         <p>常 腔</p>
         <p>见 问</p>
         <p>口 题</p>
       </div>
       <div class="btnList">
         <ul class="smallbtn">
           <li>单颗多颗缺牙</li>
           <li class="liBgc">牙齿拥挤稀疏</li>
           <li>后牙反颌</li>
         </ul>
          <ul class="minbtn">
             <li class="liBgc">牙齿暗黄</li>
             <li>种牙方案</li>
             <li class="liBgc2">牙列不齐</li>
             <li class="liBgc2">牙列稀疏</li>
             <li class="liBgc2">龅牙</li>
             <li class="liBgc">牙结石多</li>
             <li class="liBgc2">牙洞</li>
             <li class="liBgc2">牙体缺失</li>
             <li >牙龈出血</li>
             <li class="liBgc">氟斑牙</li>
             <li>牙斑牙渍</li>
             <li class="liBgc">黄黑牙</li>
             <li class="liBgc">溃疡</li>
             <li>牙洞</li>
             <li class="liBgc2">烂牙</li>
             <li>氟斑牙</li>
             <li class="liBgc">后牙反颌</li>
             <li >牙周炎</li>
             <li class="liBgc2">地包天</li>
             <li>牙齿敏感</li>
             <li>牙斑牙渍</li>
             <li class="liBgc">茶渍牙</li>
             <li class="liBgc2">烟渍牙</li>
             <li class="liBgc">口腔异味</li>
           </ul>
       </div>

     </div>
   </div>

   <!-- 门诊部分 -->
   <div class="w">
      <div class="odp">
        <div class="project">
          <div class="kuai"></div>
          <div class="demo"><h1>门诊资质</h1></div><div class="Project"><span>Oupatient qualification</span></div>
        </div>
        <div class="proFr">
          <div class="kuai"></div>
          <div class="demo"><h1>口腔课堂</h1></div><div class="Project"><span>Oral Classroom</span></div>
        </div>
        <div class="text">
          <div class="img">
             <div class="block">
              <el-carousel height="280px">
                <el-carousel-item v-for="(item,index) in men_img" :key="index">
                  <img style="width: 100%;" :src="item.src" alt="">
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="textCentent">
            <h1>认证机构</h1>
            <div class="tableList">
              <p>植为一体的精致口腔专科门现有门诊内主格的</p>
              <p>美国AE牙科技术认证专科门现有门诊内主格的专</p>
              <p>美国AE牙科技术认证专科门现有门诊内主格的专</p>
              <p>美国专科门现有门诊内主格的专技术认证</p>
              <p>美国专科门现有门诊内主格的专技术认证</p>
              <p>美国AE牙科技术认证专科门现有门诊内主格的专</p>
            </div>
          </div>
        </div>
        <div class="classroom">
          <div class="roomSwiper">
            <div class="block">
              <el-carousel height="150px">
                <el-carousel-item v-for="(item,index) in room_img" :key="index">
                  <img style="width: 100%; height: 100%;" :src="item.src" alt="">
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="roomList">
            <p><a href="javascript:;">1、优贝口腔携手昌平社区网爱牙公益行活动---------------------------------2018/03/20</a></p>
            <p><a href="javascript:;">2、优贝口腔一院长、主任证书授权会------------------------------------------2019/03/10</a></p>
            <p><a href="javascript:;">3、优贝口腔携手xxx幼儿园举办小牙医活动------------------------------------2019/03/10</a></p>
            <p><a href="javascript:;">4、优贝口腔携手xxx幼儿园举办小牙医活动------------------------------------2019/03/10</a></p>
            <p><a href="javascript:;">5、优贝口腔为御龙湾小区提供免费义诊活动---------------------------------2019/03/10</a></p>
          </div>
        </div>

      </div>
   </div>

   <!-- 团队部分 -->
    <div class="w">
     <div class="team">
        <div class="project">
        <div class="kuai"></div>
        <div class="demo"><h1>医生团队</h1></div><div class="Project"><span>A team of doctors</span></div>
      </div>

     <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img style="width: 100%; height: 100%;" src="../image/images//img/PC端_15.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img style="width: 100%; height: 100%;" src="../image/images//img/PC端_17.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img style="width: 100%; height: 100%;" src="../image/images//img/PC端_19.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img style="width: 100%; height: 100%;" src="../image/images//img/PC端1_07.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img style="width: 100%; height: 100%;" src="../image/images//img/PC端11.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img style="width: 100%; height: 100%;" src="../image/images//img/PC端12.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img style="width: 100%; height: 100%;" src="../image/images//img/PC端13.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img style="width: 100%; height: 100%;" src="../image/images//img/PC端14.jpg" alt="">
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>

    </div>
    </div>

    <!-- 我们部分 -->
    <div class="w">
      <div class="we">

        <div class="project">
          <div class="kuai"></div>
          <div class="demo"><h1>关于我们</h1></div><div class="Project"><span>About us</span></div>
        </div>

        <div class="weSiper">
            <div class="block">
            <el-carousel height="500px">
              <el-carousel-item v-for="(item,index) in we_img" :key="index">
                <img style="width: 100%; height: 100%;" :src="item.src" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>

        <div class="introduce">
           <h1>医院介绍</h1>
           <p>Hospital Profile</p>
           <article>优贝口腔，是经过卫生主管部门批准的一家以高标准服务为起点，集口腔内科、口腔外科、口腔修复、口腔正畸、口腔种植为一体的精致口腔专科门诊；
             现有门诊内主要医疗器械有；牙床椅、内腔内窥镜、真空消毒 锅、根管测试仪.口腔种植机，机扩、韩国BL热牙胶仪器等； 跟随博士导师学习种植专业......</article>
           <div ><a href="javascript:;" title="点击查看全文">查看全文</a></div>
        </div>

         <div class="intSwiper">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img style="width: 100%;height: 100%;" src="../image/images/img/PC端_28.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img style="width: 100%;height: 100%;" src="../image/images/img/PC端_30.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img style="width: 100%;height: 100%;" src="../image/images/img/PC端_32.jpg" alt="">
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
           </div>

      </div>

    </div>

    <!-- 设备部分 -->
    <div class="w">
      <div class="equipment">

        <div class="project">
          <div class="kuai"></div>
          <div class="demo"><h1>先进设备</h1></div><div class="Project"><span>Advanced equipment</span></div>
        </div>

        <div class="text">
          <article>
            优贝口腔，是经过卫生主管部门批准的一家以高标准服务为起点，集口腔内科、口腔外科、口腔修复、口腔正畸、口腔种植为一体的精致口腔专科门诊；
            现有门诊内主要医疗器械有；牙床椅、内腔内窥镜、真空消毒 锅、根管测试仪.口腔种植机，机扩、韩国BL热牙胶仪器等等；
          </article>
        </div>

        <div class="equSwiper">

            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img style="width: 100%;height: 100%;" src="../image/images/img/PC端_39.jpg" alt="">
                </div>
                <div class="swiper-slide">
                  <img style="width: 100%;height: 100%;" src="../image/images/img/PC端_41.jpg" alt="">
                </div>
                <div class="swiper-slide">
                  <img style="width: 100%;height: 100%;" src="../image/images/img/PC端_43.jpg" alt="">
                </div>
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination"></div>
              <!-- Add Arrows -->
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>

        </div>

      </div>
    </div>

    <!-- 尾部 -->
    <footer class="footer">
      <div class="w">
         <!-- 中部 -->
        <div class="centent">
        </div>

         <!-- 头部 -->
        <div class="footerTitle">
          <div class="logo">
            <h1><a href="javascript:;" title="优贝口腔">优贝口腔</a></h1>
          </div>
          <div class="border"></div>

          <div class="footFr">
            <!-- <p>合作伙伴</p> -->
            <img  src="../image/images/img/PC端_59.jpg" alt="">
          </div>

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
    </footer>

    <!-- 底部栏 -->
    <div class="fixFooter">
      <div class="w">

        <div class="fixList">
          <i class="el-icon-phone-outline my-out"></i>
          全国咨询热线
          <br>
          <span>010-80111909</span>
        </div>

        <div class="rdxm">
          <i class="el-icon-date "></i>
          <a href="javascript:;" title="热点项目">热点项目</a>
        </div>

        <div class="zxgh">
          <i class="el-icon-document"></i>
          <a href="javascript:;" title="在线预约">在线预约</a>
        </div>

        <div class="th">
          <i class="el-icon-document"></i>
          <a href="javascript:;" title="当月特惠活动">当月特惠活动</a>
        </div>

        <div class="luxian">
          <i class="el-icon-location-information"></i>
          <a href="javascript:;" title="来院路线">来院路线</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Swiper from 'swiper'
// import slides from 'slides'
export default {
  name: 'Home',
  data () {
    return {
      abc_img: [
        { src: require('../image/images/img/PC端_02.jpg') },
        { src: require('../image/images/img/PC端_02.jpg') },
        { src: require('../image/images/img/PC端_02.jpg') }
      ],
      men_img: [
        { src: require('../image/证书/证书1.jpg') },
        { src: require('../image/证书/证书2.jpg') },
        { src: require('../image/证书/证书3.jpg') },
        { src: require('../image/证书/证书4.jpg') },
        { src: require('../image/证书/证书5.jpg') },
        { src: require('../image/证书/证书7.jpg') }

      ],
      room_img: [
        { src: require('../image/images/img/PC端_49.jpg') },
        { src: require('../image/images/img/PC端_49.jpg') },
        { src: require('../image/images/img/PC端_49.jpg') }
      ],
      we_img: [
        { src: require('../image/images/img/PC端_25.jpg') },
        { src: require('../image/images/img/PC端_25.jpg') },
        { src: require('../image/images/img/PC端_25.jpg') }
      ],
      swiperOptionTop: {
        autoplay: true,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }

    }
  },
  methods: {
    toPage () {
      this.$router.push('/page')
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    initSwiper () {
      var swiper = new Swiper('.swiper-container', {
        observer: true,
        loop: true,
        speed: 200,
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        watchSlidesProgress: true,
        autoplay: {
          delay: 2500, // 轮播时间
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          setTranslate: function () {
            // eslint-disable-next-line no-undef

            var slides = this.slides
            // eslint-disable-next-line no-undef
            for (var i = 0; i < slides.length; i++) {
              // eslint-disable-next-line no-undef
              var slide = slides.eq(i)
              // eslint-disable-next-line no-undef
              var progress = slides[i].progress

              slide.css({ opacity: '', background: '' }); slide.transform('')// 清除样式

              var effect
              if (effect === 1) {
                slide.transform('scale(' + (1 - Math.abs(progress) / 8) + ')')
              } else if (effect === 2) {
                slide.css('opacity', (1 - Math.abs(progress) / 6))
					      slide.transform('translate3d(0,' + Math.abs(progress) * 20 + 'px, 0)')
              } else if (effect === 3) {
					     slide.transform('rotate(' + progress * 30 + 'deg)')
              } else if (effect === 4) {
                slide.css('background', 'rgba(' + (255 - Math.abs(progress) * 20) + ',' + (127 + progress * 32) + ',' + Math.abs(progress) * 64 + ')')
              }
            }
          },
          setTransition: function (transition) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i)
              slide.transition(transition)
            }
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })

      document.getElementById('progressEffect')
    }
  },
  mounted () {
    this.initSwiper()
  }

}

</script>
  <style>
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      height: auto;
      padding:90px 0;
      margin-left: auto;
      margin-right: auto;

    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      height: 200px;
      width: 500px;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      transition-property:all;
    }
    .swiper-slide:hover{
      background: rgba(0,0,0,0.3);
    }
      #progressEffect{
      position: absolute;
      z-index: 10;
      top: 20px;
      left: 20px;
  }

  </style>
