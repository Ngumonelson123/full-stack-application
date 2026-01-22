const express = require('express');
const { 
  getAllOpticians, 
  getOpticianById, 
  createOptician, 
  updateOptician, 
  deleteOptician 
} = require('../controllers/opticianController');
const { auth, adminAuth } = require('../middleware/auth');
const router = express.Router();

// Public routes
router.get('/', getAllOpticians);
router.get('/:id', getOpticianById);

// Admin only routes
router.post('/', adminAuth, createOptician);
router.put('/:id', adminAuth, updateOptician);
router.delete('/:id', adminAuth, deleteOptician);

module.exports = router;