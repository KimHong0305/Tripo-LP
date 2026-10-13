import { cn } from '@/utilities/ui'
import UserIcon from '@/assets/icons/iconUser.svg?react'
import Tooltip from '@/components/Tooltip'
type BaseProps = {
  label?: string
  required?: boolean
  disabled?: boolean
  description?: string
  icon?: React.ReactNode
  className?: string
}

type Props = BaseProps & React.InputHTMLAttributes<HTMLInputElement>

const Input = ({ label, required, description, icon, className, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-2 min-w-[20rem]">
      <div className="flex items-start justify-between gap-2">
        <label className="text-lg text-neutral-500 font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {description && <Tooltip content={description} position="top" />}
      </div>
      <div className="text-neutral-600 relative border border-neutral-200 rounded-lg flex items-center px-4 py-3 gap-1">
        {icon}
        <input
          className={cn('flex-1 font-normal placeholder:text-neutral-200 outline-none', className)}
          {...props}
        />
      </div>
    </div>
  )
}

export default Input
