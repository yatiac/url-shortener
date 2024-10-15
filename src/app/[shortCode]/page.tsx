import { sql } from '@vercel/postgres'
import { notFound, redirect } from 'next/navigation'

export default async function ShortUrlRedirect({ params }: { params: { shortCode: string } }) {
  const { rows } = await sql`
    SELECT long_url FROM shortened_urls WHERE short_code = ${params.shortCode}
  `

  if (rows.length === 0) {
    notFound()
  }

  redirect(rows[0].long_url)
}