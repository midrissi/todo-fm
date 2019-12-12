const ctrls = require('../controllers/main.server.controller');

/**
 * @type { IAM.default }
 */
module.exports = {
  prefix: '/todo',
  routes: [{
    path: '/',
    methods: {
      get: {
        iam: 'modules:todo:list',
        title: 'List all tasks',
        groups: [],
        parents: ['modules:todo'],
        description: 'List available tasks',
        middlewares: [
          ctrls.list,
        ],
      },
      /**
       * @body
       * {
       *   "name": "New task",
       *   "done": false
       * }
       */
      post: {
        iam: 'modules:todo:create',
        title: 'Create new task',
        groups: [],
        parents: ['modules:todo'],
        description: 'Create new task',
        middlewares: [
          ctrls.create,
        ],
      },
    },
  }],
};
