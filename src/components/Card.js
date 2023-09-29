import React from 'react'
import { Link } from 'react-router-dom'

function Card({ competition
    , date, thumbnail, title, url }) {
  return (
    <div className="card max-w-xs md:w-64 lg:w-80 bg-base-100 shadow-xl my-7" data-theme="fantasy">
  <figure className="px-8 pt-10">
    <img src={thumbnail} alt="Shoes" className="rounded-2xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{competition}</h2>
    <p> <b>Match between :</b> {title}</p>
    <div className="card-actions">
    <Link to={url} target="_blank"><button className="btn btn-primary">Watch Now</button></Link>
    </div>
  </div>
</div>
  )
}

export default Card