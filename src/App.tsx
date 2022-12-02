import './App.css';
import React from 'react';

import {
  Box,
  Heading,
  Container,
  ChakraProvider,
  Text,
  Stack,
} from '@chakra-ui/react';
import StartButtonSection from "./components/StartButtonSection";
import DemoSection from "./components/DemoSection";

function App() {
  const [showDemoSection, setShowDemoSection] = React.useState(false)
  const onStartClick = () => setShowDemoSection(true)

  return (
    <ChakraProvider>
      <>
        <Container maxW={'3xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              Make money from <br />
              <Text as={'span'} color={'green.400'}>
                your audience
              </Text>
            </Heading>

            {showDemoSection ? <DemoSection /> : <StartButtonSection onChange={onStartClick} />}
          </Stack>
        </Container>
      </>
    </ChakraProvider>
  )
}

export default App;
