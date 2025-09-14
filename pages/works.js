import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import pscript from '../public/images/works/psthumbnail.png'
import sortingt from '../public/images/works/sortingthumb.png'
import pythumbnail from "../public/images/works/pwthumbnail.png"
import chthn from '../public/images/works/chthumb.png'
import gitTh from '../public/images/works/gitThumb.png'
import chessTh from '../public/images/works/chessThumbn.jpg'
import etchTh from '../public/images/works/etchthumb3.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="sorting" title="Sorting Visualizer" thumbnail={sortingt}>
            Interactive sorting algorithm visualizer utilizing JavaScript for logic 
            and HTML/CSS for frontend.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id= "passwordchecker" title="Password Checker" thumbnail={pythumbnail}>
            A Python-based password checker that evaluates password strength 
            while utilizing HIBP API to detect breaches.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id= "repoexplorer" title="Repo Explorer" thumbnail={gitTh}>
            A web application for browsing and exploring GitHub repositories with ease.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="chessAI" title="Chess AI" thumbnail={chessTh}>
            A terminal-based chess game in Python with an AI opponent that makes greedy moves. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="etch" title="Etch-A-Sketch" thumbnail={etchTh}>
            Browser-based drawing game inspired by the Etch-A-Sketch toy. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="interpreter" thumbnail={pscript} title="Postscript Interpreter">
            Haskell-based PostScript interpereter for 2D vector graphics rendering with Cairo. 
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="channels" thumbnail={chthn} title="WARP Channel Analysis">
            Developed Java classes to analyze and visualize channel allocation for a distributed WARP program 
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
