import Card from '@components/Card'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Spin() {
  const [click, setClick] = useState(false)

  const router = useRouter()

  useEffect(() => {
    fetchUserInfo()
  }, [])

  const fetchUserInfo = async () => {
    const { data } = await axios.get('http://52.79.120.214/users')
    setClick(data.isDownloaded)
  }

  const patchFormData = async () => {
    const form1 = localStorage.getItem('form1') || '1'
    const form2 = localStorage.getItem('form2') || '2'
    const form3 = localStorage.getItem('form3') || '3'
    const data = {
      form1,
      form2,
      form3,
    }
    await axios.patch('http://52.79.120.214/users', data)
  }

  const handleClick = async () => {
    localStorage.clear()
    if (click) {
      alert('이미 룰렛을 돌리셨어요.')
      return
    }
    const target = document.getElementsByClassName('wheel')[0]
    target.classList.add('clicked')

    alert('돌아갑니다~ ')
    setTimeout(() => {
      alert('축하합니다. 스타벅스 기프트콘에 당첨되셨군요!')

      setClick(true)
      patchFormData().then(() => {
        router.push('/complete')
      })
    }, 7300)
  }

  return (
    <>
      <div className="relative overflow-auto w-full flex justify-center text-white flex-col items-center flex-wrap h-full text-base">
        <Card>
          <p>룰렛을 돌려주세요!</p>
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
          animation-duration: 7s;
          animation-timing-function: ease-in-out;
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
          80% {
            transform: rotate(1815deg);
          }

          100% {
            transform: rotate(1795deg);
          }
        }
      `}</style>
    </>
  )
}
