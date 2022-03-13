export const createServerlessOfflineConfig = () => ({
  corsAllowOrigin: 'http://localhost:3000/,http://localhost:3000',
  corsAllowHeaders: 'Authorization',
  prefix: 'offline'
})