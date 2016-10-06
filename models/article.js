function ArticleModel(sequelize, DataTypes) {
  const Article = sequelize.define('Article', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [1, 50]
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [1, 200]
      }
    },
    path:{
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [1, 100]
      }
    },
    content: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      }
    }
  },{
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'articles',
    getterMethods : {
      createdAt: function() {
        return this.created_at;
      }
    }
  });
  return Article;
}

export default ArticleModel;
