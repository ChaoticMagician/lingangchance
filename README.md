临港项目
===================

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 项目说明
> 开发环境为Linux + chrome, 部分浏览器页面显示有一定差异
#### 环境配置
* 开发环境ip配置在 config/dev.env.js中
* 生产环境ip配置在 config/prod.env.js中
* 项目运行如果是否需要登录在 src/router/hooks/index.js 中是否启用路由前置守卫(含有登录认证钩子)

#### 项目结构
```bash
|-- api                                   # 与后台的请求接口
|   |-- auth 
|       |-- user.js                       # 用户登录获取相关信息的请求
|   |-- project                           # 项目报建相关的请求
|       |-- index.js                      # 项目报建后台接口
|   |-- ...
|-- assets                                # 静态资源
|-- components                            # vue组件
|   |-- common                            # 公用组件
|       |-- 404.vue                       # 404页面
|       |-- baseButtons.vue               #
|       |-- baseTable.vue                 #
|       |-- fileUpload.vue                #
|       |-- formHtml.vue                  #
|       |-- pagination.vue                #
|       |-- submitForm.vue                #
|   |-- header
|   |-- base.vue                          # 主页入口
|   |-- mainBase.vue                      # 大部分基本页面入口
|-- model                                 # 数据模型接口
|   |---common                            # 公共模型接口
|   |-- project                           # 项目报建模型接口
|   |-- ...
|-- router
|   |-- hooks
|       |-- afterEach                     # 路由后置守卫
|       |-- beforeEach                    # 路由前置守卫
|       |-- index.js                      # 配置(启用和关闭)守卫（配置是否需要登录等）
|   |-- routers                           # vue-router配置
|       |-- BaseRouter.js                 # 路由类(class)
|       |-- index.js                      # 路由基础配置文件，在此处添加和删除路由等
|       |-- auth
|           |-- index.js                  # 用户路由
|       |-- project
|           |-- index.js                  # 项目报建路由
|       |-- ...
|   |-- index.js                          # 创建、并导出router对象，并注入路由配置文件   
|-- store                                 # vuex配置文件
|   |-- modules                           # vuex模块
|       |-- auth
|           |-- user.js                   # 用户状态模块
|       |-- project
|           |-- index.js                  # 项目报建状态模块
|       |-- ...
|   |-- mutation-types                    # mutation-types 配置
|   |-- index.js                          # vuex 根状态配置
|   |-- ...
|-- utils                                 # 工具包
|   |-- commmon.js                        # 通用工具包
|   |-- commmon.js                        # 一些依赖库的通用配置
|   |-- http.js                           # 封装axios， 是所有请求的依赖文件
|   |-- localStorage.js                   # 封装window.localStorage, 用于在浏览器存储数据
|   |-- pagination.js                     # 前端分页
|-- views                                 # 所有页面
|   |-- auth
|       |-- login.vue                     # 用户登录页面
|   |-- project
|       |-- project.vue                   # 项目报建页面
|       |-- newProject.vue                # 新建项目页面
|   |-- ...
|-- App.vue
|-- main.js

```
#### 已开发
##### 基础模块
1. 通用组件(src/components/common)
* 显示数据的baseTable
* 项目等分类的按钮(baseButtons)及数据的交互(如项目报建的新建、变更、增补等)，选择不同的按钮（分类), 
返回不同的key, 便可以通过key选择不同的数据传入baseTable中
* 显示和处理表单(formHtml)组件，目前依赖的js在index.html中导入了一部分(应该改为在formHtml中局部导入, 
但是遇到bug暂时没有解决，先全局导入了一部分，然后将CustomForm.js中的对象CustomForm对象传递给vue的局部对象, 
在局部对象中使用相关的方法等)
* 基础的分页组件(pagination，基础的分页组件的使用见项目报建)
* 文件上传组件(fileUpload)
* 提交新建信息成功组件
2. 基础组件(src/components)
* 导航栏(baseHead.vue)
* 主页的基础入口（base.vue)
* 其余大部分页面的基础入口（mainBase.vue)

##### 功能模块
* 用户登录与验证模块
* 首页部分模块
* 项目报建(导入未和后台对接, 项目新建中的文件上传没有和后台对接, 分页由于后台没有做分页没有和后台对接，
目前在 "src/api/project/index.js"中对后台的getAllProject及getProjectByCate方法中对后台的数据做了封装，
 等服务器加上分页信息去掉前台的initCateItemsData既可, 其余的数据交互也与这里的模板相同)



我开始修改了