import { app } from 'hyperapp'

import actions from './ex4/actions'
import state from './ex4/state'
import view from './ex4/components/views/ExerciseFourView'

app(
  state,
  actions,
  view,
  document.body
)
