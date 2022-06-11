import React from 'react'
import {View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native'

const colorGitHub = '#010409'
const colorTitle = '#c9d1d9'
const colorNick = '#7d8590'
const urlToGitHub = 'https://github.com/jocemarkovacs'

const gitProfileGitHub = 'https://avatars.githubusercontent.com/u/69181692'

const App = () =>{

    const handlePressGoToGitHub = async ()=>{
        //verfifica primeiro de forma assincrona se a URL pode ser aberta
        console.log('Verificando Link')
        const res = await Linking.canOpenURL(urlToGitHub)
        
        if(res){
            console.log('Link Aprovado')
            console.log('Abrindo Link...')
            await Linking.openURL(urlToGitHub)
        }

    }

    return (<SafeAreaView style={style.container}>
                <StatusBar backgroundColor={colorGitHub} barStyle={'light-content'} />
                <View style={style.content}>                    
                    <Image source={{uri: gitProfileGitHub}} style={style.avatar}/>
                    <View style={{justifyContent: 'flex-start',}}>
                        <Text accessibilityLabel='Nome: Jocemar Voss Kovacs' style={[style.textTitle]}>
                            Jocemar Voss Kovacs
                        </Text>
                        <Text accessibilityLabel='Nickname: jocemarkovacs' style={style.textNick}>
                            jocemarkovacs
                        </Text>
                        <Text accessibilityLabel='descrição: Cursando Engenharia de Software pela Ampli Anhanguera LTDA. Programador Python / Kivy / MySQL. Estudando muito nesta nova fase.' style={style.textDescription}>
                            Cursando Engenharia de Software pela Ampli Anhanguera LTDA. Programador Python / Kivy / MySQL. Estudando muito nesta nova fase.
                        </Text>
                    </View>
                    <Pressable onPress={handlePressGoToGitHub}>
                        <View style={style.button}>
                            <Text>
                                Open in GitHub
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </SafeAreaView>
    );
}

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGitHub,
        flex: 1, // Flex 1 expande a cor escolhida acima para tela inteira
        justifyContent: 'center',
        // flexDirection: 'row'
    },
    content: {
        alignItems:'center',        
    },
    textTitle: {
        fontSize: 24,
        textAlign: 'center',
        // padding: 4,
        fontWeight: 'bold',
        color: colorTitle,
        marginTop: 20,
    },
    textDescription: {
        fontSize: 14,
        textAlign: 'justify',
        padding: 4,
        fontWeight: 'bold',
        color: colorTitle,
        maxWidth: 250,
        marginTop: 10
    },
    textNick: {
        fontSize: 20,
        color: colorNick,  
        marginLeft: 7              
    },
    avatar: {
        height:200,
        width:200, 
        borderRadius: 100,
        borderColor: 'white',
        borderWidth:2,
        // margin: 4,        
    },
    button: {
        backgroundColor: colorNick,
        borderRadius: 5,
        width: 230,
        padding: 5,
        marginTop: 10,
        alignItems: 'center',    

    }
})