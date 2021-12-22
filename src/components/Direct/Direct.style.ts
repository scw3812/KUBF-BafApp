import { StyleSheet } from 'react-native';

import { responsiveWidth as rw } from '../../style/dimensions';
import colors from '../../style/colors';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  addButton: {
    position: 'absolute',
    bottom: rw(12),
    right: rw(24),
    backgroundColor: colors.colorPrimary,
    borderRadius: rw(24),
    padding: rw(4),
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: {
      height: rw(2),
      width: rw(2),
    },
  },
});

export default styles;
