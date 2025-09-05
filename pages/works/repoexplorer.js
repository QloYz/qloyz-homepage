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
  <Layout title="GitHub Repo Explorer">
    <Container>
      <Title>
        GitHub Repo Explorer <Badge>2025</Badge>
      </Title>
      <P>
        Repo Explorer is a web application that allows users to easily browse and explore 
        GitHub repositories. It provides a clean interface to navigate through directories, 
        view file contents, and quickly search for specific files within a repository. 
        This tool simplifies the process of understanding and inspecting the structure of 
        GitHub projects without leaving the browser.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Repository Navigation:</strong> Browse through directories and files of any GitHub 
          repository seamlessly.
        </ListItem>
        <ListItem>
          <strong>Search Filtering:</strong> Quickly locate repositories through the filtering function.
          Filter by stars, forks, & last updated.
        </ListItem>
        <ListItem>
          <strong>GitHub Links:</strong> Utilizes GitHub REST API to fetch repository data and
          provides direct links to the original GitHub pages for easy access.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React/Typescript, GitHub API, HTML & CSS, Node.js</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/QloYz/repo-explorer">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Center my={6}>
        <WorkImage src="/images/works/gitExample.png" alt="Repo Explorer Thumbnail" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'