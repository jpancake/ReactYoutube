/* eslint react/require-default-props: 0 */
import React, { PropTypes } from 'react'
import dateFormat from 'dateformat'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }
  const { id: { videoId }, snippet: { description, publishedAt, title } } = video
  const url = `https://www.youtube.com/embed/${videoId}`

  const date = dateFormat(publishedAt, 'mmmm dS yyyy')

  return (
      <section className="video-detail">
        <div className="video embed-responsive embed-responsive-16by9">
          <iframe
              className="embed-responsive-item"
              src={url}
              frameBorder="0"
          />
        </div>
        <div className="details">
          <h4>{title}</h4>
          <span>{date}</span>
          <p>{description}</p>
        </div>
      </section>
  )
}

export default VideoDetail

VideoDetail.propTypes = {
  video: PropTypes.obj
}
