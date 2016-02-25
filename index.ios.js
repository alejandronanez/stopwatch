import React, {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';

const StopWatch = React.createClass({
    getInitialState() {
        return {
            running: false,
            timeElapsed: null
        }
    },
    handleStartPress() {
        if (this.state.running) {
            clearInterval(this.interval);
            this.setState({running: false});
            return;
        }

        let startTime = new Date();

        this.interval = setInterval(() => {
            this.setState({
                running: true,
                timeElapsed: new Date() - startTime
            });
        }, 30);
    },
    lapButton() {
        return (
            <View style={styles.button}>
                <Text>Lap</Text>
            </View>
        );
    },
    startStopButton() {
        const buttonText = this.state.running ? 'Stop' : 'Start';
        
        return (
            <TouchableHighlight
                underlayColor="gray"
                onPress={this.handleStartPress}
                style={[styles.button, styles.startButton]}
            >
                <Text>{buttonText}</Text>
            </TouchableHighlight>
        );
    },
    render() {
        return (
            <View style={styles.container}>{/* container*/}
                {/* header */}
                <View style={styles.header}>
                    <View style={styles.timerWrapper}>
                        <Text style={styles.timer}>{formatTime(this.state.timeElapsed)}</Text>
                    </View>
                    <View style={styles.buttonWrapper}>
                        {this.startStopButton()}
                        {this.lapButton()}
                    </View>
                </View>
                {/* /header */}

                {/* footer */}
                <View style={styles.footer}>
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
    },
    timerWrapper: {
        flex: 5, // 5/8ths of available space
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonWrapper: {
        flex: 3, // 3/8ths of available space
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    timer: {
        fontSize: 60
    },
    button: {
        borderWidth: 2,
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startButton: {
        borderColor: '#00CC00'
    }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
