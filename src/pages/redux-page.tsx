import {Text, View} from 'react-native';
import {Button} from 'shared/components';
import {RootState, useAppDispatch, useAppSelector} from 'shared/redux';
import {decrement} from 'shared/redux/counter-slice';

const ReduxPage = () => {
  const {value} = useAppSelector((state: RootState) => state.counter);

  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>{value}</Text>
      <Button text="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default ReduxPage;
