
# BUI NPM 单文件组件的示例


## 1. 使用单文件组件

第1步：`npm i bui-component-example`
第2步：在 `src/index.js` import 组件 `import 'bui-component-example';`
第3步：在需要的地方，通过bui的组件方式，可静态加载，也可以动态加载组件；

**1.1 静态加载组件，通过属性传递简单参数，参数键值都是小写, 如 `title="标题"`**
```html
<component  name="bui-component-example" title="标题"></component>
```

**1.2 动态延迟加载组件，通过 `loader.delay({ id: "delaycomp", param: { title: "标题" } })`**

```html
<component id="delaycomp" name="bui-component-example" delay="true"></component>
```

**1.3 动态延迟加载组件，通过 `loader.load({ id: "delaycomp",url:"bui-component-example", param: { title: "标题" } })`**

```html
<component id="delaycomp" ></component>
```

**1.4 路由加载组件**
```js
router.load({
    url:"bui-component-example",
    param:{ title: "标题" }
})
```

**1.5 弹窗加载组件**
```js
var uipage = bui.page({
    url:"bui-component-example",
    param:{ title: "标题" }
})
```


## 2. 制作单文件组件说明

### 第一步：新建个目录，执行生成配置文件（名字与自定义组件名相同（建议 bui-component- 开头，方便搜索））

```bash
npm init 
```

### 第二步：新建 index.js 文件，内容如下：
```js
loader.set("bui-component-example",{
    path: __dirname+"/",
    template(){
        return `
            <div>HTML结构</div>
            
            <style>
                <!-- 局部样式 -->
            </style>
        `
    },
    loaded(){
        return {}
    }
});

// 导出组件信息
module.exports = loader.get('bui-component-example');
```

第1个参数 bui-component-example，自定义组件名, npm 模块；（建议 bui-component- 开头，方便搜索）
第2个参数 template，template函数，返回一个组件模板字符串；
第3个参数 loaded，组件加载执行的函数；


### 第三步：

```bash
# 发布到npm
npm publish
```

