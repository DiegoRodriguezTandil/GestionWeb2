<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "TipoFormulario".
 *
 * @property integer $id
 * @property string $descripcion
 *
 * @property Talonario[] $talonarios
 */
class TipoFormulario extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'TipoFormulario';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['descripcion'], 'string', 'max' => 45]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'descripcion' => 'Descripcion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTalonarios()
    {
        return $this->hasMany(Talonario::className(), ['TipoFormulario_id' => 'id']);
    }
}
