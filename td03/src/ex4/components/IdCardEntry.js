import { h } from 'hyperapp'

export default ({ key, val }) =>
  h('p', null, [
    key, ' : ', val
  ])

// <p>{clé} : {valeur}</p>
