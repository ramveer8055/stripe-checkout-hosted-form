'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init({
    payment_id: DataTypes.STRING,
    item_name: DataTypes.STRING,
    amount_total: DataTypes.INTEGER,
    currency: DataTypes.INTEGER,
    mode: DataTypes.STRING,
    payment_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaction',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Transaction;
};