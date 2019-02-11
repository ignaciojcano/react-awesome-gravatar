import * as React from 'react';
import { getGravatarUrl, GravatarOptions } from './lib';

export interface GravatarProps {
  email: string;
  children(src: string): JSX.Element;
  options?: GravatarOptions;
}

const Gravatar: React.SFC<GravatarProps> = (props:GravatarProps): JSX.Element => {
  const { email, options, children } = props;
  return children(getGravatarUrl(email, options));
};

export default Gravatar;