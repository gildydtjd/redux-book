import React from 'react'
import { css, cx } from 'emotion'

function Book({ defaultClassName, volumeInfo }) {
  // defaultClassName 과 VolumeInfo 를 파라메터로 받는다.
  return (
    <div className={cx([defaultClassName, styles.wrapper])}>
      {/* cx 란 classNames라는 css 방식이라는데 css class명을 받아온 파라메터로 설정하는 방법이라한다. */}
      <img
        src={volumeInfo?.imageLinks?.thumbnail}
        // volumeinfo가 참이라면? imagelink가 참이라면 thumnail 의 주소를 가져온다
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

// 아무리 cx를 사용해서 받아온 파라메터의 값으로 styling을 한다하지만
// 너무 위아래로 css가 들어가있어서 보기 불편하다.