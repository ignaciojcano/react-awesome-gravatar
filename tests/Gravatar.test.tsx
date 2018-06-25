import * as React from 'react';
import { create } from 'react-test-renderer';
import Gravatar from '../src/Gravatar';
import { GravatarOptions } from '../src/lib';

describe('getGravatarUrl', () => {
  const email:string = 'example@example.com';

  it('Renders the default img tag with the correct url', () => {
    const component = create(
      <Gravatar email={email} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Renders the img tag with the correct url and options', () => {
    const options: GravatarOptions = {
      default: 'monsterid',
      size: 250,
    };
    const component = create(
      <Gravatar email={email} options={options} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Renders a custom component with the correct url passed in through props', () => {
    const options: GravatarOptions = {
      default: 'monsterid',
      size: 250,
    };
    const textComponent = (props: any) => {
      const { src, ...rest } = props;

      return (
        <text value={src} {...rest}/>
      );
    };
    const component = create(
      <Gravatar email={email} options={options} component={textComponent} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
