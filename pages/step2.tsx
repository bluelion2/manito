import Card from '@components/Card'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

export default function Step2() {
  const { register, handleSubmit } = useForm()
  const router = useRouter()

  const onSubmit = (data: any) => {
    console.log('data', data)
    window.localStorage.setItem('form2', data.form2)
    router.push('/step3')
  }

  return (
    <div className="relative overflow-auto w-full flex justify-center text-white flex-col items-center flex-wrap h-full text-base">
      <Card className="max-w-lg">
        <br />
        <p className="font-bold">질문 2</p>
        <br />
        <p>담배 겸 커피를 사러 나온 당신.</p>
        <p>매쓰플랫이 안된다고 슬랙 메세지가 오기 시작합니다.</p>
        <p>당신의 선택은?</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center mb-3 mt-4">
            <input
              type="radio"
              value="1"
              {...register('form2')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="radio-1"
              className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
            >
              남은 팀원들을 믿고 커피사러 간다.
            </label>
          </div>
          <div className="flex items-center mb-3">
            <input
              checked
              type="radio"
              value="2"
              {...register('form2')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="radio-2"
              className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
            >
              알림을 못본척한다.
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              value="3"
              {...register('form2')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="radio-2"
              className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
            >
              일단 사무실로 복귀한다.
            </label>
          </div>
          <button
            type="submit"
            className=" mt-4 flex justify-center items-center w-full h-12 text-white bg-blues-300 rounded-md"
          >
            다음으로
          </button>
        </form>
      </Card>
    </div>
  )
}
