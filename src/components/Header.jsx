import React from "react"
import { Link } from "react-router-dom"
import { Button, HStack } from "@chakra-ui/react"

const Header = () => {
  return (
    <HStack p={"4"} gap="4" shadow={"base"}>
      <Button variant={"unstyled"}>
        <Link to="/">Home</Link>
      </Button>

      <Button variant={"unstyled"} >
        <Link to="/exchanges">Exchanges</Link>
      </Button>

      <Button variant={"unstyled"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  )
}

export default Header
