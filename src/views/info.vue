<template>
 <div class="info">
    <!-- title部分 -->
    <div class="title">
        <div class="kuai"></div>
        <h1>相关资讯:</h1>
        <span>Related information</span>
    </div>
     <!-- 中心部分 -->
    <div class="infoCon">
        <!-- 轮播图部分 -->
        <div class="infoSwiper">
            <div class="block">
                <el-carousel height="270px">
                  <el-carousel-item v-for="(item,index) in abc_img" :key="index">
                    <img style="width: 100%; height: 100%;" :src="item.src" alt="">
                  </el-carousel-item>
                </el-carousel>
              </div>

        </div>
        <!-- 义诊活动 -->
        <div class="activity">
            <p><a href="javascript:;" @click="click(item.id)"  v-for="(item,index) in allList" :key="index"> {{item.cur}}</a></p>

            <p class="p">...</p>
        </div>
        <!-- 活动图片 -->
        <div class="infoImg">
            <img  style="width: 100%; height: 100%;" src="../image/优贝课堂/优贝课堂2.jpg" alt="">
        </div>
        <!-- 分页 -->
       <div class="pag">
            <span class="span"  @click="remList"><a href="javascript:;" title="首页">首页</a></span>
            <span class="pages" @click="remList"><a href="javascript:;" title="上一页">上一页</a></span>
            <span class="pages" @click="addList" ><a href="javascript:;" title="下一页">下一页</a></span>
            <span class="span"  @click="addList" ><a href="javascript:;" title="尾页">尾页</a></span>
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
 name: 'MyInfo',
 data () {
 return {
    abc_img: [
        { src: require('../image/优贝课堂/优贝课堂1.jpg') },
        { src: require('../image/优贝课堂/优贝课堂1.jpg') },
        { src: require('../image/优贝课堂/优贝课堂1.jpg') },
      ],
      cur: 1, // 当前页码
      all: 10, // 总页码
      totalPage:0, //当前条数
      allList: [
        {
          id:'1',
          cur: '1.优贝口腔携手昌平社区网爱牙公益行活动...................................................2018/03/20'
        },
        {
          id:'2',
          cur: '2.优贝口腔一院长、主任证书授权会.............................................................2018/03/20'
        },
        {
          id:'3',
          cur: '3.优贝口腔携手XXX幼儿园举办小牙医活动...................................................2018/03/20'
        },
        {
          id:'4',
          cur: '4.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'5',
          cur: '5.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'6',
          cur: '6.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'7',
          cur: '7.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'8',
          cur: '8.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'9',
          cur: '9.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'10',
          cur: '10.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'11',
          cur: '11.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'12',
          cur: '12.优贝口腔一院长、主任证书授权会...........................................................2018/03/20'
        },
        {
          id:'13',
          cur: '13.优贝口腔为御龙湾小区提供免费义诊活动................................................2018/03/20'
        },
        {
          id:'14',
          cur: '14.优贝口腔为御龙湾小区提供免费义诊活动................................................2018/03/20'
        },
      ]
    }
  },
  methods: {
    addList:function() {
      if(this.allList.length===14){
        this.allList.splice(0,15)
      }
      this.allList.push(
        {
          id:'15',
          cur: '15.优贝口腔携手昌平社区网爱牙公益行活动...................................................2018/03/20'
        },
        {
          id:'16',
          cur: '16.优贝口腔一院长、主任证书授权会.............................................................2018/03/20'
        },{
          id:'17',
          cur: '17.优贝口腔携手XXX幼儿园举办小牙医活动...................................................2018/03/20'
        },{
          id:'18',
          cur: '18.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },{
          id:'19',
          cur: '19.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },{
          id:'20',
          cur: '20.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'21',
          cur: '21.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'22',
          cur: '22.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'23',
          cur: '23.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'24',
          cur: '24.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'25',
          cur: '25.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'26',
          cur: '26.优贝口腔一院长、主任证书授权会...........................................................2018/03/20'
        },
        {
          id:'27',
          cur: '27.优贝口腔为御龙湾小区提供免费义诊活动................................................2018/03/20'
        },
        {
          id:'28',
          cur: '28.优贝口腔为御龙湾小区提供免费义诊活动................................................2018/03/20'
        },

      )
    },
    remList(){
      if(this.allList.length===14){
        this.allList.splice(0,15)
      }
      this.allList.unshift(

          {
          id:'1',
          cur: '1.优贝口腔携手昌平社区网爱牙公益行活动...................................................2018/03/20'
        },
        {
          id:'2',
          cur: '2.优贝口腔一院长、主任证书授权会.............................................................2018/03/20'
        },
        {
          id:'3',
          cur: '3.优贝口腔携手XXX幼儿园举办小牙医活动...................................................2018/03/20'
        },
        {
          id:'4',
          cur: '4.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'5',
          cur: '5.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'6',
          cur: '6.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'7',
          cur: '7.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'8',
          cur: '8.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'9',
          cur: '9.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'10',
          cur: '10.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'11',
          cur: '11.优贝口腔为御龙湾小区提供免费义诊活动...................................................2018/03/20'
        },
        {
          id:'12',
          cur: '12.优贝口腔一院长、主任证书授权会...........................................................2018/03/20'
        },
        {
          id:'13',
          cur: '13.优贝口腔为御龙湾小区提供免费义诊活动................................................2018/03/20'
        },
        {
          id:'14',
          cur: '14.优贝口腔为御龙湾小区提供免费义诊活动................................................2018/03/20'
        },
      )
    },
    click(e){
      console.log(e);
      
    },

  }
}
</script>
 
<style scoped lang = "less">
.info {
    width: 720px;
    height: 1120px;
}

  /* title部分 */
.title {
  width: 700px;
  height: 58px;
  margin-left: 20px;
  border-bottom: 1px solid #626262;
  margin-bottom: 40px;
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

/* 中心部分 */
.infoCon {
    width: 600px;
    height: 1020px;
    margin: 0 auto;
}
/* 轮播图部分 */
.infoSwiper {
    width: 600px;
    height: 270px;
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

/* 义诊活动 */
.info .activity {
    width: 540px;
    height: 470px;
    background-color: #fff;
    padding: 30px 30px;
}
.activity a {
    text-decoration: none;
    color: #000;
    height: 30px;
    line-height: 30px;
}
.activity a:hover {
  color: #871cd9;
}


.activity .p {
 font-size: 40px;
}

/* 活动图片 */
.infoCon .infoImg {
    width: 520px;
    height: 130px;
    margin: 0 auto;
    border:1px solid #a0a0a0;
    padding: 5px 10px;
}

/* 分页 */
.pag {
    width: 330px;
    height: 30px;
    margin: 10px auto;
}
.pag .span a {
    text-decoration: none;
    color: #fff;
}
.pag .span {
   width: 50px;
   height: 22px;
   background-color: #871cd9;
   display: block;
   float: left;
   line-height: 20px;
   text-align: center;

   margin-left: 20px;

}
.pag .pages {
    width: 70px;
   height: 20px;
   border: 1px solid #871cd9;
   display: block;
   float: left;
   line-height: 20px;
   text-align: center;
   margin-left: 20px;
}
.pag .pages a {
    text-decoration: none;
    color: #000;
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
  margin-left: 66px;
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