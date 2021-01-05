import {graphql} from "react-apollo";
import { gql } from "apollo-boost";


const GET_CHANNELS = gql`
    query Search ($keyword: String!) {
        search(keyword: $keyword) {
            youtubeId
            title
            thumbnails
            viewCount
            commentCount
            subscriberCount
            videoCount
        }
    }
`; 
export default graphql(GET_CHANNELS);

