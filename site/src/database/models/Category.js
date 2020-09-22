module.exports = (sequelize, DataTypes) => {
    let alias = 'Category';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }
    let config ={timestamps: false};

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models){
        Category.hasMany(
            models.Product,
            {
                as: 'product',
                foreignKey: 'categoryId'
            }
        )
    };

    return Category;
}