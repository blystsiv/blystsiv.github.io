import { animated, useSpring } from 'react-spring';

function App() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-900'>
      <animated.div style={fadeIn} className='text-center px-2'>
        <h1 className='text-4xl text-white font-semibold mb-4'>Coming Soon</h1>
        <p className='text-lg text-gray-300'>We are working on something exciting. Stay tuned!</p>
        <div className='mt-6'>
          <span className='text-2xl mr-2' role='img' aria-label='Rocket'>
            🚀
          </span>
          <span className='text-xl' role='img' aria-label='Hourglass'>
            ⏳
          </span>
        </div>
      </animated.div>
    </div>
  );
}

export default App;
