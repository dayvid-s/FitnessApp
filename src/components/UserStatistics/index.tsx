import {
  Container, ChartWithUserStats,
} from "./styles"
import React , {useState} from "react"
import dynamic from "next/dynamic"
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false })


export function UserStatistics (){
  const [options, setOptions] = useState({
    series: [{
      name: "Expectativa ",
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: "Reais Nutrients",
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
      height: 50,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["#4f35a1", "#246dec"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth"
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
        <div>eae</div>
        <ApexCharts
          
          options={options}
          series={options.series}
          type="line"
          width={500}
        />
        {/* use a fonte do video lá */}
      </ChartWithUserStats>
      {/*  maybe this will be at another page. */}
    </Container>
  )
}