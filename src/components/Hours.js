const Hours = () => {
        const today = new Date().getDay();
        let todayHours = "";
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        if (today >= 1 && today <= 5) {
            // Monday to Friday
            todayHours = "10:00 - 16:00";

        } else if (today === 0 || today === 6) {
            // Sunday or Saturday
            todayHours = "9:00 - 20:00";
        }

        return (
            <div>
                <h2>Today's Hours</h2>
                <p>{days[today] } {todayHours} </p>
            </div>
        );
}

export default Hours;