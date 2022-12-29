import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Chip from '@mui/material/Chip';

const About = () => {
  return (
    <Layout pageTitle='About'>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        </Head>
        <div id='about'>
          <h1>About</h1>
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
                <svg className='about-techstack-icon' viewBox="0 0 128 128">
                  <path fill="#6181B6" d="M64 33.039C30.26 33.039 2.906 46.901 2.906 64S30.26 94.961 64 94.961 125.094 81.099 125.094 64 97.74 33.039 64 33.039zM48.103 70.032c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34H41.7c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515a15.118 15.118 0 01-2.972 3.748zM69.414 73l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528L76.772 73h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zm-56.985 0h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458S41.708 54 38.934 54z"></path>
                </svg>
                <div className="about-techstack-items">
                  <Chip label="Laravel" />
                  <Chip label="Symfony" />
                  <Chip label="MySQL" />
                </div>
              </div>
              <div className='about-techstack'>
                <svg className='about-techstack-icon' viewBox="0 0 128 128">
                  <path fill="#83CD29" d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209a.261.261 0 00.246 0l7.937-4.581a.248.248 0 00.122-.215v-9.16a.256.256 0 00-.123-.219l-7.934-4.577a.254.254 0 00-.245 0l-7.933 4.578a.259.259 0 00-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198a1.676 1.676 0 01-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587a1.743 1.743 0 011.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16a1.68 1.68 0 01-.833 1.448l-7.937 4.582a1.651 1.651 0 01-.834.223m2.453-6.311c-3.475 0-4.202-1.595-4.202-2.932a.23.23 0 01.23-.229h1.026a.23.23 0 01.228.194c.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777a.235.235 0 01-.06.176.236.236 0 01-.168.073h-1.031a.228.228 0 01-.223-.179c-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"></path><path fill="#404137" d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856a1.017 1.017 0 00-1.019-.002l-8.416 4.859a1.018 1.018 0 00-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812a.508.508 0 00.006-.885l-8.468-4.86a.507.507 0 01-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52a.505.505 0 01.507 0l2.637 1.52a.507.507 0 01.255.439v2.396a.507.507 0 00.764.44l5.039-2.932"></path><path fill="#83CD29" d="M88.984 67.974a.2.2 0 01.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932a.194.194 0 01-.195 0l-1.614-.932a.194.194 0 01-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"></path><path fill="#404137" d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666a.251.251 0 01-.254 0l-2.89-1.666a.255.255 0 01-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668a.248.248 0 01.255 0l2.891 1.668a.258.258 0 01.126.221v3.338zm.781-24.716a.511.511 0 00-.756.444v12.915a.359.359 0 01-.177.308.359.359 0 01-.356 0l-2.108-1.215a1.017 1.017 0 00-1.015 0l-8.418 4.858a1.018 1.018 0 00-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861a1.02 1.02 0 00.508-.881V50.821c0-.368-.2-.708-.521-.888l-5.011-2.795"></path><path fill="#83CD29" d="M38.238 59.407a1.014 1.014 0 011.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861a1.02 1.02 0 01-1.017 0l-8.415-4.861a1.02 1.02 0 01-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"></path><path fill="#404137" d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843a.99.99 0 00-.464-.133h-.087a.993.993 0 00-.464.133l-8.416 4.843a1.02 1.02 0 00-.509.883l.018 13.04c0 .182.095.351.254.439a.487.487 0 00.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226a.994.994 0 01.508-.137c.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864a.508.508 0 00.76-.439l.019-13.04"></path>
                </svg>
                <div className="about-techstack-items">
                  <Chip label="Express.js" />
                  <Chip label="MongoDB" />
                  <Chip label="11ty" />
                </div>
              </div>
              <div className='about-techstack'>
                <div className='about-techstack-iconwrapper'>
                  <svg className='about-techstack-icon' viewBox="0 0 128 128">
                    <circle fill="#fff" cx="64.149" cy="64.236" r="60.999"></circle><path fill-opacity=".1" d="M102.966 75.327c0-21.439-17.379-38.819-38.817-38.819s-38.818 17.38-38.818 38.819h11.09c0-15.314 12.415-27.727 27.727-27.727 15.313 0 27.727 12.413 27.727 27.727"></path><circle fill-opacity=".1" cx="66.922" cy="71.999" r="21.072"></circle><linearGradient id="chrome-original-a" gradientUnits="userSpaceOnUse" x1="395.191" y1="484.168" x2="395.191" y2="484.723" gradientTransform="matrix(82 0 0 82 -32341.5 -39660.313)"><stop offset="0" stop-color="#81B4E0"></stop><stop offset="1" stop-color="#0C5A94"></stop></linearGradient><circle fill="url(#chrome-original-a)" cx="64.149" cy="64.235" r="22.736"></circle><linearGradient id="chrome-original-b" gradientUnits="userSpaceOnUse" x1="-608.91" y1="-597.648" x2="-608.91" y2="-547.185" gradientTransform="translate(675 599.775)"><stop offset="0" stop-color="#F06B59"></stop><stop offset="1" stop-color="#DF2227"></stop></linearGradient><path fill="url(#chrome-original-b)" d="M119.602 36.508C104.336 5.792 67.06-6.732 36.343 8.534A62.105 62.105 0 0012.578 29.3l24.955 43.253c-4.597-14.606 3.521-30.174 18.127-34.77a27.676 27.676 0 017.935-1.274"></path><linearGradient id="chrome-original-c" gradientUnits="userSpaceOnUse" x1="-657.835" y1="-491.393" x2="-632.327" y2="-533.537" gradientTransform="translate(675 599.775)"><stop offset="0" stop-color="#388B41"></stop><stop offset="1" stop-color="#4CB749"></stop></linearGradient><path fill="url(#chrome-original-c)" d="M12.578 29.3c-19.1 28.492-11.486 67.071 17.005 86.171a62.133 62.133 0 0029.575 10.319l26.063-44.363c-9.745 11.811-27.22 13.486-39.032 3.74a27.717 27.717 0 01-8.657-12.613"></path><linearGradient id="chrome-original-d" gradientUnits="userSpaceOnUse" x1="-572.385" y1="-486.91" x2="-599.557" y2="-552.345" gradientTransform="translate(675 599.775)"><stop offset="0" stop-color="#E4B022"></stop><stop offset=".3" stop-color="#FCD209"></stop></linearGradient><path fill="url(#chrome-original-d)" d="M59.158 125.791c34.204 2.585 64.027-23.047 66.613-57.25a62.097 62.097 0 00-6.17-32.031H63.595c15.312.07 27.67 12.541 27.598 27.854a27.725 27.725 0 01-5.972 17.064"></path><linearGradient id="chrome-original-e" gradientUnits="userSpaceOnUse" x1="-649.391" y1="-528.885" x2="-649.391" y2="-573.247" gradientTransform="translate(675 599.775)"><stop offset="0" stop-opacity=".15"></stop><stop offset=".3" stop-opacity=".06"></stop><stop offset="1" stop-opacity=".03"></stop></linearGradient><path fill="url(#chrome-original-e)" d="M12.578 29.3l24.955 43.253a27.725 27.725 0 011.107-18.854L13.686 27.636"></path><linearGradient id="chrome-original-f" gradientUnits="userSpaceOnUse" x1="-588.158" y1="-514.559" x2="-618.657" y2="-483.505" gradientTransform="translate(675 599.775)"><stop offset="0" stop-opacity=".15"></stop><stop offset=".3" stop-opacity=".06"></stop><stop offset="1" stop-opacity=".03"></stop></linearGradient><path fill="url(#chrome-original-f)" d="M59.158 125.791l26.063-44.363a27.731 27.731 0 01-16.082 9.426l-11.091 34.937"></path><linearGradient id="chrome-original-g" gradientUnits="userSpaceOnUse" x1="-588.6" y1="-505.621" x2="-584.163" y2="-549.431" gradientTransform="translate(675 599.775)"><stop offset="0" stop-opacity=".15"></stop><stop offset=".3" stop-opacity=".06"></stop><stop offset="1" stop-opacity=".03"></stop></linearGradient><path fill="url(#chrome-original-g)" d="M119.602 36.508H63.595a27.727 27.727 0 0121.626 10.537l35.491-8.873"></path>
                  </svg>
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
