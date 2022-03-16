module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc7837270e61e3e219d264418dab5e79'),
  },
});
