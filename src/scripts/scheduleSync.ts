import cron from 'node-cron';
import { syncStripePayments } from './syncStripePayments';

// Schedule the sync to run every day at midnight
cron.schedule('0 0 * * *', () => {
  console.log('Running daily sync of Stripe payments...');
  syncStripePayments().catch(console.error);
});

console.log('Cron job scheduled to sync Stripe payments daily at midnight.');
