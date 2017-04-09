alter table ot_operate_log add column is_delete int(11) default 0 comment "是否删除 1-是 0-否" after status;
UPDATE `ot_com`.`ot_operate_log` SET `action_ip`='167772674' WHERE `id`='1';