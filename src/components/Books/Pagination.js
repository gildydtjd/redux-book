import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectBooks, fetchBooks, Status } from '../../store/books'
import { useLocation } from 'react-router-dom'

function Pagination() {
  const dispatch = useDispatch()
  // 액션디스패치
  const location = useLocation()
  // 페이지값 전달
  const { status, startIndex } = useSelector(selectBooks)
  // useSelectore로 받아온 selectBooks 데이터에서 status(상태)와 index를 뽑는다
  const isLoading = status === Status.Loading
  // 상태가 로딩이라는 걸 변수에 담는다
  return (
    <button
      className={styles.button}
      disabled={startIndex === 0 || isLoading}
      // disabled은 버튼 비활성화 - index가 0이거나 로딩상태일때
      onClick={() => {
        if (isLoading) {
          return
        }
        dispatch(fetchBooks(location.search, startIndex))

        // export const fetchBooks = (search, startIndex = 0) => async dispatch => {
        //   try {
        //     dispatch(getItemsStart(startIndex))
        //     const response = await getBooks(search, startIndex)
        //     const data = await response.json()
        //     dispatch(getItemsSuccess({ ...data, startIndex }))
        //   } catch (error) {
        //     dispatch(getItemsFailure(error))
        //   }
        // }

      }}
    >
      {isLoading ? '로딩중...' : '더보기'}
    </button>
  )
}

const styles = {
  button:
    'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
}

export default Pagination

// 검색 된 내용이 없거나, 다 나왔을시 로딩중을 제거
