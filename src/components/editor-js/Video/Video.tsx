import {useState, useEffect} from 'react'

export default function Video({data}: any) {
  const url = data?.file?.url || ''
  const videoId = url.match(/(\/.*)\/(.*)\?token/)[2] || null

  if (videoId === null) return <p>No image...</p>

  const [video, setVideo] = useState('')

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    fetch(`${process.env.REACT_APP_BASE_API_URL}/download/${videoId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then((response) => response.json())
    .then((data) => setVideo(data))
  }, [videoId])

  if (!video) return <p>Loading...</p>

  return <video controls>
    <source src={video} />
  </video>
}
