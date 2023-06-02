import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 35,
  },
  label: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    paddingVertical: 5,
    color: COLORS.text,
  },
  subLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    paddingVertical: 5,
    color: COLORS.text,
  },
});
