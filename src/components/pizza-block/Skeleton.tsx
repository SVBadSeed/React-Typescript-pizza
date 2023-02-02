import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <circle cx="134" cy="148" r="125"/>
        <circle cx="144" cy="130" r="13"/>
        <rect x="0" y="287" rx="10" ry="10" width="280" height="19"/>
        <rect x="0" y="329" rx="10" ry="10" width="280" height="88"/>
        <rect x="0" y="441" rx="10" ry="10" width="95" height="30"/>
        <rect x="125" y="433" rx="25" ry="25" width="152" height="45"/>
    </ContentLoader>
)

export default Skeleton

