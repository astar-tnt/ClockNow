const cron = require("node-cron");
const { NoticeApi } = require("./config");
const axios = require("axios");
function executeTask() {
  axios.get(NoticeApi);
  setTimeout(() => {
    console.log(`30秒,执行第二次提醒`);
    axios.get(NoticeApi);
  }, 30000);
  console.log("执行定时任务");
  // 在这里添加您想要执行的代码
}
// 每天早上9点25分执行的任务
cron.schedule("25 9 * * *", executeTask);
// 每天下午6点32分执行的任务
cron.schedule("32 18 * * *", executeTask);
console.log("定时任务已设置,等待执行...");
