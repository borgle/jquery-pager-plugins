/*
* jQuery pager plugin
* Version 1.0 (02/27/2011)
* @requires jQuery v1.2.6 or later
*
* Example at: https://github.com/yoker/jquery-pager-plugins/raw/master/demo.html
*
* Copyright (c) 2011 Yoker Wu
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
* 效果:  < [4] [5] [6] [7] [8] >
* Usage: 
 .pager({ callback: go });
 .pager({listnum: 9,totalrecords: 58,pagesize: 5,pageindex: 6,callback:go});
*
* Where listnum is 分割数量
*       pagesize is 每页条数
        totalrecords is 总条数
        pageindex is 当前页码;
*       callback is the method to fire when a pager button is clicked.
*
* callback signiture is go = function(pageclickednumber) 
* Where pageclickednumber is the number of the page clicked in the control.
*
* The css file is a dependancy but can obviously tweaked to your wishes
    #pager a {display:block;text-transform:uppercase;font-size:12px;float:left;}
    #pager a.number {border:1px solid #ccc;text-decoration:none;margin:0 5px 0 0;padding:5px;background:#f0f0f0;color:#333;}
    #pager a.hover {border:1px solid #f00;}
    #pager a.empty {display:none;}
    #pager a.current {border:1px solid #003f7e;color:#000;font-weight:700;background-color:#eee;}
*/

(function($) {

    $.fn.pager = function(options) {

        var opts = $.extend({}, $.fn.pager.defaults, options);

        return this.each(function() {
            $(this).empty();
			var n = parseInt(opts.listnum);
			var totalRec = parseInt(opts.totalrecords);
			var perPage = parseInt(opts.pagesize);
			var curPage = parseInt(opts.pageindex);

			var slice = 0;
			if(n%2==0) slice = -1;
			//处理页面数
			var totalPage,PageStartNum,PageEndNum;
			totalRec=parseInt(totalRec);
			curPage=parseInt(curPage);if(isNaN(curPage)) curPage = 1;
			if (totalRec%perPage==0){totalPage= parseInt(totalRec / perPage);}else{totalPage = parseInt(totalRec / perPage)+1}
			if (totalPage < 2 ) return ;
			if (curPage>totalPage){curPage=totalPage;}
			if (curPage<1){curPage=1;}
			if(totalPage>curPage + parseInt(n/2) && totalPage>n){
				if(curPage - parseInt(n/2)>=1) PageEndNum = curPage + parseInt(n/2);
				else PageEndNum = n;
			}else{
				PageEndNum = totalPage;
			}
			if(curPage - parseInt(n/2)>=1){
				if(curPage + parseInt(n/2)<=totalPage) PageStartNum = curPage - parseInt(n/2) - slice;
				else PageStartNum = (totalPage - n)>0?(totalPage - n + 1):1;
			}else{PageStartNum = 1;}
			
			var _wrap = $(this);
			if(curPage==1){
				_wrap.append(renderbutton(opts.firsttext,'number empty',curPage,totalPage,opts.callback));
				_wrap.append(renderbutton(opts.prevtext,'number empty',curPage,totalPage,opts.callback));
			}else if(curPage==2){
				_wrap.append(renderbutton(opts.firsttext,'number empty',1,totalPage,opts.callback));
				_wrap.append(renderbutton(opts.prevtext,'number',1,totalPage,opts.callback));
			}else{
				_wrap.append(renderbutton(opts.firsttext,'number',1,totalPage,opts.callback));
				_wrap.append(renderbutton(opts.prevtext,'number',curPage-1,totalPage,opts.callback));
			}
			for(var i=PageStartNum;i<=PageEndNum;i++){
				if(i==curPage){
					_wrap.append(renderbutton(i,'number current',i,totalPage,opts.callback));
				}else{
					_wrap.append(renderbutton(i,'number',i,totalPage,opts.callback));
				}
			}
			if(curPage==totalPage){
				_wrap.append(renderbutton(opts.nexttext,'number empty',curPage,totalPage,opts.callback));
				_wrap.append(renderbutton(opts.lasttext,'number empty',curPage,totalPage,opts.callback));
			}else if(curPage==totalPage-1){
				_wrap.append(renderbutton(opts.nexttext,'number',curPage+1,totalPage,opts.callback));
				_wrap.append(renderbutton(opts.lasttext,'number empty',totalPage,totalPage,opts.callback));
			}else{
				_wrap.append(renderbutton(opts.nexttext,'number',curPage+1,totalPage,opts.callback));
				_wrap.append(renderbutton(opts.lasttext,'number',totalPage,totalPage,opts.callback));
			}
            $('a', _wrap).hover(
			function() { $(this).addClass('hover').css("cursor","pointer"); },
			function() { $(this).removeClass('hover').css("cursor","auto"); }
			);
        });
    };

	function renderbutton(label,css,pagenumber,pagecount,callback){
			var btn = $('<a />').html(label).addClass(css);
			if (typeof(callback) === 'function')
			{
				btn.bind('click', function() { callback(pagenumber);});
			}
			return btn;
	}

    $.fn.pager.defaults = {
        listnum: 7,
        totalrecords: 1,
		pagesize: 5,
		pageindex: 3,
		firsttext: '&laquo; First',
		lasttext: 'Last &raquo;',
		prevtext: '&laquo; Previous',
		nexttext: 'Next &raquo;'
    };

})(jQuery);