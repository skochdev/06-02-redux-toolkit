import { Outlet } from 'react-router-dom';
import { Box } from './Box';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/store';

export const Layout = () => {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <>
      <Box as='main' bg='white'>
        <Box
          as='div'
          bg={{ xs: 'blue', sm: 'tomato', md: 'green', lg: 'pink' }}
          fontSize={{ xs: 'xs', sm: 'm', md: 'l', lg: 'xl' }}
          textAlign='center'
          width='100%'
          p={{ xs: 2, sm: 4, md: 5, lg: 6 }}
          m='50px auto'>
          <button type='button' onClick={() => dispatch(decrement(100))}>
            Decr
          </button>
          {value}
          <button type='button' onClick={() => dispatch(increment(100))}>
            Incr
          </button>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};
