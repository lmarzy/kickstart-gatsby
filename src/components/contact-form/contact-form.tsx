import React from 'react';
import { InputGroup } from '@components/input-group/input-group';
import { Button } from '@components';

export const ContactForm = () => (
  <form name="contact" method="POST" data-netlify="true" className="c-contact-form">
    <fieldset>
      <legend className="u-hidden-visually">Contact Form</legend>

      <InputGroup type="text" id="name" name="name" label="Name:" />
      <InputGroup type="email" id="email" name="email" label="Email:" />
      <InputGroup type="textarea" id="message" name="message" label="Message:" />

      <Button type="submit" style="primary">
        Send away!
      </Button>
    </fieldset>
  </form>
);
