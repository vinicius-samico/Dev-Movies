import { Title, Container } from "./styles"
import {getImages} from "../../utils/getImages"

function Credits({ credits }) {
    console.log(credits)
    return (
        <>
            <Title>creditos</Title>
            {credits && (
                <Container>
                    {credits.slice(0,5).map( artist => (
                        <div key={artist.id}>
                            <img src={getImages(artist.profile_path)} alt="" />
                            <p>{artist.original_name}</p>
                        </div>
                        ))}
                    <div></div>
                </Container>
            )}

        </>
    )
}

export default Credits