<?php

namespace Admin\Controller;

class ProductController extends AdminController {

    public function index(){
        $this->meta_title = '产品列表';
        $this->display();
    }

    public function add(){
        $this->meta_title = '新增产品';
        $tree = D('ProductCategory')->getTree(0,'id,name,title,sort,pid,status,islast');
        $this->assign('tree', $tree);
        $this->display();
    }

    /**
     * 显示分类树，仅支持内部调
     * @param  array $tree 分类树
     * @author 麦当苗儿 <zuojiazi@vip.qq.com>
     */
    public function tree($tree = null){
       // C('_SYS_GET_PRODUCT_CATEGORY_TREE_') || $this->_empty();
        $this->assign('tree', $tree);
        $this->display('tree');
    }
   
}
