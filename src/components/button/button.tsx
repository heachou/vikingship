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

const Button: React.FC<BaseButtonProps> = (props) => {
  const { btnType, disabled, size, href, children } = props
  const classes = classNames(classPrefix, {
    [`${classPrefix}-${btnType}`]: btnType,
    [`${classPrefix}-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>{children}</a>
    )
  }
  return (
    <button
      disabled={disabled}
      className={classes}
    >{children}</button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button
