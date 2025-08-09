export const servicePromise = (email) => {
  return fetch(`https://e-services-server.vercel.app/services/email?email=${email}`).then(
    (res) => res.json()
  );
};
