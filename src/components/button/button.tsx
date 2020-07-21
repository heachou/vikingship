import React from 'react'
import classNames from 'classnames'
import './style/index.scss'

const classPrefix = 'vik-btn'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  href?: string
  children: React.ReactNode
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps

type ButtonHTMLType = "submit" | "button" | "reset"

export type NativeButtonProps = {
  type?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, disabled, size, href, children, className, ...restProps } = props
  const classes = classNames(classPrefix, className, {
    [`${classPrefix}-${btnType}`]: btnType,
    [`${classPrefix}-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>{children}</a>
    )
  }
  return (
    <button
      disabled={disabled}
      className={classes}
      {...restProps}
    >{children}</button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button
