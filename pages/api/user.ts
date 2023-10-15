import { NextApiRequest, NextApiResponse } from 'next';
import { insertUser } from '../../lib/insertOne';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email } = req.body;
      const user = { name, email };

      await insertUser(user);

      res.status(201).json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
