<?php

namespace Admin\Controller;

class ProductController extends AdminController {

    public function index() {
        $this->meta_title = '产品列表';
        $this->display();
    }

    public function add() {
        if(IS_POST){
            $data = array();
            $data['title'] = trim(I('title')) ? trim(I('title')) : $this->error('产品名称不能为空');
            $data['cat_id'] = trim(I('catId')) ? trim(I('catId')) : $this->error('请选择分类');
            $ProductCategoryInfo = D('ProductCategory')->info($data['cat_id'],"title");
            $data['cat_name'] = $ProductCategoryInfo['title'];
            $data['status'] = 0;
            $data['creator'] = $data['updater'] = UID;
            $data['create_time'] = $data['update_time'] = time();

print_r($data);
            // if (false !== D('ProductCategory')->add($data)) {
            //     D('OperateLog')->addOperateLog(CONTROLLER_NAME . '/' . ACTION_NAME, '新增产品成功！' . json_encode($data), 1, UID);
            //     $this->success('新增成功！', U('index', array('pid' => $data['pid'])));
            // } else {
            //     $error = D('ProductCategory')->getError();
            //     $error = empty($error) ? '未知错误！' : $error;
            //     D('OperateLog')->addOperateLog(CONTROLLER_NAME . '/' . ACTION_NAME, '新增产品分类失败！' . json_encode($data) . $error, 0, UID);
            //     $this->error($error);
            // }
        }else{
            $this->meta_title = '新增产品';
            $tree = D('ProductCategory')->getTree(0, 'id,name,title,sort,pid,status,islast');
            $this->assign('tree', $tree);
            $this->display();
        }
    }

    public function tree($tree = null) {
        $this->assign('tree', $tree);
        $this->display('tree');
    }

}
