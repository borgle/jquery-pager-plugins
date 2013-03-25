# ����jquery-pager-plugins

�����У��ܶ�ط����õ���һ�����ݷ�ҳչʾ���ر����������׷���û��������ϵ������[jQuery Plugins][1]��ȡ���ҹ����еĴ��롣�������ڻ��������Ѿ���һ��ѿ���ʹ�õķ�ҳ�ؼ����һ���ѡ�񷢲���������ʹ��[github.com][2]��ά������Ҳ��ѧϰgit����Դ����Ŀ�ʼ��

����jQuery **1.3.2+**����

## ʹ��ʾ��
��Ȼ�������ǻ���[jQuery][3]�����ģ���ô���ȵ���ҳ��ͷ������jQuery��ܴ��롣

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>

��������js���������������õ�ǰĿ¼�µ�һ��ѹ������

    <script type="text/javascript" src="./jquery.pager.min.js"></script>

��������ajax֮�෭ҳ�ص�����

```javascript
function go(p){
    //��ȡ��һҳ����������չ��
    $("#info").html("<h1>this is "+ p + " page.</h1>");
	
    //ˢ��**��ҳ�б�**��������
	$("#pager").pager({
        listnum: 9,
        totalrecords: 58,
		pagesize: 5,
		pageindex: p,
		callback:go
		});
}
//ҳ������󣬳�ʼ��**��ҳ�б�**����
$(function(){
	go(1); //��һҳ
});
```

����ص������õ��ļ���DOM�ڵ㣬��������������ģ�

```html
<div id="info">this content loaded by ajax.</div>
<div id="pager">the pager navigation</div>
```

������ **��ҳ����** �������ʽ��:

```css
#pager a {display:block;text-transform:uppercase;font-size:12px;float:left;}
#pager a.number {border:1px solid #ccc;text-decoration:none;margin:0 5px 0 0;padding:5px;background:#f0f0f0;color:#333;}
#pager a.hover {border:1px solid #f00;}
#pager a.empty {display:none;}
#pager a.current {border:1px solid #003f7e;color:#000;font-weight:700;background-color:#eee;}
```

## ����

�������ѹ����ʽ���õ� [google closure][5]��

����demo����[jquery-pager-plugins][4]

[1]: https://github.com/yoker/jquery-pager-plugins "jquery-pager-plugins"
[2]: https://github.com/ "github official site"
[3]: http://jquery.com/
[4]: http://gkeeps.com/jquery-pager-plugins
[5]: http://closure-compiler.appspot.com/home
