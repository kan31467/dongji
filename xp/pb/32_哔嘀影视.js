{
"ua": "",



 "homeUrl": "https://www.bidiys.cc/",


  //"dcVipFlag": "true",
  //"pCfgJs": "http://www.rr520.cc/static/js/playerconfig.js",
 // "pCfgJsR": "[\\W|\\S|.]*?MacPlayerConfig.player_list[\\W|\\S|.]*?=([\\W|\\S|.]*?),MacPlayerConfig.downer_list",
  //"dcShow2Vip": {},
  //"dcPlayUrl": "true",

  "cateManual": {"南瓜电影":"nanguady","4K专区": "huiyuanzhuanqu","电影": "dianying","连续剧": "lianxuju","动漫": "dongman","综艺": "综艺"},



  "homeVodNode": "//div[contains(@class,'module-item-pic')]",

  "homeVodName":"/a/@title",

  "homeVodId": "/a/@href",

  "homeVodIdR": "/voddetail-(\\S+).html",

  "homeVodImg": "/img/@data-src",

 "homeVodMark": "",



//

  "cateUrl": "https://www.bidiys.cc/vodshow-{cateId}--hits------{catePg}---.html",

  "cateVodNode": "//div[contains(@class, 'module-item-pic')]",
  "cateVodName":"/a/@title",

  "cateVodId": "/a/@href",

  "cateVodIdR": "/voddetail-(\\S+).html",

  "cateVodImg": "/img/@data-src",

  "cateVodMark":  "",



//


  "dtUrl": "https://www.bidiys.cc/voddetail-{vid}.html",

  "dtNode": "//body",

  "dtName": "//div[@class='module-item-pic']/img[contains(@class,'lazyload')]/@alt",

  "dtImg":"//div[@class='module-item-pic']/img[contains(@class,'lazyload')]/@data-src",



 //"dtCate": "//ul[@class='moviedteail_list']/li[contains(text(),'类型')]/a/text()",
 //"dtYear": "//ul[@class='moviedteail_list']/li[contains(text(),'年份')]/a/text()",
 //"dtArea": "//ul[@class='moviedteail_list']/li[contains(text(),'地区')]/a/text()",
 // "dtActor": "//ul[@class='moviedteail_list']/li[contains(text(),'主演')]/a/text()",
 // "dtDirector": "//ul[@class='moviedteail_list']/li[contains(text(),'导演')]/a/text()",
 //"dtFromNode": "//div[contains(@class,'mi_paly_box')]//div[@class='ypxingq_t']",
 //"dtFromName": "/text()",



  "dtFromNode":"//div[2][@class='module-tab-content']//div//span",
  "dtFromName": "/text()",
  "dtFromNameR": "",
  "dtUrlNode": "//body",
  "dtUrlSubNode": "//div[@class='scroll-content']/a",
  "dtUrlId": "@href",
  "dtUrlIdR": "/vodplay-(\\S+).html",
  "dtUrlName": "//span/text()",
  "dtUrlNameR": "",
  "playUrl": "https://www.bidiys.cc/vodplay-{playUrl}.html",


 "searchUrl":"https://www.bidiys.cc/index.php/ajax/suggest?mid=1&wd={wd}&limit=10",
  
    "scVodNode": "json:list",
    "scVodName": "name",
    "scVodId": "id",
    "scVodIdR": "",
    "scVodImg": "pic",
    "scVodMark": ""
}


