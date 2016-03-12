<?php 

namespace app\controllers;

use yii\rest\ActiveController;
//use yii\filters\auth\CompositeAuth;
//use yii\filters\auth\HttpBasicAuth;
use yii\filters\auth\HttpBearerAuth;
//use yii\filters\auth\QueryParamAuth;
use yii\filters\ContentNegotiator;
use yii\web\Response;


class CiudadController extends ActiveController
{
    public $modelClass = 'app\models\Ciudad';  
    public $serializer = [
        'class' => 'yii\rest\Serializer',
        'collectionEnvelope' => 'items',
    ];        
    
    public function behaviors()
    {
        $behaviors = parent::behaviors();
        
        $behaviors['authenticator'] = [
            'class' => HttpBearerAuth::className(),
        ];
        
        $behaviors['contentNegotiator'] = [
            'class' => ContentNegotiator::className(),
            'formats' => [
                'application/json' => Response::FORMAT_JSON,
            ],
        ];        
        
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
        ];
                
        
        return $behaviors;        
    }
    
}