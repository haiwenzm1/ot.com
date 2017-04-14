<?php

namespace Admin\Controller;

class ProductCategoryController extends AdminController {

    public function index() {
        $pid = I('pid') ? I('pid') : 0;
        $tree = D('ProductCategory')->getCategory($pid);
        $breadcrumb = D('ProductCategory')->getParentCategory($pid);
        $this->assign('list', $tree);
        $this->assign('pid', $pid);
        $this->assign('breadcrumb', $breadcrumb);
        $this->meta_title = '产品分类';
        $this->display();
    }

    public function tree($tree = null) {
        $this->assign('tree', $tree);
        $this->display('tree');
    }

    public function trees($tree = null) {
        $this->assign('tree', $tree);
        $this->display('trees');
    }

    /* 编辑分类 */
    public function edit() {
        if (IS_POST) {
            $data = array();
            $data['id'] = trim(I('id'));
            $data['picid'] = trim(I('picid'));
            $data['title'] = trim(I('title'));
            $data['nickname'] = trim(I('nickname'))?trim(I('nickname')):$data['title'];
            $data['meta_title'] = trim(I('meta_title'));
            $data['keywords'] = trim(I('keywords'));
            $data['description'] = trim(I('description'));
            $data['sort'] = trim(I('sort'));
            $data['islast'] = trim(I('islast'));
            $data['status'] = trim(I('status'));
            $data['updater'] = UID;
            $data['update_time'] = time();
           
            if (false !== D('ProductCategory')->update($data)) {
                D('OperateLog')->addOperateLog(CONTROLLER_NAME . '/' . ACTION_NAME, json_encode($_POST), 1, UID);
                $this->success('编辑成功！', U('index'));
            } else {
                $error = D('ProductCategory')->getError();
                $error = empty($error) ? '未知错误！' : $error;
                D('OperateLog')->addOperateLog(CONTROLLER_NAME . '/' . ACTION_NAME, json_encode($_POST) . $error, 0, UID);
                $this->error($error);
            }
        } else {
            $pid = intval(I('pid')) ? intval(I('pid')) : 0;
            $cate = '';
            if ($pid) {
                $cate = D('ProductCategory')->info($pid, 'id,name,title,status');
                if (!($cate && 1 == $cate['status'])) {
                    $this->error('指定的上级分类不存在或被禁用！');
                }
                $breadcrumb = D('ProductCategory')->getParentCategory($pid);
                $this->assign('breadcrumb', $breadcrumb);
            }
            $info = $id ? D('ProductCategory')->info($id) : '';
            $this->assign('info', $info);
            $this->assign('category', $cate);
            $this->meta_title = '编辑分类';
            $this->display();
        }
    }

    /* 新增分类 */
    public function add() {
        if (IS_POST) { //提交表单
            $data = array();
            $data['pid'] = trim(I('pid')) ? trim(I('pid')) : 0;
            $data['title'] = trim(I('title')) ? trim(I('title')) : $this->error('分类名称不能为空');
            $data['nickname'] = trim(I('nickname')) ? trim(I('nickname')) : trim(I('title'));
            $data['meta_title'] = trim(I('meta_title'));
            $data['keywords'] = trim(I('keywords'));
            $data['description'] = trim(I('description'));
            $data['sort'] = trim(I('sort')) ? trim(I('sort')) : 0;
            $data['islast'] = trim(I('islast'));
            $data['status'] = trim(I('status'));
            $data['cover'] = trim(I('picid')) ? trim(I('picid')) : 0;
            $breadcrumb = D('ProductCategory')->getParentCategory($data['pid']);
            $category = '';
            foreach ($breadcrumb as $e) {
                if ($e[id]) {
                    $category = $category . $e['title'];
                }
            }
            $data['name'] = get_pinyin($category . $data['title'], 1);
            $data['creator'] = $data['updater'] = UID;
            $data['create_time'] = $data['update_time'] = time();

            if (false !== D('ProductCategory')->update($data)) {
                D('OperateLog')->addOperateLog(CONTROLLER_NAME . '/' . ACTION_NAME, '新增产品成功！' . json_encode($data), 1, UID);
                $this->success('新增成功！', U('index', array('pid' => $data['pid'])));
            } else {
                $error = D('ProductCategory')->getError();
                $error = empty($error) ? '未知错误！' : $error;
                D('OperateLog')->addOperateLog(CONTROLLER_NAME . '/' . ACTION_NAME, '新增产品分类失败！' . json_encode($data) . $error, 0, UID);
                $this->error($error);
            }
        } else {
            $pid = intval(I('pid')) ? intval(I('pid')) : 0;
            $tree = D('ProductCategory')->getTree(0, 'id,name,title,sort,pid,status,islast');
            $this->assign('tree', $tree);
            $this->assign('pid', $pid);
            $this->meta_title = '新增分类';
            $this->display();
        }
    }

    /**
     * 删除一个分类
     * @author huajie <banhuajie@163.com>
     */
    public function remove() {
        $cate_id = I('id');
        if (empty($cate_id)) {
            $this->error('参数错误!');
        }

        //判断该分类下有没有子分类，有则不允许删除
        $child = M('ProductCategory')->where(array('pid' => $cate_id))->field('id')->select();
        if (!empty($child)) {
            $this->error('请先删除该产品分类下的子分类');
        }

        //判断该分类下有没有内容
        $document_list = M('Product')->where(array('category_id' => $cate_id))->field('id')->select();
        if (!empty($document_list)) {
            $this->error('请先删除该产品分类下的商品（包含回收站）');
        }

        //删除该分类信息
        $res = M('ProductCategory')->delete($cate_id);
        if ($res !== false) {
            //记录行为
            action_log('delete_product_category', 'productcategory', $cate_id, UID);
            $this->success('删除产品分类成功！');
        } else {
            $this->error('删除产品分类失败！');
        }
    }

    public function upload() {
        $file = $_FILES["file"];
        $rid = intval(I('rid'));
        $source = intval(I('source'));
        $type = intval(I('type'));

        if ($file["error"] > 0) {
            return array('code' => 0, 'info' => $file["error"]);
        } else {
            $upload_conf = C('PICTURE_UPLOAD');
            $rootPaths = $upload_conf['rootPaths'];
            $savePaths = $upload_conf['savePaths'];
            $maxSize = $upload_conf['maxSize'];

            if ($file['size'] > $maxSize) {
                $this->ajaxReturn(array('code' => 0, 'info' => '上传文件大于2M'));
            }

            $dir = $rootPaths . $savePaths . '/' . CONTROLLER_NAME . '/' . date('Ymd');

            if (!is_dir($dir)) {
                if (!mkdir($dir, 0777, true)) {
                    D('OperateLog')->addOperateLog('ProductCategory/upload', '上传图片' . $file['name'] . '失败,创建文件夹' . $dir . '失败', 0, UID);
                    $this->ajaxReturn(array('code' => 0, 'info' => '创建目录失败', 'url' => $dir));
                }
            }

            $file_ext = end(explode('.', $file['name']));
            $new_file = md5(uniqid() . rand(0000, 9999) . rand(0000, 9999)) . '.' . $file_ext;
            $new_file_dir = $dir . '/' . $new_file;
            $new_file_url = $savePaths . '/' . CONTROLLER_NAME . '/' . date('Ymd') . '/' . $new_file;

            /* 移动文件 */
            if (!move_uploaded_file($file['tmp_name'], $new_file_dir)) {
                D('OperateLog')->addOperateLog('ProductCategory/upload', '上传图片' . $file['name'] . '失败,移动文件失败', 0, UID);
                $this->ajaxReturn(array('code' => 0, 'info' => '上传失败'));
            }

            $result = D('PictureRecord')->addPicture('ProductCategory/upload', $rid, $new_file_url, $new_file, $file['name'], $file['size'], $source, $type, UID);

            if ($result['code']) {
                $this->ajaxReturn(array('code' => 1, 'info' => '上传成功', 'url' => $new_file_url, 'pic_id' => $result['id']));
            } else {
                $this->ajaxReturn($result);
            }
        }
    }
}
