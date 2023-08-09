// TODO: ALL THIS NEED BE REFATORED SOON
import Image from "next/image"
import {
  Container,
  ImageArea,
  CbumImage,
  TrainningArea,
  FoodsArea,
  FoodsWrapper,
  FoodList,
  TrainningTitleWrapper,

} from "./styles"
import CbumAndGirlfriend from "/src/assets/cbum_and_girlfriendjpg-removebg.png"
import OatMealPorridge from "/src/assets/mingau-de-aveia__2_-removebg-preview.png"
import Crepioca from "/src/assets/1778242455-crepioca-recheada-com-frango-removebg-preview.png"
import Pancake from "/src/assets/pancake.png"

export function TrainningAndFoods() {

  return (
    <Container>
      <TrainningArea>
        <TrainningTitleWrapper>
          <h3>Treinos para se inspirar</h3>
        </TrainningTitleWrapper>
        <ImageArea>
          {/* https://www.youtube.com/watch?v=kFb2x_9GsVA */}
          <p>Chris Bumstead e <br />Courtney Alexis</p>
          <CbumImage
            src={CbumAndGirlfriend} alt="Cbum e namorada" />
        </ImageArea>
      </TrainningArea>

      <FoodsArea>
        <h3>Alimentos recomendados </h3>
        <FoodList>
          <FoodsWrapper>
            <h3>Crepioca recheada de frango</h3>
            <div>
              <p>Lanche nutritivo e saudável para você substituir pães e massas!</p>
              <Image src={Crepioca}  alt={"Crepioca"} />
            </div>

          </FoodsWrapper>
          <FoodsWrapper>
            <h3>Panqueca com Whey protein </h3>
            <div>
              <p>Essa panqueca com whey protein vai deixar todo mundo querendo mais!
              </p>
              <Image src={Pancake}  alt={"Mingau de aveia"} />
            </div>

          </FoodsWrapper>


          <FoodsWrapper>
            <h3>Mingau de aveia com morango </h3>
            <div>
              <p> Mingau super prático especialmente para quem esta sem apetite. </p>
              <Image src={OatMealPorridge}  alt={"Mingau de aveia"} />
            </div>

          </FoodsWrapper>
        </FoodList>
      </FoodsArea>

    </Container>
  )
}