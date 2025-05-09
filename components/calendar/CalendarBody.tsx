import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list"; // Added list plugin
import interactionPlugin from "@fullcalendar/interaction";

interface CalendarBodyProps {
  calendarRef: React.RefObject<any>;
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
    <div className="calendar-body">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={onEventClick}
        dateClick={onDateClick}
        datesSet={onDatesSet}
        headerToolbar={false} // Header is managed by CalendarHeader
        height="auto"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }}
      />
    </div>
  );
}
