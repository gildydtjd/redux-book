import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import IconFilter from './IconFilter'

function LinkToFilter() {
  const location = useLocation()
  // 여기서도 location으로 받아온 값을 사용한다 / 그냥 파라메터로 받아오면 어떨까 라는 생각이 든다
  return (
    <Link
      to={{
        pathname: '/filters',
        search: location.search
      }}
      className={styles.wrapper}
    >
      <IconFilter />
    </Link>
  )
}

const styles = {
  wrapper: 'text-blue-500 hover:text-blue-700'
}

export default LinkToFilter
