let ui = new BotUI('chat_app');

ui.message.bot({
  delay: 1000,
  loading: true,
  content: '２つの方法で相場を計算することができます。'
}).then(showQuestions);

function showQuestions() {
  ui.message.bot({
    delay: 1500,
    loading:true,
    content:'どちらがご希望に近いですか？'
  })

}
