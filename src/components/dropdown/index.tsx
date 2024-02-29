import { styled } from '@stitches/react';
import { forwardRef } from 'react';

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

const DropdownMenu = forwardRef<HTMLDivElement, any & React.RefAttributes<HTMLDivElement>>(
    ({children, css, ...props}, ref) => {
        return (
            <StyledUl css={css} {...props} ref={ref}>
                {children}
            </StyledUl>
        )
})

const DropdownMenuContent = forwardRef<HTMLDivElement, any & React.RefAttributes<HTMLDivElement>>(
    ({children, css, ...props}, ref) => {
        return (
            <StyledLi css={css} {...props} ref={ref}>
                {children}
            </StyledLi>
        )
})

const DropdownMenuItem = forwardRef<HTMLDivElement, any & React.RefAttributes<HTMLDivElement>>(
    ({children, css, ...props}, ref) => {
        return (
            <StyledItem css={css} {...props} ref={ref}>
                {children}
            </StyledItem>
        )
})

const DropdownMenuLabel = forwardRef<HTMLDivElement, any & React.RefAttributes<HTMLDivElement>>(
    ({children, css, ...props}, ref) => {
        return (
            <StyledLabel css={css} {...props} ref={ref}>
                {children}
            </StyledLabel>
        )
})

const DropdownMenuArrow = forwardRef<HTMLDivElement, any & React.RefAttributes<HTMLDivElement>>(
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
