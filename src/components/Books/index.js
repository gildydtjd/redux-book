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

// 받아오는 데이터가 많기에 index.js로 나눈 것은 매우 좋지만
// const styles 라는 이름에 mt-4라는 style과 별개인 내용이 들어가 불편하다.
