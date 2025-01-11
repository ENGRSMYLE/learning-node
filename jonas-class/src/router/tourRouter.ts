import express from "express";
import {
  getTour,
  getAllTours,
  createTour,
  deleteAllTour,
  deleteTour,
  updateTour,
} from "../controller/tourController";

const router = express.Router();

router.param('id', (req, res, next, val) => {

    next();
})

router.route("/").get(getAllTours).post(createTour).delete(deleteAllTour);

router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

export default router;
