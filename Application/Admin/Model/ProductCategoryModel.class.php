<?php

namespace Admin\Model;
use Think\Model;

class ProductCategoryModel extends Model{

    protected $_validate = array(
        array('name', 'require', '标识不能为空', self::EXISTS_VALIDATE, 'regex', self::MODEL_BOTH),
        array('name', '', '标识已经存在', self::VALUE_VALIDATE, 'unique', self::MODEL_BOTH),
        array('title', 'require', '名称不能为空', self::MUST_VALIDATE , 'regex', self::MODEL_BOTH),
    	array('meta_title', '1,50', '网页标题不能超过50个字符', self::VALUE_VALIDATE , 'length', self::MODEL_BOTH),
    	array('keywords', '1,255', '网页关键字不能超过255个字符', self::VALUE_VALIDATE , 'length', self::MODEL_BOTH),
    	array('meta_title', '1,255', '网页描述不能超过255个字符', self::VALUE_VALIDATE , 'length', self::MODEL_BOTH),
    );

    protected $_auto = array(
        array('create_time', NOW_TIME, self::MODEL_INSERT),
        array('update_time', NOW_TIME, self::MODEL_BOTH),
        array('status', '1', self::MODEL_BOTH),
    );

    /**
     * 获取分类详细信息
     * @param  milit   $id 分类ID或标识
     * @param  boolean $field 查询字段
     * @return array     分类信息
     * @author 麦当苗儿 <zuojiazi@vip.qq.com>
     */
    public function info($id, $field = true){
        /* 获取分类信息 */
        $map = array();
        if(is_numeric($id)){ //通过ID查询
            $map['id'] = $id;
        } else { //通过标识查询
            $map['name'] = $id;
        }
        return $this->field($field)->where($map)->find();
    }

    public function getTree($id = 0, $field = true){
        /* 获取当前分类信息 */
        if($id){
            $info = $this->info($id);
            $id   = $info['id'];
        }

        /* 获取所有分类 */
        $map  = array('status' => array('gt', -1));
        $list = $this->field($field)->where($map)->order('sort')->select();
        foreach($list as $key => $value){
            $list[$key]['tree'] = 0;
            $pid = $value['pid'];
            while($pid){
                $list[$key]['tree'] = $list[$key]['tree'] + 1;
                foreach($list as $k => $v){
                    if($pid == $v['id']){
                        $pid = $v['pid'];
                        break;
                    }
                }
            }
        }
        $list = list_to_tree($list, $pk = 'id', $pid = 'pid', $child = '_', $root = $id);

        /* 获取返回数据 */
        if(isset($info)){ //指定分类则返回当前分类极其子分类
            $info['_'] = $list;
        } else { //否则返回所有分类
            $info = $list;
        }
        
        return $info;
    }

    /**
     * 更新分类信息
     * @return boolean 更新状态
     * @author 麦当苗儿 <zuojiazi@vip.qq.com>
     */
    public function update(){
        $data = $this->create();
        if(!$data){ //数据对象创建错误
            return false;
        }

        /* 添加或更新数据 */
        if(empty($data['id'])){
            $res = $this->add();
        }else{
            $res = $this->save();
        }

        //更新分类缓存
        S('sys_category_list', null);

        /* 添加或更新数据 */
        if(empty($data['id'])){
            //记录行为
            action_log('add_product_category', 'productcategory', $data['id'] ? $data['id'] : $res, UID);
        }else{
            //记录行为
            action_log('update_product_category', 'productcategory', $data['id'] ? $data['id'] : $res, UID);
        }

        return $res;
    }

    public function getCategory($pid){
        /* 获取分类信息 */
        $map = array();
        $map['pid'] = $pid;
        return $this->where($map)->order('sort')->select();
    }

    /**
    * 获取参数的所有父级分类
    * @param int $cid 分类id
    * @return array 参数分类和父类的信息集合
    * @author huajie <banhuajie@163.com>
    */
    public function getParentCategory($pid){
        if(empty($pid)){
            return false;
        }
        $cates  =   M('ProductCategory')->field('id,title,pid')->select();
        $res   =   array();
        while($pid){
            foreach ($cates as $key=>$cate){
                if($cate['id'] == $pid){
                    $pid = $cate['pid'];
                    array_unshift($res, $cate);	//将父分类插入到数组第一个元素前
                }
            }
        }
        array_unshift($res, array('id'=>0,'title'=>'首页','pid' => 0));
        return $res;
    }
}
