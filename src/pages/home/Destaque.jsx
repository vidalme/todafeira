import { useContext } from "react";

//contexts
import { ProductsContext } from "../../LojaApp";

//css
import { Box, Heading, Grid, Button, GridItem, Flex } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";

//pages
import Product from "../shopping/Product";

export default function Destaque() {
  const { produtos } = useContext(ProductsContext);

  //retorna nova array com os produtos mais vendidos
  function produtosMaisVendidos() {
    const maisVendidos = [];

    for (const categoria of Object.values(produtos)) {
      for (const produto of categoria) {
        produto.destaque && maisVendidos.push(produto);
      }
    }
    return maisVendidos;
  }

  return (
    <Box as="section" my="4em" mx="1em">
      <Flex justifyContent="space-between">
        <Heading as="h4" fontSize={["lg", "xl", "2xl"]} color="blackAlpha.800">
          Mais vendidos
        </Heading>

        <Button
          size="sm"
          colorScheme="green"
          borderRadius="full"
          w={["10em", "13em", "17em"]}
          rightIcon={<MdArrowForward />}
        >
          Ver todos
        </Button>
      </Flex>

      <Grid
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
        ]}
        mx=""
        gap="2rem"
        justifyItems="center"
        mt="1.5rem"
      >
        {produtos
          ? produtosMaisVendidos().map((prod) => {
              return (
                <GridItem key={prod.id}>
                  <Product
                    key={prod.id}
                    id={prod.id}
                    name={prod.nome}
                    price={prod.preco}
                    imgUrl={prod.imgUrl}
                  />
                </GridItem>
              );
            })
          : null}
      </Grid>
    </Box>
  );
}
