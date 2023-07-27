import { DoubtsAnimation } from "../DoubtsAnimation"
import { RectangularButton } from "../RectangularButton"
import {
  Container, TextReadyToUse,
}
  from "./styles"

export function Doubts() {
  const faq = [
    {
      id: 1,
      question: "Quais são os benefícios do FitnessApp?",
      answer: "Os benefícios do FitnessApp incluem treinos personalizados e planos de dieta equilibrados, acompanhamento em tempo real, interface amigável e recursos avançados para ajudá-lo a alcançar seus objetivos de saúde e bem-estar de forma eficiente e motivadora.",
    },
    {
      id: 2,
      question: "Posso personalizar meus planos de treino e dieta?",
      answer: "Sim, no FitnessApp você pode personalizar seus planos de treino e dieta com base em suas metas específicas, nível de condicionamento físico e preferências alimentares, garantindo uma experiência de fitness sob medida para você.",
    },
    {
      id: 3,
      question: "O FitnessApp oferece acompanhamento de progresso?",
      answer: "Sim, o FitnessApp oferece ferramentas avançadas de acompanhamento de progresso, incluindo gráficos e estatísticas detalhadas, para que você possa visualizar seu desempenho e resultados ao longo do tempo e ajustar seus planos conforme necessário.",
    },
    {
      id: 4,
      question: "O FitnessApp suporta o monitoramento de atividades físicas?",
      answer: "Sim, o FitnessApp suporta o monitoramento de atividades físicas e permite a sincronização com dispositivos wearables populares, como smartwatches e rastreadores de fitness, para uma integração perfeita e registro preciso de suas atividades.",
    },
    {
      id: 5,
      question: "Como posso entrar em contato com o suporte ao cliente?",
      answer: "Nossa equipe de suporte ao cliente está disponível para ajudá-lo com qualquer dúvida ou problema que você possa ter. Você pode entrar em contato conosco por e-mail, chat ao vivo ou telefone durante o horário comercial para obter assistência rápida e eficiente. Além disso, oferecemos uma extensa base de conhecimento e tutoriais para ajudá-lo a aproveitar ao máximo o FitnessApp.",
    }
  ]

  return (
    <Container>

      {/* <Container data-aos="fade-up" > */}

      <h2>Ajuda</h2>


      <h1 style={ {marginTop:"50px"}}>Ficou alguma dúvida?</h1>
      
      <h3 style={{ marginTop: "50px" }}>Se a sua dúvida não estiver nas perguntas frequentes, fale com a gente !</h3>
    
      <div style={{marginTop:"30px"}} >
        {
          faq.map((question )=> {
            return (
              <DoubtsAnimation doubt={question}     key={question.id} />
            )
          })}
      </div>
    </Container>
  )
}
