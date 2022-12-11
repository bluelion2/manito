import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Complete() {
  const router = useRouter()

  useEffect(() => {
    const complete = window?.localStorage.getItem('complete')

    if (complete) {
      alert('이미 받았습니다.')
      router.push('/')
    }
    return () => {
      window.localStorage.setItem('complete', 'complete')
    }
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
