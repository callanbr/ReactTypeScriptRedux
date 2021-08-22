import { MutableRefObject, useEffect, useRef } from 'react';

export const useEventListener = (
  eventName: string,
  handler: () => void,
  element = window
) => {
  const savedHandler: MutableRefObject<(arg?: unknown) => void> =
    useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: Event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};
