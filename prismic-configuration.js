// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = 'https://northofnow.cdn.prismic.io/api/v2'

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ''

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  if (doc.uid === 'short-form') {
    return `/projects/short-form`
  }
  if (doc.uid === 'long-form') {
    return `/projects/long-form`
  }
  if (doc.uid === 'still') {
    return `/projects/still`
  }
  return '/'
}

// Additional helper function for Next/Link component
export const hrefResolver = (doc) => {
  if (doc.type === 'page') {
    return '/[uid]'
  }
  if (doc.uid === 'short-form') {
    return `/projects/short-form`
  }
  if (doc.uid === 'long-form') {
    return `/projects/long-form`
  }
  if (doc.uid === 'still') {
    return `/projects/still`
  }
  return '/'
}
