import React, { Component } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { AllNavParamList } from '../../routes/AppRoutesList';
<<<<<<< Updated upstream
import { inject, observer } from 'mobx-react';
import { UserStore } from '../../stores';

=======
import { withTheme } from '../../styles';
import { CustomTheme } from '../../interfaces';
>>>>>>> Stashed changes

type HomeScreenNavigationProp = StackNavigationProp<AllNavParamList, 'HomeScreen'>;
type HomeScreenProps = {
    navigation: HomeScreenNavigationProp;
<<<<<<< Updated upstream
    userStore: UserStore;
=======
    theme: CustomTheme;
>>>>>>> Stashed changes
};

@inject('userStore')
@observer
class HomeScreen extends Component<HomeScreenProps> {
    render() {
<<<<<<< Updated upstream
        const { navigation, userStore } = this.props
=======
        const { navigation, theme } = this.props
        const { GREEN } = theme.COLORS
>>>>>>> Stashed changes
        const data = 'badal'
        userStore.setEmail('sohal@gmail.com');
        return (
            <View>
                <Text style={{ color: GREEN }}>Home screen</Text>
                <Button
                    title="Press me"
                    onPress={() => navigation.navigate('EmailScreen', { data })}
                />
            </View>
        )
    }
}
export default withTheme(HomeScreen);

