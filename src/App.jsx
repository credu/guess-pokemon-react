import { useFetch } from './hooks/useFetch';
import { useCounter } from './hooks/useCounter';
import { useEffect } from 'react';

function App() {
  const { counter, random } = useCounter( 132 );
  const {data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);
  const { id, name, sprites } = !!data && data;

  // const [count, setCount] = useState(0)

  useEffect(() => {
    random(0, 100)
  }, []);

  return (
    <>
      <h1>Guess Pokemon</h1>
      <img src={ sprites?.front_default } className='pokeImg' alt="" />
      <input type="text" className='text-center' />
    </>
  )
}

export default App
