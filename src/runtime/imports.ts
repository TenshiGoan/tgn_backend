import { useNuxtApp } from "#app";

export function useBackend() {
  const { $io } = useNuxtApp();

  function callServer() {
    if (process.client) {
      console.log(3);
    } else {
      console.log(2);
    }
  }

  return {
    callServer,
  };
}
