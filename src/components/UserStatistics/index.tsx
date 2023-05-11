import {
  Container,
  ChartWithUserStats,
  UserWaterStatsWrapper,
  UserIndicatorContainer
} from "./styles"

import React , {useState} from "react"
import dynamic from "next/dynamic"
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false })
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"


export function UserStatistics (){
  const percentage = 1.2

  const [options, setOptions] = useState({
    series: [{
      name: "Expectativa ",
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: "Reais Nutrients",
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

  return(
    <Container>

      {/*  maybe this will be at another page. */}
      <ChartWithUserStats>
        <h1>Perfomance semanal</h1>
        <ApexCharts
          
          options={options}
          series={options.series}
          type="area"
          width={400}

          
        />
      </ChartWithUserStats>
      <UserWaterStatsWrapper>
        <h1>Água</h1>

        <CircularProgressbar
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "round",
            pathTransitionDuration: 2,
            pathColor: "#fff" ,
            textColor: "#8757E7",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
          value={percentage}  maxValue={2} 
        />

        <strong style={{position: "absolute", marginTop: -5,fontSize:"50px",color:"#fff" }} >{percentage}</strong> 
        <p style={{position: "absolute", marginTop: 60,fontSize:"23px",color:"#fff" }} >Litros</p> 
          


      </UserWaterStatsWrapper>


    <UserIndicatorContainer></UserIndicatorContainer>

      {/*  maybe this will be at another page. */}
    </Container>
  )
}