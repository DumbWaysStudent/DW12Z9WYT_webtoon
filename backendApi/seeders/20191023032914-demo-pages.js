"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pages",
      [
        {
          episodesId: 1,
          image:
            "https://2.bp.blogspot.com/jXtASSEPGQ8rQCyfOxQPwWdIFBWByzZ4yJMbvO3_MlXVu-mvtg7IE8JIvzuln_elP7u62C7WVQ19WLeICUUhxyS05bYBus9RAedX7xg2gieWoVMSy5KD-PxVsIAPbkgv5coYZJtCAw=s1600",
          page: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          episodesId: 1,
          image:
            "https://2.bp.blogspot.com/ZEzW7QKkvF1FcYUzLBiJlcluPtAVXV5GLUreHLgdsAI5eqknV1ONNZEuTJxFUJ0OgP40MiLGYpP2Q-7cjnELPBJhExRnjuqFchrO2rt6bMDgDp8GWa9Xoz8IH_OUOKcI8Pf1XaopLA=s1600",
          page: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          episodesId: 1,
          image:
            "https://2.bp.blogspot.com/hwXEpNfLb5y9Bb6MGhYbaD9zniJvLR9lkia-ZAi_pqAuu_VPrNvi4_MTb4iBlnbgJUksotO1w9H9UHkpWJCooWi2nKNSDeXtMjBYPq08n_FPddzv5UcFvdbMnbrhNCN1QReFcjG2qg=s1600",
          page: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          episodesId: 1,
          image:
            "https://2.bp.blogspot.com/IcBYmu_tgraQgsfbJvkbId_K9UO8Pz67G7yws6-EXXYcaQMuNvh4OPcghTMKrtpTsvJITZp8saDvk9EuwM-Onq3xJlWChCOPAswWt2SulEWsRU6597tiLLQrch4itt6h3rEu_HS3TA=s1600",
          page: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pages", null, {});
  }
};
