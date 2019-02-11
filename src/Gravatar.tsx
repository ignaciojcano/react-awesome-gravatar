import * as React from 'react';
import { getGravatarUrl, GravatarOptions } from './lib';

export interface GravatarProps {
  email: string;
  children(url: string): JSX.Element;
  options?: GravatarOptions;
}

const gravatar: React.SFC<GravatarProps> = (props:GravatarProps): JSX.Element => {
  const { email, options, children } = props;
  return children(getGravatarUrl(email, options));
};

export default gravatar;
