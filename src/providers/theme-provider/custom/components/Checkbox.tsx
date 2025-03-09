import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  label: {
    fontFamily: 'body',
    fontSize: '14px',
    color: '#424955',
  },
  control: {
    padding: 12,
    borderRadius: '3.2px',
    borderWidth: '1px',
    borderColor: '#A2A5AB',
    boxShadow: 'none',
    outline: 'none',
    _focus: {
      boxShadow: 'none',
    },
  },
});

const sizes = {
  md: definePartsStyle({
    control: defineStyle({
      p: 2.5,
    }),
  }),
  sm: definePartsStyle({
    control: defineStyle({
      p: 1.5,
    }),
  }),
};

export const checkboxTheme = defineMultiStyleConfig({ baseStyle, sizes });
