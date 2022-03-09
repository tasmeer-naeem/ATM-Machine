import React from 'react'

const List = ({result}) => {
    console.log(result)
  return (
    <div>
   <h5>5000 - {result[0]} </h5>
   <h5>1000 - {result[1]}  </h5>
   <h5>500 - {result[2]}  </h5>
    </div>
  )
}

export default List