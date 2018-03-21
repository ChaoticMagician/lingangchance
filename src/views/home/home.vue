<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div style="margin-left: 0px">
        <el-card :body-style="{ height:'850px',padding: '5px','background-color': '#545c64'}">
          <div>

          <el-row class="right-card" >
            <el-col :span="24" v-for="(project, index) in projectCates"
                    :key="index" :offset="index % 3 === 0  ? 0 : 0">
              <el-card 
                      :body-style="{ padding: '0','padding-left': '37%'}"
                      :style="{'margin-top': index = 1 ? '15px' : '0px','margin-right': (index+1) % 1 === 0 ? '0px' : '15px',border:'0',height:'56px',lineHeight: '56px'}"
                      class="right-card-butter"
              >
                <router-link :to="project.nextUrl">
                  <i class="el-icon-menu p-cate-img"></i>
                  <span class="p-cate-item-name">{{ project.name }}</span>

                  <!-- <el-col :span="10">
                    <img :src="project.imgUrl" class="p-cate-img">
                  </el-col>
                  <el-col :span="14" class="p-cate">
                    <div class="p-cate-item">
                      <div>
                        <span class="p-cate-item-count">{{project.count}}</span>
                      </div>
                      <div>
                        <span class="p-cate-item-name">{{ project.name }}</span>
                      </div>
                    </div>
                  </el-col> -->
                </router-link>
              </el-card>
            </el-col>
          </el-row>

          </div>
        </el-card>
        </div>
      </el-col>
      <el-col :span="20">
        <!-- <el-card :body-style="{ padding: '5px'}">
          <div class="lg-frame">
              <photochere></photochere>
            <img src="../../assets/img/temp/lingang1.jpg" class="lg-img">
          </div>
        </el-card> -->

          <el-card class="box-card" >
            <div slot="header" class="clearfix">
              <i class="el-icon-menu main-p-icon" ></i>
              <span class="main-p-text">重点项目</span>
              <div style="float: right">
                <span class="main-p-text2">更多</span>
                <i class="el-icon-more main-p-icon"></i>
              </div>
            </div>

            <el-table id="my-tb"
              :data="projectDatasTemp"
              stripe
              style="width:100%;" >
              <el-table-column v-for="(item, index) in projectTable" :key="index"
                :prop="item.key"
                :label="item.label" :width="item.width">
              </el-table-column>
            </el-table>
          </el-card>

          <!-- <el-card class="box-card" style="margin-top: 15px;">
            <div slot="header" class="clearfix">
            
              <icon name="signal" class="chart-icon"></icon>
              <span class="main-p-text">统计分析</span>

              <el-button class="stats-button"  type="primary">详细统计</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'统计分析面板' + o }}
            </div>
          </el-card> -->

      </el-col>
    </el-row>

  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import photochere from '@/components/photochere/photoYuan.vue'
  export default {
    name: 'home',
    data () {
      // let _vm = this
      return {
        projectCates: [
          {
            name: '项目报建',
            count: 3640,
            imgUrl: require('../../assets/img/home/' + 'project.png'),
            styleObj: {
              backgroundColor: '#4C9EDA'
            },
            nextUrl: '/project'
          },
          {
            name: '招投标备案',
            count: 3600,
            imgUrl: require('../../assets/img/home/bidding.png'),
            styleObj: {
              backgroundColor: '#8DB866'
            },
            nextUrl: '/bid'
          },
          {
            name: '合同备案',
            count: 2800,
            imgUrl: require('../../assets/img/home/contract.png'),
            styleObj: {
              backgroundColor: '#C1AA76'
            },
            nextUrl: '/project'
          },
          {
            name: '建设过程管理',
            count: 2400,
            imgUrl: require('../../assets/img/home/construction.png'),
            styleObj: {
              backgroundColor: '#66B7BA'
            },
            nextUrl: '/project'
          },
          {
            name: '竣工备案',
            count: 2400,
            imgUrl: require('../../assets/img/home/completed.png'),
            styleObj: {
              backgroundColor: '#7799D9'
            },
            nextUrl: '/project'
          },
          {
            name: '查询统计',
            count: null,
            imgUrl: require('../../assets/img/home/inquire.png'),
            styleObj: {
              backgroundColor: '#E6858E'
            },
            nextUrl: '/project'
          }
        ],
        projectTable: [
          {'key': 'id', 'label': '序号', 'width': 50},
          {'key': 'projectName', 'label': '项目名称', 'width': 250},
          {'key': 'projectAddress', 'label': '工程地址', 'width': 100},
          {'key': 'projectScale', 'label': '建设规模', 'width': 130},
          {'key': 'projectUsage', 'label': '工程用途', 'width': 100},
          {'key': 'planBeginDate', 'label': '计划开工日期', 'width': 130},
          {'key': 'planEndDate', 'label': '计划竣工日期', 'width': 130},
          {'key': 'projectLevel', 'label': '立项级别', 'width': 130},
          {'key': 'reportDepart', 'label': '上报部分', 'width': 80},
          {'key': 'projectProper', 'label': '建设性质', 'width': 130},
          {'key': 'projectCompany', 'label': '建设单位', 'width': 130},
          {'key': 'projectCompanyAddress', 'label': '建设单位地址', 'width': 130},
          {'key': 'projectCategory', 'label': '项目分类', 'width': 130},
          {'key': 'projectLeader', 'label': '项目负责人', 'width': 100},
          {'key': 'processStatus', 'label': '办理状态', 'width': 100}
        ],
        projectDatas: [
          {
            'id': 1,
            'projectName': '九年义务教育智能化工程',
            'projectAddress': '临港经济区',
            'projectScale': '29998平方米',
            'projectUsage': '公共建筑',
            'planBeginDate': '2017-05-10',
            'planEndDate': '2018-05-10',
            'projectLevel': '区县级',
            'reportDepart': '地市',
            'projectProper': '新建项目',
            'projectCompany': '临港有限公司',
            'projectCompanyAddress': '临港经济区',
            'projectCategory': '房建工程',
            'projectLeader': '张三',
            'processStatus': '新建'
          }
        ]
      }
    },
    components: {
      photochere
    },
    computed: {
      projectDatasTemp: function () {
        let temp = []
        for (let i = 0; i < 15; i++) {
          let p = this.projectDatas[0]
          p.id = (i + 1)
          temp.push(p)
        }
        return temp
      }
    },
    mounted () {
      this.getUserInfo()
    },
    methods: {
      ...mapActions([
        'getUserInfo'
      ])
    }
  }
</script>

<style scoped>
  .lg-frame{
    /* width: 989px;
    height: 270px; */
    width: 100%;
    height: 270px;
  }
  .right-card{
    height: 850px;
  }
  .p-cate{
    height: 85px;
  }
  .p-cate-img{
    color: #878d99;
    font-size: 18px;
  }
  .p-cate-item{
    /*margin-top: 30px;*/
  }
  .p-cate-item-count{
    font-size: 35px;
    color: white;
  }
  .p-cate-item-name{
    font-size: 14px;
    color: white;
  }
  .main-p-icon{
    font-size: 22px;
    color: #4988D1;
  }
  .main-p-text{
    font-size: 18px;
    color: #4988D1;
  }
  .main-p-text2{
    font-size: 14px;
    color: #4988D1;
  }
  .stats-icon{
    font-size: 22px;
    color: #4988D1;
  }
  .chart-icon {
    width: auto;
    height: 1em; /* 或任意其它字体大小相对值 */
    font-size: 22px;
    color: #4988D1;
    margin-right: 2px;
    /* 要在 Safari 中正常工作，需要再引入如下两行代码 */
    max-width: 100%;
    max-height: 100%;
  }
  .stats-button{
    height: 30px;
    width: 150px;
    font-size: 18px;
    float: right;
    padding: 3px 0;
    color: #ffff;
    background-color: #4988D1
  }
  .box-card{
    margin-left: 1em;
  }
  #my-tb{
    height: 760px;
  }
  .el-table-column{

  }
  .right-card-butter{
    background-color: #545c64;
  }
  .right-card-butter:hover{
     background: rgb(67,74,80);
  }
</style>
