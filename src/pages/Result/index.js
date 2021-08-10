import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks, selectBooks } from '../../store/books'
import SearchForm from '../../components/SearchForm'
import Books from '../../components/Books'
import Pagination from '../../components/Books/Pagination'
import Stack from '../../components/Stack'

function Result() {
  const dispatch = useDispatch()
  // 액션디스패치
  const { search } = useLocation()
  // 검색된 데이터
  const { items } = useSelector(selectBooks)
  // 받아온 데이터

  useEffect(() => {
    if (!search) {
      return
    }

    dispatch(fetchBooks(search))
  }, [dispatch, search])

  // 받아올 북데이터에서 search를 필터한다

  return (
    <div className={styles.wrapper}>
      <Stack gaps={[0, 10, 20, 20]}>
        <SearchForm />
        <Books items={items} />
        <Pagination />
      </Stack>
    </div>
  )
}

const styles = {
  wrapper: 'pb-4'
}

export default Result
