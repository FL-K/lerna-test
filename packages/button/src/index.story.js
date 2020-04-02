import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import { Card } from '@flaconi/dummy-library/build/components';
import Button from '.';

storiesOf('Button', module).add('default', () => <Fragment>>
    <Card/>
    <Button>{'Button'}</Button>
</Fragment>);