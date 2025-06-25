export const getFeedbackMessage = (correct, total) => {
  const ratio = correct / total
  if (ratio >= 0.8) {
    return 'Great job!'
  }
  if (ratio >= 0.5) {
    return 'Good effort!'
  }
  return 'Keep practicing!'
}

export const isPositiveResult = (correct, total) => {
  return correct / total > 0.5
}
