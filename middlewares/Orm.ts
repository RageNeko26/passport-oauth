const { Sequelize, DataTypes } = require("sequelize")

export const Orm: any = new Sequelize(
		"test-passport",
		"root",
		"",
		{
			host: "localhost",
			dialect: "mysql"
		}
	)

export const User: any = Orm.define('user', {
	emai: {
		type: DataTypes.STRING,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNukll: false
	}
})

