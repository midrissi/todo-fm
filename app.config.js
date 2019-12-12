const SCOPE = 'todo';

module.exports = (config) => {
  const { env } = config.utils;

  return {
    todo: {
      isGenerate: env.get('GENERATE_TASKS', SCOPE),
      nbTasksToGenerate: env.get('GENERATE_TASK_COUNT', SCOPE),
    },
  };
};
