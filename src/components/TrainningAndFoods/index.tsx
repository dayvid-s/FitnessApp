// TODO: ALL THIS NEED BE REFATORED SOON
import Image from "next/image"
import {
  Container,
  ImageArea,
  CbumImage,
  TrainningArea,
  FoodsArea,
  FoodsWrapper,
  FoodsList,
  TrainningTitleWrapper,

} from "./styles"
import CbumAndGirlfriend from "/src/assets/cbum_and_girlfriendjpg-removebg.png"  
import OatMealPorridge from "/src/assets/mingau-de-aveia__2_-removebg-preview.png"
import Crepioca from "/src/assets/1778242455-crepioca-recheada-com-frango-removebg-preview.png"
import Pancake from "/src/assets/pancake.png"

export function TrainningAndFoods( ) {

  return (
    <Container>
      <TrainningArea>
        <TrainningTitleWrapper>
          <h3>Treinos para se inspirar</h3>
        </TrainningTitleWrapper>
        <ImageArea>
          {/* https://www.youtube.com/watch?v=kFb2x_9GsVA */}
          <p>Chris Bumstead e <br/>Courtney Alexis</p>
          <CbumImage 
            src={CbumAndGirlfriend} alt="Cbum e namorada" />
        </ImageArea>
      </TrainningArea>

      <FoodsArea>
        <h3>Alimentos recomendados </h3>
        <FoodsList>
          <FoodsWrapper>
            <h1>Crepioca recheada de frango</h1>
            <div>
              <p>Lanche nutritivo e saudável para você substituir pães e massas!</p>
              <Image src={Crepioca} width={150} height={150} alt={"Mingau de aveia"} />
            </div>

          </FoodsWrapper>
          <FoodsWrapper>
            <h1>Panqueca com Whey protein </h1>
            <div>
              <p>Essa panqueca com whey protein vai deixar todo mundo querendo mais!
              </p>
              <Image src={Pancake} width={150} height={150} alt={"Mingau de aveia"} />
            </div>

          </FoodsWrapper>


          <FoodsWrapper>
            <h1>Mingau de aveia com morango </h1>
            <div>
              <p> Mingau super prático especialmente para quem esta sem apetite. </p>
              <Image src={OatMealPorridge} width={190} height={150} alt={"Mingau de aveia"} />
            </div>

          </FoodsWrapper>
        </FoodsList>
      </FoodsArea>

    </Container>
  )
}