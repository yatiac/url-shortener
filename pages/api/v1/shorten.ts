// pages/api/v1/shorten.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { shortenUrl } from '../../../src/app/actions'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS'); // Allow specific methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

    if (req.method === 'OPTIONS') {
        // Preflight request handling
        return res.status(204).end();
    }
    if (req.method === 'POST') {
        const { url } = JSON.parse(req.body);
        console.log('Received URL:', url);

        if (!url) {
            return res.status(400).json({ error: 'URL is required' });
        }

        try {
            const shortUrl = await shortenUrl(url);
            return res.status(200).json({ shortUrl });
        } catch (error) {
            console.error('Error shortening URL:', error);
            return res.status(500).json({ error: 'Failed to shorten URL' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
