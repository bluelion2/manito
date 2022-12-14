import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

export default function Step1() {
  const { register, handleSubmit } = useForm<{ form1: string }>()
  const router = useNavigate()

  const onSubmit = (data: { form1: string }) => {
    window.localStorage.setItem('form1', data.form1)
    router('/step2')
  }

  return (
    <div className="relative overflow-auto w-full flex justify-center text-white flex-col items-center flex-wrap h-full text-base">
      <Card className="max-w-lg">
        <br />
        <p className="font-bold">질문 1</p>
        <br />
        <p>로또 1등! 100억이 당첨되었습니다.</p>
        <p>세현님은 어떻게 하시나요?</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center mb-4 mt-4">
            <input
              id="radio2"
              type="radio"
              value="1"
              {...register('form1')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="radio-1"
              className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
            >
              가족과 팀원들에게 1000만원씩 뿌린다
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked
              id="radio1"
              type="radio"
              value="2"
              {...register('form1')}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="radio-2"
              className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
            >
              아무한테 이야기 하지 않고, 혼자 쓴다
            </label>
          </div>
          <button
            type="submit"
            className="flex justify-center items-center w-full h-12 text-white bg-blues-300 rounded-md mt-4"
          >
            다음으로
          </button>
        </form>
      </Card>
    </div>
  )
}
