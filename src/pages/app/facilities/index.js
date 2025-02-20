import { useEffect, useState } from "react";
import { FacilitiesWrapper } from "./styled";
import { Layout } from "../../../containers/layout/index";
import Cookies from "universal-cookie";
import { Column, Row } from "../../../components/flex/styled";
import { H1, H3, Span, P } from "../../../components/typography/styled";
import { BaseFieldSet } from "../../../components/form/fieldset/styled";
import { BaseSelect } from "../../../components/form/select/styled";
import { BaseButton } from "../../../components/button/styled";
import { Filter } from "../../../assets";
import { Pool, MeetingRoom, MiniLounge, Bar, Pool2, Cinema } from "../../../assets";
import { useNavigate } from "react-router-dom";

// Define a facilities array with data for each facility
const facilitiesData = [
    { id: 1, name: "Pool 1", location: "Outdoor", capacity: 25, fee: "₦2500/hr", icon: <Pool /> },
    { id: 2, name: "Meeting Room", location: "Wing B, 3rd Floor", capacity: 25, fee: "₦2500/hr", icon: <MeetingRoom /> },
    { id: 3, name: "Mini Lounge", location: "2nd Floor", capacity: 25, fee: "₦10000/hr", icon: <MiniLounge /> },
    { id: 4, name: "Bar", location: "Ground Floor", capacity: 132, fee: "₦12100/hr", icon: <Bar /> },
    { id: 5, name: "Pool 2", location: "Outdoor", capacity: 32, fee: "₦12100/hr", icon: <Pool2 /> },
    { id: 6, name: "Cinema", location: "Outdoor", capacity: 32, fee: "₦12500/hr", icon: <Cinema /> },
];

export const Facilities = () => {
    const [filter, setFilter] = useState({
        location: "",
        capacity: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => console.log(filter), [filter]);

    const cookies = new Cookies();
    const { profile } = cookies.getAll();

    const navigate = useNavigate();

    const handleNavigateToBookFacility = (e, id) => {
        e.preventDefault();
        return navigate(`/facilities/booking/${id}`)
    }

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
            <FacilitiesWrapper>
                <Row
                    className="header"
                    alignitems="center"
                    justifycontent="space-between"
                >
                    <div>
                        <H1>Facilities</H1>
                    </div>
                    <Row
                        className="filter"
                        alignitems="center"
                    >
                        <Filter />
                        <Span>Filter</Span>
                        <BaseFieldSet>
                            <BaseSelect
                                name="location"
                                onChange={handleChange}
                                value={filter.location}
                            >
                                <option value="">Location</option>
                                <option value="1">Location 1</option>
                                <option value="2">Location 2</option>
                            </BaseSelect>
                        </BaseFieldSet>
                        <BaseFieldSet>
                            <BaseSelect
                                name="capacity"
                                onChange={handleChange}
                                value={filter.capacity}
                            >
                                <option value="">Capacity</option>
                                <option value="1">Capacity 1</option>
                                <option value="2">Capacity 2</option>
                            </BaseSelect>
                        </BaseFieldSet>
                    </Row>
                </Row>
                <Column>
                    {facilitiesData.map((facility, index) => (
                        <Row
                            key={index}
                            justifycontent="space-between"
                            className="facility-item"
                        >
                            <div
                                className="facility-icon"
                            >
                                {facility.icon}
                            </div>
                            <div
                                className="facility-details"
                            >
                                <H3>{facility.name}</H3>
                                <Row className="list-item">
                                    <Span>Location</Span>
                                    <P>{facility.location}</P>
                                </Row>
                                <Row className="list-item">
                                    <Span>Capacity</Span>
                                    <P>{facility.capacity}</P>
                                </Row>
                                <Row className="list-item">
                                    <Span>Fee</Span>
                                    <P>{facility.fee}</P>
                                </Row>
                            </div>
                            <div
                                className="book-facility"
                            >
                                <BaseButton
                                    backgroundcolor={"#4B0082"}
                                    onClick={(e) => handleNavigateToBookFacility(e, facility.id)}
                                >
                                    <Span>
                                        Book
                                    </Span>
                                </BaseButton>
                            </div>
                        </Row>
                    ))}
                </Column>
            </FacilitiesWrapper>
        </Layout>
    );
};