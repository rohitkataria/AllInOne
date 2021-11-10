import React, { Component } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { AllNavParamList } from '@routes';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { UserStore } from '@stores';



type EmailScreenNavigationProp = StackNavigationProp<AllNavParamList, 'EmailScreen'>;
type ScreenRouteProps = RouteProp<AllNavParamList, 'EmailScreen'>;

type EnterEmailScreenProps = {
    navigation: EmailScreenNavigationProp;
    route: ScreenRouteProps;
    userStore: UserStore;
};
@inject('userStore')
@observer
class EmailScreen extends Component<EnterEmailScreenProps> {
    @observable val = '';
    onValueChange(value: string) {
        this.val = value;
    }
    moveToBackScreen() {
        const { route, navigation } = this.props;
        // route.params.onSubmit(this.val)
        navigation.goBack()
    }
    @observable song = 'string'
    render() {
        const { route, userStore } = this.props
        const { data } = route.params;
        const { email } = userStore;
        return (
            <View>
                <Text>Enter Email Screen  {data}</Text>
                <Text>{this.song}</Text>
                <Text>{email}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.onValueChange(text)}
                    placeholder="useless placeholder"
                />
                <Button
                    title="Press me"
                    onPress={() => this.moveToBackScreen()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
export default EmailScreen;
