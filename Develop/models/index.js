// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// Product belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: "product_tag",
  as: "products",
  foreignKey: "product_id",
});

// Tags belongToMany Product (through ProductTag)
Tag.belongsToMany(Product, {
  through: "product_tag",
  as: "tags",
  foreignKey: "tag_id",
});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
