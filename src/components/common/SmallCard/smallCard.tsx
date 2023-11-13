import React from 'react';
import { Box } from 'native-base';
import cards from '../../../assets/css/cards';

interface SmallCardProps {
  children: React.ReactNode;
  color?: string;
  width?: number
}

export const SmallCard: React.FC<SmallCardProps> = ({ color, width, children }) => {
  const styleCard = color ? width ? {
    ...cards.smallCard,
    backgroundColor: color,
    width: width,
    height: width
  } : {
    ...cards.smallCard,
    backgroundColor: color
  } : width ? {
    ...cards.smallCard,
    width: width,
    height: width
  } : cards.smallCard

  return <Box style={styleCard}>{children}</Box>
};