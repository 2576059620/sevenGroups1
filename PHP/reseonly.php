<?php  
	$type = $_REQUEST['type'];
	$str = '';
	if ($type == 'home_banner') {//首页幻灯
		$str = '{
    "status": "1",
    "datas": [
        {
            "path": "upload/indexpic/14658135593752293.jpg",
            "sort": 1,
            "url": "http://www.roseonly.com.cn/list/xianhuameigui.html"
        },
        {
            "path": "upload/indexpic/14924247528765153.jpg",
            "sort": 2,
            "url": "http://www.roseonly.com.cn/list/ysquanshiai.html"
        },
        {
            "path": "upload/indexpic/14373627374249540.jpg",
            "sort": 3,
            "url": "http://www.roseonly.com.cn/list/meiguizhubao.html"
        },
        {
            "path": "upload/indexpic/14980966505496025.jpg",
            "sort": 4,
            "url": "http://www.roseonly.com.cn/list/xingzuo.html"
        },
        {
            "path": "upload/indexpic/14869728064086373.jpg",
            "sort": 5,
            "url": "http://www.roseonly.com.cn/list/yinyuemeigui.html"
        }
    ]
}';
	}elseif ($type == 'home_list') {//首页图片列表
		$str = '{
    "imgData": [
        {
            "id": 12,
            "imgpath": "upload/mobileindex/14512354781953046.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 1,
            "title": "经典朱砂-19支",
            "updatetime": 1451235478000,
            "updatetimeString": "2015-12-28 00:57:58",
            "updateuser": 431667,
            "url": "http://www.roseonly.com.cn/item/12.html"
        },
        {
            "id": 69,
            "imgpath": "upload/mobileindex/14512368604402196.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 2,
            "title": "经典永续 - 经典许愿",
            "updatetime": 1451370317000,
            "updatetimeString": "2015-12-29 14:25:17",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/item/2079.html"
        },
        {
            "id": 14,
            "imgpath": "upload/mobileindex/14512355477874247.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 3,
            "title": "音乐玫瑰许愿",
            "updatetime": 1451235547000,
            "updatetimeString": "2015-12-28 00:59:07",
            "updateuser": 431667,
            "url": "http://www.roseonly.com.cn/item/445.html"
        },
        {
            "id": 44,
            "imgpath": "upload/mobileindex/14512365812119077.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 6,
            "title": "恒久真爱 - 恒久朱砂",
            "updatetime": 1452047511000,
            "updatetimeString": "2016-01-06 10:31:51",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/item/2087.html"
        },
        {
            "id": 18,
            "imgpath": "upload/mobileindex/14512356444095573.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 7,
            "title": "宠爱嫣红盛开版-中型方盒",
            "updatetime": 1452047500000,
            "updatetimeString": "2016-01-06 10:31:40",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/item/248.html"
        },
        {
            "id": 24,
            "imgpath": "upload/mobileindex/14512358682394325.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 8,
            "title": "柔情嫣红簇拥版-小型圆盒",
            "updatetime": 1452047490000,
            "updatetimeString": "2016-01-06 10:31:30",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/item/453.html"
        },
        {
            "id": 22,
            "imgpath": "upload/mobileindex/14512358409761541.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 9,
            "title": "一生一世嫣红-小型方盒大小版",
            "updatetime": 1452047480000,
            "updatetimeString": "2016-01-06 10:31:20",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/item/292.html"
        },
        {
            "id": 32,
            "imgpath": "upload/mobileindex/14512361826679681.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 11,
            "title": "全是爱-倾心盛开版嫣红",
            "updatetime": 1452067873000,
            "updatetimeString": "2016-01-06 16:11:13",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/item/3062.html"
        },
        {
            "id": 35,
            "imgpath": "upload/mobileindex/14512363608931664.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 12,
            "title": "爱之礼赞-许愿之光项链",
            "updatetime": 1452067865000,
            "updatetimeString": "2016-01-06 16:11:05",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/item/457.html"
        },
        {
            "id": 21,
            "imgpath": "upload/mobileindex/14512357972968068.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 14,
            "title": "全世爱倾城嫣红-中型圆盒",
            "updatetime": 1452067845000,
            "updatetimeString": "2016-01-06 16:10:45",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/item/311.html"
        },
        {
            "id": 45,
            "imgpath": "upload/mobileindex/14512366185062571.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 15,
            "title": "经典永续 - 经典朱砂",
            "updatetime": 1452067836000,
            "updatetimeString": "2016-01-06 16:10:36",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/item/2676.html"
        },
        {
            "id": 31,
            "imgpath": "upload/mobileindex/14512361555852152.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 16,
            "title": "全是爱-倾城盛开版红粉",
            "updatetime": 1451236155000,
            "updatetimeString": "2015-12-28 01:09:15",
            "updateuser": 431667,
            "url": "http://www.roseonly.com.cn/item/3111.html"
        },
        {
            "id": 72,
            "imgpath": "upload/mobileindex/14407374675254014.jpg",
            "isactive": 1,
            "protypeid": 1,
            "sort": 16,
            "title": "送爱人",
            "url": "http://www.roseonly.com.cn/loveroseonly/list/airen.html"
        },
        {
            "id": 73,
            "imgpath": "upload/mobileindex/14407375146671744.jpg",
            "isactive": 1,
            "protypeid": 1,
            "sort": 17,
            "title": "送亲人",
            "url": "http://www.roseonly.com.cn/loveroseonly/list/qinren.html"
        },
        {
            "id": 83,
            "imgpath": "upload/mobileindex/14512371295295136.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 17,
            "title": "经典初心19支",
            "updatetime": 1451237129000,
            "updatetimeString": "2015-12-28 01:25:29",
            "updateuser": 431667,
            "url": "http://www.roseonly.com.cn/item/13.html"
        },
        {
            "id": 74,
            "imgpath": "upload/mobileindex/14407375506162126.jpg",
            "isactive": 1,
            "protypeid": 1,
            "sort": 18,
            "title": "送朋友",
            "url": "http://www.roseonly.com.cn/loveroseonly/list/pengyou.html"
        },
        {
            "id": 36,
            "imgpath": "upload/mobileindex/14512363966833718.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 19,
            "title": "满满的爱-柔情大小版嫣红",
            "updatetime": 1452046449000,
            "updatetimeString": "2016-01-06 10:14:09",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/item/636.html"
        },
        {
            "id": 64,
            "imgpath": "upload/mobileindex/14400670350687003.jpg",
            "isactive": 1,
            "protypeid": 1,
            "sort": 19,
            "title": "roseonly",
            "updatetime": 1440754253000,
            "updatetimeString": "2015-08-28 17:30:53",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/m/phone/mindex.html"
        },
        {
            "id": 81,
            "imgpath": "upload/mobileindex/14512370890458148.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 23,
            "title": "爱在满怀 - 怀抱朱砂19支",
            "updatetime": 1451237089000,
            "updatetimeString": "2015-12-28 01:24:49",
            "updateuser": 431667,
            "url": "http://www.roseonly.com.cn/item/349.html"
        },
        {
            "id": 34,
            "imgpath": "upload/mobileindex/14512363312855488.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 24,
            "title": "一生一世-宠爱盛开版嫣红",
            "updatetime": 1452046567000,
            "updatetimeString": "2016-01-06 10:16:07",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/item/228.html"
        },
        {
            "id": 39,
            "imgpath": "upload/mobileindex/14512364643228566.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 25,
            "title": "经典永续-经典情动19支",
            "updatetime": 1452046559000,
            "updatetimeString": "2016-01-06 10:15:59",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/item/14.html"
        },
        {
            "id": 70,
            "imgpath": "upload/mobileindex/14512368880984391.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 27,
            "title": "一生一世 - 宠爱盛开版湛蓝",
            "updatetime": 1451236888000,
            "updatetimeString": "2015-12-28 01:21:28",
            "updateuser": 431667,
            "url": "http://www.roseonly.com.cn/item/234.html"
        },
        {
            "id": 17,
            "imgpath": "upload/mobileindex/14519768283877975.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 28,
            "title": "爱之礼赞-朱砂项链",
            "updatetime": 1452046333000,
            "updatetimeString": "2016-01-06 10:12:13",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/item/552.html"
        },
        {
            "id": 13,
            "imgpath": "upload/mobileindex/14512355012809328.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 29,
            "title": "经典许愿-19支",
            "updatetime": 1452046341000,
            "updatetimeString": "2016-01-06 10:12:21",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/item/2064.html"
        },
        {
            "id": 63,
            "imgpath": "upload/mobileindex/14519768461422753.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 31,
            "title": "怦然心动",
            "updatetime": 1451976901000,
            "updatetimeString": "2016-01-05 14:55:01",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/item/2701.html"
        },
        {
            "id": 27,
            "imgpath": "upload/mobileindex/14512359440846359.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 32,
            "title": "一生一世-永生玫瑰",
            "updatetime": 1452046288000,
            "updatetimeString": "2016-01-06 10:11:28",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/list/yishengyishi.html"
        },
        {
            "id": 82,
            "imgpath": "upload/mobileindex/14460850117377622.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 33,
            "title": "珠宝季",
            "updatetime": 1450076104000,
            "updatetimeString": "2015-12-14 14:55:04",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/m/phone/scorpio.html"
        },
        {
            "id": 28,
            "imgpath": "upload/mobileindex/14401280092398201.jpg",
            "isactive": 1,
            "protypeid": 0,
            "sort": 37,
            "title": "杨幂",
            "updatetime": 1450076130000,
            "updatetimeString": "2015-12-14 14:55:30",
            "updateuser": 429655,
            "url": "http://www.roseonly.com.cn/loveroseonly/list/loveyongshenghua.html"
        }
    ]
}';
	}elseif ($type == "proDetail") {//商品详情
		$proId = $_REQUEST['proId'];
		$str = file_get_contents('http://www.roseonly.com.cn/pages/HtmlMobile/detail.htm?id='.$proId);
	}elseif ($type == 'categatory') {//分类
			$str = '{
    "status": "1",
    "datas": [
        {
            "title": "鲜花玫瑰",
            "id": 16,
            "proList":[
            	{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267416905823.png",
					"name":"玫瑰长盒",
					"id":9
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14963841266376537.jpg",
					"name":"玫瑰手捧",
					"id":9
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14963859539773299.jpg",
					"name":"花篮圆桶",
					"id":9
            	}
				
            ]
        },
        {
            "title": "鲜花玫瑰",
            "id": 20,
            "proList":[
            	{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267490675185.png",
					"name":"音乐玫瑰",
					"id":20
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14948337557327304.png",
					"name":"玫瑰熊",
					"id":20
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267508632013.png",
					"name":"玫瑰圆盒",
					"id":20
            	},	"img":"http://www.roseonly.com.cn/upload/syspic_new/14951809992681068.png",
					"name":"玫瑰方盒",
					"id":20
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267563836524.png",
					"name":"玫瑰心形盒",
					"id":20
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267581443008.png",
					"name":"玫瑰六角盒",
					"id":20
            	}
				
            ]
        },
        {
            "title": "鲜花玫瑰",
            "id": 17,
            "proList":[
            	{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267598827051.png",
					"name":"手链",
					"id":17
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14951777940049440.png",
					"name":"项链",
					"id":17
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267649481948.png",
					"name":"耳饰",
					"id":17
            	},	"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267671953955.png",
					"name":"戒指",
					"id":17
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14951778191095018.png",
					"name":"手镯",
					"id":17
            	}
            ]
        },
        {
            "title": "鲜花玫瑰",
            "id": 41,
            "proList":[
            	{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267693203946.png",
					"name":"手链",
					"id":41
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267713929421.png",
					"name":"项链",
					"id":41
            	},{
            		"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267742611593.png",
					"name":"耳饰",
					"id":41
            	},	"img":"http://www.roseonly.com.cn/upload/syspic_new/14942267772866849.png",
					"name":"手镯",
					"id":41
            	}
            ]
        }
    ]
}';
	}elseif ($type == 'categatory_list') {//分类-商品列表:鲜花玫瑰：16，永生玫瑰：20，玫瑰珠宝：17，玫瑰饰品：41，玫瑰长盒：9
		$categatoryId = $_REQUEST['categatoryId'];
		$pageIndex = $_REQUEST['pageIndex'];
		$str = file_get_contents('http://www.roseonly.com.cn/pages/HtmlMobile/productListWithRollImageOne1.htm?formtype=0&id='.$categatoryId.'&p='.$pageIndex.'&t=y&sort=');
	}elseif ($type == 'orderBy') {
		$order = $_REQUEST['order'];//销量：ps.allnum+desc 价格升序p.finalprice+asc 降序p.finalprice+desc 最新：p.id+desc   热卖：热卖
		$categatoryId = $_REQUEST['categatoryId'];
		$pageIndex = $_REQUEST['pageIndex'];
		$str = file_get_contents('http://www.roseonly.com.cn/pages/HtmlMobile/productListWithRollImageOne1.htm?formtype=0&id='.$categatoryId.'&p='.$pageIndex.'&t=y&sort='.$order);

	}
	echo "$str";
?>