import { useReducer } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { stringifyUrl, parse } from 'query-string'
import { flow, omitBy, isEmpty } from 'lodash/fp'

const initialState = {
  q: '',
  orderBy: 'relevance',
  filter: '',
  printType: 'all'
}

// 상태값

function reducer(state, action) {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

// 상태를 저장하는 리듀서

function useForm() {
  const history = useHistory()
  // 다음페이지로 값을 전달할때 쓰는 hooks
  const location = useLocation()
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...parse(location.search)
  })

  function handleRouter(query) {
    const path = stringifyUrl({
      url: '/result',
      query
    })

    history.push(path)
    // form에 대한 주소값을 전달한다
  }

  function handleSubmit(e) {
    e.preventDefault()

    const query = flow(omitBy(isEmpty))(state)

    handleRouter(query)
  }

  function handleChange(e) {
    const { name, value } = e.target

    dispatch({
      type: 'change',
      payload: {
        [name]: value
      }
    })
  }

  function handleSelect(e) {
    const { name, value } = e.target

    handleChange(e)
    handleRouter({
      ...parse(location.search),
      [name]: value
    })
  }

  return {
    state,
    handleChange,
    handleSelect,
    handleSubmit
  }
}

export default useForm
