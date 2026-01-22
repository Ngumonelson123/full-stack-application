const express = require('express');
const { 
  getAllAppointments, 
  createAppointment, 
  updateAppointment, 
  deleteAppointment 
} = require('../controllers/appointmentController');
const { auth, adminAuth } = require('../middleware/auth');
const router = express.Router();

// Public routes
router.post('/', createAppointment);

// Protected routes
router.get('/', auth, getAllAppointments);
router.put('/:id', auth, updateAppointment);
router.delete('/:id', auth, deleteAppointment);

module.exports = router;