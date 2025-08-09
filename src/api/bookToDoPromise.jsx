export const bookToDoPromise = (email, accessToken) => {
  return fetch(`https://e-services-server.vercel.app/booked/providerEmail?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
