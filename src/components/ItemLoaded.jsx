import React from 'react';
import ContentLoader from 'react-content-loader';

function ItemLoaded() {
    return (
        <ContentLoader
            speed={2}
            width={290}
            height={405}
            viewBox="0 0 290 405"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="20" rx="0" ry="0" width="290" height="193" />
            <rect x="0" y="233" rx="0" ry="0" width="290" height="30" />
        </ContentLoader>
    );
}

export default ItemLoaded;
