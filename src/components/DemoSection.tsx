import {
  Stack, Box, Image, Button, Flex, Center
} from '@chakra-ui/react';
import { fromImage } from 'imtool';
import React from 'react';

interface DemoSectionState {
  objectUrl: string | undefined
}

export default class DemoSection extends React.Component<{}, DemoSectionState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      objectUrl: undefined
    }
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);

  }
  onFileChange = (event: { target: { files: FileList | null }; }) => {
    this.setState((prevState) => {
      if (event.target.files === null || event.target.files?.length === 0) {
        return prevState
      }

      if (prevState.objectUrl) {
        URL.revokeObjectURL(prevState.objectUrl)
      }

      return {
        objectUrl: URL.createObjectURL(event.target.files[0])
      }
    })

  };
  onFileUpload = async () => {
    if (!this.state.objectUrl) {
      return
    }

    fromImage(this.state.objectUrl).then((value) => {
      console.log(value)
    }).catch(e => console.log(e))
  };

  render() {
    return (
      <Stack
        direction={'column'}
        spacing={3}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}>
        <Box boxSize='sm'>
          <Flex>
            <Center>
              <input type="file" onChange={this.onFileChange} />
            </Center>
            <Center>
              <Button onClick={this.onFileUpload} colorScheme='teal' size='md'>
                Read It!
              </Button>
            </Center>
          </Flex>
          <Image style={{ margin: "auto", marginTop: "1rem" }} src={this.state?.objectUrl} fallbackSrc='https://via.placeholder.com/400x150' />
        </Box>
      </Stack>
    )
  }
}