export function fetchText(address: string) {
  return new Promise<any>((resolve) => {
    fetch(address, {mode:'cors'})
      .then((response) => {
        console.log(response);
        resolve(response.status);
      });
  });
}