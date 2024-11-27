import { EventsWrapper } from "./styled";
import { Layout } from "../../../containers/layout/index";
import { Filter } from "../../../assets";
import { BaseFieldSet } from "../../../components/form/fieldset/styled";
import { BaseSelect } from "../../../components/form/select/styled";
import { Row } from "../../../components/flex/styled";
import { Span, H1 } from "../../../components/typography/styled";
import { getAllEvent } from "../../../utils/apis/getAllEvent";
import { useEffect, useState } from "react";
import { Business, Game, Easter, Party, PoolParty, Workshop } from "../../../assets";
import Cookies from "universal-cookie";

export const Events = () => {
    const [filter, setFilter] = useState({
        months: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    const cookies = new Cookies();
    const { profile, data } = cookies.getAll();
    const [profileDetails, setProfileDetails] = useState({});

    useEffect(() => {
        getAllEvent(data.token)
            .then((detail) => {
                setProfileDetails(detail);
            })
            .catch((err) => {
                console.error("Failed to fetch projects:", err);
            })
    }, [data]);

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
            <EventsWrapper>
                <Row
                    className="header"
                    alignitems="center"
                    justifycontent="space-between"
                >
                    <div>
                        <H1>Events</H1>
                    </div>
                    <Row
                        className="filter"
                        alignitems="center"
                    >
                        <Filter />
                        <Span>Filter</Span>
                        <BaseFieldSet>
                            <BaseSelect
                                name="months"
                                onChange={handleChange}
                                value={filter.months}
                            >
                                <option value="">This Months</option>
                                <option value="1">April</option>
                                <option value="2">May</option>
                            </BaseSelect>
                        </BaseFieldSet>
                    </Row>
                </Row>
                <Row>
                    <Business/>
                    <Game/>
                    <Easter/>
                    <Party/>
                    <PoolParty/>
                    <Workshop/>
                </Row>
            </EventsWrapper>
        </Layout>
    )
}