import axios from 'axios'
export default {
  toggleDone: (id) => (state) => {
    const itemAtId = state.items.find(item => item.id === id)

    if (itemAtId === undefined) {
      console.error(`Item id ${id} could not be found, this should not happen`)
      return
    }

    return {
      ...state,
      items: state.items
        .filter(item => item.id !== id)
        .concat({ ...itemAtId, done: !itemAtId.done })
    }
  },
  updateTodoInput: (event) => (state) => ({ ...state, addItemInput: event.target.value }),
  addTodoItem: () => (state) => {
    const input = state.addItemInput
    if (input.length === 0) {
      return state
    }
    return {
      ...state,
      items: state.items.concat({
        done: false,
        text: input,
        id: Math.random().toString(16).substring(2, 8),
        createdAt: new Date().toISOString()
      }),
      addItemInput: ''
    }
  },
  callDataFromApi: () => (state, actions) => {
    const request = axios.get('https://jsonplaceholder.typicode.com/todos')

    request
      .then(response => {
        console.log(response)
        actions.setTodo(
          response.data.map(({ userId, id, title, completed }) => ({
            done: completed,
            text: title,
            createdAt: new Date().toLocaleString(),
            id: userId * 100 + id
          })
          )
        )
      })
      .catch(error => {
        console.log(error)
      })
  },

  setTodo: (items) => (state) => {
    return { ...state, items: [...state.items, ...items.slice(0, 10)] }
  }

  // {
  //   done: true,
  //   text: 'teach',
  //   id: 'fe2498a3',
  //   createdAt: '2020-02-29T19:20+01:00'
  // },
}
