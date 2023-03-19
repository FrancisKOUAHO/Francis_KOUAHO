module.exports = {
  apps: [
    {
      name: 'kouahofrancis.com',
      instances: "max",
      exec_mode: "cluster",
      script: 'node_modules/.bin/next',
      args: 'start -p 1616',
      watch: true,
      env_production: {
        NODE_ENV: 'production',
        PORT: 1616,
      },
    },
  ],
};
