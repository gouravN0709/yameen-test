// "use client";

// import { useState, useRef } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction"; // Added for dateClick
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { v4 as uuidv4 } from "uuid"; // For generating unique event IDs

// export function CalendarView() {
//   const [selectedDate, setSelectedDate] = useState<string>("Tue, Feb 4");
//   const [currentMonthYear, setCurrentMonthYear] =
//     useState<string>("February 2025");
//   const [events, setEvents] = useState([
//     // Day 3 events
//     {
//       id: "1",
//       title: "Request for...",
//       date: "2025-02-03",
//       color: "#3788d8",
//       className: "text-white text-xs",
//     },
//     {
//       id: "2",
//       title: "Request for...",
//       date: "2025-02-03",
//       color: "#ff49db",
//       className: "text-white text-xs",
//     },
//     // Day 4 events
//     {
//       id: "3",
//       title: "Request for...",
//       date: "2025-02-04",
//       color: "#3788d8",
//       className: "text-white text-xs",
//     },
//     {
//       id: "4",
//       title: "Request for...",
//       date: "2025-02-04",
//       color: "#ff49db",
//       className: "text-white text-xs",
//     },
//     {
//       id: "5",
//       title: "Request for...",
//       date: "2025-02-04",
//       color: "#00d4ff",
//       className: "text-white text-xs",
//     },
//     // Day 5 events
//     {
//       id: "6",
//       title: "Request for...",
//       date: "2025-02-05",
//       color: "#3788d8",
//       className: "text-white text-xs",
//     },
//     {
//       id: "7",
//       title: "Request for...",
//       date: "2025-02-05",
//       color: "#ff49db",
//       className: "text-white text-xs",
//     },
//     {
//       id: "8",
//       title: "Request for...",
//       date: "2025-02-05",
//       color: "#00d4ff",
//       className: "text-white text-xs",
//     },
//     // Day 6 events
//     {
//       id: "9",
//       title: "Request for...",
//       date: "2025-02-06",
//       color: "#3788d8",
//       className: "text-white text-xs",
//     },
//     {
//       id: "10",
//       title: "Request for...",
//       date: "2025-02-06",
//       color: "#ff49db",
//       className: "text-white text-xs",
//     },
//     // Day 7 events
//     {
//       id: "11",
//       title: "Request for...",
//       date: "2025-02-07",
//       color: "#3788d8",
//       className: "text-white text-xs",
//     },
//     {
//       id: "12",
//       title: "Request for...",
//       date: "2025-02-07",
//       color: "#ff49db",
//       className: "text-white text-xs",
//     },
//   ]);

//   const [selectedEvent, setSelectedEvent] = useState<any>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // New state for create modal
//   const [newEvent, setNewEvent] = useState({
//     title: "",
//     reason: "",
//     description: "",
//     date: "",
//   }); // New state for event creation
//   const calendarRef = useRef<FullCalendar>(null);

//   const colorCodes = {
//     approved: "#378000",
//     pending: "#fff000",
//     rejected: "#FF0000",
//     blue: "#3788d8",
//     cyan: "#00d4ff",
//     pink: "#ff49db",
//     purple: "#9c27b0",
//   };

//   // Format month and year
//   const updateMonthYear = () => {
//     if (calendarRef.current) {
//       const date = calendarRef.current.getApi().getDate();
//       const options: Intl.DateTimeFormatOptions = {
//         month: "long",
//         year: "numeric",
//       };
//       setCurrentMonthYear(date.toLocaleDateString("en-US", options));
//     }
//   };

//   // Handle view changes
//   const handleViewChange = (view: string) => {
//     if (calendarRef.current) {
//       calendarRef.current.getApi().changeView(view);
//       updateMonthYear();
//     }
//   };

//   // Handle navigation (previous/next)
//   const handlePrev = () => {
//     if (calendarRef.current) {
//       calendarRef.current.getApi().prev();
//       updateMonthYear();
//     }
//   };

//   const handleNext = () => {
//     if (calendarRef.current) {
//       calendarRef.current.getApi().next();
//       updateMonthYear();
//     }
//   };

//   // Handle Today button
//   const handleToday = () => {
//     if (calendarRef.current) {
//       calendarRef.current.getApi().today();
//       updateMonthYear();
//     }
//   };

//   // Handle Event button (placeholder functionality)
//   const handleEventView = () => {
//     console.log(
//       "Event view clicked - implement custom event list view or other functionality"
//     );
//     // Add your custom logic here, e.g., toggle an event list
//   };

//   // Handle event click to open modal
//   const handleEventClick = (info: any) => {
//     setSelectedEvent(info.event);
//     setIsModalOpen(true);
//     // Update selected date
//     const date = info.event.start;
//     if (date) {
//       const options: Intl.DateTimeFormatOptions = {
//         weekday: "short",
//         month: "short",
//         day: "numeric",
//       };
//       setSelectedDate(date.toLocaleDateString("en-US", options));
//     }
//   };

//   // Handle date click to open create event modal
//   const handleDateClick = (info: any) => {
//     setNewEvent({ title: "", reason: "", description: "", date: info.dateStr });
//     setIsCreateModalOpen(true);
//   };

//   // Handle create event
//   const handleCreateEvent = () => {
//     if (newEvent.title && newEvent.date) {
//       const event = {
//         id: uuidv4(), // Generate unique ID
//         title: newEvent.title,
//         date: newEvent.date,
//         color: colorCodes.blue, // Default to blue for new events
//         className: "text-white text-xs",
//         reason: newEvent.reason,
//         description: newEvent.description,
//       };
//       setEvents([...events, event]);
//       setIsCreateModalOpen(false);
//       setNewEvent({ title: "", reason: "", description: "", date: "" });
//     }
//   };

//   // Handle approve event
//   const handleApprove = () => {
//     if (selectedEvent) {
//       setEvents((prevEvents) =>
//         prevEvents.map((event) =>
//           event.id === selectedEvent.id
//             ? { ...event, color: colorCodes.approved }
//             : event
//         )
//       );
//       setIsModalOpen(false);
//       setSelectedEvent(null);
//     }
//   };

//   // Handle reject event
//   const handleReject = () => {
//     if (selectedEvent) {
//       setEvents((prevEvents) =>
//         prevEvents.map((event) =>
//           event.id === selectedEvent.id
//             ? { ...event, color: colorCodes.rejected }
//             : event
//         )
//       );
//       setIsModalOpen(false);
//       setSelectedEvent(null);
//     }
//   };

//   // Handle delete event
//   const handleDelete = () => {
//     if (selectedEvent) {
//       setEvents((prevEvents) =>
//         prevEvents.filter((event) => event.id !== selectedEvent.id)
//       );
//       setIsModalOpen(false);
//       setSelectedEvent(null);
//     }
//   };

//   // Close modals
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedEvent(null);
//   };

//   const handleCloseCreateModal = () => {
//     setIsCreateModalOpen(false);
//     setNewEvent({ title: "", reason: "", description: "", date: "" });
//   };

//   return (
//     <div className="flex flex-1 overflow-hidden mt-12">
//       <div className="flex-1 overflow-y-auto p-4 border-2 border-t-[#F5A623]">
//         <div className="mb-6 flex items-center justify-between">
//           <div className="flex items-center">
//             <button
//               onClick={handlePrev}
//               className="flex h-10 w-10 items-center justify-center rounded-l-sm bg-[#320759] text-white hover:bg-purple-800 border-none shadow-md"
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </button>
//             <button
//               onClick={handleNext}
//               className="flex h-10 w-10 items-center justify-center rounded-r-sm bg-[#320759] text-white hover:bg-purple-800 border-none shadow-md"
//             >
//               <ChevronRight className="h-5 w-5" />
//             </button>
//             <button
//               onClick={handleToday}
//               className="ml-2 rounded-sm px-6 py-2 bg-[#9013FE] text-white shadow-md hover:from-purple-700 hover:to-indigo-700"
//             >
//               Today
//             </button>
//           </div>

//           <h2 className="text-2xl font-bold text-[#515151]">
//             {currentMonthYear}
//           </h2>

//           <div className="flex bg-white p-1 rounded-full shadow-sm">
//             <button
//               onClick={() => handleViewChange("dayGridMonth")}
//               className="rounded-l-sm px-4 py-2 bg-[#9013FE] text-white shadow-md hover:from-purple-700 hover:to-indigo-700"
//             >
//               Month
//             </button>
//             <button
//               onClick={() => handleViewChange("timeGridWeek")}
//               className="px-4 py-2 bg-[#9013FE] text-white hover:bg-slate-100"
//             >
//               Week
//             </button>
//             <button
//               onClick={() => handleViewChange("timeGridDay")}
//               className="px-4 py-2 bg-[#9013FE] text-white hover:bg-slate-100"
//             >
//               Day
//             </button>
//             <button
//               onClick={handleEventView}
//               className="rounded-r-sm px-4 py-2 bg-[#9013FE] text-white hover:bg-slate-100"
//             >
//               Event
//             </button>
//           </div>
//         </div>

//         <div className="calendar-container rounded-xl bg-white p-4 shadow-md">
//           <FullCalendar
//             ref={calendarRef}
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // Added interactionPlugin
//             initialView="dayGridMonth"
//             initialDate="2025-02-01"
//             headerToolbar={false} // Hide the default header
//             events={events}
//             eventDisplay="block"
//             height="auto"
//             dayMaxEvents={1}
//             eventClick={handleEventClick}
//             dateClick={handleDateClick} // Added for creating events
//             datesSet={() => updateMonthYear()} // Update month/year on view change
//           />
//         </div>
//       </div>

//       <div className="w-72 border-2 border-t-[#9013FE] bg-white p-4 overflow-y-auto shadow-sm custom-scroll ml-2">
//         <div className="mb-4 text-lg font-bold text-slate-800">
//           {selectedDate}
//         </div>

//         <div className="mb-4 overflow-hidden bg-[#B3A1F4] shadow-md">
//           <div className="border-l-4 border-[#FFCC00] p-2">
//             <h3 className="font-bold text-black">Reason for Request:</h3>
//             <p className="text-black text-[14px] leading-[18px]">
//               I have a prior commitment on this date and would appreciate a
//               shift
//             </p>

//             <h3 className="mt-3 font-bold text-black">Description:</h3>
//             <p className="text-black text-[14px] leading-[18px]">
//               I would like to request a shift change due to medical appointment.
//             </p>

//             <h3 className="mt-3 font-bold text-black">Date of Vacation:</h3>
//             <p className="text-black text-[14px] leading-[18px]">06/02/2025</p>
//           </div>
//         </div>

//         <div className="mb-4 overflow-hidden bg-[#E0427678] shadow-md">
//           <div className="border-l-4 border-[#FFCC00] p-4">
//             <h3 className="font-bold text-black">Reason for Request:</h3>
//             <p className="text-black text-[14px] leading-[18px]">
//               I have planned a family trip and would like to take leave on these
//               dates.
//             </p>

//             <h3 className="mt-3 font-bold text-black">Description:</h3>
//             <p className="text-black text-[14px] leading-[18px]">
//               I would like to request vacation leave due to family event.
//             </p>

//             <h3 className="mt-3 font-bold text-black">Date of Vacation:</h3>
//             <p className="text-black text-[14px] leading-[18px]">07/02/2025</p>
//           </div>
//         </div>

//         <div className="overflow-hidden bg-[#A1F4EC] shadow-md">
//           <div className="border-l-4 border-[#FFCC00] p-4">
//             <h3 className="font-bold text-black">Reason for Request:</h3>
//             <p className="text-black text-[14px] leading-[18px]">
//               I have planned a family trip and would like to take leave on these
//               dates.
//             </p>

//             <h3 className="mt-3 font-bold text-black">Description:</h3>
//             <p className="text-black text-[14px] leading-[18px]">
//               I would like to request vacation leave due to family event.
//             </p>

//             <h3 className="mt-3 font-bold text-black">Date of Vacation:</h3>
//             <p className="text-black text-[14px] leading-[18px]">08/02/2025</p>
//           </div>
//         </div>
//       </div>

//       {/* Modal for event management */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl p-6 shadow-md w-96">
//             <h3 className="text-lg font-bold text-slate-800 mb-4">
//               Manage Event: {selectedEvent?.title}
//             </h3>
//             <div className="flex justify-between mb-4">
//               <button
//                 onClick={handleApprove}
//                 className="px-4 py-2 bg-[#378000] text-white rounded-sm shadow-md hover:bg-green-700"
//               >
//                 Approve
//               </button>
//               <button
//                 onClick={handleReject}
//                 className="px-4 py-2 bg-[#FF0000] text-white rounded-sm shadow-md hover:bg-red-700"
//               >
//                 Reject
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="px-4 py-2 bg-[#9013FE] text-white rounded-sm shadow-md hover:from-purple-700 hover:to-indigo-700"
//               >
//                 Delete
//               </button>
//             </div>
//             <button
//               onClick={handleCloseModal}
//               className="w-full px-4 py-2 bg-gray-200 text-slate-800 rounded-sm shadow-md hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Modal for creating new event */}
//       {isCreateModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl p-6 shadow-md w-96">
//             <h3 className="text-lg font-bold text-slate-800 mb-4">
//               Create New Event
//             </h3>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-slate-800 mb-1">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 value={newEvent.title}
//                 onChange={(e) =>
//                   setNewEvent({ ...newEvent, title: e.target.value })
//                 }
//                 className="w-full px-3 py-2 border rounded-sm text-slate-800"
//                 placeholder="Enter event title"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-slate-800 mb-1">
//                 Reason for Request
//               </label>
//               <textarea
//                 value={newEvent.reason}
//                 onChange={(e) =>
//                   setNewEvent({ ...newEvent, reason: e.target.value })
//                 }
//                 className="w-full px-3 py-2 border rounded-sm text-slate-800"
//                 placeholder="Enter reason for request"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-slate-800 mb-1">
//                 Description
//               </label>
//               <textarea
//                 value={newEvent.description}
//                 onChange={(e) =>
//                   setNewEvent({ ...newEvent, description: e.target.value })
//                 }
//                 className="w-full px-3 py-2 border rounded-sm text-slate-800"
//                 placeholder="Enter description"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-slate-800 mb-1">
//                 Date
//               </label>
//               <input
//                 type="text"
//                 value={newEvent.date}
//                 readOnly
//                 className="w-full px-3 py-2 border rounded-sm text-slate-800 bg-gray-100"
//               />
//             </div>
//             <div className="flex justify-between">
//               <button
//                 onClick={handleCreateEvent}
//                 className="px-4 py-2 bg-[#9013FE] text-white rounded-sm shadow-md hover:from-purple-700 hover:to-indigo-700"
//               >
//                 Create
//               </button>
//               <button
//                 onClick={handleCloseCreateModal}
//                 className="px-4 py-2 bg-gray-200 text-slate-800 rounded-sm shadow-md hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
