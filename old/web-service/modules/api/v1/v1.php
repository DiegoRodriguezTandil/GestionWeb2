<?php

namespace app\modules\api\v1;

class v1 extends \yii\base\Module
{
    public $controllerNamespace = 'app\modules\api\v1\controllers';

    public function init()
    {
        parent::init();

        \Yii::$app->user->enableSession = false;
    }
}
