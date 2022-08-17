import React, { useEffect, useState } from 'react';
import { Portal } from 'react-portal';
import TimePickerSelection from './TimePickerSelection';
import '../styles/react-ios-time-picker.css';

function TimePicker({
   value: initialValue = null,
   cellHeight = 35,
   placeHolder = 'Select Time',
   pickerDefaultValue = '00:00',
   onChange = () => {},
   onFocus = () => {},
   onSave = () => {},
   onCancel = () => {},
   disabled = false,
   isOpen: initialIsOpenValue = false,
   required = false,
   cancelButtonText = 'Cancel',
   saveButtonText = 'Save',
   controllers = true,
   seperator = true,
   id = null,
}) {
   const [isOpen, setIsOpen] = useState(initialIsOpenValue);
   const [height, setHeight] = useState(cellHeight);
   const [value, setValue] = useState(initialValue === null ? pickerDefaultValue : initialValue);
   const [inputValue, setInputValue] = useState(initialValue);

   useEffect(() => {
      if (controllers === false) {
         setInputValue(value);
         onChange(value);
      }
   }, [value]);

   const handleClick = () => {
      setIsOpen(!isOpen);
   };

   const handleFocus = () => {
      onFocus();
   };

   const params = {
      onChange,
      height,
      value,
      setValue,
      onSave,
      onCancel,
      cancelButtonText,
      saveButtonText,
      controllers,
      setInputValue,
      setIsOpen,
      seperator,
   };

   return (
      <>
         <div className="react-ios-time-picker-main" onClick={handleClick}>
            <input
               id={id}
               className="react-ios-time-picker-input"
               value={inputValue === null ? '' : inputValue}
               type="text"
               placeholder={placeHolder}
               readOnly
               disabled={disabled}
               required={required}
               onFocus={handleFocus}
            />
         </div>
         {isOpen && !disabled && (
            <Portal>
               <div className="react-ios-time-picker-popup">
                  <div
                     className="react-ios-time-picker-popup-overlay"
                     onClick={() => setIsOpen(!isOpen)}
                  />
                  <TimePickerSelection {...params} />
               </div>
            </Portal>
         )}
      </>
   );
}

export default TimePicker;
