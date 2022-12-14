import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <div className="relative overflow-auto w-full flex justify-center text-white flex-col items-center flex-wrap h-full text-base">
        <Card className="max-w-lg">
          <br />
          <p>Merry Christmas!</p>
          <br />
          <br />
          <p>즐거운 크리스마스와</p>
          <p>다가올 새해 복 많이 받으세요!</p>
          <br />
          <br />
          {/* <Link
            href="/intro"
            className="flex justify-center items-center w-full h-12 text-white bg-blues-300 rounded-md"
          >
            선물 받기
          </Link> */}
        </Card>
      </div>
    </>
  )
}
