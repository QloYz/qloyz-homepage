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
        Chess AI Bot<Badge>2023</Badge>
      </Title>
      <P>
        ChessAI is a terminal-based chess game in Python where players face off against an 
        AI opponent. The AI uses a greedy algorithm, prioritizing moves that capture the most 
        valuable pieces immediately. The game supports legal moves for all standard chess pieces, 
        pawn promotion, and a clear ASCII-based board display. Designed to be easily 
        extendable for more advanced AI strategies or a GUI interface in the future.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Greedy AI Opponent:</strong> Plays by capturing the most valuable pieces, 
          giving a challenging experience for beginners.
        </ListItem>
        <ListItem>
          <strong>Full Move Support:</strong> Handles legal moves for pawns, knights, bishops, 
          rooks, queens, and kings, including pawn promotion.
        </ListItem>
        <ListItem>
          <strong>Terminal Visualization:</strong> Clear ASCII board with ranks/files labeled, 
          showing piece positions and moves for easy gameplay.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tech</Meta>
          <span>Python, Basic AI Integration, Terminal & ASCII</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/QloYz/chessAI">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Center my={6}>
        <WorkImage src="/images/works/chessEx1.png" alt="Chess AI Example 1" />
      </Center>
      <Center my={6}>
        <WorkImage src="/images/works/chessEx2.png" alt="Chess AI Example 2" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'