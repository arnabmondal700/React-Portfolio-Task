import { useState } from 'react';


const shouldFail = (data) =>
  typeof data?.comment === 'string' &&
  data.comment.toLowerCase().includes('fail');

export const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const submit = async (url, data) => {
    setIsLoading(true);

    await wait(1000);

    const isSuccess = Math.random() >= 0.5;

    if (isSuccess) {
      setResponse({
        type: 'success',
        message: `Thanks for contacting me, ${data.firstName}!`,
      });
    } else {
      setResponse({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    }

    setIsLoading(false);
  };

  return { isLoading, response, submit };
}

export default useSubmit;