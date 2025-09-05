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
        A Python password checker that assesses strength, flags compromised or 
        common passwords, and generates secure alternatives. The tool integrates 
        with the HaveIBeenPwned API and emphasizes clean, modular code and security 
        best practices.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Key Features</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <strong>Password Strength Analysis:</strong> Uses entropy-based scoring to evaluate password 
          complexity and provide a clear strength rating.
        </ListItem>
        <ListItem>
          <strong>Breach Detection:</strong> Checks passwords against the HaveIBeenPwned API and a local 
          blacklist of common passwords to prevent weak or compromised credentials.
        </ListItem>
        <ListItem>
          <strong>Secure Password Suggestions:</strong> Generates strong, random password alternatives 
          when weak or compromised passwords are detected.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, HIBP API Integration</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/QloYz/passwordchecker">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Center my={6}>
        <WorkImage src="/images/works/pyexample1.png" alt="Password Checker Thumbnail" />
      </Center>
      <Center my={6}>
        <WorkImage src="/images/works/pyexample2.png" alt="Password Checker Thumbnail" />
      </Center>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'