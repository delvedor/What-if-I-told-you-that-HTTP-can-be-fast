/* eslint-disable import/no-webpack-loader-syntax */

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
  Appear,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableItem
} from 'spectacle'

// Import code style formatter
import CodeSlide from 'spectacle-code-slide'
// Import Terminal formatter
// import Terminal from 'spectacle-terminal'
import ImageSlide from 'spectacle-image-slide'

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
  zeroxDemo: require('../assets/0x-demo.gif'),
  autocannon: require('../assets/autocannon.png'),
  autocannonDemo: require('../assets/autocannon-demo.gif'),
  flamegraphExpress: require('../assets/flamegraph-express.png'),
  flamegraphNode: require('../assets/flamegraph-node.png'),
  flamegraphFastify: require('../assets/flamegraph-fastify.png'),
  fastifyWhiteHorizontal: require('../assets/fastify-white-landscape.png'),
  fastifyWhiteVertical: require('../assets/fastify-white-portrait.png'),
  nodeExpressFastify: require('../assets/node-expess-fastify.png'),
  rocket: require('../assets/rocket.jpg'),
  speed: require('../assets/speed.jpg'),
  buildRun: require('../assets/build-run.png'),
  router: require('../assets/router.png'),
  json: require('../assets/json.png'),
  helmet: require('../assets/helmet.png'),
  eventLoop: require('../assets/event-loop.png'),
  borderCheck: require('../assets/queue-validation.jpg'),
  validationSpeed: require('../assets/validation-speed.png'),
  validationCorrectness: require('../assets/validation-correctness.png'),
  routing: require('../assets/routing.jpg'),
  dag: require('../assets/dag.png'),
  dagServices: require('../assets/dag-services.png'),
  tooling: require('../assets/tooling.jpg'),
  architecture: require('../assets/architecture.jpg'),
  serialization: require('../assets/serialization.jpg'),
  thanks: require('../assets/thanks.jpg'),
  fastifyBackground: require('../assets/fastify-background.jpg'),
  radixTree: require('../assets/radix-tree.png'),
  radixTreeRouter: require('../assets/radix-tree.gif')
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

const tablePadding = '40px 0 0 0'

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['slide']} bgImage={images.rocket}>
          <Heading size={1} caps textColor='primary'>{'What if I told you that HTTP can be fast?'}</Heading>
          <Text size={6} margin={'150px 0 0 0'}>
            <Link href='https://twitter.com/delvedor' target='_blank' textColor='primary'>By @delvedor</Link>
          </Text>
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang='js'
          code={require('raw-loader!../code/express.js')}
          ranges={[
            { loc: [0, 9], title: 'Express' }
          ]}
        />

        <CodeSlide
          transition={['slide']}
          lang='js'
          code={require('raw-loader!../code/node-server.js')}
          ranges={[
            { loc: [0, 10], title: 'Node Core' }
          ]}
        />

        <Slide transition={['slide']} bgColor='primary'>
          <ImageSlide image={images.nodeExpress} />
        </Slide>

        <Slide transition={['slide']} bgImage={images.tooling} bgDarken={0.6}>
          <Heading caps textColor='primary'>{'Let me introduce you some tooling'}</Heading>
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Image src={images.autocannon} width={1000} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <ImageSlide image={images.autocannonDemo} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Image src={images.zerox} width={1000} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <ImageSlide image={images.zeroxDemo} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <ImageSlide image={images.flamegraphExpress} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <ImageSlide image={images.flamegraphNode} />
        </Slide>

        <Slide transition={['slide']} bgImage={images.fastifyBackground} bgDarken={0.8}>
          <Link href='https://github.com/fastify/fastify' target='_blank' textColor='secondary'>
            <ImageSlide image={images.fastifyWhiteVertical} />
          </Link>
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang='js'
          code={require('raw-loader!../code/code.js')}
          ranges={[
            { loc: [0, 10], title: 'Fastify Server' }
          ]}
        />

        <Slide transition={['slide']} bgColor='primary'>
          <ImageSlide image={images.flamegraphFastify} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <ImageSlide image={images.nodeExpressFastify} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary' align='center flex-start'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem textSize={40}>Feature</TableHeaderItem>
                <TableHeaderItem textSize={40}>Express</TableHeaderItem>
                <TableHeaderItem textSize={40}>Hapi</TableHeaderItem>
                <TableHeaderItem textSize={40}>Fastify</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>Routing</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>Middleware</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>❌</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>Plugins</TableItem>
                <TableItem textSize={40} padding={tablePadding}>❌</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>Decorators</TableItem>
                <TableItem textSize={40} padding={tablePadding}>❌</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>Hooks</TableItem>
                <TableItem textSize={40} padding={tablePadding}>❌</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>Validation</TableItem>
                <TableItem textSize={40} padding={tablePadding}>❌</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>Logging</TableItem>
                <TableItem textSize={40} padding={tablePadding}>❌</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>Async/Await</TableItem>
                <TableItem textSize={40} padding={tablePadding}>❌</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>HTTP2</TableItem>
                <TableItem textSize={40} padding={tablePadding}>❌</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
                <TableItem textSize={40} padding={tablePadding}>✅</TableItem>
              </TableRow>
              <TableRow>
                <TableItem textSize={40} padding={tablePadding}>req/sec</TableItem>
                <TableItem textSize={40} textColor='red' padding={tablePadding}>22,006</TableItem>
                <TableItem textSize={40} textColor='red' padding={tablePadding}>20,816</TableItem>
                <TableItem textSize={40} textColor='green' padding={tablePadding}>34,389</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide transition={['slide']} bgImage={images.speed} bgDarken={0.6}>
          <Heading caps textColor='primary'>{'How can Fastify be so fast?'}</Heading>
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <ImageSlide image={images.buildRun} />
        </Slide>

        <Slide transition={['slide']} bgImage={images.serialization} bgDarken={0.6}>
          <Heading size={3} caps textColor='primary'>{'Serialization'}</Heading>
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Heading size={6} textColor='secondary'>{'Why not JSON.stringify?'}</Heading>
          <Appear><Text textSize={40} padding={tablePadding}>Recursive function</Text></Appear>
          <Appear><Text textSize={40} padding={tablePadding}>It cannot be optimized by V8</Text></Appear>
          <Appear><Text textSize={40} padding={tablePadding}>Generic code</Text></Appear>
          <Appear><Text textSize={40} padding={tablePadding}>Not type specific</Text></Appear>
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Text textSize={60} margin='0 0 50px 0'><Link textColor='tertiary' href='https://github.com/fastify/fast-json-stringify'>fast-json-stringify</Link></Text>
          <Appear><Text textSize={40} padding={tablePadding}>Schema based JSON rendering</Text></Appear>
          <Appear><Text textSize={40} padding={tablePadding}>Code generation</Text></Appear>
          <Appear><Text textSize={40} padding={tablePadding}>Prevents leaking informations</Text></Appear>
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang='js'
          width={1000}
          code={require('raw-loader!../code/json.js')}
          ranges={[
            { loc: [0, 1], title: 'fast-json-stringify' },
            { loc: [2, 10], note: 'Schema definition' },
            { loc: [11, 16], note: 'Stringify the object' }
          ]}
        />

        <CodeSlide
          transition={['slide']}
          lang='js'
          code={require('raw-loader!../code/fastify-serialization.js')}
          ranges={[
            { loc: [0, 1], title: 'Serialization in Fastify' },
            { loc: [2, 14], note: 'declare the schema inside the route options' },
            { loc: [15, 18], note: 'declare the route with the options above' }
          ]}
        />

        <Slide transition={['slide']} bgColor='primary'>
          <ImageSlide image={images.json} />
        </Slide>

        <Slide transition={['slide']} bgImage={images.borderCheck} bgDarken={0.6}>
          <Heading size={3} caps textColor='primary'>{'Data Validation'}</Heading>
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang='js'
          width={1000}
          code={require('raw-loader!../code/ajv.js')}
          ranges={[
            { loc: [0, 2], title: 'ajv' },
            { loc: [3, 10], note: 'Schema definition' },
            { loc: [11, 12], note: 'Vaidate the object' }
          ]}
        />

        <CodeSlide
          transition={['slide']}
          lang='js'
          code={require('raw-loader!../code/fastify-validation.js')}
          ranges={[
            { loc: [0, 1], title: 'Validation in Fastify' },
            { loc: [2, 13], note: 'declare the schema inside the route options' },
            { loc: [14, 17], note: 'declare the route with the options above' }
          ]}
        />

        <Slide transition={['slide']} bgColor='primary'>
          <Heading size={6} textColor='secondary'>{'Validation speeed'}</Heading>
          <Text textSize={35}><Link textColor='tertiary' href='https://github.com/ebdrup/json-schema-benchmark'>ebdrup/json-schema-benchmark</Link></Text>
          <Image src={images.validationSpeed} fit margin={'50px 0 0 0'} height={window.innerHeight / 2} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Heading size={6} textColor='secondary'>{'Validation correctness'}</Heading>
          <Text textSize={35}><Link textColor='tertiary' href='https://github.com/ebdrup/json-schema-benchmark'>ebdrup/json-schema-benchmark</Link></Text>
          <Image src={images.validationCorrectness} fit margin={'50px 0 0 0'} height={window.innerHeight / 2} />
        </Slide>

        <Slide transition={['slide']} bgImage={images.routing} bgDarken={0.6}>
          <Heading size={3} caps textColor='primary'>{'Routing'}</Heading>
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Text textSize={60}><Link textColor='tertiary' href='https://github.com/delvedor/find-my-way'>find-my-way</Link></Text>
          <Appear><Text textSize={40} padding={tablePadding}>No closures</Text></Appear>
          <Appear><Text textSize={40} padding={tablePadding}>No regular expressions</Text></Appear>
          <Appear><Text textSize={40} padding={tablePadding}>Safe</Text></Appear>
          <Appear><Text textSize={40} padding={tablePadding}>Radix-tree based</Text></Appear>
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <ImageSlide image={images.radixTree} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <ImageSlide image={images.radixTreeRouter} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Link href='https://github.com/delvedor/router-benchmark'>
            <ImageSlide image={images.router} />
          </Link>
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang='js'
          code={require('raw-loader!../code/closures.js')}
          ranges={[
            { loc: [0, 10], title: 'The problem with closures' },
            { loc: [2, 5], note: 'The callback is short-lived and hard to optimize' },
            { loc: [1, 6], note: 'bigdata is still in scope!' }
          ]}
        />

        <CodeSlide
          transition={['slide']}
          lang='js'
          code={require('raw-loader!../code/no-closures.js')}
          ranges={[
            { loc: [0, 12], title: 'Avoid nested closures' },
            { loc: [1, 4], note: 'bigdata exits scope here' },
            { loc: [7, 10], note: 'the callback can be optimized!' }
          ]}
        />

        <Slide transition={['slide']} bgColor='primary'>
          <Heading size={3} caps textColor='secondary'>{'Fastify has not closures at all!'}</Heading>
          <Appear>
            <Text margin={'40px 0 0 0'}>
              <Link textColor='tertiary' href='https://github.com/mcollina/reusify' target='_blank'>{'mcollina/reusify'}</Link>
            </Text>
          </Appear>
          <Appear>
            <Text margin={'40px 0 0 0'}>
              <Link textColor='tertiary' href='https://github.com/delvedor/fast-iterator' target='_blank'>{'delvedor/fast-iterator'}</Link>
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Heading size={3} caps textColor='secondary'>{'Middlewares'}</Heading>
          <Text margin={'40px 0 0 0'}>Fastify consumes Express middlewares</Text>
          <Image src={images.helmet} />
          <Text textSize={30}>Helmet comparison</Text>
        </Slide>

        <Slide transition={['slide']} bgImage={images.architecture} bgDarken={0.6}>
          <Heading size={3} caps textColor='primary'>{'Architecture'}</Heading>
          {/* plugins, encapsulation, separation of concerns, decorators, microservices */}
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang='js'
          code={require('raw-loader!../code/register.js')}
          ranges={[
            { loc: [0, 6], title: 'Register a plugin' }
          ]}
        />

        <CodeSlide
          transition={['slide']}
          lang='js'
          code={require('raw-loader!../code/plugin.js')}
          ranges={[
            { loc: [0, 12], title: 'Plugin' }
          ]}
        />

        <Slide transition={['slide']} bgColor='primary'>
          <ImageSlide image={images.dag} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <ImageSlide image={images.dagServices} />
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Text>DEMO!</Text>
        </Slide>

        <Slide transition={['slide']} bgImage={images.fastifyBackground} bgDarken={0.8}>
          <Link href='https://github.com/fastify/fastify' target='_blank' textColor='secondary'>
            <ImageSlide image={images.fastifyWhiteVertical} />
          </Link>
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Link href='http://www.letzdoitapp.com/' target='_blank' textColor='secondary'>
            <Image src={images.letzdoit} width={700} />
          </Link>
        </Slide>

        <Slide transition={['slide']} bgColor='primary'>
          <Heading size={3}>{'This presentation'}</Heading>
          <Text margin={'80px 0 0 0'} fit>
            <Link textColor='tertiary' href='https://delvedor.github.io/What-if-I-told-you-that-HTTP-can-be-fast' target='_blank'>{'https://delvedor.github.io/What-if-I-told-you-that-HTTP-can-be-fast'}</Link>
          </Text>
          <Text margin={'40px 0 0 0'} fit>
            <Link textColor='tertiary' href='https://github.com/delvedor/What-if-I-told-you-that-HTTP-can-be-fast' target='_blank'>{'https://github.com/delvedor/What-if-I-told-you-that-HTTP-can-be-fast'}</Link>
          </Text>
        </Slide>

        <Slide transition={['slide']} bgImage={images.thanks} bgDarken={0.6}>
          <Heading size={3} caps textColor='primary'>{'Thanks!'}</Heading>
          <Text textSize={25} margin={'150px 0 0 0'}>
            <Link href='https://twitter.com/delvedor' target='_blank' textColor='primary'>@delvedor on Twitter</Link>
          </Text>
        </Slide>

        {/* <Slide transition={['zoom']} bgColor='primary' align='center center' maxHeight={window.innerHeight} maxWidth={window.innerWidth}>
          <Image src={images.eventLoop} width={900} />
          <Text textSize={60} margin='20px 0 30px 0'>Fast means more I/O</Text>

          <Appear><Text textSize={40}>Get an I/O event</Text></Appear>
          <Appear><Text textSize={40}>Process the event</Text></Appear>
          <Appear><Text textSize={40}>Release the CPU</Text></Appear>
          <Appear><Text textSize={40} bold>As fast as possible</Text></Appear>
        </Slide> */}
      </Deck>
    )
  }
}
