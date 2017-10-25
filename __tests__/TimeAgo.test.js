import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'
import moment from 'moment'
import TimeAgo from '../TimeAgo'

describe('TimeAgo', () => {
  test('Renders', () => {
    const timestamp = moment().subtract(10, 'days')
    const component = renderer.create(
      <TimeAgo time={timestamp} />
    )
    const instance = component.root
    expect(instance.findByType(Text).props.children).toEqual('10 days ago')
  })
})
