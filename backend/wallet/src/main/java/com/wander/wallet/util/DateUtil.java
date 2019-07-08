package com.wander.wallet.util;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.Date;

public class DateUtil {

    public static Date getFirstDayOfThisWeek() {

        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.HOUR_OF_DAY, 0); // ! clear would not reset the hour of day !
        cal.clear(Calendar.MINUTE);
        cal.clear(Calendar.SECOND);
        cal.clear(Calendar.MILLISECOND);

        cal.set(Calendar.DAY_OF_WEEK, cal.getFirstDayOfWeek());
        return cal.getTime();
    }

    public static Date getLastDayOfThisWeek() {
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.HOUR_OF_DAY, 0); // ! clear would not reset the hour of day !
        cal.clear(Calendar.MINUTE);
        cal.clear(Calendar.SECOND);
        cal.clear(Calendar.MILLISECOND);

        cal.set(Calendar.DAY_OF_WEEK, (cal.getFirstDayOfWeek() + 6));
        return cal.getTime();
    }

    public static Date getFirstDayOfCurrentMonth() {
        LocalDate firstDay = LocalDate.now();
        firstDay.withDayOfMonth(1);

        return Date.from(firstDay.atStartOfDay().atZone(ZoneId.systemDefault()).toInstant());
    }

    public static Date getLastDayOfCurrentMonth() {

        LocalDate lastDay = LocalDate.now();
        lastDay.withDayOfMonth(Calendar.getInstance().getActualMaximum(Calendar.DAY_OF_MONTH));

        return Date.from(lastDay.atStartOfDay().atZone(ZoneId.systemDefault()).toInstant());
    }
}
