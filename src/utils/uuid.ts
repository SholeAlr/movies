/* eslint-disable @typescript-eslint/no-unused-expressions */
export const generatorUUID = (): string => {
  // Generate random bytes
  const randomBytes = new Uint8Array(16)
  window.crypto.getRandomValues
  window.crypto.getRandomValues(randomBytes)

  let hexString = ''
  randomBytes.forEach((byte) => {
    hexString += byte.toString(16).padStart(2, '0')
  })
  hexString = hexString.replace(
    /^([0-9a-f]{8})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{12})$/,
    '$1-$2-4-$3-$4',
  )
  return hexString
}
