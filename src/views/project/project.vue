<template>
  <div>
    <div>
      <!--button栏-->
      <el-row>
        <el-col :span="8" :offset="9">
          <div>
            <base-buttons :buttons="buttonCate" :ac-bt-key.sync="activeButtonKey"
                          @button-changed="handleButtonChanged" ></base-buttons>
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
                <el-form-item label="项目名称">
                  <el-input v-model="formInline.projectName"></el-input>
                </el-form-item>
                <el-form-item label="建设单位">
                  <el-input v-model="formInline.constrUnit"></el-input>
                </el-form-item>
                <el-form-item label="备案时间">
                  <el-date-picker
                    class="input-2"
                    v-model="formInline.recordtime"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="至">
                  <el-date-picker
                    class="input-2"
                    v-model="formInline.recordtimeend"
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
            <el-button class="input-button" style="background-color: #4988D1;" @click="inquireSubmit">查询</el-button>
            <router-link to="/project/new">
              <el-button class="input-button" style="background-color: #EC8892;">新建项目</el-button>
            </router-link>
            <el-button class="input-button" style="background-color: #70CEA9;"  @click="dialogVisible = true">导入</el-button>
            <el-button class="input-button" style="background-color: #8D9ECC;" @click="deleteAllSubmit">批量删除</el-button>
          </div>
        </el-col>
      </el-row>
    </div>

    <div>
      <base-table :active-data="storeAllProjects[activeButtonKey]"
                  :project-table="projectTable" :select-data.sync="multipleSelection" :current-row.sync="currentRowData">
        <!--<template>-->
        <div style="margin-left: 12px" slot="myBaseTableC" slot-scope="tableData">
          <i class="el-icon-edit icon-1"></i>
          <i class="el-icon-star-off icon-2"></i>
          <i class="el-icon-delete icon-3" @click="deleteSubmit(tableData.index, tableData.row)"></i>
        </div>
        <!--</template>-->

      </base-table>
    </div>

    <div>
      <el-row>
        <el-col :span="8" :offset="8">
          <pagination
            :total-items="100" :page-size="10"
            :current-page.sync="currentPage" @currentChange="handleCurrentChange"></pagination>
        </el-col>
      </el-row>
    </div>
    <file-upload :visible.sync="dialogVisible"
                 :action="actionUrl"
                 :file-list.sync="fileList"
                 upload-tip="请确认传入Excel2003格式的文件"
                 @on-success="uploadFileSuccess" @on-error="uploadFileError"></file-upload>
  </div>
</template>

<script>
  import baseTable from '../../components/common/baseTable'
  import baseButtons from '../../components/common/baseButtons'
  import pagination from '../../components/common/pagination'
  import fileUpload from '../../components/common/fileUpload'
  import {mapActions, mapGetters} from 'vuex'
  import {tableKeys, projectCategory} from '../../model/project'
  import {parserTimestamp} from '../../utils/common'
  import {deleteProjectById, deleteProjectsByIds} from '../../api/project'
  import {uploadFileUrl} from '../../api/project/config'

  export default {
    name: 'new',
    data () {
      return {
        currentPage: 1,
        buttonCate: [],
        projectTable: [],
        currentRowData: {},
        activeButtonKey: 'new',
        formInline: {
          projectName: '九年义务学校智能化工程',    // 项目名称
          constrUnit: '',     // 建设单位
          recordtime: null,     // 备案开始时间
          recordtimeend: null   // 备案结束时间
        },
        multipleSelection: [],
        dialogVisible: false,
        fileList: [],
        fileActions: {}
      }
    },
    computed: {
      ...mapGetters({
        storeAllProjects: 'allData',  // 分类数据
        storePagination: 'paginationData' // 分类数据对应的分页信息
      }),
      inquireParams () {
        return {
          projectName: this.formInline.projectName,
          constrUnit: this.formInline.constrUnit,
          recordtime: parserTimestamp(this.formInline.recordtime),
          recordtimeend: parserTimestamp(this.formInline.recordtimeend)
        }
      },
      actionUrl () {
        return uploadFileUrl[this.activeButtonKey].url
      }
    },
    mounted () {
      this.getAllProject()  // 默认异步加载所有的数据
      this.buttonCate = projectCategory
      this.projectTable = tableKeys
    },
    methods: {
      ...mapActions([
        'getAllProject',
        'getProjectByCate'
      ]),
      reloadCurrentData () {
        let params = {
          [this.activeButtonKey]: {}
        }
        this.getProjectByCate(params)
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      /**
       * 分类按钮发生变化时，数据也应该对应变化
       * 默认页面加载时候请求所有的数据（可修改）
       * 这里向后台请求激活按钮的数据
       */
      handleButtonChanged () {
        // 更新数据
        this.reloadCurrentData()
      },
      inquireSubmit () {
        let params = {
          [this.activeButtonKey]: {
            options: this.inquireParams
          }
        }
        this.getProjectByCate(params)
      },
      handleCurrentChange () {
        alert(`当前在第 ${this.currentPage} 页`)
      },
      deleteAllSubmit () {
        let arrs = []
        let recordIds = []
        for (let v of this.multipleSelection) {
          arrs.push(v.id)
          recordIds.push(v.recordId)
        }
        let requestData = {ids: arrs}
        const h = this.$createElement
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '该操作将会删除所有数据，确认继续吗?')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true
              instance.confirmButtonText = '删除中...'
              deleteProjectsByIds(requestData)
                .then(res => {
                  this.$message({
                    message: '删除成功',
                    type: 'success',
                    center: true
                  })
                  done()
                  instance.confirmButtonLoading = false
                  this.reloadCurrentData()  // 重新加载页面数据
                })
                .catch(res => {
                  this.$message({
                    message: '删除失败',
                    type: 'error',
                    center: true
                  })
                  done()
                  instance.confirmButtonLoading = false
                })
            } else {
              done()
              this.$message({
                type: 'info',
                message: '已取消删除'
              })
            }
          }
        })
      },
      deleteSubmit (tableIndex, tableRow) {
        let recordId = tableRow.recordId
        let param = {id: tableRow.id}
        const h = this.$createElement
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '确认删除工程报建备案号为: '),
            h('span', {style: 'color: teal'}, recordId),
            h('span', null, ' 的数据吗')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true
              instance.confirmButtonText = '删除中...'
              deleteProjectById(param)
                .then(res => {
                  this.$message({
                    message: '删除成功',
                    type: 'success',
                    center: true
                  })
                  done()
                  instance.confirmButtonLoading = false
                  this.reloadCurrentData()  // 重新加载页面数据
                })
                .catch(res => {
                  this.$message({
                    message: '删除失败',
                    type: 'error',
                    center: true
                  })
                  done()
                  instance.confirmButtonLoading = false
                })
            } else {
              done()
              this.$message({
                type: 'info',
                message: '已取消删除'
              })
            }
          }
        })
      },
      uploadFileSuccess () {
      },
      uploadFileError () {
      }
    },
    components: {
      baseTable,
      baseButtons,
      pagination,
      fileUpload
    },
    filters: {
      toDate (timeStamp) {
        return new Date(timeStamp)
      }
    }
  }
</script>

<style scoped>
  .top-button{
    height: 50px;
    width: 130px;
    font-size: 18px;
    margin-left: 25px;
  }
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
  .upload-text {
    font-size: 20px;
  }
</style>
