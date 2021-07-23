import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchAsync, selectFetchValue } from "./fetcherSlice";

export function Fetcher() {
  const fetchedValue = useAppSelector(selectFetchValue);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>Press the button to fetch from a website using cors!</div>
      <button onClick={() => dispatch(fetchAsync('https://cors-demo.glitch.me/allow-cors'))}>
        <span>Press me</span>
      </button>
      <div>Here's the result: {fetchedValue}</div>
    </div>
  );
}
