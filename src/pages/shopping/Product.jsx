import {
  Flex,
  Image,
  Heading,
  Text,
  Grid,
  Square,
  Circle,
} from "@chakra-ui/react";
import { useState } from "react";

import { AiOutlineShopping } from "react-icons/ai";

export default function Product(product) {
  const [counter, setCounter] = useState(0);
  function addToCart({ product, ammount }) {
    console.log(product.name);
    console.log(ammount);
    setCounter(0);
  }
  return (
    <Grid
      bg="white"
      w="16.2em"
      border="solid 1px"
      borderColor="blackAlpha.100"
      borderRadius="3xl"
      p="1.5rem"
    >
      <Image
        src={"/imgs/products/" + product.imgUrl}
        alt="banana"
        boxSize="140px"
        justifySelf="center"
      />
      <Heading color="blackAlpha.800" as="h4" fontSize="lg" mt=".2rem">
        {product.name}
      </Heading>
      <Text color="blackAlpha.700" fontSize="sm">
        1 kG
      </Text>
      <Text mt="0.5rem" color="blackAlpha.800" fontSize="lg" fontWeight="bold">
        {product.price}
      </Text>
      <Flex gap=".6rem" alignItems="center" mt="1rem">
        <Square
          size="xs"
          w="30px"
          h="30px"
          fontSize="3xl"
          color="green.400"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: "green.400", color: "white" }}
          userSelect="none"
          onClick={() => {
            counter - 1 >= 0 && setCounter(counter - 1);
            ('dispatch({ type: "DECREMENT" });');
          }}
        >
          -
        </Square>
        <Text fontSize="xl">{counter}</Text>
        <Square
          size="xs"
          w="30px"
          h="30px"
          fontSize="2xl"
          color="green.400"
          mr="auto"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: "green.400", color: "white" }}
          userSelect="none"
          onClick={() => {
            setCounter(counter + 1);
            ('dispatch({ type: "INCREMENT" });');
          }}
        >
          +
        </Square>

        <Circle
          bg="green.400"
          size="35px"
          cursor="pointer"
          _hover={{ bg: "green.500" }}
          onClick={() => {
            addToCart({ product: product, ammount: counter });
          }}
        >
          <AiOutlineShopping color="white" size="1.2rem" />
        </Circle>
      </Flex>
    </Grid>
  );
}
