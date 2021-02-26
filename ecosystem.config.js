module.exports = {
  apps: [
    {
      name: 'desktop',
      script: 'server.js',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      key: '~/.ssh/id_rsa',
      user: 'root',
      host: '142.93.226.249',
      ref: 'origin/develop',
      repo: 'git@gitlab.com:unie.kz/frontend/unie-desktop.git',
      path: '/var/www/unie-d',
      'pre-setup': 'git stash',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
}
