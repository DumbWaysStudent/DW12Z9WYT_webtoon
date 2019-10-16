'use strict';
module.exports = (sequelize, DataTypes) => {
  const page = sequelize.define(
    'page',
    {
      page: DataTypes.INTEGER,
      image: DataTypes.STRING,
      episode_id: DataTypes.INTEGER,
      webtoon_id: DataTypes.INTEGER,
    },
    {},
  );
  page.associate = function(models) {
    page.belongsTo(models.episode, {
      as: 'episodeID',
      foreignKey: 'episode_id',
    });
  };
  return page;
};
