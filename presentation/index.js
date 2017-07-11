// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Link,
  Slide,
  Image,
  Text,
  List,
  ListItem,
  Appear
} from 'spectacle'

// Import code style formatter
import CodeSlide from 'spectacle-code-slide'
// Import Terminal formatter
import Terminal from 'spectacle-terminal'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  letzdoit: require('../assets/letzdoit.png'),
  nodeExpress: require('../assets/node-express.png'),
  zerox: require('../assets/0x.png'),
  autocannon: require('../assets/autocannon.png'),
  flamegraphExpress: require('../assets/flamegraph-express.png'),
  flamegraphNode: require('../assets/flamegraph-node.png'),
  fastifyWhiteHorizontal: require('../assets/fastify-white-landscape.png'),
  fastifyWhiteVertical: require('../assets/fastify-white-portrait.png'),
  nodeExpressFastify: require('../assets/node-expess-fastify.png'),
  eventLoop: require('../assets/event-loop.png')
}

preloader(images)

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#000'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['slide']} bgColor='tertiary'>
          <Heading size={1} caps textColor='primary'>{'What if I told you that HTTP can be fast?'}</Heading>
          <Text size={6} margin={'150px 0 0 0'}>
            <Link href='https://github.com/delvedor' target='_blank' textColor='secondary'>@delvedor</Link>
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Link href='http://www.letzdoitapp.com/' target='_blank' textColor='secondary'>
            <Image src={images.letzdoit} width={600} />
          </Link>
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang='js'
          code={require('raw-loader!../assets/node-server.example')}
          ranges={[
            { loc: [0, 10], title: 'Node Plain Server' }
          ]}
        />

        <CodeSlide
          transition={['slide']}
          lang='js'
          code={require('raw-loader!../assets/express.example')}
          ranges={[
            { loc: [0, 9], title: 'Express Server' }
          ]}
        />

        <Slide transition={['slide']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.nodeExpress} width={750} />
        </Slide>

        <Slide transition={['slide']} bgColor='tertiary'>
          <Heading caps textColor='primary'>{'Let me introduce you some tooling'}</Heading>
        </Slide>

        <Slide transition={['slide']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.zerox} width={1000} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.autocannon} width={1300} />
        </Slide>

        <Slide transition={['slide']} bgColor='tertiary'>
          <Heading textColor='primary' size={3} margin={'0 0 50px 0'}>{'Run 0x'}</Heading>
          <Terminal title='1. tmux -2 attach -t 0 (tmux)' output={[
            '0x benchmarks/express.js',
            <div>
              <div>0x captures stacks using dtrace, which requires sudo access</div>
              <div>Password: ••••••••</div>
            </div>,
            <div>
              <div>Example app listening on port 3000!</div>
              <div>Profiling</div>
            </div>,
            <div>
              <div>Caught SIGINT, generating flamegraph</div>
              <div>file:///Users/delvedor/Development/fastify/fastify/profile-68270/flamegraph.html</div>
            </div>
          ]}
          />
        </Slide>

        <Slide transition={['slide']} bgColor='tertiary'>
          <Heading textColor='primary' size={3} margin={'0 0 50px 0'}>{'Run autocannon'}</Heading>
          <Terminal title='1. tmux -2 attach -t 0 (tmux)' output={[
            'autocannon -c 100 -d 5 -p 10 localhost:3000',

            <div><br />Running 5s test @ http://localhost:3000<br />
            100 connections with 10 pipelining factor</div>,

            <div>
              <div style={{ color: '#94dadd' }}><br />Stat           Avg       Stdev       Max</div>
              <div>Latency (ms)   8.36      25.17     118</div>
              <div>Req/Sec        11733.6   341.12    12183</div>
              <div>Bytes/Sec      2.69 MB   82.9 kB   2.88 MB</div>
              <div><br />59k requests in 5s, 13.44 MB read</div>
            </div>
          ]}
          />
        </Slide>

        <Slide transition={['slide']} bgColor='quartenary' align='center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.flamegraphExpress} width={window.innerWidth - 100} />
        </Slide>

        <Slide transition={['slide']} bgColor='quartenary' align='center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.flamegraphNode} width={window.innerWidth - 100} />
        </Slide>

        <Slide transition={['slide']} bgColor='tertiary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.fastifyWhiteVertical} height={window.innerHeight - 200} />
        </Slide>

        <Slide transition={['slide']} bgColor='tertiary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Heading textColor='primary' size={5}>Fastify features</Heading>
          <List>
            <Appear><ListItem>Rich plugin system</ListItem></Appear>
            <Appear><ListItem>Middleware support</ListItem></Appear>
            <Appear><ListItem>Lifecycle methods</ListItem></Appear>
            <Appear><ListItem>Decorators</ListItem></Appear>
            <Appear><ListItem>Validations</ListItem></Appear>
            <Appear><ListItem>Logging</ListItem></Appear>
            <Appear><ListItem>Performances</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.nodeExpressFastify} width={900} />
        </Slide>

        <Slide transition={['slide']} bgColor='tertiary'>
          <Heading caps textColor='primary'>{'How can Fastify be so fast?'}</Heading>
        </Slide>

        <Slide transition={['slide']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.eventLoop} width={window.innerWidth - 200} />
        </Slide>

        <Slide transition={['zoom']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.eventLoop} width={900} />
          <Text textSize={60} margin='20px 0 30px 0'>Fast means more I/O</Text>

          <Appear><Text textSize={40}>Get an I/O event</Text></Appear>
          <Appear><Text textSize={40}>Process the event</Text></Appear>
          <Appear><Text textSize={40}>Release the CPU</Text></Appear>
          <Appear><Text textSize={40} bold>As fast as possible</Text></Appear>
        </Slide>
      </Deck>
    )
  }
}
