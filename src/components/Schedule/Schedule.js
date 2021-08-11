import React, { Component } from 'react'
//import moment from 'moment'
//import 'moment/locale/zh-cn';
import Scheduler, { SchedulerData, ViewTypes, } from 'react-big-scheduler'
import withDragDropContext from './withDnDContext';
import 'react-big-scheduler/lib/css/style.css';
import * as Styles from "./Schedule.module.css";
import Heading from '../Heading/Heading';

const DemoData = {
    events: [{
        bgColor: "#38B2AC",
        end: "2021-08-11 12:30:00",
        id: 1,
        resourceId: "r1",
        showPopover: false,
        start: "2021-08-11 09:30:00",
        title: "Chemical change",
    },
    {
        bgColor: "#38B222",
        end: "2021-08-11 12:30:00",
        id: 1,
        resourceId: "r0",
        showPopover: false,
        start: "2021-08-11 09:30:00",
        title: "Statistics",
    },
    {
        bgColor: "#38B222",
        end: "2021-08-11 14:30:00",
        id: 1,
        resourceId: "r2",
        showPopover: false,
        start: "2021-08-11 13:30:00",
        title: "Drawing",
    }
    ],
    eventsForCustomEventStyle: [{
        bgColor: "#38B2AC",
        end: "2021-08-18 23:30:00",
        id: 1,
        resourceId: "r1",
        showPopover: false,
        start: "2021-08-11 09:30:00",
        title: "Chemical change",
    }],
    eventsForTaskView: [{
        bgColor: "#38B2AC",
        end: "2021-08-11 23:30:00",
        id: 1,
        resourceId: "r1",
        showPopover: false,
        start: "2021-08-11 09:30:00",
        title: "Chemical change",
    }],
    resources: [
        {
            groupOnly: false,
            id: "r0",
            name: "R. Firmino",
        },
        {
            groupOnly: false,
            id: "r1",
            name: "I. Meslier",
        },
        {
            groupOnly: false,
            id: "r2",
            name: "T. Mings",
        }
    ]

}

class Basic extends Component {
    constructor(props) {
        super(props);
        //let schedulerData = new SchedulerData(new moment("2017-12-18").format(DATE_FORMAT), ViewTypes.Week);
        let schedulerData = new SchedulerData('2021-08-11 09:30:00', ViewTypes.Day, false, false, {
            minuteStep: 15
        });
        // schedulerData.localeMoment.locale('en');
        schedulerData.setResources(DemoData.resources);
        schedulerData.setEvents(DemoData.events);
        this.state = {
            viewModel: schedulerData
        }
    }

    render() {
        console.log(DemoData);
        const { viewModel } = this.state;
        return (
            <div className={Styles.Schedule}>
                <Heading>Schedule</Heading>
                <div>
                    <Scheduler schedulerData={viewModel}
                        prevClick={this.prevClick}
                        nextClick={this.nextClick}
                        onSelectDate={this.onSelectDate}
                        onViewChange={this.onViewChange}
                        eventItemClick={this.eventClicked}
                        viewEventClick={this.ops1}
                        viewEventText="Ops 1"
                        viewEvent2Text="Ops 2"
                        viewEvent2Click={this.ops2}
                        updateEventStart={this.updateEventStart}
                        updateEventEnd={this.updateEventEnd}
                        moveEvent={this.moveEvent}
                        newEvent={this.newEvent}
                    />
                </div>
            </div>
        )
    }

    prevClick = (schedulerData) => {
        schedulerData.prev();
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    nextClick = (schedulerData) => {
        schedulerData.next();
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onViewChange = (schedulerData, view) => {
        schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(date);
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    eventClicked = (schedulerData, event) => {
        alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
    };

    ops1 = (schedulerData, event) => {
        alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`);
    };

    ops2 = (schedulerData, event) => {
        alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`);
    };

    newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
        let newFreshId = 0;
        schedulerData.events.forEach((item) => {
            if (item.id >= newFreshId)
                newFreshId = item.id + 1;
        });

        let newEvent = {
            id: newFreshId,
            title: 'New event you just created',
            start: start,
            end: end,
            resourceId: slotId,
            bgColor: 'purple'
        }
        schedulerData.addEvent(newEvent);
        this.setState({
            viewModel: schedulerData
        })
    }

    updateEventStart = (schedulerData, event, newStart) => {
        schedulerData.updateEventStart(event, newStart);
        this.setState({
            viewModel: schedulerData
        })
    }

    updateEventEnd = (schedulerData, event, newEnd) => {
        schedulerData.updateEventEnd(event, newEnd);
        this.setState({
            viewModel: schedulerData
        })
    }

    moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
        schedulerData.moveEvent(event, slotId, slotName, start, end);
        this.setState({
            viewModel: schedulerData
        })
    }
}

export default withDragDropContext(Basic)
