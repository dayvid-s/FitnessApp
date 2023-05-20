import {
  Container,
  ChartWithUserStats,
  UserWaterStatsWrapper,
  UserIndicatorContainer,
  UserEditWrapper,
  UserObjectivesWrapper,
  UserObjectivesRectangle,
  Title
} from "./styles"

import React, { useState } from "react"
import dynamic from "next/dynamic"
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false })
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { AiOutlineUser } from "react-icons/ai"


export function UserStatistics() {
  const percentage = 1.2

  const [options, setOptions] = useState({
    series: [{
      name: "Expectativa ",
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: "Reais Nutrientes",
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#4f35a1", "#246dec"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient"
    },
    stroke: {
    },
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
    markers: {
      size: 0
    },
    yaxis: [
      {
        title: {
          text: "Expectativa",
        },
      },
      {
        opposite: true,
        title: {
          text: "Reais nutrientes",
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    }
  })

  return (
    <Container>
      <Title>

      </Title>
      {/*  maybe this will be at another page. */}

      <ChartWithUserStats>
        <h1>Calorias na semana</h1>
        <ApexCharts
          options={options}
          series={options.series}
          type="area"
          width={600}
          height={200}
        />
      </ChartWithUserStats>



      <UserWaterStatsWrapper>
        <div>

          <h1>Água</h1>
          <img src="https://www.svgrepo.com/show/509617/bottle1.svg"
            width="40" height="40" />
        </div>

        <CircularProgressbar
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "round",
            pathTransitionDuration: 2,
            pathColor: "#6E7BFB",
            textColor: "#8757E7",
            trailColor: "#515264",
            backgroundColor: "#3e98c7",
          })}
          value={percentage} maxValue={2}
        />

        <strong style={{ position: "absolute", marginTop: -5, fontSize: "50px", color: "#fff" }} >{percentage}</strong>
        <p style={{ position: "absolute", marginTop: 60, fontSize: "23px", color: "#fff" }} >Litros</p>



      </UserWaterStatsWrapper>


      <UserIndicatorContainer>
        {/* <TitleArea> */}
        {/* <h1>Suas metas diárias</h1> */}
        {/* </TitleArea> */}

        {/* <AiOutlineUser size={"200px"} color="#212121" /> */}
        {/* <h2>Indicadores Gerais</h2> */}

        <UserObjectivesWrapper>
          <UserObjectivesRectangle>
            <p>Calorias ingeridas</p>
            <p><strong>1890</strong>/2000</p>
            <p>Sódio</p>
            <p><strong>1890</strong>/2000</p>

          </UserObjectivesRectangle>


          <UserObjectivesRectangle>
            <p>Carboidratos <br /></p>
            <p><strong>1240</strong>/2000</p>
            <p>Proteína<br /></p>
            <p><strong>1240</strong>/2000</p>
            <p>Gordura saturada<br /></p>
            <p><strong>1240</strong>/2000</p>



          </UserObjectivesRectangle>


          <UserObjectivesRectangle>
            <p>Calorias queimadas</p>
            <p><strong>249</strong>/2000</p>
            <img src="https://www.svgrepo.com/show/509617/bottle1.svg"
              width="20" height="20" />


          </UserObjectivesRectangle>

          <UserObjectivesRectangle>
            <p>Fibras<br /></p>
            <p><strong>1240</strong>/2000</p>
            <p>Colesterol<br /></p>
            <p><strong>1240</strong>/2000</p>
            <p>Água</p>
            <p><strong>0.5</strong>/2 litros</p>


          </UserObjectivesRectangle>



        </UserObjectivesWrapper>
        <UserEditWrapper>
          <p>Refazer metas</p>
        </UserEditWrapper>
      </UserIndicatorContainer>


      {/*  maybe this will be at another page. */}
    </Container>
  )
}