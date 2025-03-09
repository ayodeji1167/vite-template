import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

export const BaseApp = ({ children }: { children?: ReactNode }) => {
  return <Box>{children ? children : <Outlet />}</Box>;
};
