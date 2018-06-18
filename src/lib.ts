import { stringify } from 'query-string';
import md5 from 'md5';

export interface GravatarOptions {
  size?: number;
  default?: '404'|'mp'|'identicon'|'monsterid'|'wavatar'|'retro'|'robohash'|'blank';
  defaultUrl?: string;
  forcedefault?: 'y';
  rating?: 'g'|'pg'|'r'|'x';
}

export const getGravatarUrl = (email: string, options: GravatarOptions = {}): string => {
  const query: any = { ...options };
  if (options.defaultUrl) {
    query.default = options.defaultUrl;
  }
  const emailHash = md5(email);
  return `https://www.gravatar.com/avatar/${emailHash}?${stringify(query)}`;
};
