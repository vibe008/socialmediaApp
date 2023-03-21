import React from 'react'
import ContentLoader, { Rect, Circle, Path } from 'react-content-loader/native'

const Placeholder = props => {
  return (
    <ContentLoader
      height="100%"
      width={1060}
      // backgroundColor="red"
      primaryColor="#d9d9d9"
      secondaryColor="#ecebeb"
      {...props}
    >
      {/* <Rect x="103" y="12" rx="3" ry="3" width="123" height="7" />
      <Rect x="102" y="152" rx="3" ry="3" width="171" height="6" />
      <Circle cx="44" cy="42" r="38" />
      <Circle cx="44" cy="147" r="38" />
      <Circle cx="44" cy="251" r="38" />
      <Rect x="105" y="117" rx="3" ry="3" width="123" height="7" />
      <Rect x="104" y="222" rx="3" ry="3" width="123" height="7" />
      <Rect x="105" y="48" rx="3" ry="3" width="171" height="6" />
      <Rect x="104" y="257" rx="3" ry="3" width="171" height="6" /> */}

      <Circle cx="44" cy="40" r="38" />
      <Rect x="102" y="10" rx="3" ry="3" width="171" height="6" />
      <Rect x="105" y="50" rx="3" ry="3" width="123" height="6.5" />

      <Circle cx="44" cy="160" r="38" />
      <Rect x="102" y="130" rx="3" ry="3" width="171" height="6" />
      <Rect x="105" y="170" rx="3" ry="3" width="123" height="6.5" />

      <Circle cx="44" cy="280" r="38" />
      <Rect x="102" y="250" rx="3" ry="3" width="171" height="6" />
      <Rect x="105" y="290" rx="3" ry="3" width="123" height="6.5" />

      <Circle cx="44" cy="400" r="38" />
      <Rect x="102" y="370" rx="3" ry="3" width="171" height="6" />
      <Rect x="105" y="410" rx="3" ry="3" width="123" height="6.5" />

      <Circle cx="44" cy="520" r="38" />
      <Rect x="102" y="490" rx="3" ry="3" width="171" height="6" />
      <Rect x="105" y="530" rx="3" ry="3" width="123" height="6.5" />
    </ContentLoader>
  )
}



export default Placeholder