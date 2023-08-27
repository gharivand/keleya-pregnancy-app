import React, {useContext} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {ApplicationScreenProps} from '../types/navigation';
import {fonts, images, layout} from '../theme';
import {Button, CheckBox} from '../components';
import Input from '../components/Input';
import {StoreContext} from '../context/Store';

interface IValues {
  email: string;
  password: string;
  privacy: boolean;
  terms: boolean;
}

const initialValues: IValues = {
  email: '',
  password: '',
  privacy: false,
  terms: false,
};

const SignUp: React.FC<ApplicationScreenProps> = () => {
  const {t} = useTranslation(['auth']);
  const {updateUserData} = useContext(StoreContext);

  const valuesSchemaValidation = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(4).required('Required'),
    privacy: Yup.boolean().isTrue().required('Required'),
    terms: Yup.boolean().isTrue().required('Required'),
  });

  const onSubmit = (values: IValues) => {
    if (updateUserData) {
      updateUserData({firstname: values.email});
    }
  };

  return (
    <View style={layout.fill}>
      <Image source={images.authentication} style={styles.headerImage} />
      <SafeAreaView style={layout.fill}>
        <Formik
          initialValues={initialValues}
          validationSchema={valuesSchemaValidation}
          onSubmit={onSubmit}>
          {({
            handleChange,
            setFieldValue,
            handleSubmit,
            values,
            isValid,
            dirty,
          }) => (
            <View style={layout.colSpaceBetween}>
              <View style={styles.inputContainer}>
                <Text style={styles.title}>
                  {t('add_your_details_below_to')}
                </Text>
                <Input
                  placeholder={t('example_email')}
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                <Input
                  placeholder={t('enter_a_password')}
                  isPassword={true}
                  value={values.password}
                  onChangeText={handleChange('password')}
                />
                <CheckBox
                  label={t('i_ve_read_the_privacy_policy')}
                  onPress={value => setFieldValue('privacy', value)}
                />
                <CheckBox
                  label={t('i_accept_terms_conditions')}
                  onPress={value => setFieldValue('terms', value)}
                />
              </View>
              <Button
                title={t('create_account')}
                onPress={handleSubmit}
                disabled={!(isValid && dirty)}
              />
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
  },
  inputContainer: {
    marginTop: '-15%',
    gap: 12,
  },
  title: {
    ...fonts.textRegular,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default SignUp;
