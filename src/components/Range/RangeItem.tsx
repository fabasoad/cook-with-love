import * as React from 'react'

interface RangeItemProps {
  img: any
  name: string
  title: string
}

export default function RangeItem(props: RangeItemProps) {
  return (
    <div className="col-sm-6 col-md-3 col-lg-3 web">
      <div className="range-item">
        <div className="hover-bg text-center">
          <div className="hover-text">
            <h4>{props.title}</h4>
          </div>
          <img className="img-thumbnail" src={props.img} alt={props.name} />
        </div>
      </div>
    </div>
  )
}
