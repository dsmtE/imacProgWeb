import { h } from 'hyperapp'

export default (state, actions) =>
  h('main', {}, [
    h('p', {}, [
      '><' + '='.repeat(state.fishSize) + '°>'
    ]),
    h('button', { onclick: actions.decreaseFishSize, disabled: state.num < 1 }, [
      '-'
    ]),
    h('button', { onclick: actions.increaseFishSize, disabled: state.num >= 10 }, [
      '+'
    ])
  ])

//   <main>
//   <p>><=====°></p>
//   <button>-</button>
//   <button>+</button>
// </main>
