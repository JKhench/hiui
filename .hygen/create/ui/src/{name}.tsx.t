---
to: <%= h.uiDir(`${name}/src/${name}.tsx`) %>
---
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'

const _role = '<%= name %>'
const _prefixCls = getPrefixCls(_role)

export const <%= h.camelCase(name) %> = forwardRef<HTMLDivElement | null, <%= h.camelCase(name) %>Props>(
  (
    {
      prefixCls = _prefixCls,
      role = _role,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const cls = cx(prefixCls, className)

    return (
      <div ref={ref} role={role} className={cls} {...rest}>
        {children}
      </div>
    )
  }
)

export interface <%= h.camelCase(name) %>Props {
  prefixCls?: string
  role?: string
  className?: string
  style?: React.CSSProperties
}

if (__DEV__) {
  <%= h.camelCase(name) %>.displayName = '<%= h.camelCase(name) %>'
}
