import * as React from 'react';
import { getGravatarUrl, GravatarOptions } from './lib';

export interface GravatarProps extends React.ImgHTMLAttributes<any> {
  email: string;
  options?: GravatarOptions;
  component?: any;
}

export default class Gravatar extends React.PureComponent<GravatarProps, {}> {
  static defaultProps: Partial<GravatarProps> = {
    component: (props: any) => {
      return (
        <img { ...props }/>
      );
    },
  };

  buildComponentProps() {
    const componentProps = {
      ...this.props,
      src: getGravatarUrl(this.props.email, this.props.options),
    };
    delete componentProps.email;
    delete componentProps.options;
    delete componentProps.component;
    return componentProps;
  }

  render(): JSX.Element {
    return this.props.component(this.buildComponentProps());
  }
}
