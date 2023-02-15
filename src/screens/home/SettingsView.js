import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from 'react-native-gesture-handler';

const SettingsView = () => {
  return (
    <View style={{padding: 30}}>
      <Text style={styles.header}>About us</Text>
      <Text>
      Trenbolone has both anabolic and androgenic effects. Once metabolized, trenbolone esters have the effect of increasing ammonium ion uptake by muscles, leading to an increase in the rate of protein synthesis. It may also have the secondary effects of stimulating appetite and decreasing the rate of catabolism, as all anabolic steroids are believed to; however, catabolism likely increases significantly once the steroid is no longer taken. At least one study in rats has shown trenbolone to cause gene expression of the androgen receptor (AR) at least as potent as dihydrotestosterone (DHT). This evidence tends to indicate trenbolone can cause an increase in male secondary sex characteristics without the need to convert to a more potent androgen in the body.

Studies on metabolism are mixed, with some studies showing that it is metabolized by aromatase or 5α-reductase into estrogenic compounds, or into 5α-reduced androgenic compounds, respectively.

Trenbolone has potency five times as high as that of testosterone. Trenbolone also binds with high affinity to the progesterone receptor. Trenbolone binds to the glucocorticoid receptor, as well.
      </Text>
      
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#000',
    marginTop: 50,
    marginBottom: 30
  },
  section: {
    marginBottom: 20
  },
  sectionHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 10
  },
  option: {
    marginVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default SettingsView;