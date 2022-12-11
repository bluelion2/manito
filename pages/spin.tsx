import Card from '@components/Card'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'

const TOKEN = 'xoxb-366190432502-3544636566640-DRtRs1KacW5frmU68iT9GH5P'

export default function Spin() {
  const [click, setClick] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const form1 = window?.localStorage.getItem('form1') || '1'
    const form2 = window?.localStorage.getItem('form1') || '2'
    const form3 = window?.localStorage.getItem('form1') || '4'
    const spin =
      window?.localStorage.getItem('spin') && window?.localStorage.getItem('spin') === 'true'
        ? true
        : false

    setClick(spin)
  }, [])

  const handleClick = async () => {
    // if (click) {
    //   alert('이미 선택되었습니다.')
    //   return
    // }
    // const target = document.getElementsByClassName('wheel')[0]
    // target.classList.add('clicked')
    // setClick(true)
    // alert('돌아갑니다~ ')
    // setTimeout(() => {
    //   alert(`
    //     축하합니다.
    //     스타벅스 기프트콘에 당첨되셨군요!
    // `)
    // }, 3000)
    // localStorage.setItem('spin', 'true')
    // router.push('/complete')

    try {
      const baseUrl = 'https://automation-mathflat.vercel.app/api/slack'
      const base = axios.create({
        baseURL: baseUrl,
        headers: {
          'Content-Type': 'application/text',
          Authorization: `Bearer ${TOKEN}`,
        },
      })

      const result = await base.post('/postDm', {
        channel: 'DM948GFS4',
        message: 'hello world',
      })
      console.log('result', result)
    } catch (error) {
      console.log('error', error)
    }

    // const baseUrl = 'https://slack.com/api'
    // const base = axios.create({
    //   baseURL: baseUrl,
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${process.env.SLACK_DM_BOT_TOKEN || TOKEN}`,
    //   },
    // })

    // try {
    //   await base.post('/chat.postMessage', {
    //     channel: 'DM948GFS4',
    //     text: 'hello world',
    //   })
    // } catch (error) {
    //   console.log('error', error)
    // }

    // const Axios = axios.create({
    //   baseURL: 'https://slack.com/api',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     Authorization: `Bearer xoxp-366190432502-725008683671-4120118477653-0c865ae5d62c6b1a85e26829770c0d29`,
    //   },
    // })
    // Axios.post('/chat.message', {
    //   channel: '/TAS5LCQES/DM948GFS4',
    //   text: 'hello world',
    // })
  }

  const download = () => {
    const target = document.createElement('a')
    target.setAttribute('download', '/giftcon.jpg')
    target.click()
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
          width: 260px;
          height: 260px;
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
          width: 129px;
          height: 129px;
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
