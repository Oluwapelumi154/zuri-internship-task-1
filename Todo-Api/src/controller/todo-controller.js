const { Todo } = require('../model/');

exports.createTask = async (req, res) => {
  const { body } = req;
  try {
    const todo = await Todo.create(body);
    return res.status(200).json({
      status: 'success',
      message: 'Successfully Added a Task',
      data: {
        todo
      }
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};
exports.getAllTask = async (req, res) => {
  const pageNo = parseInt(req.query.pageNo) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  const skip = (pageNo - 1) * perPage;
  try {
    const todo = await Todo.find().skip(skip).limit(perPage);
    const totalTask = await Todo.countDocuments();

    return res.status(200).json({
      status: 'success',
      message: 'Successfully fetched All Task',
      data: {
        pageNo,
        perPage,
        totalTask,
        todo
      }
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid Id'
      });
    }
    return res.status(200).json({
      status: 'success',
      message: 'Sucessfully fetched a task',
      data: {
        todo
      }
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.updateTask = async (req, res) => {
  const { params, body } = req;
  try {
    const todo = await Todo.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true
    });
    if (!todo) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid Id'
      });
    }
    return res.status(200).json({
      status: 'success',
      message: 'Sucessfully updated a task',
      data: {
        todo
      }
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid Id'
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Successfully deleted a task'
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.notFound = () => {
  return res.status(404).json({
    status: 'fail',
    message: 'Resource Not found'
  });
};
