import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/Entypo';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: IconsProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle" size={38} color="#F7CD2E" />;
      break;
    case 'cross':
      return <Icon name="cross" size={38} color="#38CC77" />;
      break;

    default:
      return <Icon name="pencil" size={38} color="#0D0D0D" />;
  }
};

export default Icons;
