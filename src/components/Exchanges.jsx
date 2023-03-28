import {
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect, useState } from "react"
import Loader from "./Loader"
import { server } from "../index"
import ErrorComponent from "./ErrorComponent"



const Exchanges = () => {
  const [exchanges, setExchanges] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchExchange = async () => {
      
      try {
        const { data } = await axios.get(`${server}/exchanges`)

        setLoading(false)
        setExchanges(data)
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchExchange()
  }, [])

  if (error) return <ErrorComponent message={"error while fetching"}/>

  return (
    <Container p={'2'} maxW={'full'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent='space-evenly'>
            {exchanges.map((i) => (
              <ExchangeCard
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  )
}



const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack
      w={"40"}
      shadow="lg"
      p={"8"}
      borderRadius='lg'
      transition={"all 0.3s"}
      alignContent="center"
      css={{
        "&:hover": {
          transform: "scale(1.2)",
        },
      }}
    >
      <Image
        src={img}
        w={"8"}
        h={"8"}
        objectFit={"contain"}
        alt={"Exchanges"}
      />

      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={"1"}>{name}</Text>
    </VStack>
  </a>
)

export default Exchanges
