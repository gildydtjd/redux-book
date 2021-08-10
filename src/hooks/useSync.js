import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../store/search'

function useSync() {
  const dispatch = useDispatch()
  const { search } = useLocation()

  useEffect(() => {
    if (!search) {
    }

    dispatch(setSearch(search))
  }, [dispatch, search])
}

export default useSync

// 검색이 없다면 아무것도 리턴하지 않는다.
// search 키워드가 존재한다면 setSearch로 상태값을 저장한다