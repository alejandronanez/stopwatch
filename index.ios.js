import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const StopWatch = React.createClass({
    /**
     * Easy to identify components - DEV ONLY
     */
    border(color) {
        return {
            borderColor: color,
            borderWidth: 4
        }
    },
    lapButton() {
        return (
            <View>
                <Text>Lap</Text>
            </View>
        );
    },
    startStopButton() {
        return (
            <View>
                <Text>Start</Text>
            </View>
        );
    },
    render() {
        return (
            <View style={styles.container}>{/* container*/}
                {/* header */}
                <View style={[styles.header, this.border('yellow')]}>
                    <View style={this.border('red')}>
                        <Text>00:00:00</Text>
                    </View>
                    <View style={this.border('green')}>
                        {this.startStopButton()}
                        {this.lapButton()}
                    </View>
                </View>
                {/* /header */}

                {/* footer */}
                <View style={[styles.footer, this.border('blue')]}>
                    <Text>I am a list of laps</Text>
                </View>
                {/* footer */}
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1, // Fill the entire screen
        alignItems: 'stretch' // Align items in react goes form <--->
    },
    header: {
        flex: 1
    },
    footer: {
        flex: 1
    }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
