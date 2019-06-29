import React from 'react';

const Select = ({ data }) => (
  <select>
    {
      data.map(it => <option key={it}>{it}</option>)
    }
  </select>
)

export default Select;
