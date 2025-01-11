import express from "express";
import {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteAllUser,
  deleteUser,
} from "../controller/userController";

const router = express.Router();

router.route("/").get(getAllUser).post(createUser).delete(deleteAllUser);

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
