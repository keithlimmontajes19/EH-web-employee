import {useEffect, useState} from 'react'

export default function Image({data}: any) {
  const url = data?.file?.url || ''
  const imageId = url.match(/(\/.*)\/(.*)\?token/)[2] || null

  if (imageId === null) return <p>No image...</p>

  const [image, setImage] = useState('')

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    fetch(`${process.env.REACT_APP_BASE_API_URL}/download/${imageId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then((response) => response.json())
    .then((data) => setImage(data))
  }, [imageId])

  if (!image) return <p>Loading...</p>

  return <img src={image} />
}
