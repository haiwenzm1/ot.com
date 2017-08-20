<?php

namespace Admin\Controller;

class ProductController extends AdminController {

    public function index() {
        $this->meta_title = '产品列表';
        
        $total = M('Product')->count();
        
        //分页
        if( isset($REQUEST['r']) ){
            $listRows = (int)$REQUEST['r'];
        }else{
            $listRows = C('LIST_ROWS') > 0 ? C('LIST_ROWS') : 25;
        }

        $page = new \Think\Page($total, $listRows, $REQUEST);

        if($total>$listRows){
            $page->setConfig('theme','%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% %HEADER%');
        }

        $p = $page->show();

        $list =  M('Product')->limit($page->firstRow.','.$page->listRows)->select();
        $total = count( $list);

        $this->assign('_page', $p? $p: '');
        $this->assign('_total',$total);
        $this->assign('_list', $list);
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

            if (false !== D('Product')->add($data)) {
                D('OperateLog')->addOperateLog(CONTROLLER_NAME . '/' . ACTION_NAME, '新增产品成功！' . json_encode($data), 1, UID);
                $this->success('新增成功！', U('index', array('pid' => $data['pid'])));
            } else {
                $error = D('Product')->getError();
                $error = empty($error) ? '未知错误！' : $error;
                D('OperateLog')->addOperateLog(CONTROLLER_NAME . '/' . ACTION_NAME, '新增产品失败！' . json_encode($data) . $error, 0, UID);
                $this->error($error);
            }
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
