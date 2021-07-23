export function fetchText(address: string) {
  // Adding a one-second delay to show loading state
  return new Promise<any>((resolve) => {
    setTimeout(() => fetch(address, {mode:'cors'})
      .then((response) => {
        resolve(response.status);
      }), 1000);
  });
}