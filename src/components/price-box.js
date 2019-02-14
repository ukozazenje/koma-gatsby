import React from 'react'
import './price-box.css'

export default function PriceBox() {
  return (
    <section className="price-box-section">
      <div className="price-box-container price-box-1">
        <div className="price-box-heading">Sony 4 na 24h</div>
        <div className="price-box-body">
          <div>2 ili 4 dzojstika</div>
          <div>2 igrice</div>
        </div>
        <div className="price-box-footer">
          <div>1200din</div>
        </div>
      </div>

      <div className="price-box-container price-box-2">
        <div className="price-box-heading">Sony 4 na 48h</div>
        <div className="price-box-body">
          <div>2 ili 4 dzojstika</div>
          <div>2 igrice</div>
        </div>
        <div className="price-box-footer">
          <div>2000 DIN</div>
        </div>
      </div>
    </section>
  )
}
