import Card from '@components/Card'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

export default function Step3() {
  const { register, handleSubmit } = useForm<{ form3: string }>()
  const router = useRouter()

  const onSubmit = (data: { form3: string }) => {
    window.localStorage.setItem('form3', data.form3)
    router.push('/spin')
  }

  return (
    <div className="relative overflow-auto w-full flex justify-center text-white flex-col items-center flex-wrap h-full text-base">
      <Card className="max-w-lg">
        <br />
        <p className="font-bold">질문 3</p>
        <br />
        <p>가장 질투나는 (부러운) 팀원은?</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center mb-4 mt-4">
            <input
              type="radio"
              value="1"
              {...register('form3')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="radio-1"
              className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
            >
              키크고 잘생긴 기헌쌤 🤷‍♂️
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              value="2"
              {...register('form3')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="radio-2"
              className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
            >
              나이가 깡패다. 19살 시온쌤 👨‍🍼
            </label>
          </div>
          <div className="flex items-center mb-4 mt-4">
            <input
              type="radio"
              value="3"
              {...register('form3')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="radio-1"
              className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
            >
              인사 잘 받아주는 석영쌤 🙋‍♂️
            </label>
          </div>
          <div className="flex items-center mb-4 mt-4">
            <input
              checked
              type="radio"
              value="4"
              {...register('form3')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="radio-1"
              className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
            >
              이 중에서는 내가 최고지 👍
            </label>
          </div>
          <button
            type="submit"
            className="flex justify-center items-center w-full h-12 text-white bg-blues-300 rounded-md mt-4"
          >
            제출하기
          </button>
        </form>
      </Card>
    </div>
  )
}
