/**
 * Write a prototype function for "Date" that takes a string "format" as a parameter.
 * Return the date formatted according to the provided format.
 *
 * Being:
 * dd - 2-digit day
 * MM - 2-digit month
 * MMM month with 3 letters
 * yyyy - 4-digit year
 * HH - 2 digit hour in 24-hour format
 * hh - 2 digit hour in 12-hour format
 * mm - minutes with 2 digits
 * ss - 2-digit seconds
 * ms - milliseconds
 * tt - meridian
 */

Date.prototype.format = function (format) {
  try {
    const validate = (value) => {
      return value < 10 ? `0${value}` : value;
    };

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const yyyy = this.getFullYear();
    const MM = validate(this.getMonth() + 1);
    const MMM = months[this.getMonth()];
    const dd = validate(this.getDate());
    const HH = validate(this.getHours());
    const hh = HH === 00 ? 12 : HH > 12 ? HH - 12 : HH;
    const mm = validate(this.getMinutes());
    const ss = validate(this.getSeconds());
    const ms = validate(this.getMilliseconds());
    const tt = this.getHours() / 12 >= 1 ? "pm" : "am";

    return format
      .replace("dd", dd)
      .replace("MMM", MMM)
      .replace("MM", MM)
      .replace("yyyy", yyyy)
      .replace("HH", HH)
      .replace("hh", hh)
      .replace("mm", mm)
      .replace("ss", ss)
      .replace("ms", ms)
      .replace("tt", tt)
      .replace("TT", tt.toUpperCase());
  } catch (e) {
    console.error(e);
    return "Invalid Date";
  }
};
