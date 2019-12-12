const { model } = require('mongoose');

module.exports = async ({ todo }) => {
  const { isGenerate, nbTasksToGenerate } = todo;
  const Todo = model('Todo');
  const count = await Todo.count();


  if (count > 0 || !isGenerate) {
    return false;
  }

  for (let i = 0; i < nbTasksToGenerate; i += 1) {
    const t = new Todo();
    t.set({
      name: `Task ${i}`,
      done: false,
    });
    // eslint-disable-next-line
    await t.save();
  }

  return true;
};
