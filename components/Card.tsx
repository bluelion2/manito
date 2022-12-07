import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Card({ children, ...props }: Props) {
  return (
    <div className="w-3/4 border border-solid border-gray-400 rounded-md p-4" {...props}>
      {children}
    </div>
  )
}
