import React from 'react';

import './style.css';

const About = () => {
  return (
    <section className="about-page">
      <h2 className="about-page__title">About us</h2>
      <ul>
        <li className="about-page__point">
          Our Mission
          <p className="about-page__content">
            Shrinc is the new way to access talking therapies, quickly and
            easily
          </p>
        </li>
        <li className="about-page__point">
          Our Vision
          <p className="about-page__content">
            Shrinc provides users with free access to a complete overview of the
            main forms of talking therapy, which are presented in a clear and
            concise manner. Shrinc also contains a database of therapists that
            allows users to search by therapist type, map-based location, cost,
            availability, and the option of remote consultation.
          </p>
        </li>
        <li className="about-page__point">
          Questionnire
          <p className="about-page__content">
            Users can also complete a questionnaire to help identify the type of
            therapy that is most suitable for them. Shrinc will then present the
            most relevant therapists, allowing the user to apply further filters
            as described above.
          </p>
        </li>
        <li className="about-page__point">
          Review system
          <p className="about-page__content">
            All therapists are verified for their qualifications and
            professional accreditation. There is a review system that allows
            Shrinc customers to leave feedback of their experience. All reviews
            are moderated, with negative reviews handled discreetly by Shrinc
            administrators. Therapists with more than 3 negative reviews in any
            six month period are reviewed by Shrinc administrators and removed
            from the database if necessary.
          </p>
        </li>
        <li className="about-page__point">
          Select therapist
          <p className="about-page__content">
            Once a user has selected a therapist, users can register with Shrinc
            for free which allows them to easily book a consultation using a
            web-based calendar.
          </p>
        </li>
        <li className="about-page__point">
          Payment
          <p className="about-page__content">
            Payment is made through Shrinc using either Paypal or debit card at
            the rate provided by the therapist.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default About;
