"use client";

import { FormEvent, useState } from "react";

const bookingEmail = "lars@kilpisjarvireindeer.com";

export function BookingForm() {
  const [prepared, setPrepared] = useState(false);

  function prepareBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const experience = String(form.get("experience") || "Help me choose");
    const subject = "Kilpis Reindeer booking enquiry - " + experience;
    const body = [
      "Name: " + (form.get("name") || ""),
      "Email: " + (form.get("email") || ""),
      "Experience: " + experience,
      "Preferred date: " + (form.get("date") || "Flexible"),
      "Group size: " + (form.get("group") || ""),
      "",
      "Message: " + (form.get("message") || "-"),
    ].join("\n");

    setPrepared(true);
    window.location.href =
      "mailto:" +
      bookingEmail +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
  }

  return (
    <form className="booking-form" onSubmit={prepareBooking}>
      <div className="field-row">
        <label>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
      </div>
      <div className="field-row">
        <label>
          <span>What would you like to do?</span>
          <select name="experience" defaultValue="Sámi Experience">
            <option>Sámi Experience</option>
            <option>Arctic Reindeer Experience</option>
            <option>Private group visit</option>
            <option>Help me choose</option>
          </select>
        </label>
        <label>
          <span>Group size</span>
          <select name="group" defaultValue="2 people">
            <option>1 person</option>
            <option>2 people</option>
            <option>3-4 people</option>
            <option>5-9 people</option>
            <option>10+ people</option>
          </select>
        </label>
      </div>
      <label>
        <span>Preferred date</span>
        <input name="date" type="date" />
      </label>
      <label>
        <span>Anything we should know?</span>
        <textarea name="message" rows={4} placeholder="Tell us about your plans, children in the group or any questions." />
      </label>
      <button className="button booking-submit" type="submit">
        Send booking enquiry <span aria-hidden="true">→</span>
      </button>
      <p className="form-note" role="status">
        {prepared
          ? "Your email draft is ready to send to Lars-Aslak."
          : "This opens an email ready to send directly to Lars-Aslak."}
      </p>
      <p className="form-privacy">
        Read how booking information is handled in our <a href="/privacy">privacy policy</a>.
      </p>
    </form>
  );
}
