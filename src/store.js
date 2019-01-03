export default {
  state: {
    posts: [
      { title: 'テストのタイトル1', markdownText: '# テストのタイトル1\nテスト1' },
      { title: 'テストのタイトル2', markdownText: '# テストのタイトル2\nテスト2' }
    ],
    selectedPost: { title: '', markdownText: '' },
    tabbedPosts: []
  }
}
