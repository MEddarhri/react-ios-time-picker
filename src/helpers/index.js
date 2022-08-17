export const initialNumbersValue = (heightValue = 54, numbersLength = 24, value = null) => {
   const arrayOfSelectedValue = [
      {
         number: '00',
         translatedValue: (heightValue * 2).toString(),
         selected: false,
      },
      {
         number: '01',
         translatedValue: heightValue.toString(),
         selected: false,
      },
   ];
   let count = 0;
   for (let index = 0; index < 3; index++) {
      for (let j = 0; j < numbersLength; j++) {
         if (index === 0 && j < 2) {
            continue;
         }
         if (index === 1 && j === value) {
            if (j.toString().length === 1) {
               arrayOfSelectedValue.push({
                  number: `0${j.toString()}`,
                  translatedValue: `-${count}`,
                  selected: true,
               });
            } else {
               arrayOfSelectedValue.push({
                  number: j.toString(),
                  translatedValue: `-${count}`,
                  selected: true,
               });
            }
            count += heightValue;
            continue;
         }
         if (j.toString().length === 1) {
            arrayOfSelectedValue.push({
               number: `0${j.toString()}`,
               translatedValue: `-${count}`,
               selected: false,
            });
         } else {
            arrayOfSelectedValue.push({
               number: j.toString(),
               translatedValue: `-${count}`,
               selected: false,
            });
         }

         count += heightValue;
      }
   }

   return arrayOfSelectedValue;
};

export const returnSelectedValue = (heightValue = 54, numbersLength = 24) => {
   const arrayOfSelectedValue = [
      {
         number: '00',
         translatedValue: (heightValue * 2).toString(),
         arrayNumber: 0,
      },
      {
         number: '01',
         translatedValue: heightValue.toString(),
         arrayNumber: 1,
      },
   ];
   let count = 0;
   for (let index = 0; index < 3; index++) {
      for (let j = 0; j < numbersLength; j++) {
         if (index === 0 && j < 2) {
            continue;
         }
         if (j.toString().length === 1) {
            arrayOfSelectedValue.push({
               number: `0${j.toString()}`,
               translatedValue: `-${count}`,
               selected: false,
            });
         } else {
            arrayOfSelectedValue.push({
               number: j.toString(),
               translatedValue: `-${count}`,
               selected: false,
            });
         }

         count += heightValue;
      }
   }
   return arrayOfSelectedValue;
};
