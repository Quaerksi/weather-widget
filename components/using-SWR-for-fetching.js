import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useState } from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Profile() {
  const router = useRouter()
  const [location, setLocation] = useState('Berlin')
  // const [location, setLocation] = useState('bbb')

  // Use a ternary operator to only fetch the data when the ID isn't undefined
  const { data, error } = useSWR(location ? `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${process.env.NEXT_PUBLIC_KEY}&contentType=json` : null, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log(data)

  return <div>hello!</div>
}