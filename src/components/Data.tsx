// カードアイテム
export type Item = {
  id: number
  title: string
  image: string
  url: string
}

export const Card: Item[] = [
  {
    id: 0,
    title: 'Ultimate search',
    image: 'https://tanukizzan.com/images/works/ultimate-card.webp',
    url: 'https://app.tanukizzan.com/ultimate-search/'
  },
  {
    id: 1,
    title: 'GATY search',
    image: 'https://tanukizzan.com/images/works/gaty-card.webp',
    url: 'https://app.tanukizzan.com/gaty-search/'
  },
  {
    id: 2,
    title: 'HowTo search',
    image: 'https://tanukizzan.com/images/works/howto-card.webp',
    url: 'https://app.tanukizzan.com/howto-search/'
  },
  {
    id: 3,
    title: 'HashTag search',
    image: 'https://tanukizzan.com/images/works/hashtag-card.webp',
    url: 'https://app.tanukizzan.com/hashtag-search/'
  },
  {
    id: 4,
    title: 'Simple search',
    image: 'https://tanukizzan.com/images/works/simple-card.webp',
    url: 'https://app.tanukizzan.com/simple-search/'
  },
  {
    id: 5,
    title: 'AI風アシスタント',
    image: 'https://tanukizzan.com/images/works/assistant-card.webp',
    url: 'https://app.tanukizzan.com/assistant/'
  },
  {
    id: 6,
    title: 'オウム・ガエシくん',
    image: 'https://tanukizzan.com/images/works/text-talk-card.webp',
    url: 'https://app.tanukizzan.com/text-talk/'
  },
  {
    id: 7,
    title: 'Music Start!',
    image: 'https://tanukizzan.com/images/works/music-start-card.webp',
    url: 'https://app.tanukizzan.com/music-start/'
  },
  {
    id: 8,
    title: 'douze -12-',
    image: 'https://tanukizzan.com/images/works/douze-card.webp',
    url: 'https://app.tanukizzan.com/douze/'
  },
  {
    id: 9,
    title: '除夜の鐘',
    image: 'https://tanukizzan.com/images/works/joya-card.webp',
    url: 'https://app.tanukizzan.com/joya/'
  },
  {
    id: 10,
    title: '縦書き巻物風サイト',
    image: 'https://tanukizzan.com/images/works/tategaki-card.webp',
    url: 'https://app.tanukizzan.com/vertical-writing/'
  },
  {
    id: 11,
    title: 'あのロゴジェネレーター',
    image: 'https://tanukizzan.com/images/works/logo-gene-card.webp',
    url: 'https://app.tanukizzan.com/logo-generator/'
  },
  {
    id: 12,
    title: 'エヴァ風フォントジェネレーター',
    image: 'https://tanukizzan.com/images/works/eva-card.webp',
    url: 'https://app.tanukizzan.com/eva-font/'
  },
  {
    id: 13,
    title: 'ポモドーロチャイム',
    image: 'https://tanukizzan.com/images/works/pomodoro-card.webp',
    url: 'https://app.tanukizzan.com/pomodoro/'
  },
  {
    id: 14,
    title: 'ランダムカラーピッカー',
    image: 'https://tanukizzan.com/images/works/random-card.webp',
    url: 'https://app.tanukizzan.com/random-color/'
  },
]

// リンクボタン
export type Link = {
  title: string
  url: string
}

export const linkBtn: Link[] = [
  {
    title: 'GitHub',
    url: 'https://github.com/tanukizzan',
  },
  {
    title: 'Qiita',
    url: 'https://qiita.com/Tanukizzan'
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/tanukizzan'
  },
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/channel/UCb4HwLN4NNHs3sL7FGVLbOw'
  },
  {
    title: 'SoundCloud',
    url: 'https://soundcloud.com/tanukizzan'
  },
  {
    title: 'note',
    url: 'https://note.com/tanukizzan'
  },
  {
    title: 'Portfolio',
    url: 'https://tanukizzan.com'
  }
]
