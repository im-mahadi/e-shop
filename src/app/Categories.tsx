'use client';

import { Dropdown } from 'flowbite-react';
import { useState } from 'react';

export default function Categories() {
  const [items, setItems] = useState([
    { label: 'Dashboard', value: 'dashboard' },
    { label: 'Settings', value: 'settings' },
    { label: 'Earnings', value: 'earnings' },
  ]);

  return (
    <Dropdown label='Dropdown' inline={true}>
      {items.map((item, index) => {
        return (
          <Dropdown.Item key={index} value={item.value}>
            {item.label}
          </Dropdown.Item>
        );
      })}
    </Dropdown>
  );
}
