<?php

namespace Admin\Controller;

class ProductController extends AdminController {

    public function index(){
        $this->meta_title = '产品管理';
        $this->display();
    }
   
}
