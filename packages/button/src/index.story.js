import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import { AlertBox } from '@flaconi/dandy-components-library/build/components';
import {  Input } from '@flaconi/dandy-components-library/build/components';
import Light from '@flaconi/dandy-components-library/build/styles/themes/light/Light';
console.log(Light);

import Button from '.';
import {ThemeProvider} from "styled-components";

storiesOf('Button', module).add('default', () =>
    <ThemeProvider theme={Light}>
        <Fragment>
            <AlertBox/>
            <Input placeholder="You can edit me" />
            <Button>{'Button'}</Button>
        </Fragment>
    </ThemeProvider>
);
