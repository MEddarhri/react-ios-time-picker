[![npm](https://img.shields.io/npm/v/react-ios-time-picker)](https://www.npmjs.com/package/react-ios-time-picker) ![downloads](https://img.shields.io/npm/dt/react-ios-time-picker?color=blue&logo=npm&logoColor=blue)

# React ios time picker

![React-ios-time-picker demo](https://res.cloudinary.com/emdpro/image/upload/v1661245249/demo_bcmzme.gif)

A modern time picker for your next React app.

-  No moment.js needed
-  Zero dependencies and lightweight

## install

```
npm install react-ios-time-picker
```

## Usage

### 24 hours format

![24 hours format](https://res.cloudinary.com/emdpro/image/upload/v1661245289/24Hours_xbooc1.png)

```js
import React, { useState } from 'react';
import { TimePicker } from 'react-ios-time-picker';

export default const  MyApp = () => {
   const [value, setValue] = useState('10:00');

   const onChange = (timeValue) => {
      setValue(timeValue);
   }

   return (
      <div>
         <TimePicker onChange={onChange} value={value} />
      </div>
   );
}
```

### 12 hours format

![12 hours format](https://res.cloudinary.com/emdpro/image/upload/v1661245282/12Hours_tqf8gc.png)

```js
import React, { useState } from 'react';
import { TimePicker } from 'react-ios-time-picker';

export default const  MyApp = () => {
   const [value, setValue] = useState('10:00 AM');

   const onChange = (timeValue) => {
      setValue(timeValue);
   }

   return (
      <div>
         <TimePicker onChange={onChange} value={value} use12Hours/>
      </div>
   );
}
```

## API

| Name               | Type                                          | Default        | Description                                                     |
| ------------------ | --------------------------------------------- | -------------- | --------------------------------------------------------------- |
| value              | String                                        | n/a            | Current value.                                                  |
| cellHeight         | Number                                        | 35             | The height of the cell number.                                  |
| placeHolder        | String                                        | `"Selet_time"` | Time input's placeholder.                                       |
| pickerDefaultValue | String                                        | `"00:00"`      | The initial value that the picker begin with in the first time. |
| disabled           | Boolean                                       | `false`        | Whether picker is disabled.                                     |
| isOpen             | Boolean                                       | `false`        | Whether the time picker should be opened.                       |
| required           | Boolean                                       | `false`        | Whether time input should be required.                          |
| cancelButtonText   | String                                        | `"Cancel"`     | Cancel button text content                                      |
| saveButtonText     | String                                        | `"Save"`       | Save button text content                                        |
| controllers        | Boolean                                       | `true`         | Whether the buttons should be displayed                         |
| seperator          | Boolean                                       | `true`         | whether show the colon seperator                                |
| id                 | String                                        | n/a            | Input time picker id                                            |
| name               | String                                        | n/a            | Input time picker name                                          |
| use12Hours         | Boolean                                       | false          | 12 hours display mode                                           |
| inputClassName     | String                                        | n/a            | Input time picker className                                     |
| popupClassName     | String                                        | n/a            | time picker popup className                                     |
| onChange           | `(value) => alert ('New time is: ', value)`   | n/a            | Called when select a different value                            |
| onSave             | `(value) => alert ('Time saved is: ', value)` | n/a            | When the user clicks on save button                             |
| onClose            | `() => alert('Clock closed')`                 | n/a            | When the user clicks on cancel button                           |
| onAmPmChange       | `(value) => alert('Am/Pm changed : value')`   | n/a            | called when select an am/pm value                               |
| onOpen             | `() => alert('time picker opened')`           | n/a            | called when time picker is opened                               |

## Contributions Welcome!

```shell
git clone https://github.com/MEddarhri/react-ios-time-picker
cd react-ios-time-picker
```

## License

The MIT License.
