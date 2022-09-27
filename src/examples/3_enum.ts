enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[1]

console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)
