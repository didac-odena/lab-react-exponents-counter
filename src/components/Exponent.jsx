const superscripts = {
  0: "⁰",
  1: "¹",
  2: "²",
  3: "³",
  4: "⁴",
  5: "⁵",
  6: "⁶",
  7: "⁷",
  8: "⁸",
  9: "⁹",
};

const getExponentLabel = (exponent) => (
  `n${exponent.toString().split("")
    .map((digit) => superscripts[digit] ?? digit)
    .join("")}`
);

const Exponent = ({ num, exponent }) => {
  const total = Math.pow(num, exponent);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{getExponentLabel(exponent)}</p>
      <p className="exponent-result">
        {num} ^ {exponent} = <span className="total">{total}</span>
      </p>
    </div>
  );
};

export default Exponent;
