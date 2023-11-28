import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomMessage } from '../../redux/slices/messageSlice';

function Greeting() {
  const dispatch = useDispatch();
  const { message, loading } = useSelector((store) => store.message);

  useEffect(() => {
    dispatch(fetchRandomMessage());
  }, [dispatch]);

  useEffect(() => {}, [loading]);

  return (
    <>
      {!loading && (
        <section className="py-4 text-center">
          <header className="text-1xl">Greetings</header>
          <p className="text-4xl font-bold">{message?.message}</p>
        </section>
      )}
    </>
  );
}

export default Greeting;
