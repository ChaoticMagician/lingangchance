<template>
  <div  class="bg-img">
    <div>
      <el-row>
        <div class="login-card">
          <el-col :span="6" :offset="7">
            <div>
              <img src="../../assets/img/login/loginS.png" class="small-img">
            </div>
          </el-col>
          <el-col :span="4">
            <el-card>
              <div slot="header">
                <p class="card-title" >天津临港经济区建设服务中心</p>
                <p class="card-title" >建筑工程管理系统</p>
              </div>
              <div>
                <div><img src="https://chengfy.com/_uploads/files/staneyffer.jpg" class="user-img"></div>
                <div>
                  <span class="user-name">张小明</span>
                </div>
              </div>
              <el-form ref="form" :label-position="labelPosition" :model="form" label-width="80px">
                <el-form-item>
                  <el-input v-model="form.username" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item label="">
                  <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="" @click="userLogin" style="width: 274px; background-color: #345DBA;">
                    <span style="color: white">登录</span>
                  </el-button>
                </el-form-item>
                <div>
                  <img src="../../assets/img/temp/login/chilun.png" style="float: right;">
                  <span class="card-down-text">后台运维</span>
                </div>
                <div>
                  <img src="../../assets/img/temp/login/biaoyu.png" style="float: right;margin: 16px,0;width: 273px;">
                </div>
              </el-form>

            </el-card>
          </el-col>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
  import authApi from '../../api/auth/user'
  import router from '../../router'
  import {mapActions} from 'vuex'
  export default {
    name: 'login',
    data () {
      return {
        labelPosition: 'top',
        form: {
          account: 'admin',
          password: '1'
        },
        userData: {
          token: null,
          user: null
        }
      }
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      userLogin () {
        // 'sws001'
        // console.log(this.form)
        authApi.userLogin(this.form).then(res => {
          // console.log(res.status)
          let resData = res.data
          this.login(resData)
          // alert(resData.sysUser)
          router.push({
            path: '/index'})
        }).catch(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>
  .bg-img {
    background-image: url('../../assets/img/login/loginBg.png');
    width:100%; 
    height:1000px;
  }

  .small-img {
    height: 490px;
    width: 450px;
    /*position:absolute;*/
    /*border-right: 0;*/
    float: right;
  }

  .login-card {
    margin-top: 200px;
  }

  .card-title {
    font-size: 14px;
    font-weight: bold;
    font-family: 'Microsoft YaHei';
    margin: 3px;
    text-align: center;
    /*position  : absolute;*/
    /*top       : 50%;*/
    /*left      : 50%;*/
    /*transform : translate(-50%,-50%);*/
  }

  .user-img {
    border-radius: 50%;
    margin-top: 8px;
    margin-bottom: 8px;
    display: block;
    margin: auto;
    height: 75px;
    width: 75px;
  }

  .user-name {
    font-size: 18px;
    display: block;
    text-align: center;
    padding: 0.auto;
    height: 38px;
  }

  .card-down-text {
    font-size: 15px;
    float: right;
    color:#004a9d;
    text-align: center;
  }
</style>
