const USER_TYPE_LOOKUP = [
  {
    lookupId: 1,
    type: "User Type",
    text: "User 1",
    value: "User 1",
    order: 1,
  },
  {
    lookupId: 2,
    type: "User Type",
    text: "User 2",
    value: "User 2",
    order: 2,
  },
  {
    lookupId: 3,
    type: "User Type",
    text: "User 3",
    value: "User 3",
    order: 3,
  },
];

const TYPE_LOOKUP = [
  {
    lookupId: 1,
    type: "User Type",
    text: "User 1",
    value: "User 1",
    order: 1,
  },
  {
    lookupId: 2,
    type: "User Type",
    text: "User 2",
    value: "User 2",
    order: 2,
  },
  {
    lookupId: 3,
    type: "User Type",
    text: "User 3",
    value: "User 3",
    order: 3,
  },
];

const AMBULANCE_TYPE_LOOKUP = [
  {
    value: 301,
    type: "AmbulanceType",
    label: "Pending",
    order: 1,
  },
  {
    value: 302,
    type: "AmbulanceType",
    label: "Confirmed",
    order: 2,
  },
  {
    value: 303,
    type: "AmbulanceTpe",
    label: "On-Way",
    order: 3,
  },
];

const LAB_SAMPLE_STATUS_LOOKUP = [
  {
    value: 601,
    type: "LabSampleStatus",
    label: "Pending",
    order: 1,
  },
  {
    value: 602,
    type: "LabSampleStatus",
    label: "Accepted",
    order: 2,
  },
  {
    value: 603,
    type: "LabSampleStatus",
    label: "Received",
    order: 3,
  },
  {
    value: 604,
    type: "LabSampleStatus",
    label: "Delivered",
    order: 4,
  },
  {
    value: 605,
    type: "LabSampleStatus",
    label: "Completed",
    order: 5,
  },
];
const QUEUE_STATUS_LOOKUP = [
  {
    value: 701,
    type: "QueueStatus",
    label: "Waiting",
    order: 1,
  },
  {
    value: 702,
    type: "QueueStatus",
    label: "In-Process",
    order: 2,
  },
  {
    value: 703,
    type: "QueueStatus",
    label: "Attended",
    order: 3,
  },
  {
    value: 704,
    type: "QueueStatus",
    label: "Cancelled",
    order: 4,
  },
];
const URGENCY_TYPE_LOOKUP = [
  {
    key: 401,
    type: "UrgencyLevel",
    label: "High",
    value: 401,
    order: 1,
  },
  {
    key: 402,
    type: "UrgencyLevel",
    label: "Medium",
    value: 402,
    order: 2,
  },
  {
    key: 403,
    type: "UrgencyLevel",
    label: "Low",
    value: 403,
    order: 3,
  },
];

const EMERGENCY_TYPE_LOOKUP = [
  {
    key: 501,
    type: "TypeofEmergency",
    label: "Medical",
    value: "Medical",
    order: 1,
  },
  {
    key: 502,
    type: "TypeofEmergency",
    label: "Trauma",
    value: "Trauma",
    order: 2,
  },
];

const PATIENT_STABLE = [
  { label: "Yes", value: true, key: true },
  { label: "No", value: false, key: false },
];

const THEATRE_GENDER = [
  {
    key: 1,
    type: "Gender",
    label: "Male",
    value: "Male",
    order: 1,
  },
  {
    key: 2,
    type: "Gender",
    label: "Female",
    value: "Female",
    order: 2,
  },
];
const COMMERCIALLY_IMPORTANT = [
  {
    key: 1,
    type: "commerciallyImportant",
    label: "Personality",
    value: "Personality",
    order: 70,
  },
  {
    key: 2,
    type: "commerciallyImportant",
    label: "New Born",
    value: "New Born",
    order: 71,
  },
];

const PATIENT_SIDE = [
  {
    key: "Left Side",
    type: "PatientSide",
    label: "Left Side",
    value: "Left Side",
    order: 1,
  },
  {
    key: "Right Side",
    type: "PatientSide",
    label: "Right Side",
    value: "Right Side",
    order: 2,
  },
  {
    key: "N/A",
    type: "PatientSide",
    label: "N/A",
    value: "N/A",
    order: 2,
  },
];

const ANESTHESIA_TYPE = [
  {
    key: 901,
    type: "AnesthesiaType",
    label: "Local",
    value: "Local",
    order: 1,
  },
  {
    key: 902,
    type: "AnesthesiaType",
    label: "Spinal",
    value: "Spinal",
    order: 2,
  },
  {
    key: 903,
    type: "AnesthesiaType",
    label: "General",
    value: "General",
    order: 3,
  },
  {
    key: 904,
    type: "AnesthesiaType",
    label: "Regional",
    value: "Regional",
    order: 4,
  },
];

const PROCEDURE_TYPE = [
  {
    key: 2001,
    type: "ProcedureType",
    label: "Immediate",
    value: "Immediate",
    order: 1,
  },
  {
    key: 2002,
    type: "ProcedureType",
    label: "Urgent",
    value: "Urgent",
    order: 2,
  },
  {
    key: 2003,
    type: "ProcedureType",
    label: "Expedited",
    value: "Expedited",
    order: 3,
  },
  {
    key: 2004,
    type: "ProcedureType",
    label: "Elective",
    value: "Elective",
    order: 4,
  },
];

const PATIENT_ALLERGIES = [
  {
    patientAllergiesId: 1,
    name: "Asthma",
  },
];

const SURGEON = [
  {
    surgeonId: 91,
    fullName: "Dr. Shazia K",
  },
  {
    surgeonId: 92,
    fullName: "Dr. usama",
  },
];

const TECHNICIAN = [
  {
    technicianId: 1,
    name: "Dr. Shazia K",
  },
  {
    technicianId: 2,
    name: "Dr. usama",
  },
  {
    technicianId: 3,
    name: "Dr. hamza",
  },
  {
    technicianId: 4,
    name: "Dr. Muzammal",
  },
];

const NURSES = [
  {
    nursesId: 1,
    name: "Dr. Shazia K",
  },
  {
    nursesId: 2,
    name: "Dr. Sonia A",
  },
  {
    nursesId: 3,
    name: "Dr. Fatime",
  },
];

const ISOLATION_STATUS = [
  { label: "Yes", value: true, key: true },
  { label: "No", value: false, key: false },
];

const BLOOD_GROUP = [
  {
    bloodGroupId: 5001,
    type: "BloodGroup",
    bloodGroup: "A+",
    value: "A+",
    order: 1,
  },
  {
    bloodGroupId: 5002,
    type: "BloodGroup",
    bloodGroup: "B+",
    value: "B+",
    order: 2,
  },
  {
    bloodGroupId: 5003,
    type: "BloodGroup",
    bloodGroup: "A-",
    value: "A-",
    order: 3,
  },
  {
    bloodGroupId: 5004,
    type: "BloodGroup",
    bloodGroup: "B-",
    value: "B-",
    order: 4,
  },
];

const ANESTHETIST = [
  {
    AnesthetistId: 93,
    label: "ali",
  },
];

const HEPATITIS_STATUS = [
  {
    key: 1001,
    type: "HepatitisStatus",
    label: "A+",
    value: "A+",
    order: 1,
  },
  {
    key: 1002,
    type: "HepatitisStatus",
    label: "B+",
    value: "B+",
    order: 2,
  },
  {
    key: 1003,
    type: "HepatitisStatus",
    label: "C+",
    value: "C+",
    order: 3,
  },
  {
    key: 1004,
    type: "HepatitisStatus",
    label: "D+",
    value: "D+",
    order: 4,
  },
];

const OPERATION_THEATRE = [
  {
    id: 606,
    name: "OT-04",
  },
  {
    id: 607,
    name: "OT-05",
  },
  {
    id: 608,
    name: "OT-06",
  },
];

const CROSS_MATCH = [
  {
    key: 3001,
    type: "CrossMatchStatus",
    label: "Done",
    value: "Done",
    order: 1,
  },
  {
    key: 3002,
    type: "CrossMatchStatus",
    label: "Pending",
    value: "Pending",
    order: 2,
  },
  {
    key: 3003,
    type: "CrossMatchStatus",
    label: "In-Progress",
    value: "In-Progress",
    order: 3,
  },
];

const DOCUMENT_REQUIRED = [
  {
    key: 4001,
    type: "DocumentsRequired ",
    label: "Blood Bank Required",
    value: "Blood Bank Required",
    order: 1,
  },
  {
    key: 4002,
    type: "DocumentsRequired ",
    label: "Pathology Tests Required",
    value: "Pathology Tests Required",
    order: 2,
  },
  {
    key: 4003,
    type: "DocumentsRequired ",
    label: "Radiology Required",
    value: "Radiology Required",
    order: 3,
  },
  {
    key: 4004,
    type: "DocumentsRequired ",
    label: "Consent Form Signed",
    value: "Consent Form Signed",
    order: 4,
  },
];

const APPOINTMENT_STATUS_TYPE = [
  {
    value: 801,
    type: "AppointmentStatus",
    text: "CheckIn",
    label: "CheckIn",
    order: 1,
  },
  {
    value: 802,
    type: "AppointmentStatus",
    text: "CheckOut",
    label: "CheckOut",
    order: 2,
  },
  {
    value: 803,
    type: "AppointmentStatus",
    text: "InTriage",
    label: "InTriage",
    order: 3,
  },
  {
    value: 804,
    type: "AppointmentStatus",
    text: "Waiting",
    label: "Waiting",
    order: 4,
  },
  {
    value: 805,
    type: "AppointmentStatus",
    text: "Pending",
    label: "Pending",
    order: 5,
  },
  {
    value: 806,
    type: "AppointmentStatus",
    text: "Cancel",
    label: "Cancel",
    order: 6,
  },
];

const WORKING_DAYS = [
  { label: "Monday", value: 1, key: "monday" },
  { label: "Tuesday", value: 2, key: "tuesday" },
  { label: "Wednesday", value: 3, key: "wednesday" },
  { label: "Thursday", value: 4, key: "thursday" },
  { label: "Friday", value: 5, key: "friday" },
  { label: "Saturday", value: 6, key: "saturday" },
  { label: "Sunday", value: 7, key: "sunday" },
];

const MARITAL_STATUS = [
  {
    key: 1,
    type: "maritalStatus",
    label: "Single",
    value: "Single",
    order: 1,
  },
  {
    key: 2,
    type: "maritalStatus",
    label: "Married",
    value: "Married",
    order: 2,
  },
  {
    key: 3,
    type: "maritalStatus",
    label: "Divorced",
    value: "Divorced",
    order: 3,
  },
  {
    key: 4,
    type: "maritalStatus",
    label: "Widowed",
    value: "Widowed",
    order: 4,
  },
];

const Question4 = [
  {
    key: 1,
    type: "Question",
    label: "Answer 1",
    value: "Answer 1",
    order: 1,
  },
  {
    key: 2,
    type: "Question",
    label: "Answer 2",
    value: "Answer 2",
    order: 2,
  },
  {
    key: 3,
    type: "Question",
    label: "Answer 3",
    value: "Answer 3",
    order: 3,
  },
];

const Question5 = [
  {
    key: 608,
    type: "Question",
    label: "Ans1",
    value: "Ans1",
    order: 1,
  },
  {
    key: 609,
    type: "Question",
    label: "Ans2",
    value: "Ans2",
    order: 2,
  },
  {
    key: 610,
    type: "Question",
    label: "Ans3",
    value: "Ans3",
    order: 3,
  },
  {
    key: 611,
    type: "Question",
    label: "Ans4",
    value: "Ans4",
    order: 4,
  },
  {
    key: 612,
    type: "Question",
    label: "Ans5",
    value: "Ans5",
    order: 5,
  },
  {
    key: 613,
    type: "Question",
    label: "Ans6",
    value: "Ans6",
    order: 6,
  },
];

const THEATRE_SCHEDULING_STATUS = [
  {
    value: 6001,
    type: "TheatreSchedulingStatus",
    label: "No Show",
    order: 1,
  },
  {
    value: 6002,
    type: "TheatreSchedulingStatus",
    label: "Completed",
    order: 2,
  },
  {
    value: 6003,
    type: "TheatreSchedulingStatus",
    label: "Cancel",
    order: 3,
  },
  {
    value: 6004,
    type: "TheatreSchedulingStatus",
    label: "Pending",
    order: 4,
  },
];

const SLOT_TIME = [
  { label: "5 Min", value: 5 },
  { label: "10 Min", value: 10 },
  { label: "15 Min", value: 15 },
  { label: "20 Min", value: 20 },
  { label: "25 Min", value: 25 },
  { label: "30 Min", value: 30 },
  { label: "35 Min", value: 35 },
  { label: "40 Min", value: 40 },
  { label: "45 Min", value: 45 },
  { label: "50 Min", value: 50 },
  { label: "55 Min", value: 55 },
  { label: "60 Min", value: 60 },
];
export {
  USER_TYPE_LOOKUP,
  TYPE_LOOKUP,
  WORKING_DAYS,
  AMBULANCE_TYPE_LOOKUP,
  URGENCY_TYPE_LOOKUP,
  EMERGENCY_TYPE_LOOKUP,
  PATIENT_STABLE,
  LAB_SAMPLE_STATUS_LOOKUP,
  QUEUE_STATUS_LOOKUP,
  THEATRE_GENDER,
  BLOOD_GROUP,
  PATIENT_SIDE,
  ANESTHESIA_TYPE,
  PROCEDURE_TYPE,
  PATIENT_ALLERGIES,
  HEPATITIS_STATUS,
  SURGEON,
  TECHNICIAN,
  NURSES,
  ISOLATION_STATUS,
  OPERATION_THEATRE,
  CROSS_MATCH,
  DOCUMENT_REQUIRED,
  APPOINTMENT_STATUS_TYPE,
  ANESTHETIST,
  MARITAL_STATUS,
  Question4,
  Question5,
  SLOT_TIME,
  THEATRE_SCHEDULING_STATUS,
  COMMERCIALLY_IMPORTANT,
};
