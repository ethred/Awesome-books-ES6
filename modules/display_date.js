import { DateTime } from './luxon.js';

const timeDate = document.querySelector('.time-text');
const displayDateTime = () => {
  setInterval(() => {
    const currentDate = DateTime.now().setZone('UTC+3').toLocaleString(
      DateTime.DATETIME_FULL_WITH_SECONDS,
    );
    timeDate.innerText = currentDate;
  }, 1000);
};

export default displayDateTime;