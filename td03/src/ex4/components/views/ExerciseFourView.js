import { h } from 'hyperapp'
import IdCard from '../IdCard'

export default (state /* , action */) =>
  h('main', null, [
    ...state.persons.map(person =>
      IdCard({ picture: state.url, listEntries: person })
    )
  ])

// <main>
// <IdCard picture="url" listEntries={{'Yeux': 'bruns', 'Cheveux': 'bleus'}} />
// </main>
