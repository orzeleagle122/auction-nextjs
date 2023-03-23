import {gql} from "@apollo/client";

export const GET_TEST_TOKEN_QUERY = gql`
    query GetTestToken {
        getTestToken
    }
`;