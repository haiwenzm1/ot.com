<?php

namespace Admin\Model;
use Think\Model;

class PictureRecordModel extends Model{
    
    protected $_validate = array(
        array('path','require','图片路径必须'),    //默认情况下用正则进行验证
        array('name','require','图片名称必须'),    //默认情况下用正则进行验证
        array('oname','require','图片原名必须'),   //默认情况下用正则进行验证
        array('size','require','图片大小必须！'),    //默认情况下用正则进行验证
        array('source','require','图片来源必须！'),  //默认情况下用正则进行验证
        array('type','require','图片类型必须')     //默认情况下用正则进行验证
    );
    
    public function addPicture($rid,$path,$name,$oname,$size,$source,$type,$uid){
        $data = array();
        
        $data['rid'] = $rid;
        $data['path'] = $path;
        $data['name'] = $name;
        $data['oname'] = $oname;
        $data['size'] = $size;
        $data['source'] = $source;
        $data['type'] = $type;
        $data['title'] = '';
        $data['description'] = '';
        $data['status'] = 1;
        $data['creator'] = $uid;
        $data['ctime'] = time();
        $data['updater'] = $uid;
        $data['utime'] = time();
        $data['version'] = 0;
        
        if($this->create($data)){
            $result = $this->add($data); // 写入数据到数据库
            if($result){
                return  array('code'=>1,'info'=>'上传图片'.$name.'成功,id='.$result);
            }
        }else{
            return  array('code'=>0,'info'=>'上传图片'.$name.'失败,'.$this->getError());
        }
    }
}