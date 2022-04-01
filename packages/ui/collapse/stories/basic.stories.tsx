import React from 'react'
import Collapse from '../src'
import { FileFilled } from '@hi-ui/icons'

export const Basic = () => {
  return (
    <>
      <h1>Collapse</h1>
      <div className="collapse-basic__wrap">
        <Collapse defaultActiveId={['2']} arrowPlacement="left">
          <Collapse.Panel title="小米手机" id="1" disabled>
            我是小米手机的内容
          </Collapse.Panel>
          <Collapse.Panel title="红米手机" id="2">
            我是红米手机的内容
          </Collapse.Panel>
          <Collapse.Panel title="小米笔记本" id="3">
            我是小米笔记本的内容
          </Collapse.Panel>
          <Collapse.Panel title="小米 AI" id="4" extra={<FileFilled />}>
            我是小米 AI 的内容
          </Collapse.Panel>
        </Collapse>
      </div>
    </>
  )
}
