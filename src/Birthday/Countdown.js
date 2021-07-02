// import {  useState } from "react";

const Countdown = ({ date }) => {
    // const [countdownTimer, setCountdownTimer] = useState();

    /* Original birthday */
    const birthday = new Date(date);

    const today = new Date();

    /* Check birthday hasn't passed, set year accordingly */
    const year =
        birthday.getMonth() <= today.getMonth() ||
        (birthday.getMonth() === today.getMonth() &&
            birthday.getDate() <= today.getDate())
            ? today.getFullYear() + 1
            : today.getFullYear();

    const nextBirthday = new Date(
        `${birthday.getMonth() + 1}/${birthday.getDate()}/${year}`
    );
    console.log({ birthday, today, nextBirthday });
    // console.log(birthday.getMonth());
    /* Returns milliseconds so we divide by 1000 */
    const totalSecondsDiff =
        Math.abs(nextBirthday.getTime() - today.getTime()) / 1000;

    const days = Math.floor(totalSecondsDiff / (60 * 60 * 24));
    const daysRemainingToSec = days * 24 * 60 * 60;

    const hours = Math.floor(
        (totalSecondsDiff - daysRemainingToSec) / (60 * 60)
    );
    const hoursRemainingToSec = hours * 60 * 60;

    const minutes = Math.floor(
        (totalSecondsDiff - hoursRemainingToSec - daysRemainingToSec) / 60
    );
    const minRemainingToSec = minutes * 60;

    const seconds = Math.floor(
        totalSecondsDiff -
            hoursRemainingToSec -
            daysRemainingToSec -
            minRemainingToSec
    );
    // console.log({ days, hours, minutes, seconds });
    const yearPassedPercent = ((365 - days) / 365) * 100;
    console.log(`yearPassedPercent - ${yearPassedPercent}`);

    return (
        <table>
            <caption>Countdown</caption>
            <tr>
                <th>days</th>
                <th>hours</th>
                <th>min</th>
                <th>sec</th>
            </tr>
            <tr>
                <td>{days}</td>
                <td>{hours} : </td>
                <td>{minutes} : </td>
                <td>{seconds}</td>
            </tr>
        </table>
    );
};

export default Countdown;
