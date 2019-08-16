import React, { FunctionComponent } from 'react';

import './input-group.scss';

interface ContactFormProps {
  type: string;
  id: string;
  name: string;
  label: string;
}

export const InputGroup: FunctionComponent<ContactFormProps> = ({ type, id, name, label }) => (
  <div className="c-input-group">
    <label htmlFor={id} className="c-input-group__label">
      {label}
    </label>
    {type !== 'textarea' ? (
      <input type={type} name={name} id={id} className="c-input-group__input" />
    ) : (
      <textarea name={name} id={id} cols={30} rows={4} className="c-input-group__textarea" />
    )}
  </div>
);
