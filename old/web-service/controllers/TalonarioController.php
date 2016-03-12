<?php 

namespace app\controllers;

use yii\rest\ActiveController;

class TalonarioController extends ActiveController
{
    public $modelClass = 'app\models\Talonario';  
    public $serializer = [
        'class' => 'yii\rest\Serializer',
        'collectionEnvelope' => 'items',
    ];    
    
    public function behaviors()
    {
        return
        \yii\helpers\ArrayHelper::merge(parent::behaviors(), [
            'corsFilter' => [
                'class' => \yii\filters\Cors::className(),
            ],
        ]);
    }
    
}