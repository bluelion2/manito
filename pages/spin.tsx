import Card from '@components/Card'
import { useState } from 'react'
import { useEffect } from 'react'

const TOKEN = 'xoxb-366190432502-3544636566640-s3x2sTxUKCCwNQMvQxzMXUem'

export default function Spin() {
  const [click, setClick] = useState(false)

  useEffect(() => {
    const form1 = window?.localStorage.getItem('form1') || '1'
    const form2 = window?.localStorage.getItem('form1') || '2'
    const form3 = window?.localStorage.getItem('form1') || '4'

    console.log('local', form1, form2, form3)
  }, [])

  const handleClick = () => {
    // const target = document.getElementsByClassName('wheel')[0]
    // target.classList.add('clicked')
    // setClick(true)

    // alert('축하합니다. 스타벅스 기프트콘에 당첨되셨군요!')

    // https://hooks.slack.com/services/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
    fetch('https://hooks.slack.com/services/TAS5LCQES/DM948GFS4', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SLACK_DM_BOT_TOKEN || TOKEN}`,
      },
      redirect: 'follow',
      body: 'hello world',
    })
  }

  return (
    <>
      <div className="relative overflow-auto w-full flex justify-center text-white flex-col items-center flex-wrap h-full text-base">
        <Card>
          <p>감사합니다!</p>
          <p>그러면 룰렛을 돌려주세요!</p>
          <p>룰렛에 나온 상품을 드리겠습니다.</p>
        </Card>

        <p className="mt-4 text-4xl">👇</p>
        <div className="wheel">
          <div className="option o1">
            <span>
              시그니엘
              <br />
              숙박권
            </span>
          </div>
          <div className="option o2">
            <span>
              스타벅스
              <br />
              기프트콘
            </span>
          </div>
          <div className="option o3">
            <span>
              벤츠
              <br />
              A-class
            </span>
          </div>
          <div className="option o4">
            <span>
              즉석복권
              <br />
              10만원어치
            </span>
          </div>
        </div>
        <button className="btn mt-4 w-20 h-12 bg-blues-300 z-1" onClick={handleClick}>
          돌리기!
        </button>
      </div>
      <style jsx>{`
        .wheel {
          display: flex;
          flex-wrap: wrap;
          position: relative;
          text-align: center;
          width: 300px;
          height: 300px;
          margin-top: 10px;
          border-radius: 50%;
          border: 1px solid black;
          background-color: white;
          overflow: hidden;
          transform: rotate(45deg);
        }

        .wheel.clicked {
          animation-name: spin;
          animation-duration: 3s;
          animation-timing-function: ease-out;
          animation-fill-mode: both;
        }

        .option {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 149px;
          height: 149px;
        }

        .option > span {
          transform: rotate(315deg);
        }

        .o1 {
          background-color: red;
        }

        .o2 {
          background-color: #00abff;
        }

        .o3 {
          background-color: #959595;
        }

        .o4 {
          background-color: green;
        }

        @keyframes spin {
          0% {
            transform: rotate(45deg);
          }
          100% {
            transform: rotate(1755deg);
          }
        }
      `}</style>
    </>
  )
}
