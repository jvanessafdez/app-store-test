import React from 'react';
import { Box } from 'native-base';
import cards from '../../../assets/css/cards';

interface CardProps {
  children: React.ReactNode;
  backgroundColor?: string;
  height?: number | string;
  width?: number | string;
}

export const Card: React.FC<CardProps> = ({ children, backgroundColor, height, width }) => {
  const cardStyle = {
    ...cards.card,
    backgroundColor: backgroundColor || cards.card.backgroundColor,
    height: height && height,
    width: width ? width : cards.card.width
  };

  return <Box style={cardStyle}>{children}</Box>;
};