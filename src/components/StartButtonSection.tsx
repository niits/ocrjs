import {
  Button,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

interface StartButtonProps {
  onChange: Function;
}

export default class StartButtonSection extends React.Component<StartButtonProps> {
  render() {
    return (
      <Stack
        direction={'column'}
        spacing={3}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}>
        <Button
          onClick={this.props.onChange.bind(null, this)}
          colorScheme={'green'}
          bg={'green.400'}
          rounded={'full'}
          px={6}
          _hover={{
            bg: 'green.500',
          }}>
          Get Started
        </Button>

      </Stack>
    )
  }
}