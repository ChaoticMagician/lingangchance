<template>
  <div>
    <!--<h1> info {{ $route.params.id }}</h1>-->
    <el-row>
      <el-col :span="18" :offset="2">
        <el-steps :space="200" :active="3" finish-status="success">
          <el-step v-for="(step, index) in projectSteps" :key="index" :title=step></el-step>
        </el-steps>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="18">
        <el-card>
          <div slot="header">
            <span style="font-size: 22px; color: blue; margin-left: 600px;">设计合同备案信息</span>
          </div>
          <el-row>
            <el-col :span="7">
              <el-form :label-position="labelPosition" v-for="(formLabel, index) in projectDatasTemp"
                       :key="index" label-width="80px" :model="formLabelAlign">
                <el-form-item  :label="formLabel.label" >
                  <el-input v-model="formLabel.name"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="7" :offset="1">
              <el-form :label-position="labelPosition" v-for="(formLabel, index) in projectDatasTemp"
                       :key="index" label-width="80px" :model="formLabelAlign">
                <el-form-item  :label="formLabel.label" >
                  <el-input v-model="formLabel.name"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="7" :offset="1">
              <el-form :label-position="labelPosition" v-for="(formLabel, index) in projectDatasTemp"
                       :key="index" label-width="80px" :model="formLabelAlign">
                <el-form-item  :label="formLabel.label" >
                  <el-input v-model="formLabel.name"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="6" >
        <el-card>
          <div slot="header">
            <span style="font-size: 20px;">项目名字</span>
          </div>

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="设计合同" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="勘察合同" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="施工合同" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="工程总承包" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
    export default {
      name: 'info',
      data () {
        return {
          projectSteps: [
            '工程报建',
            '招标投标',
            '合同备案',
            '施工许可',
            '质量安全监管',
            '项目完工',
            '竣工验收备案'
          ],
          labelPosition: 'top',
          formLabelAlign: [
            {
              label: '项目名称',
              name: '',
              type: ''
            }
          ]
        }
      },
      computed: {
        projectDatasTemp: function () {
          let temp = []
          for (var i = 0; i < 6; i++) {
            let p = this.formLabelAlign[0]
            p.id = (i + 1)
            temp.push(p)
          }
          return temp
        }
      }
    }
</script>

<style scoped>

</style>
