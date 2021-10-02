import React from 'react';


const MyLink = (props) => {
    const { link } = props;
    return (
        <div>
            <h3>{ link.description }</h3>
            <a href={link.url}>{ link.url }</a>
        </div>
    )
}

export default MyLink;