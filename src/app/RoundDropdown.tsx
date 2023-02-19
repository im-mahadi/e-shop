'use client';

import { Dropdown } from 'flowbite-react';
interface RoundDropdownProps {
  label: string;
  options: string[];
  setValue: (arg1: string) => void;
}

export default function RoundDropdown({
  label,
  options,
  setValue,
}: RoundDropdownProps) {
  return (
    <>
      <Dropdown label={label} color='light' dismissOnClick={true} pill={true}>
        {options.map((option, i) => (
          <Dropdown.Item
            key={i}
            onClick={() => {
              setValue(option);
            }}
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </>
  );
}
