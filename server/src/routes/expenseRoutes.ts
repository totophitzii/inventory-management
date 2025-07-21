import { Router } from "express";
import { getExpensesByCategery } from "../controllers/expenseController";

const router = Router();
router.get("/", getExpensesByCategery); //http://localhost:8000/dashboard/getExpensesByCategery

export default router;
