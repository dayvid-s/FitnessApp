import Image from "next/image"
import {
  Container,
  ImageArea,
  CbumImage,
  TrainningArea,

} from "./styles"
import CbumAndGirlfriend from "/src/assets/cbum_and_girlfriendjpg-removebg.png"  


export function TrainningAndFoods( ) {

  return (
    <Container>
      <TrainningArea>
        <h3>Treinos para se inspirar</h3>
        <ImageArea>
          {/* https://www.youtube.com/watch?v=kFb2x_9GsVA */}
          <p>Chris Bumstead e <br/>Courtney Alexis</p>
          <CbumImage 
            src={CbumAndGirlfriend} alt="Cbum e namorada" />
        </ImageArea>
      </TrainningArea>

      

    </Container>
  )
}