import React from 'react'
import './Card.scss'

const Card = () => {
  return (
    <div id='card'>
        <div className="card__top">
            <div className="card__top__img">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
            <div className="card__top__name">
                <h4>Lina Gold</h4>
                <span>Owner,Ford</span>
            </div>
        </div>
        <div className="card__bottom">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente excepturi tempora blanditiis, incidunt hic quia! Sapiente excepturi tempora blanditiis, incidunt hic quia!</p>
            <button>Detail</button>
        </div>
    </div>
  )
}

export default Card