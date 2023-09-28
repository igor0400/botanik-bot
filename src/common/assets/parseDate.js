export const parseDate = (date) => {
   const expires = new Date(date);

   return `${getZero(expires.getUTCDate())}.${getZero(
      expires.getUTCMonth() + 1
   )}.${getZero(expires.getFullYear())} ${getZero(
      expires.getUTCHours()
   )}:${getZero(expires.getUTCMinutes())}`;
};

function getZero(val) {
   const num = +val;

   if (num < 10) {
      return `0${num}`;
   }

   return num;
}
