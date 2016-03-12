<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "CondicionVenta".
 *
 * @property integer $id
 * @property string $condicion
 *
 * @property Talonario[] $talonarios
 */
class CondicionVenta extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'CondicionVenta';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['condicion'], 'string', 'max' => 45]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'condicion' => 'Condicion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTalonarios()
    {
        return $this->hasMany(Talonario::className(), ['CondicionVenta_id' => 'id']);
    }
}
