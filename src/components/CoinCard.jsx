import React from 'react'
import { VStack, Image, Heading, Text } from "@chakra-ui/react"
import {Link} from "react-router-dom"

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => (
  <Link to={`/coin/${id}`} >
    <VStack
      w={"40"}
      shadow="lg"
      p={"8"}
      borderRadius="lg"
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
        {Symbol}
      </Heading>

      <Text noOfLines={"1"}>{name}</Text>
      <Text noOfLines={"1"}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
    </VStack>
  </Link>
)

export default CoinCard