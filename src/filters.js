export function shortTitle(value, length = 11, omission = '...') {
  if(value.length <= length) return value
  return value.substring(0, length) + omission
}
