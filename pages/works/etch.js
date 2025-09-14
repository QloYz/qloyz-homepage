import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Center,
  Heading
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Chess AI">
    <Container>
      <Title>
        Etch-A-Sketch <Badge>2025</Badge>
      </Title>
      <P>
        This Etch-A-Sketch project is a dynamic, interactive web-based drawing application that allows users to create 
        pixel art on a customizable grid. The grid itself maintains a consistent overall size, ensuring the layout remains 
        neat and uniform regardless of brush adjustments. Built with HTML, CSS, and JavaScript, the project demonstrates DOM 
        manipulation, event handling, and responsive design, providing a fun and visually engaging way to experiment with 
        digital drawing directly in the browser.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Interactive Drawing:</strong> Hovering over grid cells allows for real-time sketching, 
          mimicking the classic Etch-A-Sketch experience.
        </ListItem>
        <ListItem>
          <strong>Color Pallette:</strong> Buttons offer various colors to choose from when drawing. Additionally, there is an
          eraser and clear button.
        </ListItem>
        <ListItem>
          <strong>Responsive and Consistent Layout:</strong> The overall grid size stays the same regardless of brush adjustments, 
          keeping the canvas organized and visually balanced.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tech</Meta>
          <span>JavaScript, HTML, CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/QloYz/etch-a-sketch">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Center my={6}>
        <WorkImage src="/images/works/etchExample.png" alt="Etch-A-Sketch Example 1" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'