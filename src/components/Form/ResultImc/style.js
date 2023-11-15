import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    resultImc: {
        flex: 2,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    numberImc: {
        fontSize: 48,
        color: 'black',
        fontWeight: 'bold',
    },
    information: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    boxSharebutton: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    shared: {
        backgroundColor: '#1877f2',
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5,
        top: 20
    },
    sharedText: {
        color: '#fff',
        fontWeight: 'bold',
        paddingHorizontal: 30,
    },
});

export default styles