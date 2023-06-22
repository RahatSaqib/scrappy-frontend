/**
 * Function for getting lng lat from address
 * @param address : address of property
 * @returns 
 */

export const callGeocoderApi = async (address: string) => {
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${process.env.REACT_APP_MAPBOX_KEY}`
    let response = await fetch(url)
    let data = await response.json()
    return data?.features?.[0] ?? ''
}

/**
 * Get image url from a url with signed params
 * @param file_url : the main url
 * @returns 
 */
export const getImageUrl = (file_url: string) => {
    let url: URL = new URL(file_url)
    let imageUrl = url.origin + url.pathname
    return imageUrl
  }