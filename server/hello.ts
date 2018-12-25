import * as message from '../common/message'

export function run(): string {
  return `Hello Server World! ${message.hello()}`
}
