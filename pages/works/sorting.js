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
  <Layout title="Sorting Visualizer">
    <Container>
      <Title>
        Visualizer for Sorting Algorithms <Badge>2025</Badge>
      </Title>
      <P>
        Web application that visually demonstrates how different sorting algorithms, 
        including Bubble Sort, Insertion Sort, and Quick Sort, operate in real time. 
        Users can input custom arrays and watch step-by-step animations that illustrate 
        the algorithm's behavior, making complex sorting concepts easy to understand.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Real-Time Animations:</strong> Watch each sorting algorithm step-by-step with live visual updates.
        </ListItem>
        <ListItem>
          <strong>User-Friendly:</strong> Users can enter their own arrays to see how different data is sorted, 
          with an adjustable speed meter
        </ListItem>
        <ListItem>
          <strong>Multiple Algorithms:</strong> Compare popular sorting algorithms like Bubble Sort, Insertion Sort, 
          and Quick Sort in a single interface.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, HTML, CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/QloYz/interactiveSorting">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Center my={6}>
        <WorkImage src="/images/works/pscrip_fc.webp" alt="PostScript Interpreter Thumbnail" />
      </Center>
      <Center my={6}>
        <WorkImage src="/images/works/pscrip_fc.webp" alt="PostScript Interpreter Thumbnail" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'