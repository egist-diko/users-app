import { ComponentType, ReactElement } from 'react';

const renderMultipleComponents = <P extends object>(
  Componment: ComponentType<P>,
  arrayOfProps: P[]
) => {
  const items: ReactElement[] = [];
  for (let i = 0; i < arrayOfProps.length; i++) {
    items.push(<Componment {...arrayOfProps[i]} key={i} />);
  }
  return <>{items}</>;
};

export default renderMultipleComponents;
