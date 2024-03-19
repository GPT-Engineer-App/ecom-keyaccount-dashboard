import React from "react";
import { Box, Flex, Heading, Table, Thead, Tbody, Tr, Th, Td, TableContainer, VStack, Text, Stat, StatLabel, StatNumber, StatGroup, Image } from "@chakra-ui/react";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from "react-icons/fa";

const simulatedData = [
  {
    date: "2023-04-01",
    stores: {
      alza: 129.99,
      czc: 139.99,
      mall: 134.99,
    },
  },
  {
    date: "2023-04-02",
    stores: {
      alza: 129.99,
      czc: 139.99,
      mall: 132.99,
    },
  },
  {
    date: "2023-04-03",
    stores: {
      alza: 127.99,
      czc: 137.99,
      mall: 132.99,
    },
  },
  {
    date: "2023-04-04",
    stores: {
      alza: 125.99,
      czc: 135.99,
      mall: 130.99,
    },
  },
  {
    date: "2023-04-05",
    stores: {
      alza: 125.99,
      czc: 135.99,
      mall: 130.99,
    },
  },
  {
    date: "2023-04-06",
    stores: {
      alza: 123.99,
      czc: 133.99,
      mall: 128.99,
    },
  },
  {
    date: "2023-04-07",
    stores: {
      alza: 123.99,
      czc: 131.99,
      mall: 128.99,
    },
  },
];

const calculatePriceChange = (data) => {
  let priceChange = {
    alza: 0,
    czc: 0,
    mall: 0,
  };

  if (data.length > 1) {
    const lastIndex = data.length - 1;
    priceChange.alza = data[lastIndex].stores.alza - data[lastIndex - 1].stores.alza;
    priceChange.czc = data[lastIndex].stores.czc - data[lastIndex - 1].stores.czc;
    priceChange.mall = data[lastIndex].stores.mall - data[lastIndex - 1].stores.mall;
  }

  return priceChange;
};

const Index = () => {
  const priceChange = calculatePriceChange(simulatedData);

  return (
    <VStack spacing={8} p={5}>
      <Heading as="h1" size="xl">
        Lindt Excellence Dashboard
      </Heading>
      <Image src="https://images.unsplash.com/photo-1553452118-621e1f860f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMaW5kdCUyMEV4Y2VsbGVuY2UlMjBFeHRyYSUyMEZpbmUlMjBDcmVhbXklMjBDaG9jb2xhdGV8ZW58MHx8fHwxNzEwODY2Mzg1fDA&ixlib=rb-4.0.3&q=80&w=1080" />
      <StatGroup>
        {Object.keys(priceChange).map((store) => (
          <Stat key={store} p={4} borderWidth="1px" borderRadius="lg">
            <StatLabel>{store.toUpperCase()}</StatLabel>
            <Flex alignItems="center">
              <StatNumber fontSize="2xl">
                {priceChange[store] >= 0 ? <FaRegArrowAltCircleUp color="green" /> : <FaRegArrowAltCircleDown color="red" />}
                {priceChange[store].toFixed(2)} CZK
              </StatNumber>
            </Flex>
          </Stat>
        ))}
      </StatGroup>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th isNumeric>Alza</Th>
              <Th isNumeric>CZC</Th>
              <Th isNumeric>Mall</Th>
            </Tr>
          </Thead>
          <Tbody>
            {simulatedData.map((entry) => (
              <Tr key={entry.date}>
                <Td>{entry.date}</Td>
                <Td isNumeric>{entry.stores.alza.toFixed(2)} CZK</Td>
                <Td isNumeric>{entry.stores.czc.toFixed(2)} CZK</Td>
                <Td isNumeric>{entry.stores.mall.toFixed(2)} CZK</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

export default Index;
