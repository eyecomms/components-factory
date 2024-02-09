import * as React from 'react';
import { styled } from '@stitches/react';
import {CSSProps} from "../../types";

type HeadingProps = {
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & React.HTMLAttributes<HTMLHeadingElement> & CSSProps;

const StyledHeading = styled('h1', {});

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ level, css, ...props }, ref) => {
    return <StyledHeading ref={ref} as={level} css={css} {...props} />;
})

export default Heading;
