/* eslint react/require-default-props: 0 */
import React, { PropTypes } from 'react'

const VideoListItem = ({ video, onVideoSelect }) => {
  const { snippet: { title, thumbnails: { default: { url } } } } = video
  return (
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={url} alt="video" />
          </div>
          <div className="media-body">
            <div className="media-heading">
              {title}
            </div>
          </div>
        </div>
      </li>
  )
}

export default VideoListItem

VideoListItem.propTypes = {
  video: PropTypes.obj,
  onVideoSelect: PropTypes.func.isRequired
}
