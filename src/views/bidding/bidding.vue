<template>
  <div>
    <div>
      <!--button栏-->
      <el-row>
        <el-col :span="12" :offset="6">
          <div>
            <base-buttons :buttons="buttonCate"
                          :ac-bt-key.sync="activeButtonKey" :show-count="buttonCate.length - 3" ></base-buttons>
          </div>
        </el-col>
      </el-row>
      <!--<div style="float: contour">-->
    </div>
    <div style="margin-top: 20px">
      <!--input form-->
      <el-row>
        <el-col :span="16" >
          <el-form :inline="true" :model="formInline" class="">
            <el-row>
              <el-col :span=21>
                <el-form-item label="标段名称">
                  <el-input v-model="formInline.projectName" class="input-1"></el-input>
                </el-form-item>
                <el-form-item label="建设/中标单位">
                  <el-input v-model="formInline.projectCompany" class="input-1"></el-input>
                </el-form-item>
                <el-form-item label="备案时间">
                  <el-date-picker
                    class="input-2"
                    v-model="formInline.startTime"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="至">
                  <el-date-picker
                    class="input-2"
                    v-model="formInline.endTime"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
        <el-col :span="8">
          <div>
            <!--<el-button>查询</el-button>-->
            <el-button class="input-button" style="background-color: #4988D1;" @click="onSubmit">查询</el-button>
            <el-button class="input-button" style="background-color: #EC8892;">新建项目</el-button>
            <el-button class="input-button" style="background-color: #70CEA9;">导入</el-button>
            <el-button class="input-button" style="background-color: #8D9ECC;">批量删除</el-button>
          </div>
        </el-col>
      </el-row>
    </div>

    <div>
      <base-table :active-data="allProjects[activeButtonKey]"
                  :project-table="projectTable" :select-data.sync="multipleSelection" >
        <!--<template>-->
        <div style="margin-left: 12px" slot="myBaseTableC">
          <i class="el-icon-edit icon-1"></i>
          <!--<i class="el-icon-star-off icon-2"></i>-->
          <i class="el-icon-delete icon-3"></i>
        </div>
        <!--</template>-->
      </base-table>
    </div>
    <div>
      <!--<span>{{allProjects['construction']}}</span>-->
    </div>
  </div>
</template>

<script>
  // import {BiddingKeys, getAllBiddingApi, biddCategory} from '../../api/bidding/tempData'
  import {biddingKeys, biddCategory} from '../../api/bidding/model'
  import {getAllBidding} from '../../api/bidding'

  import baseTable from '../../components/common/baseTable'
  import baseButtons from '../../components/common/baseButtons'

  export default {
    name: 'bidding', // 招标投标备案
    data () {
      return {
        buttonCate: [],
        activeButtonKey: 'survey',
        projectTable: [],
        formInline: {
          projectName: '',
          projectCompany: '',
          startTime: '',
          endTime: ''
        },
        multipleSelection: [],
        allProjects: {}
      }
    },
    mounted () {
      this.allProjects = getAllBidding()
      this.buttonCate = biddCategory
      this.projectTable = biddingKeys
    },
    methods: {
      onSubmit () {
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      }
    },
    components: {
      baseButtons,
      baseTable
    }
  }
</script>

<style scoped>
  .input-button{
    height: 38px;
    width: 140px;
    font-size: 15px;
    color: white
  }
  .input-1{
    width: 220px;
  }
  .input-2{
    width: 140px;
  }
  .icon-1{
    font-size: 20px;
    color: #4988D1;
  }
  .icon-2{
    font-size: 20px;
    color: #F3858E;
    margin-left: 8px
  }
  .icon-3{
    font-size: 20px;
    color: #4988D1;
    margin-left: 8px
  }
</style>
