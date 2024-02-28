import React from 'react'
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';
import { Button, useTheme } from 'react-native-paper';

const LoginScreen = ({ route, navigation }: any) => {
    const theme = useTheme();

    const styles = React.useMemo(() => StyleSheet.create({
        view: { flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', backgroundColor: theme.colors.primaryContainer, color: theme.colors.primary },
    }), [theme]);

    return (
        <View style={styles.view}>
            <Text>LoginScreen</Text>
            <Button icon="camera" mode="outlined" onPress={() => navigation.navigate("Products")}>
                123r
            </Button>
        </View>
    )
}

export default LoginScreen