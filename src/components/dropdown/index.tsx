import { styled } from '@stitches/react';
import { HTMLAttributes, forwardRef } from 'react';
import { CSSProps } from '../../types';

const StyledUl = styled('ul', {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    width: '100%',
});

const StyledLi = styled('li', {
    position: 'relative',

    'ul': {
        paddingLeft: 20,
    }
});

const StyledItem = styled('div', {
    display: 'flex',
    padding: '12px 18px',
    alignItems: 'center',
    variants: {
        parent: {
            
        }
    }
});

const StyledLabel = styled('span', {
    width: '100%',
    display: 'block',
    cursor: 'pointer'
});

const StyledArrow = styled('span', {
    display: 'flex',
    height: '25px',
    width: '35px',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
});

const DropdownMenu = forwardRef<HTMLDivElement, HTMLAttributes<HTMLUListElement> & CSSProps>(
    ({children, css, ...props}, ref) => {
        // @ts-ignore
        return (<StyledUl css={css} {...props} ref={ref}>
                {children}
            </StyledUl>
        )
})

const DropdownMenuContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLLIElement> & CSSProps>(
    ({children, css, ...props}, ref) => {
        // @ts-ignore
        return (<StyledLi css={css} {...props} ref={ref}>
                {children}
            </StyledLi>
        )
})

const DropdownMenuItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & CSSProps>(
    ({children, css, ...props}, ref) => {
        return (
            <StyledItem css={css} {...props} ref={ref}>
                {children}
            </StyledItem>
        )
})

const DropdownMenuLabel = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & CSSProps>(
    ({children, css, ...props}, ref) => {
        return (
            <StyledLabel css={css} {...props} ref={ref}>
                {children}
            </StyledLabel>
        )
})

const DropdownMenuArrow = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & CSSProps>(
    ({children, css, ...props}, ref) => {
        return (
            <StyledArrow css={css} {...props} ref={ref}>
                {children}
            </StyledArrow>
        )
})

export {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuArrow,
}
