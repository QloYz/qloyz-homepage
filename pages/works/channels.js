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
  <Layout title="Channel Analysis">
    <Container>
      <Title>
        WARP System Channel Analysis <Badge>2024</Badge>
      </Title>
      <P>
        Developed a Java-based tool to analyze and visualize channel allocation for WARP 
        distributed programs as part of a 4-person Agile team. Implemented ChannelAnalysis 
        and ChannelVisualization classes to generate .ch files showing channel usage, idle 
        slots, and conflicts across nodes. Designed program flow using UML sequence and class 
        diagrams, created JUnit tests for all methods, and documented the code with comprehensive 
        JavaDoc. Delivered functionality in three iterative sprints, using stepwise refinement 
        and modular design to ensure correctness and maintainability.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Channel Allocation Visualization:</strong> Generates a clear, tabulated view of channel usage, 
          idle slots, and conflicts across nodes in WARP programs.
        </ListItem>
        <ListItem>
          <strong>Automated Conflict Detection:</strong> Identifies and flags channel conflicts when multiple coordinators 
          attempt to use the same channel simultaneously.
        </ListItem>
        <ListItem>
          <strong>Testing & Documentation:</strong> Includes JUnit tests for all methods, detailed UML diagrams, and full JavaDoc 
          documentation for maintainability and code clarity.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Skills</Meta>
          <span>Java, JUnit, Javadocs, UML Diagrams, Agile/Scrum Process</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://research-git.uiowa.edu/henrygrant/cs2820-henrygrant">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'