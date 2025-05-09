import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

interface CalendarBodyProps {
  calendarRef: React.RefObject<FullCalendar>;
  events: any[];
  onEventClick: (info: any) => void;
  onDateClick: (info: any) => void;
  onDatesSet: () => void;
}

export function CalendarBody({
  calendarRef,
  events,
  onEventClick,
  onDateClick,
  onDatesSet,
}: CalendarBodyProps) {
  return (
    <div className="calendar-container rounded-xl bg-white p-4 shadow-md">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        initialDate="2025-02-01"
        headerToolbar={false}
        events={events}
        eventDisplay="block"
        height="auto"
        dayMaxEvents={1}
        eventClick={onEventClick}
        dateClick={onDateClick}
        datesSet={onDatesSet}
      />
    </div>
  );
}