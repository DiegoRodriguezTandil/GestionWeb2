<?php

namespace app\controllers;

use Yii;
use yii\rest\Controller;
use app\models\LoginForm;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\ContentNegotiator;
use yii\filters\AccessControl;
use yii\web\Response;

/**
 * Description of UserController
 *
 * @author diego
 */
class UserController  extends Controller {
    
    
    public function behaviors()
    {
/*        
        $behaviors = parent::behaviors();
        
        $behaviors['authenticator'] = [
            'class' => HttpBearerAuth::className(),
            'except' => ['login'],
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
*/        

        return
        \yii\helpers\ArrayHelper::merge(parent::behaviors(), [
            'authenticator' => [
                'class' => HttpBearerAuth::className(),
                'except' => ['login'],
            ],
            'contentNegotiator' => [
                'class' => ContentNegotiator::className(),
                'formats' => [
                    'application/json' => Response::FORMAT_JSON,
                ],
            ],
            'corsFilter' => [
                'class' => \yii\filters\Cors::className(),
            ],
        ]);
        
        
    }
    
    

    public function actionLogin()
    {               
        if (!\Yii::$app->user->isGuest) {
            // Already logged
            Yii::$app->user->logout();
        }

        $model = new LoginForm();
        $model->username = Yii::$app->request->post('username');
        $model->password = Yii::$app->request->post('password');
        $model->rememberMe = False;
        if ($model->login()) {            
            return ['access_token' => Yii::$app->user->identity->getAuthKey()];
        }
        else {
//            $model->validate();
            // Model not implemented error
//            Yii::$app->response->statusCode = 401;
//            return ['access_token' => 1];
            return;
        }
    }

    public function actionChangePassword()
    {
        return [
            'message' => 'PUTO',
        ];            
    }
    
    public function actionLogout()
    {
        Yii::$app->user->logout();
    }
    
}
