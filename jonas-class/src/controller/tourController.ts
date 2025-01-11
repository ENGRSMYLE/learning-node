import { Request, Response, NextFunction } from "express";

export function checkID(
  req: Request,
  res: Response,
  next: NextFunction,
  val: any
) {
  next();
}

export function getAllTours() {
  // Function to get tour from db
}

export function getTour() {
  // Function to get a single tour
}

export function createTour() {
  // Function to create tour
}

export function updateTour() {
  // Function to update tour
}

export function deleteTour() {
  // Function to delete a single tour
}

export function deleteAllTour() {
  // Function to delete all tour
}
