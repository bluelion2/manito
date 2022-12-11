import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '', ...props }: Props) {
  return (
    <div
      className={`w-3/4 border border-solid border-gray-400 rounded-md p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
