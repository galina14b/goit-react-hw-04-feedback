const Statistic = ({good, neutral, bad, total, positivePercentage}) => {
  return <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    {positivePercentage ?
      (<p>Positive feedback: {positivePercentage}%</p>) :
      (<p>Positive feedback: 0%</p>)
    }
  </>
}

export default Statistic;