const { DataTypes } = require('sequelize');
const sequelize = require('../database');  // Your Sequelize instance
const Admin = require('./admin');  // Import the Admin model to create association

const Blog = sequelize.define('Blog', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true  // Title should not be empty
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true  // Content should not be empty
        }
    },
    adminId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Admin,  // References the Admin model
            key: 'id'
        },
        onDelete: 'CASCADE'  // Delete the blog if the admin is deleted
    }
}, {
    timestamps: true  // Automatically adds `createdAt` and `updatedAt` fields
});

// Association between Blog and Admin
Admin.hasMany(Blog, { foreignKey: 'adminId' });
Blog.belongsTo(Admin, { foreignKey: 'adminId' });

module.exports = Blog;
