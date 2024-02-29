import React from 'react';
import { styled } from '@stitches/react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

const AspectRatio = AspectRatioPrimitive.Root
type ImageProps = {
    src: string;
    alt: string
    aspectRatio?: [number, number];
} & React.ImgHTMLAttributes<HTMLImageElement> & any;

const StyledImage = styled('img', {});

const Image = React.forwardRef<HTMLDivElement | HTMLImageElement, ImageProps>(
    ({ src, alt, css, ...props }, ref) => {
    if (props.aspectRatio) {
        return <AspectRatio ref={ref} ratio={props.aspectRatio[0] / props.aspectRatio[1]}>
            <StyledImage src={src} alt={alt} css={css} {...props} />
        </AspectRatio>
    }
    return <StyledImage src={src} alt={alt} css={css} ref={ref} {...props} />
})

Image.displayName = 'Image'

export {Image}