import Card from '@components/Card'

import Link from 'next/link'

export default function Intro() {
  return (
    <div className="relative overflow-auto w-full flex justify-center text-white flex-col items-center flex-wrap h-full text-base">
      <Card className="max-w-lg">
        <br />
        <p className="font-bold">안녕하세요 세현님!</p>
        <p>당신의 마니또 입니다.</p>
        <br />
        <br />
        <p>선물을 드리기 앞서</p>
        <p>몇가지 간단한 설문조사를 할 거에요!</p>
        <p>마음가는 답을 선택해주시면 됩니다.!</p>
        <br />
        <br />
        <Link
          href="/step1"
          className="flex justify-center items-center w-full h-12 text-white bg-blues-300 rounded-md"
        >
          시작하기
        </Link>
        <br />
      </Card>
    </div>
  )
}
