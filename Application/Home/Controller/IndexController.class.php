<?php
// +----------------------------------------------------------------------
// | OneThink [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013 http://www.onethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: 麦当苗儿 <zuojiazi@vip.qq.com> <http://www.zjzit.cn>
// +----------------------------------------------------------------------

namespace Home\Controller;
use OT\DataDictionary;

/**
 * 前台首页控制器
 * 主要获取首页聚合数据
 */
class IndexController extends HomeController {

	//系统首页
    public function index(){
        $this->pageTitle = C('WEB_SITE_TITLE');
        $this->display();
    }

    public function whoWeAre(){    
        $this->pageTitle = "品牌介绍";    
        $this->display();
    }

    public function howWeWork(){   
        $this->pageTitle = "品牌详情";      
        $this->display();
    }  

    public function whereWeAre(){   
        $this->pageTitle = "品牌来源";      
        $this->display();
    }  
}