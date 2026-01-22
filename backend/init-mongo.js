// MongoDB initialization script
db = db.getSiblingDB('fovea-opticals');

// Create collections
db.createCollection('users');
db.createCollection('appointments');
db.createCollection('services');
db.createCollection('opticians');

// Create indexes
db.users.createIndex({ "email": 1 }, { unique: true });
db.appointments.createIndex({ "date": 1, "time": 1 });
db.services.createIndex({ "name": 1 });
db.opticians.createIndex({ "email": 1 });

print('Database initialized successfully!');