import { StyleSheet } from 'react-native';

import { responsiveWidth as rw, responsiveHeight as rh } from '../../../style/dimensions';
import colors from '../../../style/colors';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  textLatestTitle: { color: colors.colorPrimary, fontWeight: 'bold', marginTop: rh(12), marginLeft: rw(24) },
  categoryContainer: { flex: 1, backgroundColor: colors.colorGray },
  categoryItem: { width: '100%' },
  categoryItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: `${colors.colorGrayText}40`,
    paddingHorizontal: rw(24),
    paddingVertical: rh(30),
  },
  textNew: { color: colors.colorPrimary },
  addButton: {
    position: 'absolute',
    bottom: rh(20),
    backgroundColor: 'white',
    borderRadius: rw(24),
    paddingVertical: rw(10),
    paddingHorizontal: rw(16),
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: {
      height: rw(1),
      width: 0,
    },
  },
});

export default styles;
