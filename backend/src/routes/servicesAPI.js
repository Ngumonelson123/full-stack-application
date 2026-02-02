// Add services API endpoint for frontend
const express = require('express');
const Service = require('../models/Service');
const router = express.Router();

// GET /api/services - Public endpoint for frontend
router.get('/', async (req, res) => {
  try {
    const services = await Service.find({ isActive: true }).sort({ name: 1 });
    
    res.json({
      success: true,
      services
    });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch services' 
    });
  }
});

module.exports = router;