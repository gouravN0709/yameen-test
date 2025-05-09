"use client";

import { useState, useRef, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarBody } from "./CalendarBody";
import { EventManagementModal } from "./EventManagementModal";
import { LeaveSummarySidebar } from "../sidebar/LeaveSummarySidebar";
import { useEventStore, useFilterStore } from "@/lib/zustand/store";

const colorCodes = {
  approved: "#378000",
  pending: "#fff000",
  rejected: "#FF0000",
  blue: "#3788d8",
  cyan: "#00d4ff",
  pink: "#ff49db",
  purple: "#9c27b0",
};

export function CalendarView() {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState<string>(today);
  const [currentMonthYear, setCurrentMonthYear] = useState<string>("May 2025");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    reason: "",
    description: "",
    date: "",
    employeeId: "",
  });
  const calendarRef = useRef<any>(null);
  const { events, addEvent, updateEvent, deleteEvent } = useEventStore();
  const { employees, selectedDepartment, selectedEmployee } = useFilterStore();

  // Filter employees based on selected department
  const filteredEmployees = useMemo(() => {
    return selectedDepartment
      ? employees.filter((emp) => emp.departmentId === selectedDepartment)
      : employees;
  }, [employees, selectedDepartment]);

  // Filter events based on selected department and employee
  const filteredEvents = useMemo(() => {
    let result = events;
    if (selectedDepartment) {
      const departmentEmployees = employees
        .filter((emp) => emp.departmentId === selectedDepartment)
        .map((emp) => emp.id);
      result = result.filter((event) =>
        departmentEmployees.includes(event.employeeId)
      );
    }
    if (selectedEmployee) {
      result = result.filter((event) => event.employeeId === selectedEmployee);
    }
    return result.map((event) => ({
      id: event.id,
      title: event.title,
      date: event.date,
      backgroundColor: event.color,
      className: event.className,
      extendedProps: {
        reason: event.reason,
        description: event.description,
        employeeId: event.employeeId,
      },
    }));
  }, [events, selectedDepartment, selectedEmployee, employees]);

  // Update month and year
  const updateMonthYear = () => {
    if (calendarRef.current) {
      const date = calendarRef.current.getApi().getDate();
      const options: Intl.DateTimeFormatOptions = {
        month: "long",
        year: "numeric",
      };
      setCurrentMonthYear(date.toLocaleDateString("en-US", options));
    }
  };

  // Handle navigation
  const handlePrev = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().prev();
      updateMonthYear();
    }
  };

  const handleNext = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().next();
      updateMonthYear();
    }
  };

  const handleToday = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().today();
      updateMonthYear();
      setSelectedDate(today);
    }
  };

  // Handle view change
  const handleViewChange = (view: string) => {
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView(view);
      updateMonthYear();
    }
  };

  // Handle event click
  const handleEventClick = (info: any) => {
    setSelectedEvent(info.event);
    setIsModalOpen(true);
    const date = info.event.start;
    if (date) {
      setSelectedDate(date.toISOString().split("T")[0]);
    }
  };

  // Handle date click
  const handleDateClick = (info: any) => {
    setNewEvent({
      title: "",
      reason: "",
      description: "",
      date: info.dateStr,
      employeeId: selectedEmployee || "",
    });
    setIsCreateModalOpen(true);
    setSelectedDate(info.dateStr);
  };

  // Handle create event
  const handleCreateEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.employeeId) {
      const event = {
        id: uuidv4(),
        title: newEvent.title,
        date: newEvent.date,
        color: colorCodes.blue,
        className: "text-white text-xs",
        reason: newEvent.reason,
        description: newEvent.description,
        employeeId: newEvent.employeeId,
      };
      addEvent(event);
      setIsCreateModalOpen(false);
      setNewEvent({
        title: "",
        reason: "",
        description: "",
        date: "",
        employeeId: "",
      });
    }
  };

  // Handle approve event
  const handleApprove = () => {
    if (selectedEvent) {
      updateEvent(selectedEvent.id, { color: colorCodes.approved });
      setIsModalOpen(false);
      setSelectedEvent(null);
    }
  };

  // Handle reject event
  const handleReject = () => {
    if (selectedEvent) {
      updateEvent(selectedEvent.id, { color: colorCodes.rejected });
      setIsModalOpen(false);
      setSelectedEvent(null);
    }
  };

  // Close modals
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
    setNewEvent({
      title: "",
      reason: "",
      description: "",
      date: "",
      employeeId: "",
    });
  };

  return (
    <div className="flex flex-1 overflow-hidden mt-12">
      <div className="flex-1 p-4 border-2 border-t-[#F5A623]">
        <CalendarHeader
          onPrev={handlePrev}
          onNext={handleNext}
          onToday={handleToday}
          onViewChange={handleViewChange}
          currentMonthYear={currentMonthYear}
        />
        <CalendarBody
          calendarRef={calendarRef}
          events={filteredEvents}
          onEventClick={handleEventClick}
          onDateClick={handleDateClick}
          onDatesSet={updateMonthYear}
        />
      </div>
      <LeaveSummarySidebar selectedDate={selectedDate} />
      <EventManagementModal
        isOpen={isModalOpen}
        selectedEvent={selectedEvent}
        onClose={handleCloseModal}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
}