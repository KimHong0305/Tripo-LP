'use client'

import { cn } from '@/utilities/ui'
import { cva, type VariantProps } from 'class-variance-authority'
import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react'
import Spinner from '@/components/Spinner'

const buttonVariants = cva(
  'cursor-pointer px-4 inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed',
  {
    variants: {
      type: {
        primary: '',
        secondary: '',
      },
      variant: {
        filled: '',
        outlined: '',
        none: '',
      },
      size: {
        small: 'h-8 text-sm',
        medium: 'h-10 text-base',
        large: 'h-12 text-lg',
        extraLarge: 'h-14 text-xl',
      },
    },
    compoundVariants: [
      {
        type: 'primary',
        variant: 'filled',
        className:
          'bg-primary-500 text-white hover:bg-primary-600 disabled:bg-neutral-50 disabled:text-neutral-200',
      },
      {
        type: 'primary',
        variant: 'outlined',
        className:
          'border border-primary-500 bg-white text-primary-500 hover:border-primary-600 hover:text-primary-400 disabled:border-neutral-200 disabled:text-neutral-200',
      },
      {
        type: 'primary',
        variant: 'none',
        className: 'bg-none text-primary-500 hover:text-primary-600 disabled:text-neutral-200',
      },
      {
        type: 'secondary',
        variant: 'filled',
        className:
          'bg-neutral-700 text-white hover:bg-neutral-500 disabled:bg-neutral-50 disabled:text-neutral-200',
      },
      {
        type: 'secondary',
        variant: 'outlined',
        className:
          'border border-neutral-700 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-500 hover:text-neutral-500 disabled:border-neutral-200 disabled:text-neutral-200',
      },
      {
        type: 'secondary',
        variant: 'none',
        className:
          'bg-none text-neutral-700 hover:text-neutral-500 hover:bg-neutral-50 disabled:text-neutral-200',
      },
    ],
    defaultVariants: {
      type: 'primary',
      variant: 'filled',
      size: 'medium',
    },
  },
)

type BaseProps = VariantProps<typeof buttonVariants> & {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  className?: string
  classNameSpinner?: string
  loading?: boolean
}

type Props = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>

const Button: FC<Props> = ({
  type,
  variant,
  size,
  className,
  classNameSpinner,
  leftIcon,
  rightIcon,
  loading,
  disabled,
  children,
  ...props
}) => {
  const resolvedType = type ?? 'primary'
  const resolvedVariant = variant ?? 'filled'

  const classNameLoading = loading
    ? resolvedVariant === 'filled'
      ? resolvedType === 'primary'
        ? 'bg-primary-100 disabled:bg-primary-100'
        : 'bg-neutral-200 disabled:bg-neutral-200'
      : resolvedVariant === 'outlined'
        ? resolvedType === 'primary'
          ? 'border border-primary-100 disabled:border-primary-100'
          : 'border border-neutral-700 disabled:border-neutral-700'
        : ''
    : ''

  return (
    <button
      className={cn(
        buttonVariants({ type: resolvedType, variant: resolvedVariant, size }),
        className,
        classNameLoading,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {leftIcon}
      {loading ? (
        <Spinner
          size={
            size === 'small'
              ? 'small'
              : size === 'medium'
                ? 'small'
                : size === 'large'
                  ? 'medium'
                  : 'medium'
          }
          color={resolvedType === 'primary' ? 'blue' : 'black'}
          className={classNameSpinner}
        />
      ) : (
        children
      )}
      {rightIcon}
    </button>
  )
}

export default Button
