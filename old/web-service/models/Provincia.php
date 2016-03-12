<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "Provincia".
 *
 * @property integer $id
 * @property string $Provincia
 * @property string $abreviatura
 *
 * @property Ciudad[] $ciudads
 */
class Provincia extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'Provincia';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id'], 'required'],
            [['id'], 'integer'],
            [['Provincia'], 'string', 'max' => 45],
            [['abreviatura'], 'string', 'max' => 4]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'Provincia' => 'Provincia',
            'abreviatura' => 'Abreviatura',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCiudads()
    {
        return $this->hasMany(Ciudad::className(), ['Provincia_id' => 'id']);
    }
}
