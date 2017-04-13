<?php

namespace Admin\Model;
use Think\Model;

class OperateLogModel extends Model {

    protected $_validate = array(
        array('model', 'require', '触发行为的表是必须的'),
        array('remark', 'require', '日志备注是必须的'),
    );

    public function addOperateLog($model, $remark, $status, $uid) {
        $data = array();
        $data['model'] = $model;
        $data['remark'] = $remark;
        $data['action_ip'] = get_client_ip(1);
        $data['status'] = $status;
        $data['creator'] = $uid;
        $data['create_time'] = time();

        if ($this->create($data)) {
            $result = $this->add($data);
            if ($result) {
                return array('code' => 1, 'info' => $result);
            }
        } else {
            return array('code' => 0, 'info' => $this->getError());
        }
    }
}