export const bookPromise = (email, accessToken) => {
  return fetch(`https://e-services-server.vercel.app/booked/userEmail?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
