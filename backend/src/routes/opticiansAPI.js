// Add opticians API endpoint for frontend
const express = require('express');
const Optician = require('../models/Optician');
const router = express.Router();

// GET /api/opticians - Public endpoint for frontend
router.get('/', async (req, res) => {
  try {
    const opticians = await Optician.find({ 
      isActive: true, 
      isAvailable: true 
    }).sort({ name: 1 });
    
    res.json({
      success: true,
      opticians
    });
  } catch (error) {
    console.error('Error fetching opticians:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch opticians' 
    });
  }
});

module.exports = router;