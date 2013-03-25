# 关于jquery-pager-plugins

工作中，很多地方会用到把一个内容分页展示，特别是现在这个追求用户体验至上的年代，[jQuery Plugins][1]抽取于我工作中的代码。尽管现在互联网上已经有一大堆可以使用的分页控件，我还是选择发布出来，并使用[github.com][2]来维护，这也算学习git管理源代码的开始。

基于jQuery **1.3.2+**制作

## 使用示例
既然这个插件是基于[jQuery][3]开发的，那么首先得在页面头部引入jQuery框架代码。

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>

再引入插件js包，这里我们引用当前目录下的一个压缩包。

    <script type="text/javascript" src="./jquery.pager.min.js"></script>

定义我们ajax之类翻页回调函数

```javascript
function go(p){
    //获取下一页的内容用于展现
    $("#info").html("<h1>this is "+ p + " page.</h1>");
	
    //刷新**分页列表**导航区域
	$("#pager").pager({
        listnum: 9,
        totalrecords: 58,
		pagesize: 5,
		pageindex: p,
		callback:go
		});
}
//页面载入后，初始化**分页列表**导航
$(function(){
	go(1); //第一页
});
```

上面回调函数用到的几个DOM节点，我们是这样定义的：

```html
<div id="info">this content loaded by ajax.</div>
<div id="pager">the pager navigation</div>
```

最后就是 **分页导航** 区域的样式了:

```css
#pager a {display:block;text-transform:uppercase;font-size:12px;float:left;}
#pager a.number {border:1px solid #ccc;text-decoration:none;margin:0 5px 0 0;padding:5px;background:#f0f0f0;color:#333;}
#pager a.hover {border:1px solid #f00;}
#pager a.empty {display:none;}
#pager a.current {border:1px solid #003f7e;color:#000;font-weight:700;background-color:#eee;}
```

## 结语

插件代码压缩方式采用的 [google closure][5]。

完整demo见：[jquery-pager-plugins][4]

[1]: https://github.com/yoker/jquery-pager-plugins "jquery-pager-plugins"
[2]: https://github.com/ "github official site"
[3]: http://jquery.com/
[4]: http://gkeeps.com/jquery-pager-plugins
[5]: http://closure-compiler.appspot.com/home
