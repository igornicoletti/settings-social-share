const thumbUrl = document.querySelector('[data-thumb-url]')
const pageTitle = document.querySelector('[data-page-title]')

initSocialShare = socialShare => {
  const shareData = document.querySelector(socialShare)

  const thumbData = thumbUrl.getAttribute('data-thumb-url')
  const titleData = pageTitle.getAttribute('data-page-title')

  const postImg = encodeURI(thumbData)
  const postTitle = encodeURI(titleData)
  const postUrl = encodeURI(document.location.href)

  const twitterData = document.querySelector('[data-share="twitter"]')
  const facebookData = shareData.querySelector('[data-share="facebook"]')
  const linkedinData = shareData.querySelector('[data-share="linkedin"]')
  const whatsappData = shareData.querySelector('[data-share="whatsapp"]')
  const pinterestData = document.querySelector('[data-share="pinterest"]')

  if (!pageTitle) return
  if (!shareData) return
  if (!thumbUrl || !pageTitle) return

  if (whatsappData)
    whatsappData.setAttribute('href', 'https://wa.me/?text=' + postTitle + ' ' + postUrl)

  if (facebookData)
    facebookData.setAttribute('href', 'https://www.facebook.com/sharer.php?u=' + postUrl)

  if (twitterData)
    twitterData.setAttribute('href', 'https://twitter.com/share?url=' + postUrl + '&text=' + postTitle)

  if (linkedinData)
    linkedinData.setAttribute('href', 'https://www.linkedin.com/shareArticle?url=' + postUrl + '&title=' + postTitle)

  if (pinterestData)
    pinterestData.setAttribute('href', 'https://pinterest.com/pin/create/bookmarklet/?media=' + postImg + '&url=' + postUrl + '&description=' + postTitle)
}