import { useState } from 'react';


const shouldFail = (data) =>
  typeof data?.comment === 'string' &&
  data.comment.toLowerCase().includes('fail');

export const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);

    setResponse(null);

    try {
      console.log(data);

      if (shouldFail(data)) {
        setResponse({
          type: 'error',
          message: 'Something went wrong, please try again later!',
        });
      } else {
        setResponse({
          type: 'success',
          message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
        });
      }
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      });
    } finally {
      setLoading(false)
    }
  }

  return { isLoading, response, submit };
}

export default useSubmit;