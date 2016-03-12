<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "Ciudad".
 *
 * @property integer $id
 * @property string $Localidad
 * @property string $codigoPostal
 * @property integer $Provincia_id
 *
 * @property Provincia $provincia
 * @property Talonario[] $talonarios
 */
class Ciudad extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'Ciudad';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['Provincia_id'], 'required'],
            [['Provincia_id'], 'integer'],
            [['Localidad'], 'string', 'max' => 150],
            [['codigoPostal'], 'string', 'max' => 45]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'Localidad' => 'Localidad',
            'codigoPostal' => 'Codigo Postal',
            'Provincia_id' => 'Provincia ID',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getProvincia()
    {
        return $this->hasOne(Provincia::className(), ['id' => 'Provincia_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTalonarios()
    {
        return $this->hasMany(Talonario::className(), ['Ciudad_id' => 'id']);
    }
}
