import React, {useState} from 'react';
import {gql, useMutation} from '@apollo/client'
import { useHistory } from 'react-router-dom';

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $description: String!
    $url: String!
  ) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;
const CreateLinks = (props) => {

    const history = useHistory();
    const [formInfo, setForm] = useState({
        description: '',
        url: ''
    });

    

    const [createLink] = useMutation(CREATE_LINK_MUTATION, {
        variables: {
            description: formInfo.description,
            url: formInfo.url
        },
        onCompleted: () => history.push('/')

    });


    const inputHandler =  (e) => {
        console.log(e.target.value)
        setForm({
            ...formInfo,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        createLink();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='flex flex-column mt3'>
                    <input className='mb2' value={formInfo.description} onChange={inputHandler} name='description' placeholder='Description...' />
                    <input onChange={inputHandler} name='url' placeholder='URL...' value={formInfo.url} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateLinks;
