/**
 * Vanilla JavaScript utility - no React
 * Use these in React or anywhere in your project
 */

export function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
