"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Products extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			this.hasMany(models.History, {
				foreignKey: "product_id",
				as: "product",
			});
		}
	}
	Products.init(
		{
			name: DataTypes.STRING,
			category: DataTypes.STRING,
			price: DataTypes.INTEGER,
			quantity: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Products",
		}
	);
	return Products;
};
