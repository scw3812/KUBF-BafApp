import { StyleSheet } from 'react-native';

import { responsiveWidth as rw, responsiveHeight as rh } from '../../style/dimensions';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between', backgroundColor: 'white', paddingBottom: rh(64) },
  textTitle: { marginLeft: rw(24), marginBottom: rh(32) },
  inputContent: { height: rh(250), paddingTop: rh(20) },
});

export default styles;
