import { createSlice } from '@reduxjs/toolkit'
import { getBooks } from '../api'

export const Status = {
  Idle: 'idle',
  Loading: 'loading',
  Success: 'success',
  Failure: 'failure'
}
// 상태값 로딩 성공 실패

const booksSlice = createSlice({
  // reducer이름과 함수가 포함된 초기 상태와 lookup테이블을 받아 액션 생성자 함수, 액션 유형 문자열 및 리듀서 함수를 자동으로 생성.
  name: 'books',
  initialState: {
    items: [],
    totalItems: 0,
    startIndex: 0,
    status: Status.Idle,
    error: null
  },
  reducers: {
    getItemsStart(state, action) {
      if (action.payload === 0) {
        state.items = []
      }

      state.error = null
      state.status = Status.Loading
    },
    getItemsSuccess(state, action) {
      const { items, totalItems, startIndex } = action.payload
      // action.payload 교체할 상태값
      const nextItems = startIndex ? state.items.concat(items) : items

      state.items = nextItems
      state.startIndex = nextItems.length
      state.totalItems = totalItems
      state.status = Status.Success
    },
    getItemsFailure(state, action) {
      state.error = action.payload
    }
  }
})

export const {
  getItemsStart,
  getItemsSuccess,
  getItemsFailure
} = booksSlice.actions

export default booksSlice.reducer

export const selectBooks = state => state.books

export const fetchBooks = (search, startIndex = 0) => async dispatch => {
  try {
    dispatch(getItemsStart(startIndex))
    const response = await getBooks(search, startIndex)
    const data = await response.json()
    dispatch(getItemsSuccess({ ...data, startIndex }))
  } catch (error) {
    dispatch(getItemsFailure(error))
  }
}
