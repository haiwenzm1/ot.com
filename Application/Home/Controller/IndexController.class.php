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
        $this->pageTitle = "欧瑞家 Orange Garten - 百年自制自营瑞士超市 - 我们尽心 你尽兴";
		$this->pageKeywords = "欧瑞家,Orange Garten,Migros,世界500强,瑞士超市";
		$this->pageDescription = "欧瑞家源于瑞士最为推崇的零售品牌Migros，经过全球最高的质量安全体系和食品安全标准，代表瑞士的首席品牌，为您带来更好更健康的生活.";
        $this->display();
    }

    public function whoWeAre(){       
        $this->pageTitle = "欧瑞家 Orange Garten - 品牌介绍 - 我们尽心 你尽兴";
		$this->pageKeywords = "瑞士最大的零售公司,Orange Garten,Migros";
		$this->pageDescription = "Orange Garten的故事始于瑞士。1925年Gottlieb Duttweiler创立了Migros，该公司现拥有600多家店面和10万多名员工， 成为瑞士最大的零售公司。 Migros代表着瑞士的价值观，如信任、可靠性、质量、新鲜度、物有所值和可持续性。";
        $this->display('whoWeAre');
    }

    public function howWeWork(){       
        $this->pageTitle = "欧瑞家 Orange Garten - 品牌详情 - 我们尽心 你尽兴";
		$this->pageKeywords = "Orange Garten企业文化,Orange Garten保护环境";
		$this->pageDescription = "Migros坚持可持续发展计划。致力于保护环境，要求可持续消费，以有约、 束力的承诺和具体的计划，为社会和员工、为提供健康的生活方式，采取一个社会认可的做法。负责是Orange Garten企业文化的一部分";
        $this->display('howWeWork');
    }  

    public function whereWeAre(){       
        $this->pageTitle = "欧瑞家 Orange Garten - 品牌来源 - 我们尽心 你尽兴";
		$this->pageKeywords = "Gottlieb Duttweiler,Migros,品牌来源,瑞士价值观";
		$this->pageDescription = "Gottlieb Duttweiler是Migros的创始人，也是一个非常有远见的企业家。他的想法是通过让人们接受传统的瑞士价值观，包括可信度、可靠性、真实性、诚实、健康的生活方式和优质的生活质量，以获得生命力和营养";
		$this->display('whereWeAre');
    }  
}