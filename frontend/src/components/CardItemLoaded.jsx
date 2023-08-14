import React from "react"
import ContentLoader from "react-content-loader"

const CardItemLoaded = () => {
    return (
        <ContentLoader
            speed={2}
            width={1000}
            height={500}
            viewBox="0 0 1000 500"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="50" y="50" rx="0" ry="0" width="300" height="400" />
            <rect x="400" y="60" rx="0" ry="0" width="180" height="60" />
            <rect x="400" y="155" rx="0" ry="0" width="180" height="200" />
            <rect x="390" y="390" rx="30" ry="30" width="200" height="60" />
        </ContentLoader>
    )
}

export default CardItemLoaded;


