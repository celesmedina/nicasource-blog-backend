module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3d30b66c07e10cc07819ae5da5ee5b4b'),
  },
});
