export type CardProps = {
  onPress?: (...args: unknown) => unknown;
  episode: string;
  season: string;
  airDate: string;
};
