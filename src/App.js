import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/authentication/signup";
import { Dashboard } from "./pages/app/dashboard";
import { Membership } from "./pages/app/membership";
import { SignIn } from "./pages/authentication/signin";
import { Events } from "./pages/app/events";
import { Booking } from "./pages/app/facilities/booking";
import { Services } from "./pages/app/services";
import { Bill } from "./pages/app/billing";
import { Billing } from "./pages/app/billing/billingdetail";
import { BillingHistory } from "./pages/app/billing/billinghistory";
import { BillingSubscription } from "./pages/app/billing/billingsubscription";
import { AllMembers } from "./pages/app/allmembers";
import { Facilities } from "./pages/app/facilities";
import { BookingHistory } from "./pages/app/facilities/bookinghistory";
import { Settings } from "./pages/app/settings";
import { EventDetails } from "./pages/app/events/eventdetails";
import { EventsHistory } from "./pages/app/events/eventhistory";
import { ServicesBooking } from "./pages/app/services/booking";
import { ServicesHistory } from "./pages/app/services/bookinghistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/facilities/booking/:id" element={<Booking />} />
        <Route path="/facilities/history" element={<BookingHistory />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/booking/:id" element={<ServicesBooking />} />
        <Route path="/services/history" element={<ServicesHistory />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/billing/detail/:id" element={<Billing />} />
        <Route path="/billing/history" element={<BillingHistory />} />
        <Route path="/billing/subscription" element={<BillingSubscription />} />
        <Route path="/allmembers" element={<AllMembers />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/detail/:id" element={<EventDetails />} />
        <Route path="/events/history" element={<EventsHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
