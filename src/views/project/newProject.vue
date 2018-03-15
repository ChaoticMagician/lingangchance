<template>
  <div>
    <el-row>
      <el-col :span="4" :offset="11">
        <span class="top-text">项目报建</span>
      </el-col>
      <el-col :span="2" :offset="7">
        <el-button class="submit-button" @click="handleSubmit">提交</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4">
        <div >
          <form-html :form-html-str="formHtml"
                     ref="form"
                     :form-data.sync="formData"></form-html>
        </div>
      </el-col>
    </el-row>
    <submit-form :visible.sync="visible" tip-text="项目报建" @on-close="handleClose"></submit-form>
  </div>

</template>

<script>
  import submitForm from '../../components/common/submitForm'
  import formHtml from '../../components/common/formHtml'

  import * as projectApi from '../../api/project/index'

  export default {
    name: 'new-project',
    data () {
      return {
        formHtml: '',
        formData: '',
        visible: false
      }
    },
    mounted () {
      this.initFormHtml()
    },
    methods: {
      initFormHtml () {
        projectApi.getFormHtml()
          .then(res => {
            this.formHtml = res.data
          })
          .catch(res => {
            console.log(res)
          })
      },
      handleSubmit () {
        this.$refs.form.customSubmit()
        projectApi.uploadFormHtml({data: this.formData}).then(res => {
          this.visible = true
        }).catch(res => {
          this.$message.error('上传失败')
        })
      },
      handleClose () {
        this.$router.push({path: '/project'})
      }
    },
    components: {
      formHtml,
      submitForm
    }
  }
</script>

<style scoped>
  .top-text{
    font-size: 20px;
    color: #4889D8;
    font-weight: bold;
  }
  .submit-button{
    width: 100px;
    background-color: #70CEA9;
    color: white;
  }

</style>
