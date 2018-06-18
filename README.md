# react-awesome-gravatar

## Installation
```sh
npm install react-awesome-gravatar --save
yarn add react-awesome-gravatar
```

## Usage

### Gravatar component

```typescript
import { Gravatar } from 'react-awesome-gravatar';

<Gravatar email="example@example.com" />
// Should generate an <img /> tag with the correct gravatar profile url: https://www.gravatar.com/avatar/23463b99b62a72f26ed677cc556c44e8

import { Gravatar, GravatarOptions } from 'react-awesome-gravatar';
const options: GravatarOptions = {
    size: 50,
}; // check below for all available options
<Gravatar email="example@example.com" options={ options } />
// Should generate an <img /> tag with the correct gravatar profile url: https://www.gravatar.com/avatar/23463b99b62a72f26ed677cc556c44e8?size=50

```

There is an optional third prop, called `component`, this prop is used to change how the Gravatar component renders, allowing full cuztomization of the components output.

It should be a function that accepts an argument, this argument is all props passed into `Gravatar` without `email`, `options` and `component` props
```typescript
// Our default
const component = (props: any) => {
    return (
    <img { ...props }/>
    );
},

// So
<Gravatar email="example@example.com" className="left caps red" />

// Renders
<img
    src="https://www.gravatar.com/avatar/23463b99b62a72f26ed677cc556c44e8"
    className="left caps red"
/>

// Want to render in a different component or perhaps in React Native?
// TBH I still need to test this ;)
import { Image } from 'react-native';
const component = (props: any) => {
    return (
        <Image source={{uri: props.src}}/>
    );
}
<Gravatar email="example@example.com" component={component} />
```


### Just the function
If you just need the URL to the profile image of gravatar, you can omit the use of the component and call the function that the component calls directly.

```typescript
import { getGravatarUrl } from 'react-awesome-gravatar';

const profileUrl = getGravatarUrl('example@example.com');
// profileUrl has the profile url: https://www.gravatar.com/avatar/23463b99b62a72f26ed677cc556c44e8

import { getGravatarUrl, GravatarOptions } from 'react-awesome-gravatar';
const options: GravatarOptions = {
    size: 50,
}; // check below for all available options

const profileUrl = getGravatarUrl('example@example.com', options);
//  profileUrl has the profile url: https://www.gravatar.com/avatar/23463b99b62a72f26ed677cc556c44e8?size=50

```

### Options
```typescript
interface GravatarOptions {
  size?: number;
  default?: '404'|'mp'|'identicon'|'monsterid'|'wavatar'|'retro'|'robohash'|'blank';
  defaultUrl?: string;
  forcedefault?: 'y';
  rating?: 'g'|'pg'|'r'|'x';
}
```

The options match 1:1 to the [Gravatar API](https://en.gravatar.com/site/implement/images/) except for `defaultUrl` which if present set the Gravatar `default` to it.

```typescript
const options: GravatarOptions = {
    defaultUrl: 'http://example.com/image.png',
}
const profileUrl = getGravatarUrl('example@example.com', options);
//  profileUrl has the profile url: https://www.gravatar.com/avatar/23463b99b62a72f26ed677cc556c44e8?default=http://example.com/image.png
```

## Tests
@TODO