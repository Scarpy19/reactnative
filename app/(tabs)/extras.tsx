import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import ParallaxScrollView from '@/components/ParallaxScrollView';


export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <ThemedView style={styles.container}>
                <ThemedText style={styles.title}>Extra</ThemedText>
                <ThemedView style={styles.separator} lightColor="#eee" darkColor="rgb(255, 255, 255)" />
            </ThemedView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        marginTop: 20,
    },
    title: {
        fontSize: 20
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%'
    },
    headerImage: {
        color: '#',
    }
});