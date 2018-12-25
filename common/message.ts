export function hello(): () => string {
  return (): string => 'Hello'
}
