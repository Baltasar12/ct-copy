import { NextApiRequest, NextApiResponse } from 'next';
import createPayment from '@/utils/__api__/paywayApi'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const paymentData = req.body;
      const paymentResult = await createPayment(paymentData);
      res.status(200).json(paymentResult);
    } catch (error) {
      res.status(500).json({ error: 'Payment processing failed' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
