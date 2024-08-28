const Hours = () => {
    const Hours = () => {
        const today = new Date().getDay();
        let hoursLeft;

        if (today >= 1 && today <= 5) {
            // Monday to Friday
            const currentHour = new Date().getHours();
            const closingHour = 16;

            if (currentHour < 10) {
                hoursLeft = closingHour - currentHour;
            } else if (currentHour >= 10 && currentHour < closingHour) {
                hoursLeft = closingHour - currentHour;
            } else {
                hoursLeft = 0;
            }
        } else if (today === 0 || today === 6) {
            // Saturday and Sunday
            const currentHour = new Date().getHours();
            const closingHour = 20;

            if (currentHour < 9) {
                hoursLeft = closingHour - currentHour;
            } else if (currentHour >= 9 && currentHour < closingHour) {
                hoursLeft = closingHour - currentHour;
            } else {
                hoursLeft = 0;
            }
        } else {
            hoursLeft = 0;
        }

        return (
            <div>
                <p>Today's hours left: {hoursLeft}</p>
            </div>
        );
    }
}

export default Hours;