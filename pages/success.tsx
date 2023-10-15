// pages/success.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Success = () => {
  const router = useRouter();
  const { name, email } = router.query;

  // useEffect is triggered when the component mounts
  useEffect(() => {
    // Check if the 'name' parameter is null or empty
    if (!name) {
      // Redirect back to the form page
      router.push('/'); // Adjust the route as needed
    } else {
      // Additional name validation can be added here if needed
      const isValidName = name.trim().length > 0;

      if (!isValidName) {
        // Redirect back to the form page if the name is invalid
        router.push('/'); // Adjust the route as needed
      }
    }
  }, []); // Empty dependency array to trigger this effect only on mount

  return (
    <div>
      <h1>Success Page</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Success;
