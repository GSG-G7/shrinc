import React from 'react';
import { Helmet } from 'react-helmet';

import './style.css';

const About = () => {
  return (
    <section className="about-page">
      <Helmet>
        <title>About</title>
      </Helmet>
      <h2 className="about-page__title">About us</h2>
      <ul>
        <li className="about-page__point">
          Our mission
          <p className="about-page__content">
            At Shrinc we believe that finding the right psychotherapy for you
            can life changing. However, finding a good psychotherapist can be
            daunting. Shrinc is here to help. Shrinc is the new way to access
            talking therapies, helping you to find the most appropriate therapy
            and the best therapist in a few easy steps.
          </p>
        </li>
        <li className="about-page__point">
          Finding a therapist has never been easier
          <p className="about-page__content">
            The Shrinc database allows you to quickly and easily search for
            therapists according to location, price and specialization. If you
            are new to therapy, you can use the Find the right therapy feature
            which will help to guide you to the most appropriate therapy type.
            Shrinc also contains a brief overview of each of the main forms of
            psychotherapy. This then links to the database to allow you to
            easily search for the relevant therapists in your area. Shrinc also
            offers remote consultation sessions for those users that are either
            not local to their chosen therapist, or cannot attend sessions in
            person. All our therapists are registered with the main UK
            accrediting bodies to ensure a high standard of training and care.
            Booking and paying for your session can also be done through Shrinc,
            with automatic appointment reminders and payment notifications
            occurring before the session takes place.
          </p>
        </li>
        <li className="about-page__point">
          Your opinion matters
          <p className="about-page__content">
            There is a review system that allows you to leave feedback of your
            experience. All reviews are moderated, with negative reviews handled
            discreetly by Shrinc administrators. Therapists with more than 3
            negative reviews in any six month period are reviewed by Shrinc
            administrators and removed from the database if necessary.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default About;
