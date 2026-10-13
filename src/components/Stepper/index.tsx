import { FC } from 'react'

type Props = {
  currentStep: number
}

const Stepper: FC<Props> = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-between">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className={
            index < currentStep
              ? 'bg-neutral-500 text-white h-10 w-10 flex items-center justify-center'
              : index === currentStep
                ? 'bg-primary-500 text-white h-15 w-15 flex items-center justify-center'
                : 'bg-neutral-100 text-neutral-500 h-10 w-10 flex items-center justify-center'
          }
        >
          {index + 1}
        </div>
      ))}
    </div>
  )
}

export default Stepper
