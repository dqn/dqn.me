export const baseUrl = "https://dqn.me";

export function withBaseUrl(path: string): string {
  return new URL(path, baseUrl).toString();
}
