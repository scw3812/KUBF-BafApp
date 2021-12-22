import { StyleSheet } from 'react-native';

import { responsiveWidth as rw, responsiveHeight as rh } from '../../style/dimensions';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between', backgroundColor: 'white', paddingBottom: rh(64) },
  textTitle: { marginTop: rh(24), marginLeft: rw(24) },
  textDescription: { marginTop: rh(8), marginLeft: rw(24), marginBottom: rh(48) },
});

export default styles;
