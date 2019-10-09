# vue-preset-kinth
vue-cli3 preset for kinth web

# Usage
需要vue-cli3

1: 远程使用

    vue create --preset kinth-cli/vue-preset-kinth <project-name>

2：本地使用

    git clone https://github.com/kinth-cli/vue-preset-kinth.git
    vue create --preset ./vue-preset-kinth <project-name>
    
    
## src文件下目录
```
├── src
│   ├── api // 接口模块化管理
|   |   ├── user // 用户
|   |   |   ├── detail.js // 用户详情页接口
|   |   |   └── index.js  // 统一导出detail、list页面的接口
|   |   |   └── list.js   // 列表页接口
|   |   |── base.js   // 接口基础路径
|   |   |── http.js   // axios拦截器
|   |   |── index.js  // 统一导出所有接口
|   |   └── login.js  // 登录页接口
|   ├── assets
|   |   ├── css
|   |   |── images
|   |   └── js
|   ├── components    // 存放组件
|   ├── router
|   |   └── index.js  // 路由，用路由全局前置守卫router.beforeEach做角色控制
|   ├── store                  // store模块化管理
|   |   ├── index.js           // 汇总各个模块store导出
|   |   |── login-store.js     // 登录模块store
|   |   └── userInfo-store.js  // 用户信息模块store
│   ├── views
|   |   ├── user            // 用户文件夹
|   |   |   ├── detail.vue  // 用户详情
|   |   |   └── list.vue    // 用户列表
|   |   |── error.vue
|   |   └── login.vue
│   └── App.vue
│   └── main.js
│── package.json

```
