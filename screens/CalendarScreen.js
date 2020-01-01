import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Calendar } from 'react-native-calendars';

export default class CalendarScreen extends React.Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <View style={styles.container}>
      <Calendar
          current={Date()}
          minDate={'2018-01-01'}
          maxDate={'2023-01-01'}
          monthFormat={'MMMM yyyy'}
          hideArrows={false}
          hideExtraDays={true}
          disableMonthChange={true}
          firstDay={1}
          hideDayNames={false}
          // Handler when press arrow icon are selected. Receives callback to go forward and back a month
          onPressArrowLeft={substractMonth => substractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          // allows you to press 
          theme={{
            textDayFontFamily: 'Avenir',
            textMonthFontFamily: 'Avenir',
            textDayHeaderFontFamily: 'Avenir',
            monthTextColor: '#a8a8a8',
            todayTextColor: '#699add',
            dayTextColor: '#a8a8a8',
            arrowColor: '#a8a8a8',
            calendarBackground: 'white',
            'stylesheet.calendar.header': {
                dayHeader: {
                color: '#a8a8a8'
                }
            }
          }}
      />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})