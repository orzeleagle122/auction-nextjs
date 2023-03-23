import {gql} from "@apollo/client";

export const UPLOAD_PLAYER_DATE_MUTATION = gql`
    mutation UploadPlayerDate($auctionId: ID!, $multipartFile: MultipartFile!){
        uploadPlayersData(auctionId: $auctionId, multipartFile: $multipartFile){
            id
        }
    }
`;