import { useState } from "react";
import { BookingWrapper } from "./styled";
import { Layout } from "../../../../containers/layout/index";
import {
  H1,
  Label,
  Li,
  H3,
  P,
  H2,
  Span,
} from "../../../../components/typography/styled";
import { BookingRow } from "./styled";
import { Sidebar } from "./styled";
import { Schedule } from "./styled";
import { TimeSlot } from "./styled";
import Cookies from "universal-cookie";
import { BaseFieldSet } from "../../../../components/form/fieldset/styled";
import { BaseInput } from "../../../../components/form/input/styled";
import { BaseButton } from "../../../../components/button/styled";
import { Column, Row } from "../../../../components/flex/styled";

export const Booking = () => {
  const cookies = new Cookies();
  const { profile } = cookies.getAll();
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const [selectedDay, setSelectedDay] = useState("Monday");
  const [schedules, setSchedules] = useState({
    Monday: [
      { time: "1pm", interviewee: "", interviewer: "" },
      { time: "2pm", interviewee: "", interviewer: "" },
    ],
    Tuesday: [
      { time: "1pm", interviewee: "", interviewer: "" },
      { time: "2pm", interviewee: "", interviewer: "" },
    ],
    Wednesday: [
      { time: "1pm", interviewee: "", interviewer: "" },
      { time: "2pm", interviewee: "", interviewer: "" },
    ],
    Thursday: [
      { time: "1pm", interviewee: "", interviewer: "" },
      { time: "2pm", interviewee: "", interviewer: "" },
    ],
    Friday: [
      { time: "1pm", interviewee: "", interviewer: "" },
      { time: "2pm", interviewee: "", interviewer: "" },
    ],
  });

  const handleDaySelection = (day) => setSelectedDay(day);

  const handleAddSlot = () => {
    setSchedules((prevSchedules) => ({
      ...prevSchedules,
      [selectedDay]: [
        ...prevSchedules[selectedDay],
        {
          time: `${prevSchedules[selectedDay].length + 1}pm`,
          interviewee: "",
          interviewer: "",
        },
      ],
    }));
  };

  const handleRemoveSlot = (index) => {
    setSchedules((prevSchedules) => ({
      ...prevSchedules,
      [selectedDay]: prevSchedules[selectedDay].filter((_, i) => i !== index),
    }));
  };

  const handleInputChange = (index, field, value) => {
    const updatedDaySchedule = [...schedules[selectedDay]];
    updatedDaySchedule[index][field] = value;
    setSchedules({
      ...schedules,
      [selectedDay]: updatedDaySchedule,
    });
  };

    return (
        <Layout
            role={profile?.role}
            title={`Hello ${profile.role === "administrator" ? profile?.firstname || "" : profile?.member?.firstname || ""}`}
            subTitle={new Date().toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                weekday: 'long'
            })}
            plan={profile?.plan?.planName || ""}
            fullName={profile?.role === "administrator" ? `${profile?.firstname || ""} ${profile?.lastname || ""}` : `${profile?.member?.firstname || ""} ${profile?.member?.lastname || ""}`}
        >
            <BookingWrapper>
                <div className="booking">
                    <H1>Meeting Room</H1>
                    <ul className="details-list">
                        <Li>
                            <Row
                                className="list-item"
                            >
                                <H3>Location</H3>
                                <P>Wing B, 3rd Floor</P>
                            </Row>
                        </Li>
                        <Li>
                            <Row
                                className="list-item"
                            >
                                <H3>Capacity</H3>
                                <P>25</P>
                            </Row>
                        </Li>
                        <Li>
                            <Row
                                className="list-item"
                            >
                                <H3>Fee</H3>
                                <P>₦2500/hr</P>
                            </Row>
                        </Li>
                    </ul>
                    <BookingRow>
                        <BaseFieldSet>
                            <Label>Start Date</Label>
                            <BaseInput
                                type="date"
                            />
                        </BaseFieldSet>
                        <BaseFieldSet>
                            <Label>End Date</Label>
                            <BaseInput
                                type="date"
                            />
                        </BaseFieldSet>
                    </BookingRow>
                    <Row
                        gap={"0"}
                        className="facilty-scheduler"
                    >
                        <Sidebar>
                            <div>
                                <H2>Interview Scheduler</H2>
                            </div>
                            <Column
                                className={"days-container"}
                                gap={"calc(var(--flex-gap) * 1.5)"}
                            >
                                {days.map((day) => (
                                    <Column
                                        key={day}
                                        gap={"calc(var(--flex-gap)/4)"}
                                        className={`day ${day === selectedDay ? 'selected-day' : ''}`}
                                        onClick={() => handleDaySelection(day)}
                                    >
                                        <Span>{day}</Span>
                                        <Span>{schedules[day].length} spots remaining</Span>
                                    </Column>
                                ))}
                            </Column>
                        </Sidebar>
                        <Schedule>
                            {schedules[selectedDay].map((slot, index) => (
                                <TimeSlot key={index}>
                                    <div className="time">
                                        <Span>{slot.time}</Span>
                                    </div>
                                    <Column
                                        gap={"0"}
                                        className="input-fields"
                                    >
                                        <BaseInput
                                            type="text"
                                            placeholder="Interviewee"
                                            value={slot.interviewee}
                                            onChange={(e) => handleInputChange(index, 'interviewee', e.target.value)}
                                        />
                                        <BaseInput
                                            type="text"
                                            placeholder="Interviewer"
                                            value={slot.interviewer}
                                            onChange={(e) => handleInputChange(index, 'interviewer', e.target.value)}
                                        />
                                    </Column>
                                    <div className="remove-slot-button">
                                        <BaseButton
                                            width={"auto"}
                                            color={"#CCCCCC"}
                                            backgroundcolor={"#2C3E50"}
                                            onClick={() => handleRemoveSlot(index)}
                                        >
                                            -
                                        </BaseButton>
                                    </div>
                                </TimeSlot>
                            ))}
                            <BaseButton
                                color={"#CCCCCC"}
                                backgroundcolor={"#2C3E50"}
                                onClick={handleAddSlot}
                            >
                                +
                            </BaseButton>
                        </Schedule>
                    </Row>
                </div>
                <BaseButton className="proceed-button">Proceed to payment</BaseButton>
            </BookingWrapper>
        </Layout>
    );
};
