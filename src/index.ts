import GetRandomValues from './NativeGetRandomValues';

export function getRandomBase64(byteLength: number): string {
  return GetRandomValues.getRandomBase64(byteLength);
}
