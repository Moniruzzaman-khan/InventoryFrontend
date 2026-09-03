import PropTypes from "prop-types";

const CurrencyFormat = ({
  value,
  displayType = "text",
  thousandSeparator = true,
  prefix = "",
}) => {
  const numericValue = Number(value);
  const safeValue = Number.isFinite(numericValue) ? numericValue : 0;

  const formattedValue = safeValue.toLocaleString("en-US", {
    useGrouping: thousandSeparator,
    minimumFractionDigits: 0,
    maximumFractionDigits: 20,
  });

  const content = `${prefix}${formattedValue}`;

  if (displayType === "input") {
    return <input value={content} readOnly />;
  }

  return <span>{content}</span>;
};

CurrencyFormat.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  displayType: PropTypes.string,
  thousandSeparator: PropTypes.bool,
  prefix: PropTypes.string,
};

export default CurrencyFormat;
