import React from 'react'

import VideoListItem from './VideoListItem'

const VideoList = ({ videos, onVideoSelect }) => {
  const renderVideoList = videos.map((video) => {
    return (
        <li><VideoListItem
            video={video}
            onVideoSelect={onVideoSelect}
            key={video.etag}
        /></li>
    )
  })
  return (
      <section>
        <ul className="list-group">
          {renderVideoList}
        </ul>
      </section>
  )
}

export default VideoList