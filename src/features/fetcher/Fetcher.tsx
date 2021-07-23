import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { clearValue, fetchAsync, selectFetchStatus, selectFetchValue } from "./fetcherSlice";

export function Fetcher() {
  const fetchedValue = useAppSelector(selectFetchValue);
  const fetchStatus = useAppSelector(selectFetchStatus);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>Press the button to fetch from a website!</div>
      <button
        onClick={() => fetchedValue
          ? dispatch(clearValue())
          : dispatch(fetchAsync('https://cors-demo.glitch.me/allow-cors'))}
        disabled={fetchStatus === 'loading'}
      >
        <span>{fetchedValue ? 'Reset' : 'Press me'}</span>
      </button>
      {fetchStatus === 'loading' && (
        <div>Loading...</div>
      )}
      {fetchStatus === 'idle' && fetchedValue && (
        <div>Here's the response code: {fetchedValue}</div>
      )}
    </div>
  );
}
