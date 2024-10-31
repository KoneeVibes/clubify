import { FacilitiesWrapper } from "./styled";
import { Layout } from "../layout/index";
import { useEffect, useState } from "react";
import { getProfile } from "../../utils/apis/getProfile";
import { H1, Label, Li, H3, P, H2, Span } from "../../components/typography/styled";
import { FacilitiesRow } from "./styled";
import { Sidebar } from "./styled";
import { Schedule } from "./styled";
import { TimeSlot } from "./styled";
import Cookies from "universal-cookie";
import { BaseFieldSet } from "../../components/form/fieldset/styled";
import { BaseInput } from "../../components/form/input/styled";
import { BaseButton } from "../../components/button/styled";
import { Row } from "../../components/flex/styled";
//import styled from "styled-components";

export const Facilities = () => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    const [profileDetails, setProfileDetails] = useState({});
    const [selectedDay, setSelectedDay] = useState('Monday');
    const [schedules, setSchedules] = useState({
        Monday: [
            { time: '1pm', interviewee: '', interviewer: '' },
            { time: '2pm', interviewee: '', interviewer: '' },
        ],
        Tuesday: [
            { time: '1pm', interviewee: '', interviewer: '' },
            { time: '2pm', interviewee: '', interviewer: '' },
        ],
        Wednesday: [
            { time: '1pm', interviewee: '', interviewer: '' },
            { time: '2pm', interviewee: '', interviewer: '' },
        ],
        Thursday: [
            { time: '1pm', interviewee: '', interviewer: '' },
            { time: '2pm', interviewee: '', interviewer: '' },
        ],
        Friday: [
            { time: '1pm', interviewee: '', interviewer: '' },
            { time: '2pm', interviewee: '', interviewer: '' },
        ],
    });

    useEffect(() => {
        getProfile(token)
            .then((detail) => {
                setProfileDetails(detail);
                cookies.set("profile", detail);
            })
            .catch((err) => {
                console.error("Failed to fetch projects:", err);
            });
    }, [token]);

    const handleDaySelection = (day) => setSelectedDay(day);

    const handleAddSlot = () => {
        setSchedules((prevSchedules) => ({
            ...prevSchedules,
            [selectedDay]: [
                ...prevSchedules[selectedDay],
                { time: `${prevSchedules[selectedDay].length + 1}pm`, interviewee: '', interviewer: '' },
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

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    return (
        <Layout
            title={`Hello ${profileDetails?.member?.firstname || ""}`}
            subTitle={new Date().toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                weekday: 'long'
            })}
            plan={profileDetails?.plan?.planName}
            fullName={`${profileDetails?.member?.firstname || ""} ${profileDetails?.member?.lastname || ""}`}
        >
            <FacilitiesWrapper>
                <div className="facility-booking">
                    <H1>Meeting Room</H1>
                    <div className="details-list">
                        <Li className="detail">
                            <Row alignItems={"center"}>
                                <H3>Location</H3>
                                <P>Wing B, 3rd Floor</P>
                            </Row>
                        </Li>
                        <Li>
                            <Row alignItems={"center"}>
                                <H3>Capacity</H3>
                                <P>25</P>
                            </Row>
                        </Li>
                        <Li>
                            <Row alignItems={"center"}>
                                <H3>Fee</H3>
                                <P>₦2500/hr</P>
                            </Row>
                        </Li>
                    </div>
                    <FacilitiesRow>
                        <BaseFieldSet>
                            <Label>Start Date</Label>
                            <BaseInput />
                        </BaseFieldSet>
                        <BaseFieldSet>
                            <Label>End Date</Label>
                            <BaseInput />
                        </BaseFieldSet>
                    </FacilitiesRow>
                    <div className="scheduler-image-container">
                        <Sidebar>
                            <H2>Interview Scheduler</H2>
                            {days.map((day) => (
                                <div
                                    key={day}
                                    className={`day ${day === selectedDay ? 'selected-day' : ''}`}
                                    onClick={() => handleDaySelection(day)}
                                >
                                    <Span>{day}</Span>
                                    <Span>{schedules[day].length} spots remaining</Span>
                                </div>
                            ))}
                        </Sidebar>

                        {/* Schedule */}
                        <Schedule>
                            {schedules[selectedDay].map((slot, index) => (
                                <TimeSlot key={index}>
                                    <div className="time">{slot.time}</div>
                                    <div className="details">
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
                                    </div>
                                    <BaseButton className="remove-button" onClick={() => handleRemoveSlot(index)}>
                                        -
                                    </BaseButton>
                                </TimeSlot>
                            ))}
                            <BaseButton className="add-button" onClick={handleAddSlot}>
                                +
                            </BaseButton>
                        </Schedule>
                    </div>
                </div>
                <BaseButton className="proceed-button">Proceed to payment</BaseButton>
            </FacilitiesWrapper>
        </Layout>
    );
};
