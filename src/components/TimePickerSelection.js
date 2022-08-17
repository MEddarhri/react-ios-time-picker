import React from 'react';
import HourWheel from './HourWheel';
import MinuteWheel from './MinuteWheel';

function TimePickerSelection({
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
}) {
   const params = {
      height,
      value,
      setValue,
      controllers,
   };

   const handleSave = () => {
      setInputValue(value);
      onChange(value);
      onSave(value);
      setIsOpen(false);
   };
   const handleCancel = () => {
      onCancel(value);
      setIsOpen(false);
   };

   return (
      <div className="react-ios-time-picker  react-ios-time-picker-transition">
         {controllers && (
            <div className="react-ios-time-picker-btn-cointainer">
               <button
                  className="react-ios-time-picker-btn react-ios-time-picker-btn-cancel"
                  onClick={handleCancel}
               >
                  {cancelButtonText}
               </button>
               <button className="react-ios-time-picker-btn" onClick={handleSave}>
                  {saveButtonText}
               </button>
            </div>
         )}
         <div
            className="react-ios-time-picker-container"
            style={{ height: `${height * 5 + 40}px` }}
         >
            <div
               className="react-ios-time-picker-selected-overlay"
               style={{
                  top: `${height * 2 + 20}px`,
                  height: `${height}px`,
               }}
            />
            <HourWheel {...params} />
            {seperator && <div className="react-ios-time-picker-colon">:</div>}
            <MinuteWheel {...params} />
         </div>
      </div>
   );
}

export default TimePickerSelection;
