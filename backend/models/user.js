module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    },
    passwordHash: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    provider: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'local' // or 'google' or 'facebook'
    },
    providerId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'users'
  });

  return User;
};
