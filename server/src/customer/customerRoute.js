import express from "express";
import customerController from "./customerController";

const router = express.Router();
const controller = new customerController();

router.post('/',controller.addCustomer);
router.get('/',controller.getCustomers);
router.get('/:id',controller.getCustomerById);
router.get('/custom/:id',controller.getCustomerByCustomId);
router.put('/',controller.updateCustomerById);
router.delete('/',controller.deleteCustomerById);

module.exports = router;


