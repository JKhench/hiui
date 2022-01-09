import React, { isValidElement } from 'react'
import { toArray } from '@hi-ui/use-children'
import { SelectDataItem, SelectGroupDataItem, SelectMergedItem } from '../types'

export const parseChildren = (children: React.ReactNode) => {
  const data = [] as SelectMergedItem[]
  const list = toArray(children)

  list.forEach((item) => {
    if (!isValidElement(item)) return
    if (!item.type) return

    const {
      type: { HiName },
    } = item as React.ReactElement & { type: { HiName?: string } }

    switch (HiName) {
      case 'SelectOption':
        const option = parseOption(item)
        data.push(option)
        break
      case 'SelectOptionGroup':
        const optGroup = parseOptionGroup(item)
        data.push(optGroup)
        break
    }
  })

  return data
}

const parseOption = (node: React.ReactElement) => {
  const {
    props: { value, children, disabled, groupTitle, ...rest },
  } = node

  const option = {
    id: value,
    title: children,
    disabled: disabled,
    rootProps: rest,
  } as SelectDataItem

  return option
}

const parseOptionGroup = (node: React.ReactElement) => {
  const {
    props: { groupId, label, children, ...rest },
  } = node

  const optGroup = {
    groupId,
    groupTitle: label,
    children: [],
    rootProps: rest,
  } as SelectGroupDataItem

  if (children) {
    optGroup.children = parseChildren(children) as SelectDataItem[]
  }

  return optGroup
}
