import express from "express";
import TodoController from "../controller/todo.controller";
import TodoRepository from "../repository/todo.repository";
import TodoRepositoryPersistance from "../repository/todo.repository.persistance";
import TodoService from "../service/todo.service";
import TodoServicePersistance from "../service/todo.service.persistance";

// const repo = new TodoRepository();
// const service = new TodoService(repo);
// const controller = new TodoController(service);

// Persistance
const repo = new TodoRepositoryPersistance()
const service = new TodoServicePersistance(repo)
const controller = new TodoController(service)


const router = express.Router();

router.get("/", controller.getAll)

//get
router.get("/:id", controller.getById)
// delete
router.delete("/:id", controller.deleteById)
// post
router.post("/", controller.create)
router.put("/:id", controller.update)
// // put
// router.put("/:id", controller.update)
// // pat-ch
// router.put("/:id", controller.patch)

export default router;