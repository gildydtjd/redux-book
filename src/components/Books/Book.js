import React from 'react'
import { css, cx } from 'emotion'

function Book({ defaultClassName, volumeInfo }) {
  // defaultClassName, volumeInfo를 파라메터로 받는다.
  return (
    <div className={cx([defaultClassName, styles.wrapper])}>
      <img
        src={volumeInfo?.imageLinks?.thumbnail}
        // voluemInfo가 있고 imageLinks가 있을시 thumbnail 의 주소를 사용한다
        className={cx(
          styles.media,
          css({
            width: 128,
            height: 128
          })
        )}
        alt=""
      />
      <div
        className={cx(
          styles.body,
          css({
            maxWidth: 'calc(100% - 128px)'
          })
        )}
      >
        <div className={styles.content}>
          <div className={styles.title} title={volumeInfo?.title}>
            {volumeInfo?.title}
          </div>
          <p
            className={cx(
              styles.description,
              css({
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitLineClamp: '1',
                WebkitBoxOrient: 'vertical'
              })
            )}
            title={volumeInfo?.description}
          >
            {volumeInfo?.description}
          </p>
        </div>
        <div className={styles.meta}>
          {volumeInfo?.authors && (
            <p className={styles.authors}>{volumeInfo.authors.join(', ')}</p>
          )}
          {/* array의 모든요소를 문자열로 합친다 */}
          <p className={styles.publishedDate}>{volumeInfo?.publishedDate}</p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  wrapper: 'flex',
  media: 'object-cover',
  body: 'w-full p-2 border border-l-0 border-gray-400 rounded rounded-l-none',
  content: 'mb-4',
  title: 'mb-2 text-gray-900 font-bold text-lg truncate',
  description: 'text-gray-700 text-base',
  meta: 'flex items-center text-sm',
  authors: 'mr-2 text-gray-900',
  publishedDate: 'text-gray-600'
}

export default Book

// Book을 랜더링하는 부모 영역에서 volumeInfo 에 대한 배열 정보를 확실하게 넘긴다.
// 굳이 여기서 삼항연산자를 통해 설정할 필요가 없다.