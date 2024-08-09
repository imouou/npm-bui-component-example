// 定义一个单文件组件
loader.set("bui-component-example",{
    path: __dirname+"/",
    template(){
        return `
            <div class="bui-navbar">
                <ul class="bui-nav" b-template="navbar.tplMenu(navbar.menu)">
                    <!--<li class="bui-btn">首页</li>-->
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
            scope: "navbar",
            data: {
                menu: [{title: '首页', url: 'main'}, {title: '新闻', url: 'pages/news/index.html'}],
            },
            methods: {},
            watch: {},
            computed: {},
            templates: {
                tplMenu(data){
                    let html = '';
                    if (data && data.length > 0) {
                        data.forEach(item => {
                            html += `<li class="bui-btn" href="${item.url}">${item.title}</li>`
                        });
                    }
                    return html;
                }
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