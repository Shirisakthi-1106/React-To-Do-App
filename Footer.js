import  React from 'react'

const Footer = ({length}) => {
  return (
    <div class="footer">{length} {length=== 1?"item":"items"} in list </div>
  )
}

export default Footer