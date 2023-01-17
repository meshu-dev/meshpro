import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Chip from '@mui/material/Chip';
import PHPImage from '../components/Image/PHPImage';
import NodeImage from '../components/Image/NodeImage';
import BrowserImage from '../components/Image/BrowserImage';

const About = () => {
  return (
    <Layout pageTitle='About'>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        </Head>
        <div id='about'>
          <h1>About (Test)</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
          elit. Aenean commodo ligula eget dolor. Aenean massa 
          <strong>strong</strong>. Cum sociis natoque penatibus 
          et magnis dis parturient montes, nascetur ridiculus 
          mus. Donec quam felis, ultricies nec, pellentesque 
          eu, pretium quis, sem. Nulla consequat massa quis 
          enim. Donec pede justo, fringilla vel, aliquet nec, 
          vulputate eget, arcu. In enim justo, rhoncus ut, 
          imperdiet a, venenatis vitae, justo. Nullam dictum 
          felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. 
          Vivamus elementum semper nisi. Aenean vulputate 
          eleifend tellus. Aenean leo ligula, porttitor eu, 
          consequat vitae, eleifend ac, enim. Aliquam lorem ante, 
          dapibus in, viverra quis, feugiat a, tellus. Phasellus 
          viverra nulla ut metus varius laoreet. Quisque rutrum. 
          Aenean imperdiet. Etiam ultricies nisi vel augue. 
          Curabitur ullamcorper ultricies nisi.</p>
          <div>
            <h2>Technologies</h2>
            <div id='about-techstack-list'>
              <div className='about-techstack'>
                <PHPImage />
                <div className="about-techstack-items">
                  <Chip label="Laravel" />
                  <Chip label="Symfony" />
                  <Chip label="MySQL" />
                </div>
              </div>
              <div className='about-techstack'>
                <NodeImage />
                <div className="about-techstack-items">
                  <Chip label="Express.js" />
                  <Chip label="MongoDB" />
                  <Chip label="11ty" />
                </div>
              </div>
              <div className='about-techstack'>
                <div className='about-techstack-iconwrapper'>
                  <BrowserImage />
                </div>
                <div className="about-techstack-items">
                  <Chip label="React" />
                  <Chip label="Next.js" />
                  <Chip label="Angular" />
                  <Chip label="Vue.js" />
                  <Chip label="Nuxt.js" />
                  <Chip label="HTML 5" />
                  <Chip label="CSS 3" />
                  <Chip label="SASS" />
                  <Chip label="JavaScript" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default About;
