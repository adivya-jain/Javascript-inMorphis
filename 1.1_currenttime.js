function displayLocalDateTime() {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()];

    let hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const period = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12; 

    const formattedMinute = minute.toString().padStart(2, '0');
    const formattedSecond = second.toString().padStart(2, '0');

    console.log("Today is : " + day + ".");
    console.log("Current time is : " + hour + " " + period + " : " + formattedMinute + " : " + formattedSecond);
}

displayLocalDateTime();
