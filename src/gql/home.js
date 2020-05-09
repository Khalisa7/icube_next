import gql from 'graphql-tag';

export const GET_CATEGORY = gql`
    query getCategory{
        categoryList {
            children{
                id
                name
                url_path
            }
        }
    }
`;