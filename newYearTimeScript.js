function welcome() {
    let userName = prompt('请输入你的名字');
    if (userName) { // 检查用户是否取消了输入或输入了空字符串
        alert("祝" + userName + "天天开心！");
    }
}

welcome();

// 定义目标年份，方便修改
const TARGET_YEAR = 2026;
const TARGET_MONTH = 1; // 1 月 (注意：getMonth() 是 0-11，但这里我们直接用 1-12 比较)
const TARGET_DAY = 1;   // 1 号

function checkTimeAndLog() {
    // 获取当前时间
    const now = new Date();

    // 获取当前年、月、日、星期几、时、分、秒
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // getMonth() 返回 0-11，加1得到实际月份 1-12
    const currentDate = now.getDate();       // 获取几号
    const currentDayOfWeek = now.getDay();   // 获取星期几 (0-6, 0=周日)
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentSecond = now.getSeconds();

    // 检查是否到达目标时间点 (2026年1月1日 00:00:00)
    // 注意：原代码检查的是 1 月 1 日 *星期一*，这里修正为检查 1 月 1 日 *午夜*
    if (currentYear === TARGET_YEAR && 
        currentMonth === TARGET_MONTH && 
        currentDate === TARGET_DAY && 
        currentHour === 0 && 
        currentMinute === 0 && 
        currentSecond === 0) {
        
        console.log('Happy New Year!!!!!!!!!! Now is ' + TARGET_YEAR + '!!!!!!!!!!!!!');
        // 可以在这里添加其他庆祝逻辑，比如停止定时器
        // clearInterval(timerId); 
    }

    // 如果你想检查 1 月 1 日 *是* 星期一的情况（且非午夜），可以这样写：
    // if (currentYear === TARGET_YEAR && 
    //     currentMonth === TARGET_MONTH && 
    //     currentDate === TARGET_DAY && 
    //     currentDayOfWeek === 1 && // 1 代表星期一
    //     currentSecond > 0 && 
    //     currentMinute > 0) {
    //     console.log('Happy New Year on a Monday! Now is ' + TARGET_YEAR + '!');
    // }
}

// 模拟持续检查时间
// 注意：在浏览器中，setInterval 可能会因为页面不活跃而被节流
let timerId = setInterval(checkTimeAndLog, 1000); // 每秒检查一次

// --- 如果你想将时间信息作为对象返回，也可以这样做 ---
function getCurrentTimeInfo() {
    const now = new Date();
    return {
        year: now.getFullYear(),
        month: now.getMonth() + 1, // 实际月份
        date: now.getDate(),       // 日期
        dayOfWeek: now.getDay(),   // 星期几
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds()
    };
}