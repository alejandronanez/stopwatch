import React, {
  AppRegistry,
  Text,
  View
} from 'react-native';

const StopWatch = React.createClass({
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
            <View>
                <Text>00:00:00</Text>
                {this.startStopButton()}
                {this.lapButton()}
            </View>
        );
    }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
