import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Complete() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      alert('화면을 캡쳐해서 잘 쓰세요!')
    }, 1000)
  }, [])

  return (
    <Image
      fill
      sizes="(max-width: 420px) 100vw,
              (max-width: 1200px) 400px,
              400px"
      src="/giftcon.jpg"
      alt="기프트콘 - 안나오면 마니또 채널에 올려주세요!"
    />
  )
}
