export const formatDateToMin = (date) => {
  const now = new Date().getTime();
  const currentDate = new Date(date).getTime();
  const sum = now - currentDate;
  if (sum < 60000) {
    const seconds = Math.floor(sum / 1000);
    if (seconds < 2) return `${seconds} second ago`;
    else return `${seconds} seconds ago`;
  }
  if (sum < 3600000) {
    const minutes = Math.floor(sum / 60000);
    if (minutes < 2) return `${minutes} minutes ago`;
    else return `${minutes} minutes ago`;
  }
  if (sum < 86400000) {
    const hours = Math.floor(sum / 3600000);
    if (hours < 2) return `${hours} hour ago`;
    else return `${hours} hours ago`;
  }
  if (sum < 604800000) {
    const days = Math.floor(sum / 86400000);
    if (days < 2) return `${days} day ago`;
    else return `${days} days ago`;
  }
  if (sum < 2629800000) {
    const weeks = Math.floor(sum / 604800000);
    if (weeks < 2) return `${weeks} week ago`;
    else return `${weeks} weeks ago`;
  }
  if (sum > 2629800000) {
    const months = Math.floor(sum / 2629800000);
    if (months < 2) return `${months} month ago`;
    else return `${months} months ago`;
  }
  if (sum > 31556952000) {
    const years = Math.floor(sum / 31556952000);
    if (years < 2) return `${years} year ago`;
    else return `${years} years ago`;
  }
};
