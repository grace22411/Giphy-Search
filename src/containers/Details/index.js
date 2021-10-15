import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getSingleGiphyByID } from '../../store/slices/giphy'
import { DetailContainer } from './detail-style'

const GiphyDetail = () => {
  const dispatch = useDispatch()
  const { detail, isLoadingDetail } = useSelector(state => state.giphy)

  const { id } = useParams()

  useEffect(() => {
    dispatch(getSingleGiphyByID(id))
  }, [id])

  const { username, rating, title, url } = detail || {}
  return (
    <div>
      <div>
        {isLoadingDetail ? (
          'Loading...'
        ) : (
          <DetailContainer>
            <div className="detail-image">
              <img src={detail.images.original.url} alt={title} />
            </div>
            <div className="detail-content">
              <h3>{detail.title}</h3>

              <div className="info">
                <div className="info-item">
                  <p>
                    <span>Date:</span>
                    <br />
                    {detail.trending_datetime}
                  </p>
                </div>
                <div className="info-item">
                  <p>
                    <span>Username:</span>
                    <br />
                    {username ? username : 'Nill'}
                  </p>
                </div>
                <div className="info-item">
                  <p>
                    <span>Rating:</span>
                    <br /> {rating}
                  </p>
                </div>
              </div>
              <Link to="/">
                <button>Go Back</button>
              </Link>
            </div>
          </DetailContainer>
        )}
      </div>
    </div>
  )
}

export default GiphyDetail
