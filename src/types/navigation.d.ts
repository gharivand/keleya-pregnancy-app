import {StackScreenProps} from '@react-navigation/stack';

export type ApplicationStackParamList = {
  InitialScreen: undefined;
  SignUp: undefined;
  SignIn: undefined;
  NameScreen: undefined;
  DateScreen: undefined;
  WorkoutScreen: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
