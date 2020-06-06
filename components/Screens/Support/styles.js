import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  viewSupport: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
  },
  viewWhatsappNumber: {
    flexDirection: "column",
  },
  icon_whatsapp: {
    marginRight: 12,
  },
  title_whatsapp: {
    color: '#777',
    fontFamily: 'roboto-bold',
    fontSize: 22,
    marginRight: 6,
  },
  value_whatsapp: {
    color: '#3498DB',
    fontFamily: 'roboto-bold',
    fontSize: 22,
    flexDirection: "column",
  },
});

export default styles;
