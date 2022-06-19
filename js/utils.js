function FormatNumber(viewCount) {
  const stringViewCount = viewCount.toString();
  if (viewCount < 1000) {
    return stringViewCount;
  } else if (viewCount < 10000) {
    return `${stringViewCount[0]}.${stringViewCount.substring(1, 3)}K`;
  } else if (viewCount < 100000) {
    return `${stringViewCount.substring(0, 2)}.${stringViewCount[2]}K`;
  } else if (viewCount < 1000000) {
    return `${stringViewCount.substring(0, 3)}K`;
  } else if (viewCount < 10000000) {
    return `${stringViewCount[0]}.${stringViewCount.substring(1, 3)}M`;
  } else if (viewCount < 100000000) {
    return `${stringViewCount.substring(0, 2)}.${stringViewCount[2]}M`;
  } else if (viewCount < 1000000000) {
    return `${stringViewCount.substring(0, 3)}M`;
  } else if (viewCount < 10000000000) {
    return `${stringViewCount[0]}.${stringViewCount.substring(1, 3)}B`;
  } else if (viewCount < 100000000000) {
    return `${stringViewCount.substring(0, 2)}.${stringViewCount[2]}B`;
  } else if (viewCount < 1000000000000) {
    return `${stringViewCount.substring(0, 3)}B`;
  }
}

export { FormatNumber };