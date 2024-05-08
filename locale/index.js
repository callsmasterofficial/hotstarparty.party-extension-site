export const getHome = (locale) => {
  return require(`./pages/home/${locale}`)
}
export const getallmeta = (locale) => {
  return require(`./pages/allmeta/${locale}`)
}
export const getPrivacy = (locale) => {
  return require(`./pages/privacy/${locale}`)
}
export const getTerm = (locale) => {
  return require(`./pages/terms/${locale}`)
}
export const getAffiliate = (locale) => {
  return require(`./pages/affiliate/${locale}`)
}