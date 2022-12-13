import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Complete() {
  const [imgUrl, setUrl] = useState('')
  const [alertCapture, setAlert] = useState(false)

  useEffect(() => {
    fetchUser()
    if (alertCapture) return
    setTimeout(() => {
      alert('화면을 캡쳐해서 잘 쓰세요!')
      setAlert(true)
    }, 1000)
  }, [])

  const fetchUser = async () => {
    const { data } = await axios.get('http://52.79.120.214/users')
    setUrl(data.imgUrl)
  }

  return (
    <div className="flex">
      <img
        className="z-10 max-h-[100vh] w-full "
        src={imgUrl || ''}
        alt="기프트콘 - 안나오면 마니또 채널에 올려주세요!"
      />
    </div>
  )
}
