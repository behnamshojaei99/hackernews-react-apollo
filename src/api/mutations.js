import {gql} from '@apollo/client';
export const SIGN_UP = gql`
    mutation SignupMutation (
        $email: String!
        $password: String!
        $name: String!
    ) {
        signup(
            email: $email,
            password: $password,
            name: $name
        ) {
            token
        }
    }
`;

export const LOGIN = gql`
    mutation LoginMutation (
        $email: String!
        $password: String!
    ) {
        login(
            email: $email,
            password: $password
        ) {
            token
        }
    }
`;