import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../error/errorHandler.js';

export const updateUser = async (req, res, next) => {
  if (!req.user || !req.user.id || !req.params || !req.params.id) {
    return next(errorHandler(401, 'Invalid request parameters!'));
  }
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only update your own account!'));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        },
      },
      { new: true }
    );
    console.log(updatedUser)

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

  