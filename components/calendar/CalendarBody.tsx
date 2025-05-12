import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
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
        headerToolbar={false}
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
        eventContent={(arg) => {
          const { event, view } = arg;
          const statusColor = event.extendedProps.statusColor;
          const isMonthView = view.type === "listWeek";
          console.log(view);
          return (
            <div className="flex items-center w-full">
              <span
                className="status-dot w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: statusColor }}
              ></span>
              <span
                className={`event-title truncate ${
                  isMonthView ? "text-black" : "text-white"
                }`}
              >
                {event.title}
              </span>
            </div>
          );
        }}
      />
    </div>
  );
}
