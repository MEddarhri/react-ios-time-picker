import React, { useState } from 'react';
import { TimePicker } from 'react-ios-time-picker';

function App() {
   const [value, setValue] = useState('10:00');

   const onChange = (time) => {
      setValue(time);
   };

   return (
      <div className="App">
         <TimePicker onChange={onChange} value={value} />
      </div>
   );
}

export default App;
