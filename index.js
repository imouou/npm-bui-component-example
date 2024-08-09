// 定义一个单文件组件
loader.set("bui-component-example",{
    path: __dirname+"/",
    template(){
        return `
            <div class="bui-navbar">
                <img src="images/applogo.png" alt="">
                <ul class="bui-nav">
                    <li class="bui-btn">首页</li><li class="bui-btn">新闻</li>
                </ul>
            </div>

            <!-- 局部样式 -->
            <style>
                .bui-navbar {
                    background:#fff;
                }
            </style>
        `
    },
    loaded(requires,exports,module,global){

        // 合并接收默认参数
        let props = $.extend(true, {}, module.props);
        
        // 初始化数据行为存储
        var bs = bui.store({
            el: `#${module.id}`,
            scope: "page",
            data: {
               a: 1,
            },
            methods: {},
            watch: {},
            computed: {},
            templates: {},
            beforeMount: function(){
                // 数据解析前执行, 修改data的数据示例
                // this.$data.a = 2
            },
            mounted: function(){
                // 数据解析后执行
            }
        })
    
        return bs;
   }
})

// 导出函数，使其可以在其他文件中被引入和使用，不支持直接import
module.exports = loader.get('bui-component-example');