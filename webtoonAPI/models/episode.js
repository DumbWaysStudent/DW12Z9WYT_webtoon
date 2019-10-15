'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode = sequelize.define(
    'episode',
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      webtoon_id: DataTypes.INTEGER,
    },
    {},
  );
  episode.associate = function(models) {
    episode.belongsTo(models.webtoon, {
      as: 'webtoonID',
      foreignKey: 'webtoon_id',
    });
  };
  return episode;
};
