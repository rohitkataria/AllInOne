import React, { Component } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { AllNavParamList } from '../../routes/AppRoutesList';
import { inject, observer } from 'mobx-react';
import { UserStore } from '../../stores';
import { action } from 'mobx';


type HomeScreenNavigationProp = StackNavigationProp<AllNavParamList, 'HomeScreen'>;
type HomeScreenProps = {
    navigation: HomeScreenNavigationProp;
    userStore: UserStore;
};

@inject('userStore')
@observer
class HomeScreen extends Component<HomeScreenProps> {
 @action
 private onSubmit(name: string): void{
     console.log("name>>>",name)
 }
 @action
 private moveToScreen(): void{
    const {navigation} = this.props;
    const data = 'badal'
    navigation.navigate('EmailScreen',{data, onSubmit:(name: string) =>this.onSubmit(name) })
 }
    render() {
        const { navigation, userStore } = this.props
        userStore.setEmail('sohal@gmail.com');
        return (
            <View>
                <Text>Home screen</Text>
                <Button
                    title="Press me"
                    onPress={() => this.moveToScreen()}
                />
             
            </View>
        )
    }
 
}

  
export default HomeScreen;
