export function parseImg (url) {
  if (!url.match(/\-jpeg\.\d{3}$/)) {
    return url + '-jpeg.800'
  }
}
