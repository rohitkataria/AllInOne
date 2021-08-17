import React, { Component } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { AllNavParamList } from '../../routes/AppRoutesList';
import { action, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { UserStore } from '../../stores';
import { ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker';

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
    @observable placeholderValue = ''
    onValueChange(value: string) {
        const {navigation, route} = this.props;
        this.placeholderValue = value
       route.params.onSubmit(this.placeholderValue)
    }
    @observable song = 'string'



    @action
    private openPicker(): void{
        const options: ImageLibraryOptions = {
          mediaType:'photo'
          };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response.assets);
      
            // if (response.didCancel) {
            //   console.log('User cancelled image picker');
            // } else if (response.error) {
            //   console.log('ImagePicker Error: ', response.error);
            // } else if (response.customButton) {
            //   console.log('User tapped custom button: ', response.customButton);
            //   alert(response.customButton);
            // } else {
            //   const source = { uri: response.uri };
            //   console.log('response', JSON.stringify(response));
            //   this.setState({
            //     filePath: response,
            //     fileData: response.data,
            //     fileUri: response.uri
            //   });
        //     }
          });
    }
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
                <Button title='choose image' onPress={() => this.openPicker()}/> 
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
