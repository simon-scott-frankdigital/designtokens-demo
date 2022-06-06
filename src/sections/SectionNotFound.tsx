import React from 'react'

type SectionNotFound = {
  data: string
}
const SectionNotFound: React.FC<SectionNotFound> = ({ data }) => {
  return <div>cant find {data}</div>
}

export default SectionNotFound
