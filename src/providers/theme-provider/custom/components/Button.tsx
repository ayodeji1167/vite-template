import { ComponentDefaultProps } from '@chakra-ui/react';
export const Button: ComponentDefaultProps = {
  defaultProps: {
    size: 'md',
    colorScheme: 'primary',
  },
  baseStyle: {
    variant: 'solid',
    borderRadius: '.5rem',
    fontFamily: 'body',
    h: '2.5rem',
    fontSize: '.75rem',
    fontWeight: 700,
  },
  variants: {
    primary: {
      color: 'white',
      bgColor: 'primary.500',
      width: { md: '130px' },
      fontSize: '.75rem',

      _focus: {
        boxShadow: 'none',
        bgColor: 'brand.primary.500',
        borderRadius: '10px',
        outline: 'none !important',
        border: 'none',
      },
    },
    outline: {
      color: 'primary.500',
      bgColor: 'white',
      fontSize: '.75rem',

      border: '1px solid',
      borderColor: 'primary.500',
      width: { md: '130px' },
      _focus: {
        bgColor: 'white',
      },
      _hover: {
        borderColor: 'primary.500',
        bgColor: 'white',
      },
    },

    solid: {
      color: 'white',
      bgColor: 'primary.500',
      width: { md: '130px' },
      fontSize: '.75rem',

      _focus: {
        bgColor: 'primary.700',
        outline: 'none !important',
        border: 'none',
      },
      _hover: {
        color: 'white',
        bgColor: 'primary.600',
      },
    },

    secondary: {
      color: 'gray.600',
      bgColor: 'white',
      width: '6.3125rem',
      border: '1px solid #E7E7E7',
      fontSize: '.75rem',
      fontWeight: 500,
      rounded: '.25rem',
    },
  },
};
