import dotenv from 'dotenv';
import Admin from '../models/Admin.js';
import connectDB from '../config/db.js';

dotenv.config();

connectDB();

const seedAdmin = async () => {
  try {
    // Clear existing admins
    await Admin.deleteMany();

    const username = process.env.ADMIN_USERNAME || 'GcAdmin';
    const password = process.env.ADMIN_PASSWORD || 'AdminGc@2022';

    await Admin.create({
      username,
      password,
    });

    console.log('Admin User Seeded!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedAdmin();
