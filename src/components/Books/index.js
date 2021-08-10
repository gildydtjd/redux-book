import React from 'react'
import uniqBy from 'lodash/uniqBy'
import Book from './Book'

function Books({ items }) {
  return (
    <div className={styles.wrapper}>
      {uniqBy(items, 'id').map(item => (
        <Book key={item.id} defaultClassName={styles.item} {...item} />
      ))}
    </div>
  )
}

const styles = {
  wrapper: 'mt-4',
  item: 'mt-4'
}

export default Books

// book 파라메터로 defaultClassName, volumeInfo 를 받고있다.
// 그러나 Book을 랜더하는 부모영역에서는 defaultClassName, {...item} 을 보내고있다.
// 처음보는 사람은 {...item}이 의미하는 것이 뭐인지 판단하기 어렵다.