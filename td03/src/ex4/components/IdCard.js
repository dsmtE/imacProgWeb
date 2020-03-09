import { h } from 'hyperapp'
import IdCardEntry from './IdCardEntry'

export default ({ picture, listEntries }) =>
  h('div', null, [
    h('img', { src: picture, width: '100' }, []),
    ...Object.entries(listEntries).map(([key, val]) =>
      IdCardEntry({ key, val })
    )
  ])

//   <div>
//   <img src="url" />
//   <!-- n fois --> <IdCardEntry key='Yeux' value='bruns' />
// </div>
