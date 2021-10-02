import React from 'react';
import MyLink from './MyLink';
import {gql, useQuery} from '@apollo/client';

const FEED_QUERY = gql`
    {
        feed {
            id
            links {
                id
                createdAt
                url
                description
            }
        }
    }
`;


const LinkList = (props) => {
    const { data } = useQuery(FEED_QUERY);
    
    return (
        <div>
            {data && data.feed.links.map(link => (
                <MyLink link={link} />
            ))}
        </div>
    )
}

export default LinkList;