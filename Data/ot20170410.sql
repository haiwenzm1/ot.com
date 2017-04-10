ALTER TABLE ot_product_category ADD COLUMN nickname VARCHAR(512) DEFAULT NULL COMMENT "别名" AFTER title;
ALTER TABLE `ot_com`.`ot_product_category` CHANGE `name` `name` VARCHAR(512) CHARSET utf8 COLLATE utf8_general_ci NOT NULL  COMMENT '分类名称';
