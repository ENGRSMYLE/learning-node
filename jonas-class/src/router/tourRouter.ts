import express from "express"


const tourRouter = express.Router();

tourRouter.route("/").get().post()

tourRouter.route("/:id").get().patch().delete()


export default tourRouter; 





