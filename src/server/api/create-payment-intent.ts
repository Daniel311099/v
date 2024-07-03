import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';


// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
// const apiKey = process.env.STRIPE_SECRET_KEY;
const apiKey = 'api-key';
const stripe: Stripe = new Stripe(apiKey, {
    apiVersion: '2024-04-10',
});

export const f = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { amount, currency } = req.body;

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency,
            });

            res.status(200).json({ clientSecret: paymentIntent.client_secret });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
};
