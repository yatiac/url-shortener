import { notFound, redirect } from 'next/navigation'

export default async function ShortUrlRedirect({ params }: { params: { shortCode: string } }) {
  const { shortCode } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_GO_API_URL}/${shortCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })

  console.log('Fetch response status:', `${process.env.NEXT_PUBLIC_GO_API_URL}/api/${shortCode}`);

  if (!res.ok) {
    notFound()
  }

  const response = await res.json()
  
  redirect(response.long_url)
}