/* eslint react/require-default-props: 0 */
import React, { PropTypes } from 'react'

import VideoListItem from './VideoListItem'

const VideoList = ({ videos, onVideoSelect }) => {
  const renderVideoList = videos.map((video) => {
    return (
        <VideoListItem
            video={video}
            onVideoSelect={onVideoSelect}
            key={video.id.videoId}
        />
    )
  })
  return (
      <section className="video-list">
        <ul className="list-group">
          {renderVideoList}
        </ul>
      </section>
  )
}

export default VideoList

VideoList.propTypes = {
  videos: PropTypes.obj,
  onVideoSelect: PropTypes.func.isRequired
}
