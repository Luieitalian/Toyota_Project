import React, {memo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme, DataTable, Icon} from 'react-native-paper';
import usePastSaleDataTitleStyle from './styles/usePastSaleDataTitleStyle';
import {Props as DataTableTitleProps} from 'react-native-paper/lib/typescript/components/DataTable/DataTableTitle';
import {Text} from 'react-native';

export interface PastSaleDataTitleProps
  extends Omit<DataTableTitleProps, 'children'> {
  category: string;
  onPress: any;
  children?: React.ReactNode | undefined;
}

export type sortDirection = 'ascending' | 'descending' | undefined;

const PastSaleDataTitle = (props: PastSaleDataTitleProps) => {
  const {t} = useTranslation();
  const theme = useTheme();
  const {category, onPress, ...restProps} = props;

  const {styles} = usePastSaleDataTitleStyle(theme);

  const [sortDirection, setSortDirection] = useState<sortDirection>(undefined);

  const onPressMiddleWare = () => {
    setSortDirection((dir: sortDirection) => {
      let direction: sortDirection;

      if (dir === 'ascending') {
        direction = 'descending';
      } else if (dir === 'descending') {
        direction = undefined;
      } else if (dir === undefined) {
        direction = 'ascending';
      }

      console.log('Outer dir: ', direction);
      onPress(category, direction);
      return direction;
    });
  };

  return (
    <DataTable.Title
      {...restProps}
      onPress={onPressMiddleWare}
      sortDirection={sortDirection}
    >
      <Text>{t(category)}</Text>
    </DataTable.Title>
  );
};

export default memo(PastSaleDataTitle);
