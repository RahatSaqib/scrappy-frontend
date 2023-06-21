export const callGeocoderApi = async (value: string) => {
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${process.env.REACT_APP_MAPBOX_KEY}`
    let response = await fetch(url)
    let data = await response.json()
    return data?.features?.[0] ?? ''
}

export const getImageUrl = (file_url: string) => {
    let url: URL = new URL(file_url)
    let imageUrl = url.origin + url.pathname
    return imageUrl
  }