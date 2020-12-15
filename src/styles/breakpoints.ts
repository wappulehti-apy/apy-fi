// @ts-nocheck

/**
 * Generate @emotion/styled media queries to be used in components.
 */
export const breakpoints = {
  overdesktop: 1440,
  desktop: 1170,
  tablet: 768,
  phone: 500,
}

export const mq = (n) => {
  const bpArray = Object.keys(breakpoints).map((key) => [key, breakpoints[key]])

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`]
    return acc
  }, [] as typeof bpArray)

  return result
}
