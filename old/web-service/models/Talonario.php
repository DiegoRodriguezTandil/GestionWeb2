<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "Talonario".
 *
 * @property integer $id
 * @property string $nroTalonario
 * @property string $nroFormulario
 * @property integer $TipoFormulario_id
 * @property string $fecha
 * @property string $razonSocial
 * @property string $domicilio
 * @property integer $CondicionVenta_id
 * @property string $importeNeto
 * @property string $importeAlicuota21
 * @property string $importeAlicuota105
 * @property string $importeTotal
 * @property integer $Ciudad_id
 * @property string $CAE
 *
 * @property CondicionVenta $condicionVenta
 * @property TipoFormulario $tipoFormulario
 * @property Ciudad $ciudad
 */
class Talonario extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'Talonario';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['TipoFormulario_id', 'CondicionVenta_id', 'Ciudad_id'], 'required'],
            [['TipoFormulario_id', 'CondicionVenta_id', 'Ciudad_id'], 'integer'],
            [['fecha'], 'safe'],
            [['importeNeto', 'importeAlicuota21', 'importeAlicuota105', 'importeTotal'], 'number'],
            [['nroTalonario'], 'string', 'max' => 20],
            [['nroFormulario'], 'string', 'max' => 45],
            [['razonSocial', 'domicilio', 'CAE'], 'string', 'max' => 255]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'nroTalonario' => 'Nro Talonario',
            'nroFormulario' => 'Nro Formulario',
            'TipoFormulario_id' => 'Tipo Formulario ID',
            'fecha' => 'Fecha',
            'razonSocial' => 'Razon Social',
            'domicilio' => 'Domicilio',
            'CondicionVenta_id' => 'Condicion Venta ID',
            'importeNeto' => 'Importe Neto',
            'importeAlicuota21' => 'Importe Alicuota21',
            'importeAlicuota105' => 'Importe Alicuota105',
            'importeTotal' => 'Importe Total',
            'Ciudad_id' => 'Ciudad ID',
            'CAE' => 'Cae',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCondicionVenta()
    {
        return $this->hasOne(CondicionVenta::className(), ['id' => 'CondicionVenta_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTipoFormulario()
    {
        return $this->hasOne(TipoFormulario::className(), ['id' => 'TipoFormulario_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCiudad()
    {
        return $this->hasOne(Ciudad::className(), ['id' => 'Ciudad_id']);
    }
}
