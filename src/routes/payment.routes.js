import express from 'express';
const router = express.Router();

import PaymentController from "../controllers/payment.controller.js";
router.patch("/payment/:id", PaymentController.updatePayment);
router.post("/payment/:id", PaymentController.createPayment);
router.delete("/payment/:id", PaymentController.deletePayment);

export default router;