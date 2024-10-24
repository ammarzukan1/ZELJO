const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../database'); // Assuming this is your Sequelize instance

const Admin = sequelize.define('Admin', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'admin'
    }
}, {
    timestamps: true,
    hooks: {
        // Hash the password before saving a new admin
        beforeCreate: async (admin) => {
            try {
                const salt = await bcrypt.genSalt(10);
                admin.password = await bcrypt.hash(admin.password, salt);
            } catch (error) {
                throw new Error('Error hashing password during admin creation');
            }
        },
        // Hash the password before updating the admin
        beforeUpdate: async (admin) => {
            try {
                if (admin.changed('password')) {
                    const salt = await bcrypt.genSalt(10);
                    admin.password = await bcrypt.hash(admin.password, salt);
                }
            } catch (error) {
                throw new Error('Error hashing password during admin update');
            }
        }
    }
});

// Method to validate password
Admin.prototype.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = Admin;
