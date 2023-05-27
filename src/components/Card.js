import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      <HStack>
        <Box bg='white' borderRadius={10}>
          <Image src={imageSrc} borderRadius={10}/>
          <VStack align='initial' spacing={5} padding={5}>
            <Box color='black' >
              <Heading >{title}</Heading>
            </Box>

            <Box color='#606060'>
              <Text>{description}</Text>
            </Box>

            <Box>
              <HStack color='black'>
                <Heading size='sm'>See more </Heading>  
                <FontAwesomeIcon icon={faArrowRight} size="1px" />
              </HStack>
            </Box>
          </VStack>
        </Box>
      </HStack>
  );
};

export default Card;
