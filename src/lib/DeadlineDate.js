const getDaysLeft = (dateString) => {
  const targetDate = new Date(dateString);
  const today = new Date();

  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  const timeDifference = targetDate - today;

  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

  if (daysLeft > 7) {
    const weeksLeft = Math.floor(daysLeft / 7);
    return `${weeksLeft} week${weeksLeft > 1 ? "s" : ""} left`; // looking for s 
  }
  if (daysLeft > 1) return `${daysLeft} days left`;
  if (daysLeft === 1) return `1 day left`;
  if (daysLeft === 0) return `Today`;
  return `Expired`;
};

export { getDaysLeft };