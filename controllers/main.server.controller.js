const { model } = require('mongoose');
// const { green } = require('chalk');

const Todo = model('Todo');


/**
 * List tasks
 * @controller List
 * @param {IncommingMessage} req The request
 * @param {OutcommingMessage} res The response
 * @param {Function} next Go to the next middleware
 */
exports.list = async function list(req, res) {
  const result = await Todo.find({});
  res.json(result);
};

/**
 * Create new task
 * @controller Create
 * @param {IncommingMessage} req The request
 * @param {OutcommingMessage} res The response
 * @param {Function} next Go to the next middleware
 */
exports.create = async function create(req, res) {
  // const { body } = req;

  // console.log(green('Creating a new task'));

  return res.status(400).json({
    message: req.t('NOT_ALLOWED'),
  });
  // const result = await (new Todo(body).save)({ new: true });
  // res.status(201).json(result);
};
