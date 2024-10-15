'use server'

import { sql } from '@vercel/postgres'
import crypto from 'crypto'

export async function shortenUrl(longUrl: string) {
  const shortCode = generateShortCode(longUrl)
  const shortUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${shortCode}`

  console.log('shortUrl', shortUrl)

  try {
    // Check if the shortCode already exists
    const existingUrl = await sql`
      SELECT long_url FROM shortened_urls WHERE short_code = ${shortCode}
    `

    if (existingUrl.rows.length > 0) {
      // If it exists, return the existing shortUrl
      return shortUrl
    }

    // If it doesn't exist, insert the new shortCode
    await sql`
      INSERT INTO shortened_urls (long_url, short_code)
      VALUES (${longUrl}, ${shortCode})
    `
    return shortUrl
  } catch (error) {
    console.error('Error saving URL:', error)
    throw new Error('Failed to shorten URL')
  }
}

function generateShortCode(url: string): string {
  const hash = crypto.createHash('md5').update(url).digest('hex')
  return hash.substring(0, 7)
}
