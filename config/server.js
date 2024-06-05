module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", [
      "WTNkd8y4TEchnZoFtxyrTg",
      "Pr6AXDJLSUybzzUShPLtYg",
      "vAkdQTeZ6Fo+qsQXa3vR5Q",
      "whcIoe2Cv4i0yJ7zhXHErA",
    ]),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
